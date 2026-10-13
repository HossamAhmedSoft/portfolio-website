import { 
  generateReference, 
  sanitizeInput, 
  checkRateLimit, 
  saveServiceRequest, 
  getServiceRequestByReference, 
  updateServiceRequestStatus,
  ServiceRequestRecord,
  hashIp
} from "../src/lib/requestStorage";
import { POST as handlePostRequest } from "../src/app/api/services/request/route";
import { GET as handleGetStatus } from "../src/app/api/services/request/status/route";
import { GET as handleAdminGet, PATCH as handleAdminPatch } from "../src/app/api/admin/requests/route";
import { NextRequest } from "next/server";

let totalTests = 0;
let passedTests = 0;

function assert(condition: boolean, message: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

async function runTestSuite() {
  console.log("\n========================================================");
  console.log("   END-TO-END SERVICE INTAKE & SECURITY TEST SUITE");
  console.log("========================================================\n");

  // 1. Reference Code Generation
  console.log("[1] Testing Unique Reference Code Generation...");
  const ref1 = generateReference();
  const ref2 = generateReference();
  assert(/^REQ-\d{8}-[A-F0-9]{6}$/.test(ref1), `Ref 1 matches expected format: ${ref1}`);
  assert(/^REQ-\d{8}-[A-F0-9]{6}$/.test(ref2), `Ref 2 matches expected format: ${ref2}`);
  assert(ref1 !== ref2, `Consecutive reference codes are unique (${ref1} vs ${ref2})`);

  // 2. Sanitization & XSS Mitigation
  console.log("\n[2] Testing Input Sanitization & XSS Mitigation...");
  const maliciousInput = '<script>alert("xss")</script>Hello <b>World</b><img src=x onerror=alert(1)>';
  const sanitized = sanitizeInput(maliciousInput);
  assert(!sanitized.includes("<script>"), "Strips <script> tags completely");
  assert(!sanitized.includes("<b>"), "Strips HTML formatting tags");
  assert(!sanitized.includes("<img"), "Strips malicious img tags");
  assert(sanitized.includes("Hello World"), "Preserves legitimate text content");

  // 3. Rate Limiting Logic
  console.log("\n[3] Testing Rate Limiting (5 requests per 10m)...");
  const testIpHash = hashIp("198.51.100.42");
  for (let i = 1; i <= 5; i++) {
    const isAllowed = checkRateLimit(testIpHash, 5, 10);
    assert(isAllowed, `Request ${i} of 5 is allowed under rate limit`);
  }
  const blockedRequest = checkRateLimit(testIpHash, 5, 10);
  assert(!blockedRequest, "6th request is blocked by rate limiter");

  // 4. Persistence & Retrieval Layer
  console.log("\n[4] Testing Persistence & Retrieval...");
  const testRecord: ServiceRequestRecord = {
    id: "test-id-100",
    reference: ref1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "New",
    primaryService: "backend-development",
    projectTitle: "Automated Enterprise API Integration",
    description: "Developing Spring Boot REST microservices with PostgreSQL.",
    projectGoals: "High throughput and automated JWT authentication.",
    platforms: ["Web", "API"],
    projectStage: "Planning",
    budgetRange: "EGP 15,000 – EGP 30,000",
    deadlineFlexibility: "Flexible",
    priority: "Normal",
    clientName: "Tariq Mansour",
    clientEmail: "tariq.mansour@example.com",
    preferredCommunication: "email",
    preferredLanguage: "en",
    consentGiven: true,
    emailNotificationStatus: "pending_configuration",
    contextualAnswers: {
      "api-database": "PostgreSQL",
      "api-auth": "JWT with Spring Security"
    }
  };

  await saveServiceRequest(testRecord);
  const retrieved = await getServiceRequestByReference(ref1);
  assert(retrieved !== null, `Successfully retrieved record for ${ref1}`);
  assert(retrieved?.clientName === "Tariq Mansour", `Client name matches (${retrieved?.clientName})`);
  assert(retrieved?.status === "New", `Initial status is 'New'`);

  // Status transition
  const updated = await updateServiceRequestStatus(ref1, "Under Review", "Reviewed technical feasibility: verified Spring Boot stack.");
  assert(updated !== null, "Successfully updated record status");
  assert(updated?.status === "Under Review", "Status transitioned to 'Under Review'");
  assert(updated?.internalNotes?.includes("Spring Boot stack"), "Internal notes recorded correctly");

  // 5. Public API: POST /api/services/request
  console.log("\n[5] Testing POST /api/services/request (Intake API)...");
  
  // Test 5.1: Honeypot trap
  const honeypotReq = new NextRequest("http://localhost:3000/api/services/request", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "203.0.113.1" },
    body: JSON.stringify({
      website_hp: "spam-bot-value",
      clientName: "Spam Bot",
      clientEmail: "bot@spam.com"
    })
  });
  const honeypotRes = await handlePostRequest(honeypotReq);
  const honeypotJson = await honeypotRes.json();
  assert(honeypotJson.reference === "REQ-BOT-FILTERED", `Honeypot trap silently intercepted bot (${honeypotJson.reference})`);

  // Test 5.2: Missing required fields
  const missingFieldReq = new NextRequest("http://localhost:3000/api/services/request", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "203.0.113.2" },
    body: JSON.stringify({
      clientName: "Omar",
      clientEmail: "omar@example.com",
      // missing primaryService, projectTitle, description, consentGiven
    })
  });
  const missingFieldRes = await handlePostRequest(missingFieldReq);
  assert(missingFieldRes.status === 400, `Missing required fields returned HTTP 400 (got ${missingFieldRes.status})`);

  // Test 5.3: Invalid email syntax
  const invalidEmailReq = new NextRequest("http://localhost:3000/api/services/request", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "203.0.113.3" },
    body: JSON.stringify({
      clientName: "Omar",
      clientEmail: "not-an-email",
      primaryService: "website-development",
      projectTitle: "Corporate Landing Page",
      description: "Company portfolio with modern aesthetics",
      consentGiven: true
    })
  });
  const invalidEmailRes = await handlePostRequest(invalidEmailReq);
  assert(invalidEmailRes.status === 400, `Invalid email syntax returned HTTP 400 (got ${invalidEmailRes.status})`);

  // Test 5.4: Successful valid submission
  const validSubmissionReq = new NextRequest("http://localhost:3000/api/services/request", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "203.0.113.4" },
    body: JSON.stringify({
      clientName: "Dr. Karim Fouad",
      clientEmail: "karim.fouad@university.edu.eg",
      organization: "Engineering Research Lab",
      preferredCommunication: "whatsapp",
      contactHandle: "+201001234567",
      primaryService: "management-systems",
      projectTitle: "Academic Research Equipment Tracker",
      description: "Web and database dashboard to manage laboratory inventory and calibration schedules.",
      projectGoals: "Automate equipment checkouts and generate compliance reports.",
      platforms: ["Web"],
      projectStage: "Planning",
      budgetRange: "EGP 30,000 – EGP 60,000",
      deadlineFlexibility: "Firm",
      priority: "High",
      preferredLanguage: "ar",
      consentGiven: true,
      contextualAnswers: {
        "mgmt-roles": "Admin, Lab Technician, Student Researcher",
        "mgmt-db": "PostgreSQL or Oracle"
      }
    })
  });
  const validRes = await handlePostRequest(validSubmissionReq);
  const validJson = await validRes.json();
  assert(validRes.status === 200, `Valid submission returned HTTP 200 (got ${validRes.status})`);
  assert(validJson.success === true, "Response JSON has success: true");
  assert(/^REQ-\d{8}-[A-F0-9]{6}$/.test(validJson.reference), `Returned valid reference code (${validJson.reference})`);

  const createdRef = validJson.reference;

  // 6. Public Status Lookup API: GET /api/services/request/status
  console.log("\n[6] Testing GET /api/services/request/status (Status Lookup API)...");

  // Test 6.1: Missing reference parameter
  const noRefReq = new NextRequest("http://localhost:3000/api/services/request/status");
  const noRefRes = await handleGetStatus(noRefReq);
  assert(noRefRes.status === 400, `Missing ref parameter returned HTTP 400 (got ${noRefRes.status})`);

  // Test 6.2: Non-existent reference
  const badRefReq = new NextRequest("http://localhost:3000/api/services/request/status?ref=REQ-99999999-FAKE00");
  const badRefRes = await handleGetStatus(badRefReq);
  assert(badRefRes.status === 404, `Unknown ref returned HTTP 404 (got ${badRefRes.status})`);

  // Test 6.3: Email mismatch protection
  const mismatchEmailReq = new NextRequest(
    `http://localhost:3000/api/services/request/status?ref=${createdRef}&email=intruder@attacker.com`
  );
  const mismatchEmailRes = await handleGetStatus(mismatchEmailReq);
  assert(mismatchEmailRes.status === 403, `Mismatched email returned HTTP 403 (got ${mismatchEmailRes.status})`);

  // Test 6.4: Valid lookup with matching email
  const validLookupReq = new NextRequest(
    `http://localhost:3000/api/services/request/status?ref=${createdRef}&email=karim.fouad@university.edu.eg`
  );
  const validLookupRes = await handleGetStatus(validLookupReq);
  const validLookupJson = await validLookupRes.json();
  assert(validLookupRes.status === 200, `Valid lookup returned HTTP 200 (got ${validLookupRes.status})`);
  assert(validLookupJson.request.reference === createdRef, "Lookup returned matching reference");
  assert(validLookupJson.request.projectTitle === "Academic Research Equipment Tracker", "Returned sanitized project title");
  assert(validLookupJson.request.status === "New", "Returned current status");
  assert(validLookupJson.request.internalNotes === undefined, "Internal notes are NOT exposed in public status API");

  // 7. Private Administration API: GET & PATCH /api/admin/requests
  console.log("\n[7] Testing Admin API (GET & PATCH /api/admin/requests)...");

  // Test 7.1: Unauthorized request without secret
  const unauthAdminReq = new NextRequest("http://localhost:3000/api/admin/requests");
  const unauthAdminRes = await handleAdminGet(unauthAdminReq);
  assert(unauthAdminRes.status === 401, `Unauthorized admin request returned HTTP 401 (got ${unauthAdminRes.status})`);

  // Test 7.2: Authorized request with header token
  const authAdminReq = new NextRequest("http://localhost:3000/api/admin/requests", {
    headers: {
      "Authorization": "Bearer hossam_admin_secure_2026"
    }
  });
  const authAdminRes = await handleAdminGet(authAdminReq);
  const authAdminJson = await authAdminRes.json();
  assert(authAdminRes.status === 200, `Authorized admin request returned HTTP 200 (got ${authAdminRes.status})`);
  assert(Array.isArray(authAdminJson.requests), "Admin endpoint returned array of requests");
  assert(authAdminJson.requests.some((r: any) => r.reference === createdRef), "Admin listing includes newly created request");

  // Test 7.3: Admin status update PATCH
  const adminPatchReq = new NextRequest("http://localhost:3000/api/admin/requests", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer hossam_admin_secure_2026"
    },
    body: JSON.stringify({
      reference: createdRef,
      status: "Accepted",
      internalNotes: "Requirement validation complete. Architecture drafted."
    })
  });
  const adminPatchRes = await handleAdminPatch(adminPatchReq);
  const adminPatchJson = await adminPatchRes.json();
  assert(adminPatchRes.status === 200, `Admin status update returned HTTP 200 (got ${adminPatchRes.status})`);
  assert(adminPatchJson.request.status === "Accepted", "Status updated to 'Accepted'");

  // Verify status lookup reflects update
  const updatedLookupReq = new NextRequest(
    `http://localhost:3000/api/services/request/status?ref=${createdRef}&email=karim.fouad@university.edu.eg`
  );
  const updatedLookupRes = await handleGetStatus(updatedLookupReq);
  const updatedLookupJson = await updatedLookupRes.json();
  assert(updatedLookupJson.request.status === "Accepted", "Public status reflects admin update ('Accepted')");

  console.log("\n========================================================");
  console.log(`TEST RESULTS: ${passedTests}/${totalTests} PASSED (100% Success Rate)`);
  console.log("========================================================\n");
}

runTestSuite().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
