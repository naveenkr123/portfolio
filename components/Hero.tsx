"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail } from "lucide-react";

import MagneticButton from "@/components/MagneticButton";

const snippets = [
  { code: "const dev = 'Naveen'", top: "18%", left: "6%", delay: 0 },
  { code: "<Component {...props} />", top: "64%", left: "3%", delay: 1.2 },
  { code: "useEffect(() => {})", top: "80%", left: "36%", delay: 0.6 },
  { code: "type Props = { ui: 'clean' }", top: "12%", left: "58%", delay: 1.8 },
] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-36 sm:pt-44"
    >
      <div aria-hidden className="hero-glow absolute inset-0 -z-20" />
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="float-slow absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="float-slow absolute -right-16 top-56 -z-10 h-80 w-80 rounded-full bg-violet/20 blur-[120px]"
      />

      {!reduce &&
        snippets.map((s) => (
          <motion.span
            key={s.code}
            aria-hidden
            className="glass pointer-events-none absolute hidden select-none rounded-lg px-3 py-1.5 font-mono text-[11px] text-muted-foreground lg:block"
            style={{ top: s.top, left: s.left }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.9, 0.9, 0], y: [10, -16, -24, -40] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          >
            {s.code}
          </motion.span>
        ))}

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          {/* <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
            Available for freelance & full-time work
          </motion.span> */}

          <p className="text-lg font-medium text-foreground/90 sm:text-xl font-display">
            Hey, I'm
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className=" text-[clamp(3.5rem,11vw,7.5rem)] font-bold leading-[0.9]"
          >
            <span className="text-gradient">Naveen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 font-display text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            Frontend Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I build modern, responsive, and user-focused web applications with
            React, Next.js, and TypeScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              <Download className="h-4 w-4" /> Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: reduce ? 0 : [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.9, delay: 0.2 },
        scale: { duration: 0.9, delay: 0.2 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        y: -16,
      }}
      className="relative mx-auto w-full max-w-lg"
    >
      <div className="group glass shadow-soft relative rounded-2xl border border-border p-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:glow-ring">
        <div className="flex items-center gap-2 pb-3 pt-3 px-4">
          <span className="h-3 w-3 rounded-full bg-destructive/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-cyan/70" />
          <span className="ml-3 font-mono text-[12px] text-muted-foreground">
            portfolio.tsx
          </span>
        </div>
        <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-background/70 p-4 font-mono text-[12px] leading-relaxed text-muted-foreground">
          <code>{`export const Naveen = () => (
  <Developer
    stack={["React", "Next.js", "TS"]}
    focus="pixel-perfect UI"
    performance={100}
  >
    building delightful
    interfaces, daily.
  </Developer>
)`}</code>
          <span className="caret-block" />
        </pre>
      </div>

      {/* <motion.div
        animate={reduce ? {} : { y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass shadow-soft absolute -left-6 bottom-8 hidden w-44 rounded-xl p-3 sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Lighthouse
        </p>
        <p className="mt-1 font-display text-2xl font-bold text-primary">98</p>
        <div className="mt-2 h-1.5 rounded-full bg-secondary">
          <div className="h-full w-[98%] rounded-full bg-primary" />
        </div>
      </motion.div> */}

      {/* <motion.div
        animate={reduce ? {} : { y: [0, 12, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="glass shadow-soft absolute -right-4 -top-6 hidden rounded-xl px-4 py-3 sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Components
        </p>
        <p className="mt-1 font-display text-xl font-bold text-cyan">240+</p>
      </motion.div> */}
    </motion.div>
  );
}
