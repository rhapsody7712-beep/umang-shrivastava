import Link from "next/link";
import { site } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";
import { MetricsBar } from "@/components/MetricsBar";
import { Schematic } from "@/components/Schematic";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <header className="pt-20 pb-14">
        <div className="max-w-[1100px] mx-auto px-7 grid gap-12 items-center md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent inline-block rounded-[1px]" />
              {site.role.toUpperCase()}
            </div>
            <h1 className="font-display font-bold text-[clamp(34px,5vw,54px)] leading-[1.06] mt-3.5 mb-4.5">
              {site.name}
              <span className="block text-muted font-medium text-[0.42em] mt-2.5 leading-snug">
                {site.tagline}
              </span>
            </h1>
            <p className="text-muted text-[16px] max-w-[520px] mb-7">
              {site.positioning}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="font-mono text-[12.5px] px-5.5 py-3 rounded-[3px] bg-accent text-[#1a1306] font-semibold hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link>
              <Link
                href="/resume"
                className="font-mono text-[12.5px] px-5.5 py-3 rounded-[3px] border border-line hover:border-accent hover:text-accent transition-colors"
              >
                View résumé ↓
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Schematic />
          </Reveal>
        </div>
      </header>

      <MetricsBar />

      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-7">
          <div className="flex items-baseline gap-4 flex-wrap mb-9">
            <span className="font-mono text-[11px] text-muted-2 tracking-wide">FIG. 01</span>
            <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)]">
              Flagship programs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {caseStudies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <CaseStudyCard study={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-line">
        <div className="max-w-[1100px] mx-auto px-7">
          <div className="flex items-baseline gap-4 flex-wrap mb-9">
            <span className="font-mono text-[11px] text-muted-2 tracking-wide">FIG. 02</span>
            <h2 className="font-display font-semibold text-[clamp(24px,3vw,32px)]">
              Why the dual lane
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-7 max-w-[760px]">
            <Reveal>
              <h3 className="font-display text-[17px] mb-2">Most leaders pick one</h3>
              <p className="text-muted text-[14.5px]">
                Either you architect the system and hand it off, or you run delivery
                on a design someone else made. I do both on the same program — which
                means the architecture accounts for delivery reality from day one,
                and delivery never drifts from the design intent.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="font-display text-[17px] mb-2">Why that matters here</h3>
              <p className="text-muted text-[14.5px]">
                Privacy and data-rights systems fail quietly, in the gap between
                what was designed and what actually shipped. Owning both sides closes
                that gap — and it&apos;s the reason the programs below moved real
                metrics, not just shipped on time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel">
        <div className="max-w-[1100px] mx-auto px-7 py-20 text-center">
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,38px)] mb-3.5">
            Open to the next thing that needs both a builder and an owner.
          </h2>
          <p className="text-muted max-w-[480px] mx-auto mb-7">
            If your team needs someone equally comfortable in the architecture
            review and the steering committee — that&apos;s the gap I sit in.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-[12.5px] px-5.5 py-3 rounded-[3px] bg-accent text-[#1a1306] font-semibold hover:opacity-90 transition-opacity"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener"
              className="font-mono text-[12.5px] px-5.5 py-3 rounded-[3px] border border-line hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
