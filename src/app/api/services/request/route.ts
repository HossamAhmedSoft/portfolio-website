import { NextRequest, NextResponse } from "next/server";
import {
  generateReference,
  sanitizeInput,
  hashIp,
  checkRateLimit,
  saveServiceRequest,
  ServiceRequestRecord,
} from "@/lib/requestStorage";
import { dispatchNotifications } from "@/lib/notificationDispatcher";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    const ipHash = hashIp(ip);

    // Rate Limiting: Max 5 submissions per 10 minutes per IP
    const allowed = checkRateLimit(ipHash, 5, 10);
    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a few minutes before submitting another request.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 1. Spam Protection: Honeypot check
    if (body.website_hp && body.website_hp.trim() !== "") {
      // Bot detected - reject quietly
      return NextResponse.json({
        success: true,
        reference: "REQ-BOT-FILTERED",
        message: "Your request has been processed.",
      });
    }

    // 2. Field Validations
    const primaryService = sanitizeInput(body.primaryService || "", 100);
    const secondaryService = sanitizeInput(body.secondaryService || "", 100);
    const projectTitle = sanitizeInput(body.projectTitle || "", 200);
    const description = sanitizeInput(body.description || "", 3000);
    const projectGoals = sanitizeInput(body.projectGoals || "", 2000);
    const targetAudience = sanitizeInput(body.targetAudience || "", 500);
    const platforms = Array.isArray(body.platforms)
      ? body.platforms.map((p: unknown) => sanitizeInput(String(p), 50))
      : [];
    const projectStage = sanitizeInput(body.projectStage || "idea", 100);
    const preferredTechnologies = sanitizeInput(body.preferredTechnologies || "", 300);
    const referenceUrl = sanitizeInput(body.referenceUrl || "", 500);
    const budgetRange = sanitizeInput(body.budgetRange || "undecided", 100);
    const startDate = sanitizeInput(body.startDate || "", 50);
    const targetDeadline = sanitizeInput(body.targetDeadline || "", 50);
    const deadlineFlexibility = sanitizeInput(body.deadlineFlexibility || "flexible", 50);
    const priority = sanitizeInput(body.priority || "normal", 50);

    const clientName = sanitizeInput(body.clientName || "", 100);
    const clientEmail = sanitizeInput(body.clientEmail || "", 150).toLowerCase();
    const organization = sanitizeInput(body.organization || "", 150);
    const preferredCommunication = (
      ["email", "whatsapp", "phone"].includes(body.preferredCommunication)
        ? body.preferredCommunication
        : "email"
    ) as "email" | "whatsapp" | "phone";
    const contactHandle = sanitizeInput(body.contactHandle || "", 100);
    const countryOrTimezone = sanitizeInput(body.countryOrTimezone || "", 100);
    const additionalNotes = sanitizeInput(body.additionalNotes || "", 2000);
    const preferredLanguage = body.preferredLanguage === "ar" ? "ar" : "en";
    const referralSource = sanitizeInput(body.referralSource || "", 100);
    const consentGiven = Boolean(body.consentGiven);

    // Contextual answers object
    const contextualAnswers: Record<string, string> = {};
    if (body.contextualAnswers && typeof body.contextualAnswers === "object") {
      for (const [key, val] of Object.entries(body.contextualAnswers)) {
        if (typeof val === "string") {
          contextualAnswers[sanitizeInput(key, 50)] = sanitizeInput(val, 1000);
        }
      }
    }

    // Required Field Validations
    if (!primaryService) {
      return NextResponse.json(
        { success: false, error: "Please select a primary service." },
        { status: 400 }
      );
    }
    if (!projectTitle || projectTitle.length < 3) {
      return NextResponse.json(
        { success: false, error: "Project title must be at least 3 characters long." },
        { status: 400 }
      );
    }
    if (!description || description.length < 15) {
      return NextResponse.json(
        { success: false, error: "Please provide a project description (at least 15 characters)." },
        { status: 400 }
      );
    }
    if (!clientName || clientName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your name (at least 2 characters)." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!clientEmail || !emailRegex.test(clientEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (!consentGiven) {
      return NextResponse.json(
        { success: false, error: "Please accept the consent terms to process your project request." },
        { status: 400 }
      );
    }

    // Validate reference URL format if provided
    if (referenceUrl && !/^https?:\/\//i.test(referenceUrl)) {
      return NextResponse.json(
        { success: false, error: "Reference URL must start with http:// or https://" },
        { status: 400 }
      );
    }

    // 3. Assemble and Persist Record
    const reference = generateReference();
    const nowIso = new Date().toISOString();

    const record: ServiceRequestRecord = {
      id: crypto.randomUUID(),
      reference,
      createdAt: nowIso,
      updatedAt: nowIso,
      status: "New",
      primaryService,
      secondaryService,
      projectTitle,
      description,
      projectGoals,
      targetAudience,
      platforms,
      projectStage,
      preferredTechnologies,
      referenceUrl,
      contextualAnswers,
      budgetRange,
      startDate,
      targetDeadline,
      deadlineFlexibility,
      priority,
      clientName,
      clientEmail,
      organization,
      preferredCommunication,
      contactHandle,
      countryOrTimezone,
      additionalNotes,
      preferredLanguage,
      referralSource,
      consentGiven,
      emailNotificationStatus: "pending_configuration",
      ipHash,
    };

    // Save to persistent storage
    await saveServiceRequest(record);

    // 4. Dispatch Notifications
    const notificationResult = await dispatchNotifications(record);
    record.emailNotificationStatus = notificationResult.status;

    return NextResponse.json({
      success: true,
      reference: record.reference,
      message: "Your project request has been submitted successfully.",
      status: record.status,
      emailStatus: notificationResult.status,
      estimatedResponseTime: "Within 24 business hours",
      createdAt: record.createdAt,
    });
  } catch (error) {
    console.error("[Service Request API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or contact directly via WhatsApp/Email.",
      },
      { status: 500 }
    );
  }
}
