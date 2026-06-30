import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col sm:flex-row border border-line bg-panel hover:border-accent transition-colors overflow-hidden min-h-[220px]"
    >
      {/* Left: content */}
      <div className="flex-1 p-7 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-start gap-3 justify-between mb-3">
            <span className="font-mono text-[9.5px] tracking-widest text-accent border border-accent/40 px-2 py-1 rounded-[2px] whitespace-nowrap">
              {study.category}
            </span>
            {study.shipped && !study.shipped.note && (
              <span className="font-mono text-[9.5px] text-muted-2 whitespace-nowrap">
                ↗ Live in production
              </span>
            )}
          </div>
          <h3 className="font-display font-semibold text-[19px] mb-1.5 group-hover:text-accent transition-colors leading-snug">
            {study.title}
          </h3>
          <p className="font-mono text-[11px] text-muted-2 italic mb-3">
            {study.role} · {study.period}
          </p>
          <p className="text-muted text-[13.5px] leading-relaxed line-clamp-2">
            {study.oneLiner}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5 pt-4 border-t border-line">
          {study.results.slice(0, 4).map((r) => (
            <div key={r.label}>
              <div className="font-display font-bold text-[18px] text-accent leading-none mb-0.5">
                {r.value}
              </div>
              <div className="font-mono text-[10px] text-muted-2">
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: screenshot or category panel */}
      <div className="sm:w-[280px] lg:w-[340px] shrink-0 border-t sm:border-t-0 sm:border-l border-line overflow-hidden">
        {study.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full min-h-[160px] bg-panel flex items-center justify-center p-6">
            <span className="font-mono text-[11px] tracking-widest text-muted-2 text-center leading-loose uppercase">
              {study.category.split(" & ").join("\n& ")}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
