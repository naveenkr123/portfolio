"use client";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "HeroUI",
  "shadcn/ui",
  "REST APIs",
  "Auth.js",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "MongoDB",
  "SQLite",
  "Linux",
  "Python",
  "C++",
];

export default function TechMarquee() {
  const row = [...techs, ...techs];

  return (
    <section
      aria-label="Tech stack"
      className="relative overflow-hidden border-y border-border py-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

      <div className="marquee-track flex w-max items-center gap-4">
        {row.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="glass flex items-center gap-3 whitespace-nowrap rounded-xl px-6 py-3 font-display text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
