'use client';

import * as React from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  const variants: Variants = {
    hidden: { opacity: 0, y, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
