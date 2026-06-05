import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_TO = "coleman@evergreensolutionsfl.com";
const DEFAULT_FROM = "Evergreen Solutions <onboarding@resend.dev>";
const MAX_DETAILS = 8000;
const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/heic",
  "image/heif",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function sanitizeFilename(name: string): string {
  const base = name.replace(/[/\\<>:"|?*\x00-\x1f]/g, "_").trim();
  return base.slice(0, 200) || "attachment";
}

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server yet." },
      { status: 503 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const county = readField(formData, "county");
  const details = readField(formData, "details");
  const name = readField(formData, "name");
  const email = readField(formData, "email");

  if (!isNonEmptyString(county)) {
    return NextResponse.json({ error: "County is required." }, { status: 400 });
  }
  if (!isNonEmptyString(details) || details.length > MAX_DETAILS) {
    return NextResponse.json({ error: "Project details are required." }, { status: 400 });
  }

  const rawFiles = formData
    .getAll("files")
    .filter((item): item is File => item instanceof File && item.size > 0);

  if (rawFiles.length > MAX_FILES) {
    return NextResponse.json(
      { error: `You can attach up to ${MAX_FILES} files.` },
      { status: 400 },
    );
  }

  const attachments: { filename: string; content: Buffer }[] = [];

  for (const file of rawFiles) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: `"${file.name}" exceeds the 10 MB file size limit.` },
        { status: 400 },
      );
    }

    const mimeType = file.type || "application/octet-stream";
    if (!ALLOWED_MIME_TYPES.has(mimeType)) {
      return NextResponse.json(
        {
          error: `"${file.name}" is not an allowed file type. Use PDF, images, Word docs, or plain text.`,
        },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: sanitizeFilename(file.name),
      content: buffer,
    });
  }

  const to = process.env.QUOTE_TO_EMAIL?.trim() || DEFAULT_TO;
  const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
  const countyLabel = `${county} County`;
  const subject = `Quote request — ${countyLabel}`;

  const attachmentSummary =
    attachments.length > 0
      ? attachments.map((item) => item.filename).join(", ")
      : "None";

  const text = [
    "New quote request from evergreensolutionsfl.com",
    "",
    `County: ${countyLabel}`,
    `Name: ${name || "Not provided"}`,
    `Reply email: ${email || "Not provided"}`,
    `Attachments: ${attachmentSummary}`,
    "",
    "Project details:",
    details,
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    replyTo: looksLikeEmail(email) ? email : undefined,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (error) {
    console.error("[api/quote] resend error:", error);
    return NextResponse.json(
      { error: "Could not send your request. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
