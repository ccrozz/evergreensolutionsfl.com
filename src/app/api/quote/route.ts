import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_TO = "coleman@evergreensolutionsfl.com";
const DEFAULT_FROM = "Evergreen Solutions <onboarding@resend.dev>";
const MAX_DETAILS = 8000;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server yet." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const county = body.county;
  const details = body.details;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!isNonEmptyString(county)) {
    return NextResponse.json({ error: "County is required." }, { status: 400 });
  }
  if (!isNonEmptyString(details) || details.length > MAX_DETAILS) {
    return NextResponse.json({ error: "Project details are required." }, { status: 400 });
  }

  const to = process.env.QUOTE_TO_EMAIL?.trim() || DEFAULT_TO;
  const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
  const countyLabel = `${county.trim()} County`;
  const subject = `Quote request — ${countyLabel}`;

  const text = [
    "New quote request from evergreensolutionsfl.com",
    "",
    `County: ${countyLabel}`,
    `Name: ${name || "Not provided"}`,
    `Reply email: ${email || "Not provided"}`,
    "",
    "Project details:",
    details.trim(),
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    replyTo: looksLikeEmail(email) ? email : undefined,
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
