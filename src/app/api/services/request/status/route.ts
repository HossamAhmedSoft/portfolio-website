import { NextRequest, NextResponse } from "next/server";
import { getServiceRequestByReference } from "@/lib/requestStorage";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const ref = (searchParams.get("ref") || "").trim();
    const email = (searchParams.get("email") || "").trim().toLowerCase();

    if (!ref) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid request reference code." },
        { status: 400 }
      );
    }

    const record = await getServiceRequestByReference(ref);
    if (!record) {
      return NextResponse.json(
        { success: false, error: "No request found with this reference code." },
        { status: 404 }
      );
    }

    // Require email match for privacy protection if requested publicly
    if (email && record.clientEmail.toLowerCase() !== email) {
      return NextResponse.json(
        { success: false, error: "The provided email address does not match the record for this reference." },
        { status: 403 }
      );
    }

    // Return sanitized status information without leaking internal notes
    return NextResponse.json({
      success: true,
      request: {
        reference: record.reference,
        status: record.status,
        projectTitle: record.projectTitle,
        primaryService: record.primaryService,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
        estimatedResponseTime: "Within 24 business hours",
      },
    });
  } catch (error) {
    console.error("[Status API Error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve request status." },
      { status: 500 }
    );
  }
}
