import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/caseStudies";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

// Static export requires every param to be known at build time.
export const dynamicParams = false;

function getStudy(slug: string) {
  return caseStudies.find((s) => s.slug === slug);
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getStudy(params.slug);
  if (!study) return {};
  return { title: study.title, description: study.oneLiner };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-9">
      <span className="font-mono text-[11px] text-muted-2 tracking-wide uppercase block mb-2.5">
        {label}
      </span>
      {children}
    </div>
  );
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <Block label={label}>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-[14.5px] text-muted pl-4 border-l border-line">
            {item}
          </li>
        ))}
      </ul>
    </Block>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getStudy(params.slug);
  if (!study) notFound();

  return (
    <div className="max-w-[760px] mx-auto px-7 py-20">
      <Reveal>
        <span className="font-mono text-[11px] text-accent tracking-wide">{study.ref}</span>
        <h1 className="font-display font-bold text-[clamp(28px,4vw,40px)] mt-3 mb-4">
          {study.title}
        </h1>
        <p className="text-muted text-[16px] mb-10">{study.oneLiner}</p>
      </Reveal>

      <Reveal>
        <Block label="Problem">
          <p className="text-[14.5px] text-muted">{study.problem}</p>
        </Block>
        <Block label="Context">
          <p className="text-[14.5px] text-muted">{study.context}</p>
        </Block>
        <ListBlock label="Constraints" items={study.constraints} />
        <Block label="Architecture">
          <p className="text-[14.5px] text-muted">{study.architecture}</p>
        </Block>
        <ListBlock label="Decisions" items={study.decisions} />
        <ListBlock label="Trade-offs" items={study.tradeoffs} />

        <Block label="Results">
          <div className="flex flex-wrap gap-2.5">
            {study.results.map((r) => (
              <span
                key={r.label}
                className="font-mono text-[12px] border border-line px-3 py-1.5 rounded-[2px]"
              >
                <span className="text-accent font-semibold">{r.value}</span> {r.label}
              </span>
            ))}
          </div>
        </Block>

        <ListBlock label="Lessons learned" items={study.lessons} />
      </Reveal>
    </div>
  );
}
