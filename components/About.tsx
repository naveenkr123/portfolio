"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { GraduationCap } from "lucide-react";

const stats = [
  { label: "Years Experience", value: getExperienceYears(), suffix: "+" },
  { label: "Projects Completed", value: 8, suffix: "+" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / 1400, 1);

          setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [to]);

  return (
    <p ref={ref} className="font-display text-4xl font-bold text-gradient">
      {value}
      {suffix}
    </p>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6"
    >
      <SectionHeading
        eyebrow="About"
        title="Building modern web experiences"
        description="I'm a frontend developer who believes great products are built by combining clean code, thoughtful design, and attention to every small detail."
      />

      <Reveal className="mx-auto mt-4 max-w-3xl space-y-4 text-center text-muted-foreground">
        <p className="leading-relaxed text-sm xl:text-base">
          I am a Frontend Web Developer with {getExperienceYears()} years of
          professional experience building responsive, accessible, and
          high-performance web applications using React, Next.js, TypeScript,
          and modern UI libraries.
        </p>

        <p className="leading-relaxed text-sm xl:text-base">
          I enjoy transforming ideas into intuitive, high-performance web
          experiences through clean architecture, reusable components, and
          smooth interactions. I'm always learning new technologies and refining
          my craft to build scalable products with an excellent developer
          experience.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="w-fit glass mx-auto mt-4 flex  max-w-xl items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <GraduationCap size={22} />
          </span>

          <div className="min-w-0 flex-1">
            <h3 className="font-display text-sm xl:text-lg font-semibold wrap-break-word">
              Bachelor of Computer Applications (BCA)
            </h3>

            <p className="mt-1 font-mono text-xs tracking-widest text-primary">
              2020 - 2023
            </p>

            <p className="mt-1 wrap-break-word text-xs xl:text-sm text-muted-foreground">
              G.L. Bajaj Institute of Technology &amp; Management
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <div className="glass group h-full rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <Counter to={stat.value} suffix={stat.suffix} />

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function getExperienceYears() {
  const startDate = new Date(2023, 2, 1); // March 1, 2023
  const today = new Date();

  const years =
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(years);
}
