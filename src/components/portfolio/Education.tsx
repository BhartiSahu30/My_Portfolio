import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Academics" title="Education" />
      <Reveal className="mx-auto max-w-3xl">
        <div className="glow-card rounded-2xl p-7 sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <span className="glass flex size-11 shrink-0 items-center justify-center rounded-xl text-accent">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold sm:text-lg">
                  B.Tech Computer Science (Artificial Intelligence)
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Shri Shankracharya Technical Campus, Bhilai
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:text-right">
              <span className="w-fit rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs text-accent">
                2023 – 2027
              </span>
              <p className="mt-2 text-sm font-medium">CGPA: 8.2 / 10</p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 border-t border-[var(--glass-border)] pt-6 sm:grid-cols-2">
            <div className="rounded-xl bg-secondary/40 p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Class XII</p>
              <p className="mt-1.5 text-sm">CGBSE – 81.6% (2022)</p>
            </div>
            <div className="rounded-xl bg-secondary/40 p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Class X</p>
              <p className="mt-1.5 text-sm">CGBSE – 95% (2020)</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
