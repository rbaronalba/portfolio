"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function MotionCard({
  children,
  className = "project-card card",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.article
      className={className}
      whileHover={prefersReduced ? {} : { y: -4, scale: 1.02 }}
      whileTap={prefersReduced ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.article>
  );
}
