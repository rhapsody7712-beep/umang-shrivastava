import type { Metadata } from "next";
import { experience, certifications, education, skillGroups } from "@/content/experience";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline, skills, and certifications.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-7 py-20">
      <div className="flex items-baseline gap-4 flex-wrap mb-12">
        <span className="font-mono text-[11px] text-muted-2 tracking-wide">FIG. 02</span>
        <h1 className="font-display font-semibold text-[clamp(24px,3vw,32px)]">Experience</h1>
      </div>

      <div className="border-l border-line pl-7 flex flex-col gap-9 mb-20">
        {experience.map((item, i) => (
          <Reveal key={item.org} delay={i * 0.05} className="relative">
            <div className="absolute -left-[34.5px] top-1 w-2.5 h-2.5 rounded-full bg-bg border-[1.6px] border-accent" />
            <div className="font-display font-semibold text-[17px]">{item.role}</div>
            <div className="font-mono text-accent text-[12px] mt-0.5">{item.org}</div>
            <p className="text-muted text-[14px] mt-2 max-w-[680px]">{item.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.highlights.map((h) => (
                <span key={h} className="font-mono text-[11px] border border-line px-2.5 py-1 rounded-[2px] text-muted">
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="flex items-baseline gap-4 flex-wrap mb-9">
        <span className="font-mono text-[11px] text-muted-2 tracking-wide">FIG. 03</span>
        <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)]">Skills &amp; certifications</h2>
      </div>

      {skillGroups.map((group) => (
        <div key={group.label} className="mb-6.5">
          <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mb-2.5">
            {group.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="text-[13px] border border-line px-3 py-1.5 rounded-[2px] text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-6.5">
        <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mb-2.5">
          Certifications
        </span>
        <div className="flex flex-wrap gap-2">
          {certifications.map((c) => (
            <span key={c.name} className="font-mono text-[12px] border border-line px-3 py-1.5 rounded-[2px] text-muted">
              {c.name}
              {c.status ? ` — ${c.status}` : ""}
            </span>
          ))}
        </div>
      </div>

      <div>
        <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mb-2.5">
          Education
        </span>
        <span className="text-[13px] border border-line px-3 py-1.5 rounded-[2px] text-muted inline-block">
          {education.degree} — {education.school}
        </span>
      </div>
    </div>
  );
}
