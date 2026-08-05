"use client";

import { Reveal, SectionHeading } from "./Reveal";

const roles = [
  {
    title: "Web Developer",
    company: "2i Services Pvt. Ltd.",
    period: "2024 - Present",
    points: [
      "Contributed across four government projects: AIIMS (New Delhi) Recruitment Portal, UP Police Recruitment and Promotion Board, Comptroller and Auditor General (CAG) [v1.0 & v2.0], and CAG's Minutes of Meeting (MoM).",
      "Integrated REST APIs using Axios and implemented server-side rendering (SSR) for improved performance.",
      "Worked with Auth.js for authentication and collaborated on production-ready frontend features.",
      "Optimized application performance while maintaining clean, scalable, and maintainable code.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "PursueEd Solutions Pvt. Ltd.",
    period: "2023 - 2024",
    points: [
      "Delivered marketing websites and dashboards for small businesses.",
      "Redesigned and rebuilt existing business websites from scratch using React and Bootstrap.",
      "Implemented client-side routing and enhanced user interactions with DOM manipulation.",
      "Translated Figma designs into pixel-perfect, responsive user interfaces.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "PursueEd Solutions Pvt. Ltd.",
    period: "2023",
    points: [
      "Received hands-on training in modern web development fundamentals.",
      "Built responsive web pages using HTML, CSS, Bootstrap and JavaScript.",
      "Learned responsive design principles and cross-browser compatibility techniques.",
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
