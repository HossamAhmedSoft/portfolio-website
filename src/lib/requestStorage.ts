import fs from "fs";
import path from "path";
import crypto from "crypto";

export type RequestStatus =
  | "New"
  | "Under Review"
  | "Waiting for Client"
  | "Quoted"
  | "Accepted"
  | "In Progress"
  | "Completed"
  | "Declined";

export interface ServiceRequestRecord {
  id: string;
  reference: string;
  createdAt: string;
  updatedAt: string;
  status: RequestStatus;
  primaryService: string;
  secondaryService?: string;
  projectTitle: string;
  description: string;
  projectGoals: string;
  targetAudience?: string;
  platforms: string[];
  projectStage: string;
  preferredTechnologies?: string;
  referenceUrl?: string;
  contextualAnswers: Record<string, string>;
  budgetRange: string;
  startDate?: string;
  targetDeadline?: string;
  deadlineFlexibility: string;
  priority: string;
  clientName: string;
  clientEmail: string;
  organization?: string;
  preferredCommunication: "email" | "whatsapp" | "phone";
  contactHandle?: string;
  countryOrTimezone?: string;
  additionalNotes?: string;
  preferredLanguage: "en" | "ar";
  referralSource?: string;
  consentGiven: boolean;
  internalNotes?: string;
  emailNotificationStatus: "sent" | "pending_configuration" | "failed";
  ipHash?: string;
}

// In-memory fallback for serverless or environments with read-only root
const inMemoryStore: ServiceRequestRecord[] = [];

// Rate-limiting map: hashed IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();

export function generateReference(): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomHex = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `REQ-${dateStr}-${randomHex}`;
}

export function sanitizeInput(text: string, maxLength: number = 2000): string {
  if (!text || typeof text !== "string") return "";
  // Strip script tags and HTML markup
  const clean = text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .trim();
  return clean.slice(0, maxLength);
}

export function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip || "unknown_ip").digest("hex").slice(0, 16);
}

export function checkRateLimit(ipHash: string, maxRequests: number = 5, windowMinutes: number = 10): boolean {
  const now = Date.now();
  const windowMs = windowMinutes * 60 * 1000;
  const timestamps = rateLimitMap.get(ipHash) || [];

  // Filter timestamps within current window
  const recent = timestamps.filter((t) => now - t < windowMs);
  if (recent.length >= maxRequests) {
    return false; // Rate limit exceeded
  }

  recent.push(now);
  rateLimitMap.set(ipHash, recent);
  return true;
}

function getDataFilePath(): string {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {
      // Might fail on read-only environments
    }
  }
  return path.join(dataDir, "service_requests.json");
}

function readFromFile(): ServiceRequestRecord[] {
  try {
    const filePath = getDataFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data) as ServiceRequestRecord[];
    }
  } catch {
    // If file read fails, use in-memory store
  }
  return inMemoryStore;
}

function writeToFile(records: ServiceRequestRecord[]): void {
  try {
    const filePath = getDataFilePath();
    fs.writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8");
  } catch {
    // Fallback silently if disk is not writable in serverless
  }
}

export async function saveServiceRequest(record: ServiceRequestRecord): Promise<void> {
  // Update in-memory
  inMemoryStore.unshift(record);

  // Attempt file persistence
  const existing = readFromFile();
  const filtered = existing.filter((r) => r.reference !== record.reference);
  filtered.unshift(record);
  writeToFile(filtered);
}

export async function getAllServiceRequests(): Promise<ServiceRequestRecord[]> {
  const fromFile = readFromFile();
  if (fromFile.length > 0) return fromFile;
  return inMemoryStore;
}

export async function getServiceRequestByReference(
  reference: string
): Promise<ServiceRequestRecord | null> {
  const records = await getAllServiceRequests();
  const found = records.find((r) => r.reference.toUpperCase() === reference.toUpperCase());
  return found || null;
}

export async function updateServiceRequestStatus(
  reference: string,
  newStatus: RequestStatus,
  internalNotes?: string
): Promise<ServiceRequestRecord | null> {
  const records = await getAllServiceRequests();
  const idx = records.findIndex((r) => r.reference.toUpperCase() === reference.toUpperCase());
  if (idx === -1) return null;

  records[idx].status = newStatus;
  records[idx].updatedAt = new Date().toISOString();
  if (internalNotes !== undefined) {
    records[idx].internalNotes = internalNotes;
  }

  writeToFile(records);

  // Sync memory store
  const memIdx = inMemoryStore.findIndex((r) => r.reference.toUpperCase() === reference.toUpperCase());
  if (memIdx !== -1) {
    inMemoryStore[memIdx] = records[idx];
  } else {
    inMemoryStore.push(records[idx]);
  }

  return records[idx];
}
