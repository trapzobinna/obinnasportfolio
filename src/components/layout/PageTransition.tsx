"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: { opacity: 0, y: 10, filter: "blur(4px)" },
    enter: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const reducedMotionVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={shouldReduceMotion ? reducedMotionVariants : variants}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-32" // Offset for fixed navbar
    >
      {children}
    </motion.div>
  );
}
