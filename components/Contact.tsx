"use client";

import { FormEvent, useState } from "react";
import {
  GitBranch,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Send,
  Bird,
} from "lucide-react";
import { toast } from "sonner";

import MagneticButton from "./MagneticButton";
import { Reveal, SectionHeading } from "./Reveal";
import { Tooltip } from "@heroui/react";

const socials = [
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: BriefcaseBusiness,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Bird,
    label: "Twitter",
    href: "https://twitter.com",
  },
];

const fieldClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/25";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setSending(true);

    setTimeout(() => {
      setSending(false);

      toast.success("Message sent — I'll get back to you soon!");

      form.reset();
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        description="Have a project, a role, or just an idea? My inbox is always open."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1fr]">
        <Reveal className="space-y-6">
          <div className="glass rounded-2xl p-7">
            <h3 className="font-display text-lg font-semibold">
              Contact Information
            </h3>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Mail className="h-4.5 w-4.5" />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>

                  <a
                    href="mailto:hello@naveen.dev"
                    className="text-sm transition-colors hover:text-primary"
                  >
                    naveenkr229@gmail.com
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <MapPin className="h-4.5 w-4.5" />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    Location
                  </span>

                  <span className="text-sm">
                    Gr. Noida, India — available worldwide (remote)
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {socials.map((social) => (
                <Tooltip
                  content={social?.label}
                  key={social.label}
                  delay={100}
                  closeDelay={50}
                  classNames={{
                    content:
                      "glass rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground shadow-soft",
                    arrow: "bg-surface border-border",
                  }}
                >
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                  >
                    <social.icon className="h-4.5 w-4.5" />
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="subject"
                className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                required
                placeholder="Project inquiry"
                className={fieldClass}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about what you're building..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <div className="mt-6">
              <MagneticButton type="submit" variant="primary">
                {sending ? "Sending..." : "Send Message"}

                <Send className="h-4 w-4" />
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
