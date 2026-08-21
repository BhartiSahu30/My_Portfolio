import { Reveal, SectionHeading } from "./Reveal";
import { EXPERIENCE, ACHIEVEMENTS } from "./data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <SectionHeading eyebrow="Journey" title="Experience" />

      <ol className="relative mx-auto max-w-3xl border-l border-[var(--glass-border)] pl-6 sm:pl-8">
        {EXPERIENCE.map((item, i) => (
          <li key={item.role} className="relative pb-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-2 size-3 rounded-full bg-gradient-brand shadow-[0_0_14px_2px_oklch(0.79_0.145_213/55%)] sm:-left-[2.35rem]"
            />

            <Reveal delay={i * 0.05}>
              <div className="glow-card rounded-2xl p-5 sm:p-6">
                {/* Year and Experience Type */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gradient-brand px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    {item.year}
                  </span>

                  <span className="rounded-full border border-[var(--glass-border)] px-2.5 py-0.5 text-[11px] text-accent">
                    {item.tag}
                  </span>
                </div>

                {/* Role */}
                <h3 className="font-display text-base font-semibold">
                  {item.role}
                </h3>

                {/* Organization */}
                {item.org && (
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.org}
                  </p>
                )}

                {/* Experience Details */}
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      • {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Achievements */}
      <div id="achievements" className="mt-20 scroll-mt-24">
        <SectionHeading
          eyebrow="Highlights"
          title="Achievements & Hackathons"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.text} delay={i * 0.06}>
              <div className="glow-card flex h-full items-center gap-4 rounded-2xl p-5">
                <span aria-hidden="true" className="text-2xl">
                  {a.icon}
                </span>

                <div>
                  <p className="text-sm font-medium">{a.text}</p>

                  {a.detail && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {a.detail}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}