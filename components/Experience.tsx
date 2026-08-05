"use client";

import { Reveal, SectionHeading } from "./Reveal";

const roles = [
  {
    title: "Frontend Web Developer",
    company: "Small Software Company",
    period: "2023 – Present",
    points: [
      "Built responsive web applications used daily by client teams",
      "Integrated REST APIs with resilient loading and error states",
      "Developed a reusable component library adopted across projects",
      "Improved UI performance and Core Web Vitals scores",
      "Worked with React, Next.js and TypeScript in production",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Independent",
    period: "2022 – 2023",
    points: [
      "Delivered marketing sites and dashboards for small businesses",
      "Translated Figma designs into pixel-accurate responsive layouts",
      "Set up accessible forms, animations and SEO-friendly structure",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Startup Studio",
    period: "2021 – 2022",
    points: [
      "Learned modern JavaScript tooling and Git workflows",
      "Shipped small features under senior code review",
      "Wrote documentation for internal UI patterns",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-4xl px-4 py-28 sm:px-6"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've been building"
        description="Three years of shipping interfaces for real products and real users."
      />

      <div className="relative mt-16 pl-8 sm:pl-12">
        <span
          aria-hidden
          className="absolute left-1 top-0 h-full w-px sm:left-3"
          style={{ backgroundImage: "var(--gradient-line)" }}
        />

        {roles.map((role, index) => (
          <Reveal
            key={`${role.title}-${role.period}`}
            delay={index * 0.1}
            className="relative pb-6 last:pb-0"
          >
            {/* Timeline Dot */}
            <span className="absolute top-10 left-[-2.2rem] h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/15 sm:left-[-2.7rem]" />

            <article className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-ring sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">
                  {role.title}
                </h3>

                <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-primary">
                  {role.period}
                </span>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                {role.company}
              </p>

              <ul className="mt-5 space-y-1.5">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
