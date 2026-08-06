"use client";

import { Code2, Gauge, Smartphone, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Typed, tested and readable. Components other developers can extend without fear.",
  },
  {
    icon: Sparkles,
    title: "Modern UI",
    text: "Design-led interfaces with considered spacing, motion and visual hierarchy.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Lazy loading, optimized assets and Core Web Vitals treated as a feature.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Layouts that feel native from a 320px phone to an ultrawide display.",
  },
];

export default function WhyMe() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <SectionHeading
        eyebrow="Why work with me"
        title="Built on four principles"
      />

      <div className="mt-16 grid gap-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <Reveal key={reason.title} delay={index * 0.08}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-4 xl:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:glow-ring">
              <span
                aria-hidden
                className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-violet/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
                <reason.icon className="h-5 w-5" />
              </span>

              <h3 className="mt-5 font-display text-lg font-semibold">
                {reason.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
