import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="block border border-line bg-bg p-7 hover:border-accent transition-colors group"
    >
      <div className="font-mono text-[10.5px] text-accent tracking-wide">
        {study.ref}
      </div>
      <h3 className="font-display text-[19px] mt-2.5 mb-2.5 group-hover:text-accent transition-colors">
        {study.title}
      </h3>
      <p className="text-muted text-[14px] mb-3.5">{study.oneLiner}</p>
      <div className="flex flex-wrap gap-2">
        {study.results.slice(0, 2).map((r) => (
          <span
            key={r.label}
            className="font-mono text-[11px] border border-line px-2.5 py-1 rounded-[2px]"
          >
            {r.value} {r.label}
          </span>
        ))}
      </div>
    </Link>
  );
}
