import { NextRequest, NextResponse } from "next/server";
import {
  getAllServiceRequests,
  updateServiceRequestStatus,
  RequestStatus,
  sanitizeInput,
} from "@/lib/requestStorage";

export const dynamic = "force-dynamic";

function verifyAdmin(req: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET_KEY || "hossam_admin_secure_2026";
  const authHeader = req.headers.get("authorization") || "";
  const tokenFromHeader = authHeader.replace(/^Bearer\s+/i, "").trim();
  const tokenFromParam = req.nextUrl.searchParams.get("token") || "";

  return tokenFromHeader === secret || tokenFromParam === secret;
}

export async function GET(req: NextRequest) {
  if (!verifyAdmin(req)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access." },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const statusFilter = searchParams.get("status");
    const serviceFilter = searchParams.get("service");
    const query = (searchParams.get("q") || "").toLowerCase().trim();

    let records = await getAllServiceRequests();

    if (statusFilter && statusFilter !== "ALL") {
      records = records.filter((r) => r.status === statusFilter);
    }

    if (serviceFilter && serviceFilter !== "ALL") {
      records = records.filter((r) => r.primaryService === serviceFilter);
    }

    if (query) {
      records = records.filter(
        (r) =>
          r.reference.toLowerCase().includes(query) ||
          r.projectTitle.toLowerCase().includes(query) ||
          r.clientName.toLowerCase().includes(query) ||
          r.clientEmail.toLowerCase().includes(query)
      );
    }

    return NextResponse.json({
      success: true,
      count: records.length,
      requests: records,
    });
  } catch (error) {
    console.error("[Admin GET Error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch service requests." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  if (!verifyAdmin(req)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access." },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const reference = sanitizeInput(body.reference || "", 50);
    const newStatus = body.status as RequestStatus;
    const internalNotes = body.internalNotes !== undefined ? sanitizeInput(String(body.internalNotes), 2000) : undefined;

    const validStatuses: RequestStatus[] = [
      "New",
      "Under Review",
      "Waiting for Client",
      "Quoted",
      "Accepted",
      "In Progress",
      "Completed",
      "Declined",
    ];

    if (!reference) {
      return NextResponse.json(
        { success: false, error: "Reference is required." },
        { status: 400 }
      );
    }

    if (!validStatuses.includes(newStatus)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value." },
        { status: 400 }
      );
    }

    const updated = await updateServiceRequestStatus(reference, newStatus, internalNotes);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Request not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Request ${reference} updated successfully.`,
      request: updated,
    });
  } catch (error) {
    console.error("[Admin PATCH Error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to update request." },
      { status: 500 }
    );
  }
}
