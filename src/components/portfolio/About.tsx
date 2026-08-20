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
              I'm a Computer Science undergraduate specializing in Artificial Intelligence and
              Machine Learning at Shri Shankracharya Technical Campus, Bhilai. My focus is computer
              vision and real-time intelligent systems, built with Python, YOLOv8, OpenCV, PyTorch
              and Keras.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Alongside AI, I build cloud-based full-stack applications with React, Node.js and
              AWS (EC2, S3, Lambda), and ship ML dashboards with Streamlit. I'm passionate about
              solving real-world problems through intelligent systems — from space debris detection
              to gamified cybersecurity learning.
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