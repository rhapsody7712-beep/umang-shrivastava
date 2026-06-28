import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-[760px] mx-auto px-7 py-20">
      <Reveal>
        <span className="font-mono text-[11px] text-accent tracking-wide">LET&apos;S TALK</span>
        <h1 className="font-display font-bold text-[clamp(26px,3.6vw,38px)] mt-3 mb-4">
          Open to the next thing that needs both a builder and an owner.
        </h1>
        <p className="text-muted text-[15px] mb-10 max-w-[520px]">
          If your team needs someone equally comfortable in the architecture
          review and the steering committee — that&apos;s the gap I sit in.
        </p>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-[12.5px] px-5 py-3 rounded-[3px] bg-accent text-[#1a1306] font-semibold hover:opacity-90 transition-opacity"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener"
            className="font-mono text-[12.5px] px-5 py-3 rounded-[3px] border border-line hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener"
            className="font-mono text-[12.5px] px-5 py-3 rounded-[3px] border border-line hover:border-accent hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
          {site.schedulingLink && (
            <a
              href={site.schedulingLink}
              target="_blank"
              rel="noopener"
              className="font-mono text-[12.5px] px-5 py-3 rounded-[3px] border border-line hover:border-accent hover:text-accent transition-colors"
            >
              Schedule a chat ↗
            </a>
          )}
        </div>
      </Reveal>

      <Reveal>
        <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mb-4">
          Or send a message directly
        </span>
        <ContactForm />
      </Reveal>
    </div>
  );
}
