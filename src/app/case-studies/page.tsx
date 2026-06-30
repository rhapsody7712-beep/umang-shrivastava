import type { Metadata } from "next";
import { caseStudies } from "@/content/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Flagship privacy and data-rights programs, end to end.",
};

export default function CaseStudiesPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-7 py-20">
      <div className="flex items-baseline gap-4 flex-wrap mb-12">
        <span className="font-mono text-[11px] text-muted-2 tracking-wide">FIG. 01</span>
        <h1 className="font-display font-semibold text-[clamp(24px,3vw,32px)]">Case studies</h1>
      </div>
      <div className="flex flex-col gap-5">
        {caseStudies.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <CaseStudyCard study={s} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
