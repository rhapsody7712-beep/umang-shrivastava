import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="block border border-line bg-panel p-7 hover:border-accent transition-colors group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display font-semibold text-[18px] group-hover:text-accent transition-colors leading-snug">
          {study.title}
        </h3>
        <span className="font-mono text-[9.5px] tracking-widest text-accent border border-accent/40 px-2 py-1 rounded-[2px] whitespace-nowrap shrink-0 mt-0.5">
          {study.category}
        </span>
      </div>
      <p className="font-mono text-[11px] text-muted-2 mb-3 italic">
        {study.role} · {study.period}
      </p>
      <p className="text-muted text-[13.5px] mb-5 leading-relaxed line-clamp-3">
        {study.oneLiner}
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4">
        {study.results.slice(0, 4).map((r) => (
          <div key={r.label}>
            <div className="font-display font-bold text-[17px] text-accent leading-none mb-0.5">
              {r.value}
            </div>
            <div className="font-mono text-[10.5px] text-muted-2 leading-snug">
              {r.label}
            </div>
          </div>
        ))}
      </div>
      {study.shipped && !study.shipped.note && (
        <div className="mt-4 pt-3 border-t border-line">
          <span className="font-mono text-[10.5px] text-accent">
            ↗ Shipped · {study.shipped.label}
          </span>
        </div>
      )}
    </Link>
  );
}
