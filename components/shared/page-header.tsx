'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20',
        className
      )}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[10%] top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[5%] bottom-10 h-48 w-48 rounded-full bg-gold/8 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-px w-8 bg-gold/60" />
            {eyebrow}
            <span className="h-px w-8 bg-gold/60" />
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
