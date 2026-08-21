import { Reveal, SectionHeading } from "./Reveal";
import { SKILLS } from "./data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <SectionHeading eyebrow="Toolbox" title="Skills" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="glow-card h-full rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-6 w-1 rounded-full bg-gradient-brand"
                  aria-hidden="true"
                />

                <h3 className="font-display text-base font-semibold">
                  {group.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[var(--glass-border)] bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}