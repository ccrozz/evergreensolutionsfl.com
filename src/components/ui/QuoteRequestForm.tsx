"use client";

import { FormEvent, useMemo, useState } from "react";
import { FLORIDA_COUNTY_PINS } from "@/lib/data/floridaCounties";

const RECIPIENT = "coleman@evergreensolutionsfl.com";
type FormStatus = "idle" | "sending" | "success" | "error";

export default function QuoteRequestForm() {
  const [county, setCounty] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const countyOptions = useMemo(
    () => FLORIDA_COUNTY_PINS.map((item) => item.name).sort((a, b) => a.localeCompare(b)),
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          county: county.trim(),
          name: name.trim(),
          email: email.trim(),
          details: details.trim(),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(payload.error || "Unable to send request right now.");
        return;
      }

      setStatus("success");
      setCounty("");
      setDetails("");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again, or email us directly.");
    }
  }

  return (
    <div id="quote-form" className="mb-10 rounded-2xl border border-brand-darkGreen/15 bg-white/80 p-6 shadow-soft">
      <h3 className="font-display text-3xl text-brand-darkGreen">Request a Free Quote</h3>
      <p className="mt-2 text-sm text-brand-muted">
        Submit here and we&apos;ll email your request to {RECIPIENT}. No mail app required.
      </p>

      {status === "success" ? (
        <div
          className="mt-5 rounded-xl border border-brand-leafGreen/30 bg-brand-leafGreen/10 px-4 py-4 text-sm text-brand-darkGreen"
          role="status"
        >
          <p className="font-semibold">Thanks, your request was sent.</p>
          <p className="mt-2 text-brand-muted">
            We&apos;ll follow up soon. If needed, email{" "}
            <a href={`mailto:${RECIPIENT}`} className="font-semibold underline underline-offset-2">
              {RECIPIENT}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 text-sm font-semibold text-brand-darkGreen underline underline-offset-4"
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
        <label className="text-sm font-medium text-brand-darkGreen">
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
