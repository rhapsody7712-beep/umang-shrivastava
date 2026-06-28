"use client";

import { useState, type FormEvent } from "react";

// PERSONALIZE: sign up free at https://formspree.io, create a form, and
// replace YOUR_FORM_ID below. This keeps the site backend-free while still
// landing submissions in your inbox. If you'd rather skip a form entirely,
// delete this component and just use the mailto/LinkedIn links on this page.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-good font-mono text-[13.5px] border border-line p-5 rounded-[3px]">
        Sent — thanks for reaching out. I&apos;ll reply from umang.srivastava@gmail.com directly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[480px]">
      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[11px] text-muted-2 uppercase tracking-wide">Name</span>
        <input
          required
          name="name"
          type="text"
          className="bg-panel border border-line rounded-[3px] px-3.5 py-2.5 text-[14px] focus:border-accent outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[11px] text-muted-2 uppercase tracking-wide">Email</span>
        <input
          required
          name="email"
          type="email"
          className="bg-panel border border-line rounded-[3px] px-3.5 py-2.5 text-[14px] focus:border-accent outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[11px] text-muted-2 uppercase tracking-wide">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="bg-panel border border-line rounded-[3px] px-3.5 py-2.5 text-[14px] focus:border-accent outline-none resize-none"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-mono text-[12.5px] px-5 py-3 rounded-[3px] bg-accent text-[#1a1306] font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 self-start"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-[12.5px] font-mono" style={{ color: "#c0654f" }}>
          Something went wrong — email me directly instead.
        </p>
      )}
    </form>
  );
}
