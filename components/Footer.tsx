"use client";

import { Code2, GitBranch, BriefcaseBusiness, Bird } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com/naveenkr123",
  },
  {
    icon: BriefcaseBusiness,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveenkr229",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/40">
              <Code2 className="h-4.5 w-4.5" />
            </span>

            <span className="font-display text-lg font-bold">
              naveen<span className="text-primary">.dev</span>
            </span>
          </a>

          {/* Navigation */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Naveen. All rights reserved.</p>

          <p>Designed &amp; Developed by Naveen</p>
        </div>
      </div>
    </footer>
  );
}
