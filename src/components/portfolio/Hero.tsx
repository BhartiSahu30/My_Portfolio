import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "./data";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_2px_currentColor]" />
          Open to internships & AI/ML roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 text-4xl font-bold sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">Bharti Sahu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 text-sm font-medium tracking-wide text-accent sm:text-base"
        >
          AI/ML Developer &nbsp;|&nbsp; Software Developer &nbsp;|&nbsp; CSE-AI Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground"
        >
          Final-year Computer Science &amp; Engineering student specializing in Artificial
          Intelligence, with hands-on experience in Machine Learning, Deep Learning, Computer
          Vision, Generative AI and full-stack development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <a href="#projects">
              View Projects <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
            <a href={LINKS.resume} download>
              <Download aria-hidden="true" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {[
            { href: LINKS.github, label: "GitHub", Icon: Github },
            { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
            { href: LINKS.email, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass rounded-xl p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:shadow-[var(--shadow-glow)]"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}