"use client";

import { Code2, Database, Hammer, Sparkles } from "lucide-react";

import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HeroUI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend / APIs",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Next.js API Routes",
      "Authentication",
      "JWT",
    ],
  },
  {
    title: "Tools",
    icon: Hammer,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "npm"],
  },
  {
    title: "Currently Learning",
    icon: Sparkles,
    skills: ["Docker", "Prisma", "System Design", "AWS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6"
    >
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit behind every interface"
        description="Technologies and tools I use to build modern, performant, and scalable web applications."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal key={group.title} delay={index * 0.08}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-ring">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display text-xl font-semibold">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-border
                        px-4
                        py-2
                        text-sm
                        text-muted-foreground
                        transition-all
                        duration-300
                        hover:border-primary/40
                        hover:bg-primary/5
                        hover:text-foreground
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
