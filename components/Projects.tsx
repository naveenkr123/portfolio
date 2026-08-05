"use client";

import { useRef, useState } from "react";
import { ExternalLink, CircleAlert } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Button } from "@heroui/react";
import Link from "next/link";

type ProjectStatus = "live" | "confidential" | "under_development";

const projects = [
  {
    title: "AIIMS New Delhi Recruitment Portal",
    description:
      "AIIMS Recruitment Portal automating application submission, image scrutiny, exam scheduling, admit card generation, result declaration, screening, interviews, and appointment letter issuance, ensuring a transparent, secure, and efficient recruitment workflow.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "HeroUI", "Axios", "SSR"],
    hue: "from-primary/40 to-violet/30",
    status: "live",
    url: "https://aiimsexams.ac.in/",
    reason: "",
  },
  {
    title: "UPPRPB Recruitment Portal",
    description:
      "Developed and enhanced frontend of 14 modules for the UP Police Recruitment portal, enabling candidate registration, form submission, exam center management, exam treasury status tracking.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Auth.js"],
    hue: "from-cyan/40 to-primary/30",
    status: "live",
    url: "https://www.upprpb.in/#/auth/landing",
    reason: "",
  },
  {
    title: "CAG Portal",
    description:
      "A centralized governance portal for the Comptroller and Auditor General (CAG) of India that facilitates Compendium submissions, CAG Awards nominations, and Office of the Year self-assessments to promote innovation, excellence, and good governance.",
    tags: ["Next.js", "TypeScript", "HeroUI", "Tailwind CSS", "SSR"],
    hue: "from-violet/40 to-primary/30",
    status: "confidential",
    reason: "Internal government application - restricted public access.",
  },
  {
    title: "CAG Minutes of Meeting (MoM)",
    description:
      "A centralized Minutes of Meeting (MoM) Management System that streamlines meeting documentation, distributes agendas and actionable points to concerned wings, officers, and field offices, and enables tracking of action taken reports.",
    tags: [
      "Next.js",
      "TypeScript",
      "HeroUI",
      "Axios",
      "REST API",
      "Authentication",
    ],
    hue: "from-primary/40 to-cyan/30",
    status: "confidential",
    reason: "Internal government application - restricted public access.",
  },
  {
    title: "Growvita",
    description:
      "A marketing website for Growvita, a nutrition and health supplement brand, showcasing its product range, nutritional benefits, and wellness solutions through a modern, responsive digital experience.",
    tags: ["Next.js", "Tailwind CSS", "HeroUI", "Framer Motion"],
    hue: "from-violet/40 to-cyan/30",
    status: "live",
    url: "https://growvita.in",
    reason: "",
  },
  {
    title: "Anonymous Random Chat Room",
    description:
      "An anonymous, privacy-first real-time chat platform where anyone can instantly join using an alias name—no registration, email, or personal information required. Messages, chat history, and user data are never stored, ensuring every conversation is temporary and self-destructing.",
    tags: [
      "Next.js",
      "TypeScript",
      "Shadcn/ui",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js",
    ],
    hue: "from-cyan/40 to-violet/30",
    status: "under_development",
    reason: "Currently under development, coming soon.",
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

        <div className="flex gap-3">
          <div className="mt-6">
            {project.status === "live" ? (
              <Button
                as={Link}
                href={(project?.url as string) ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:brightness-110"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </Button>
            ) : (
              <div className="w-full flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/8 px-4 py-3">
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <div>
                  <p className="text-xs font-semibold text-primary">
                    Demo Unavailable
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {project.reason}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* <a
            href="#projects"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-xs font-semibold transition hover:border-primary/50"
          >
            <GitBranch className="h-3.5 w-3.5" />
            GitHub
          </a> */}
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
