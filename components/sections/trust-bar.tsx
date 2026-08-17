'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.trust.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display text-4xl font-semibold text-gradient-navy sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
