import { metrics } from "@/content/metrics";
import { Reveal } from "./Reveal";

export function MetricsBar() {
  return (
    <section className="border-y border-line bg-panel py-9">
      <div className="max-w-[1100px] mx-auto px-7 grid grid-cols-2 sm:grid-cols-6 gap-7">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.05}>
            <div>
              <div className="font-display font-bold text-accent text-[clamp(20px,2.6vw,28px)]">
                {m.value}
              </div>
              <div className="text-[11.5px] text-muted mt-1 leading-snug">
                {m.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
