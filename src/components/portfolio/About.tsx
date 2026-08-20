import { Reveal, SectionHeading } from "./Reveal";
import { STATS } from "./data";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Introduction" title="About Me" />
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glow-card h-full rounded-2xl p-7 sm:p-9">
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm a Computer Science &amp; Engineering (Artificial Intelligence) student who enjoys
              turning research-style ideas into working software. My core focus is Machine Learning,
              Deep Learning and Computer Vision, and I've applied these to detection, classification
              and remote-sensing problems using PyTorch, TensorFlow, OpenCV and YOLOv8.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Alongside AI, I build full-stack applications with React, TypeScript, Node.js and
              Flask, and I've been exploring Generative AI and LLM tooling such as LangChain. What
              motivates me most is solving real-world problems — civic systems, disaster monitoring
              and space safety — with AI that actually ships.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
              <div className="glow-card flex h-full flex-col justify-center rounded-2xl p-5 text-center">
                <p className="text-gradient font-display text-xl font-bold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}