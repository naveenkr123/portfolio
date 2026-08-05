"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  className?: string;
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    setPosition({
      x: (event.clientX - (rect.left + rect.width / 2)) * 0.25,
      y: (event.clientY - (rect.top + rect.height / 2)) * 0.35,
    });
  };

  const resetPosition = () =>
    setPosition({
      x: 0,
      y: 0,
    });

  const classes = `
    inline-flex items-center gap-2
    rounded-xl
    px-6 py-3
    text-sm font-semibold
    transition-[filter,box-shadow,background-color]
    duration-300
    ${
      variant === "primary"
        ? "bg-primary text-primary-foreground hover:brightness-110 hover:glow-ring"
        : "border border-border bg-secondary/40 text-foreground hover:border-primary/50 hover:bg-secondary/70"
    }
    ${className}
  `;

  if (href) {
    return (
      <motion.div
        animate={position}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
          mass: 0.4,
        }}
        className="inline-block"
      >
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetPosition}
          className={classes}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        mass: 0.4,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
