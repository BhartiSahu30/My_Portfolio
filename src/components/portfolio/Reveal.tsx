import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>

      <div
        aria-hidden="true"
        className="mx-auto mt-4 h-px w-24 bg-gradient-brand"
      />
    </Reveal>
  );
}