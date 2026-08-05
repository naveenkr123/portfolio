"use client";

import { useRef, useState } from "react";
import { ExternalLink, GitBranch } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    title: "Nebula Analytics",
    description:
      "A realtime analytics dashboard with charts, filters and a fully keyboard-accessible data grid.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    hue: "from-primary/40 to-violet/30",
  },
  {
    title: "Orbit Commerce",
    description:
      "Headless storefront with instant search, optimistic cart updates and a 98 Lighthouse score.",
    tags: ["React", "REST API", "Tailwind"],
    hue: "from-cyan/40 to-primary/30",
  },
  {
    title: "Prism Design System",
    description:
      "A themeable component library of 60+ primitives with docs, tokens and dark mode support.",
    tags: ["React", "TypeScript", "Storybook"],
    hue: "from-violet/40 to-primary/30",
  },
  {
    title: "Flowstate Tasks",
    description:
      "Drag-and-drop task board with offline persistence and buttery 60fps motion transitions.",
    tags: ["Next.js", "Motion", "TypeScript"],
    hue: "from-primary/40 to-cyan/30",
  },
  {
    title: "Cadence Studio",
    description:
      "Award-style agency site featuring scroll-driven storytelling and a custom cursor system.",
    tags: ["React", "GSAP", "CSS"],
    hue: "from-violet/40 to-cyan/30",
  },
  {
    title: "Signal Weather",
    description:
      "Location-aware weather PWA with animated conditions, charts and installable offline mode.",
    tags: ["React", "PWA", "REST API"],
    hue: "from-cyan/40 to-violet/30",
  },
];

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rx: -py * 8,
      ry: px * 10,
    });
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      className="glass group h-full overflow-hidden rounded-2xl transition-[box-shadow,border-color,transform] duration-300 hover:border-primary/50 hover:glow-ring"
    >
      <div
        className={`relative h-36 overflow-hidden bg-linear-to-br ${project.hue} grid-bg`}
      >
        <div className="absolute inset-0 grid place-items-center">
          <div className="w-5/6 rounded-lg border border-border bg-background/70 p-3 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
            </div>

            <div className="mt-3 space-y-2">
              <div className="h-2 w-2/3 rounded-full bg-foreground/25" />
              <div className="h-2 w-full rounded-full bg-foreground/12" />
              <div className="h-2 w-4/5 rounded-full bg-foreground/12" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:brightness-110"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>

          <a
            href="#projects"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-xs font-semibold transition hover:border-primary/50"
          >
            <GitBranch className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A sample of interfaces I've designed, built and shipped."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 0.08}>
            <TiltCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
