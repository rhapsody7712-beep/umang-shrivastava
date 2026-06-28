import type { Metadata } from "next";
import { experience, certifications, education, skillGroups } from "@/content/experience";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${site.name}, ${site.role}.`,
};

// PERSONALIZE: drop your real resume.pdf into /public/resume.pdf —
// this page's "Download PDF" button points there, and is built from
// the SAME content files as the rest of the site so the web view and
// the PDF never drift apart.

export default function ResumePage() {
  return (
    <div className="max-w-[760px] mx-auto px-7 py-20">
      <Reveal>
        <div className="flex items-start justify-between flex-wrap gap-5 mb-12">
          <div>
            <h1 className="font-display font-bold text-[clamp(26px,3.6vw,36px)]">{site.name}</h1>
            <p className="text-accent font-mono text-[13px] mt-1.5">{site.role} · {site.org}</p>
            <p className="text-muted text-[13px] mt-1">{site.location}</p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="font-mono text-[12.5px] px-5 py-3 rounded-[3px] bg-accent text-[#1a1306] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Download PDF ↓
          </a>
        </div>
      </Reveal>

      <Reveal>
        <p className="text-[15px] text-muted mb-12 max-w-[640px]">{site.positioning}</p>
      </Reveal>

      <Reveal>
        <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mb-4">
          Experience
        </span>
        <div className="flex flex-col gap-7 mb-12">
          {experience.map((item) => (
            <div key={item.org}>
              <div className="font-display font-semibold text-[16px]">{item.role}</div>
              <div className="font-mono text-accent text-[12px] mt-0.5">{item.org}</div>
              <p className="text-muted text-[13.5px] mt-1.5">{item.summary}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mb-4">
          Skills
        </span>
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-wrap gap-2 mb-3">
            {group.items.map((item) => (
              <span key={item} className="text-[12.5px] border border-line px-2.5 py-1 rounded-[2px] text-muted">
                {item}
              </span>
            ))}
          </div>
        ))}
      </Reveal>

      <Reveal>
        <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mt-9 mb-4">
          Certifications &amp; education
        </span>
        <div className="flex flex-wrap gap-2 mb-2">
          {certifications.map((c) => (
            <span key={c.name} className="font-mono text-[12px] border border-line px-2.5 py-1 rounded-[2px] text-muted">
              {c.name}{c.status ? ` — ${c.status}` : ""}
            </span>
          ))}
        </div>
        <p className="text-muted text-[13px] mt-2">{education.degree} — {education.school}</p>
      </Reveal>
    </div>
  );
}
