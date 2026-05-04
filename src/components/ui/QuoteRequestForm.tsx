"use client";

import { FormEvent, useMemo, useState } from "react";
import { FLORIDA_COUNTY_PINS } from "@/lib/data/floridaCounties";

const RECIPIENT = "coleman@evergreensolutionsfl.com";

export default function QuoteRequestForm() {
  const [county, setCounty] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const countyOptions = useMemo(
    () => FLORIDA_COUNTY_PINS.map((item) => item.name).sort((a, b) => a.localeCompare(b)),
    [],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const countyLabel = county ? `${county} County` : "Not provided";
    const subject = `Quote Request - ${countyLabel}`;
    const body = [
      "New quote request from evergreensolutionsfl.com",
      "",
      `County: ${countyLabel}`,
      `Name: ${name || "Not provided"}`,
      `Reply Email: ${email || "Not provided"}`,
      "",
      "Project details:",
      details || "Not provided",
    ].join("\n");

    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div id="quote-form" className="mb-10 rounded-2xl border border-brand-darkGreen/15 bg-white/80 p-6 shadow-soft">
      <h3 className="font-display text-3xl text-brand-darkGreen">Request a Free Quote</h3>
      <p className="mt-2 text-sm text-brand-muted">
        Share your county and project goals. Submitting opens an email draft addressed to {RECIPIENT}.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-brand-darkGreen">
          Florida county
          <select
            required
            value={county}
            onChange={(event) => setCounty(event.target.value)}
            className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20"
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
            className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20"
          />
        </label>

        <label className="text-sm font-medium text-brand-darkGreen sm:col-span-2">
          Reply email (optional)
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20"
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
            className="mt-1 block w-full rounded-lg border border-brand-darkGreen/20 bg-white px-3 py-2 text-sm text-brand-dark outline-none transition focus:border-brand-midGreen focus:ring-2 focus:ring-brand-midGreen/20"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-darkGreen px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E7D32] sm:col-span-2 sm:w-fit"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
