import { ServiceRequestRecord } from "./requestStorage";

export interface NotificationResult {
  emailSent: boolean;
  clientConfirmationSent: boolean;
  status: "sent" | "pending_configuration" | "failed";
  details?: string;
}

export async function dispatchNotifications(
  record: ServiceRequestRecord
): Promise<NotificationResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.NOTIFICATION_EMAIL || "Kabtinhosa@yahoo.com";

  // Check if email integration credentials exist
  if (!resendApiKey) {
    // Graceful degradation: Request is persisted, but email credentials are pending in Vercel/environment
    console.info(
      `[Service Request Notification] Request ${record.reference} saved successfully. Email delivery skipped (RESEND_API_KEY not configured).`
    );
    return {
      emailSent: false,
      clientConfirmationSent: false,
      status: "pending_configuration",
      details: "Request saved. Outbound email dispatch is waiting for RESEND_API_KEY configuration.",
    };
  }

  try {
    // Prepare owner notification payload
    const ownerSubject = `[New Client Request] ${record.reference} - ${record.primaryService} (${record.clientName})`;
    const ownerHtml = `
      <h2>New Service Request Received</h2>
      <p><strong>Reference:</strong> ${record.reference}</p>
      <p><strong>Primary Service:</strong> ${record.primaryService}</p>
      <p><strong>Project Title:</strong> ${record.projectTitle}</p>
      <p><strong>Client Name:</strong> ${record.clientName} (${record.clientEmail})</p>
      <p><strong>Preferred Comm:</strong> ${record.preferredCommunication} ${record.contactHandle ? `(${record.contactHandle})` : ""}</p>
      <p><strong>Budget Range:</strong> ${record.budgetRange}</p>
      <p><strong>Priority:</strong> ${record.priority}</p>
      <hr/>
      <h3>Description:</h3>
      <p>${record.description.replace(/\n/g, "<br/>")}</p>
      <h3>Project Goals:</h3>
      <p>${record.projectGoals.replace(/\n/g, "<br/>")}</p>
      <p><em>Submitted at: ${record.createdAt}</em></p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hossam Ahmed Portfolio <onboarding@resend.dev>",
        to: [ownerEmail],
        subject: ownerSubject,
        html: ownerHtml,
      }),
    });

    if (res.ok) {
      return {
        emailSent: true,
        clientConfirmationSent: true,
        status: "sent",
      };
    } else {
      const errText = await res.text();
      console.warn(`[Notification Error] Resend returned non-200: ${errText}`);
      return {
        emailSent: false,
        clientConfirmationSent: false,
        status: "failed",
        details: "External email provider returned error.",
      };
    }
  } catch (error) {
    console.error("[Notification Exception]", error);
    return {
      emailSent: false,
      clientConfirmationSent: false,
      status: "failed",
      details: "Network failure during email dispatch.",
    };
  }
}
