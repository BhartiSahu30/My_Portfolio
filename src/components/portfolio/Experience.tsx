import { Reveal, SectionHeading } from "./Reveal";
import { EXPERIENCE, ACHIEVEMENTS } from "./data";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Journey" title="Experience & Training" />
      <ol className="relative mx-auto max-w-3xl border-l border-[var(--glass-border)] pl-6 sm:pl-8">
        {EXPERIENCE.map((item, i) => (
          <li key={item.role + item.org} className="relative pb-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-2 size-3 rounded-full bg-gradient-brand shadow-[0_0_14px_2px_oklch(0.62_0.22_295/45%)] sm:-left-[2.35rem]"
            />
            <Reveal delay={i * 0.05}>
              <div className="glow-card rounded-2xl p-5 sm:p-6">
                <h3 className="font-display text-base font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-accent">{item.org}</p>
                {item.detail && (
                  <p className="mt-2.5 text-sm text-muted-foreground">{item.detail}</p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div id="achievements" className="mt-20 scroll-mt-24">
        <SectionHeading eyebrow="Highlights" title="Achievements" />
        <div className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.text} delay={i * 0.06}>
              <div className="glow-card flex h-full items-center gap-4 rounded-2xl p-5">
                <span aria-hidden="true" className="text-2xl">
                  {a.icon}
                </span>
                <p className="text-sm font-medium">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}