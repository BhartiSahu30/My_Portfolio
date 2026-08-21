import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "./Reveal";
import { LINKS } from "./data";

const CHANNELS = [
  {
    label: "Email",
    value: "bhartirdsahu@gmail.com",
    href: "mailto:bhartirdsahu@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "View repositories",
    href: "https://github.com/BhartiSahu30",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/bharti-sahu-7b1184350",
    Icon: Linkedin,
  },
  {
    label: "Phone",
    value: LINKS.phone,
    href: undefined,
    Icon: Phone,
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href = `${LINKS.email}?subject=${subject}&body=${body}`;

    toast.success("Opening your email client…");
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Intelligent"
      />

      <Reveal className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-base text-muted-foreground">
          I'm actively looking for entry-level AI/ML Engineer, Computer Vision
          Engineer, or Software Developer roles.
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="grid h-full gap-4">
            {CHANNELS.map(({ label, value, href, Icon }) => {
              const content = (
                <>
                  <span className="glass flex size-10 items-center justify-center rounded-xl text-accent">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-sm font-medium">
                      {label}
                    </span>

                    <span className="block text-xs text-muted-foreground">
                      {value}
                    </span>
                  </span>
                </>
              );

              // Phone is displayed but NOT clickable
              if (!href) {
                return (
                  <div
                    key={label}
                    className="glow-card flex items-center gap-4 rounded-2xl p-4"
                  >
                    {content}
                  </div>
                );
              }

              // Email, GitHub and LinkedIn are clickable
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="glow-card flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-1"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>

                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  className="bg-secondary/40"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="you@company.com"
                  className="bg-secondary/40"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="message">Message</Label>

              <Textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                placeholder="Tell me about the role or project…"
                className="bg-secondary/40"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="mt-6 w-full"
            >
              Send Message
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}