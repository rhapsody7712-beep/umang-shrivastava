import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block border border-line bg-panel hover:border-accent transition-colors p-7"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className="font-mono text-[9.5px] tracking-widest text-accent border border-accent/40 px-2 py-1 rounded-[2px] whitespace-nowrap">
          {study.category}
        </span>
        {study.shipped && !study.shipped.note && (
          <span className="font-mono text-[9.5px] text-muted-2 whitespace-nowrap">
            ↗ Live in production
          </span>
        )}
      </div>

      <h3 className="font-display font-semibold text-[20px] mb-1.5 group-hover:text-accent transition-colors leading-snug">
        {study.title}
      </h3>
      <p className="font-mono text-[11px] text-muted-2 italic mb-4">
        {study.role} · {study.period}
      </p>
      <p className="text-muted text-[14px] leading-relaxed mb-6 max-w-[700px]">
        {study.oneLiner}
      </p>

      <div className="flex flex-wrap gap-x-8 gap-y-4 pt-5 border-t border-line">
        {study.results.map((r) => (
          <div key={r.label}>
            <div className="font-display font-bold text-[22px] text-accent leading-none mb-1">
              {r.value}
            </div>
            <div className="font-mono text-[10.5px] text-muted-2">
              {r.label}
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}
