import { Github, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <SectionHeading eyebrow="Selected work" title="Projects" />

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <article className="glow-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              {project.badge && (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Award className="size-3.5" aria-hidden="true" />
                  {project.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-[var(--glass-border)] px-2.5 py-1 text-[11px] text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3 pt-1">
                {project.github && (
                  <Button
                    asChild
                    variant="glass"
                    size="sm"
                    className="rounded-lg"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github aria-hidden="true" />
                      GitHub
                    </a>
                  </Button>
                )}

                {project.demo && (
                  <Button
                    asChild
                    variant="hero"
                    size="sm"
                    className="rounded-lg"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink aria-hidden="true" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}