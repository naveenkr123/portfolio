"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 42, suffix: "+" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Happy Clients", value: 25, suffix: "+" },
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
        title="Designing interfaces that feel effortless"
        description="I'm a frontend developer who believes great products are built by combining clean code, thoughtful design, and attention to every small detail."
      />

      <Reveal className="mx-auto mt-4 max-w-3xl space-y-4 text-center text-muted-foreground">
        <p className="leading-relaxed">
          I am a Frontend Web Developer with 3 years of professional experience
          building responsive, accessible, and high-performance web applications
          using React, Next.js, TypeScript, and modern UI libraries.
        </p>

        <p className="leading-relaxed">
          I enjoy transforming ideas and designs into intuitive digital
          experiences with smooth interactions, reusable components, and clean
          architecture. My focus is always on creating interfaces that are fast,
          scalable, and enjoyable to use.
        </p>

        <p className="leading-relaxed">
          Beyond writing code, I'm constantly learning new technologies,
          refining my craft, and exploring ways to build products that make a
          meaningful impact while maintaining an excellent developer experience.
        </p>
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
