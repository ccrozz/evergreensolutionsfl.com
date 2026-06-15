"use client";

import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { FLORIDA_COUNTY_PINS } from "@/lib/data/floridaCounties";

const RECIPIENT = "coleman@evergreensolutionsfl.com";
const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;

const ACCEPTED_FILE_TYPES = [
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
];

type FormStatus = "idle" | "sending" | "success" | "error";

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function validateFiles(files: File[]): string | null {
  if (files.length > MAX_FILES) {
    return `You can attach up to ${MAX_FILES} files.`;
  }

  for (const file of files) {
    if (file.size > MAX_FILE_BYTES) {
      return `"${file.name}" exceeds the 10 MB limit.`;
    }
    if (file.type && !ACCEPTED_FILE_TYPES.includes(file.type)) {
      return `"${file.name}" is not an allowed file type.`;
    }
  }

  return null;
}

export default function QuoteRequestForm() {
  const [county, setCounty] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const countyOptions = useMemo(
    () => FLORIDA_COUNTY_PINS.map((item) => item.name).sort((a, b) => a.localeCompare(b)),
    [],
  );

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    const validationError = validateFiles(selected);

    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      event.target.value = "";
      return;
    }

    setErrorMessage("");
    if (status === "error") setStatus("idle");
    setFiles(selected);
  }

  function removeFile(index: number) {
    setFiles((current) => current.filter((_, i) => i !== index));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function resetForm() {
    setCounty("");
    setDetails("");
    setName("");
    setEmail("");
    setFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const fileError = validateFiles(files);
    if (fileError) {
      setStatus("error");
      setErrorMessage(fileError);
      return;
    }

    const formData = new FormData();
    formData.append("county", county.trim());
    formData.append("details", details.trim());
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(payload.error || "Unable to send request right now.");
        return;
      }

      setStatus("success");
      resetForm();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again, or email us directly.");
    }
  }

  return (
    <div id="quote-form" className="mb-10 rounded-2xl border border-brand-darkGreen/15 bg-white/80 p-6 shadow-soft">
      <h3 className="font-display text-3xl text-brand-darkGreen">Request a Free Quote</h3>
      <p className="mt-2 text-sm text-brand-muted">
        Submit here and we&apos;ll email your request to {RECIPIENT}. You can attach photos,
        maps, or documents (up to {MAX_FILES} files, 10 MB each).
      </p>

      {status === "success" ? (
        <div
          className="mt-5 rounded-xl border border-brand-leafGreen/30 bg-brand-leafGreen/10 px-4 py-4 text-sm text-brand-darkGreen"
          role="status"
        >
          <p className="font-semibold">Thanks, your request was sent.</p>
          <p className="mt-2 text-brand-muted">
            We&apos;ll follow up soon. If needed, email{" "}
            <a
              href={`mailto:${RECIPIENT}`}
              className="font-semibold underline underline-offset-2"
            >
              {RECIPIENT}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 text-sm font-semibold text-brand-darkGreen underline underline-offset-4 hover:text-brand-midGreen"
          >
            Send another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
          {status === "error" && errorMessage ? (
            <div
              className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
              role="alert"
            >
              {errorMessage}
            </div>
          ) : null}

          <label className="text-sm font-medium text-brand-darkGreenGreen">
            Florida county
            <select
              required
              value={county}
              onChange={(event) => setCounty(event.target.value)}
              disabled={status === "sending"}
              className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20 disabled:opacity-60"
            >
              <option value="">Select county</option>
              {countyOptions.map((item) => (
                <option key={item} value={item}>
                  {item} County
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-brand-darkGreen">
            Your name (optional)
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              disabled={status === "sending"}
              className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20 disabled:opacity-60"
            />
          </label>

          <label className="text-sm font-medium text-brand-darkGreen sm:col-span-2">
            Reply email (optional)
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              disabled={status === "sending"}
              className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20 disabled:opacity-60"
            />
          </label>

          <label className="text-sm font-medium text-brand-darkGreen sm:col-span-2">
            Describe what you want done
            <textarea
              required
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Tell us about your property, goals, and timeline."
              rows={5}
              disabled={status === "sending"}
              className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20 disabled:opacity-60"
            />
          </label>

          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-brand-darkGreen">
              Attach files (optional)
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.txt,image/*"
                onChange={handleFileChange}
                disabled={status === "sending"}
                className="mt-1 block w-full cursor-pointer rounded-lg border border-dashed border-brand-darkGreen/25 bg-white px-3 py-2 text-sm text-brand-dark file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-brand-darkGreen/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-brand-darkGreen hover:border-brand-midGreen/40 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
            <p className="mt-1.5 text-xs text-brand-muted">
              PDF, Word, plain text, or images. Up to {MAX_FILES} files, 10 MB each.
            </p>

            {files.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {files.map((file, index) => (
                  <li
                    key={`${file.name}-${file.size}-${index}`}
                    className="flex items-center justify-between gap-3 rounded-lg border border-brand-darkGreen/10 bg-brand-sand/50 px-3 py-2 text-sm"
                  >
                    <span className="min-w-0 truncate text-brand-dark">
                      {file.name}{" "}
                      <span className="text-brand-muted">({formatFileSize(file.size)})</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      disabled={status === "sending"}
                      className="shrink-0 text-xs font-semibold text-brand-darkGreen underline underline-offset-2 hover:text-brand-midGreen disabled:opacity-60"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-full bg-brand-darkGreen px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E7D32] disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2 sm:w-fit"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
          </button>
        </form>
      )}
    </div>
  );
}
