'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';

const doctorImage =
  'https://images.pexels.com/photos/37458046/pexels-photo-37458046.jpeg?auto=compress&cs=tinysrgb&w=1000';

export function DoctorIntro() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium"
            >
              <img
                src={doctorImage}
                alt={siteConfig.doctor.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-4 flex flex-col items-center justify-center rounded-2xl bg-background p-6 text-center shadow-premium"
            >
              <span className="font-display text-3xl font-bold text-gradient-navy">20+</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Ans d'expérience
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            >
              <span className="h-px w-8 bg-gold/60" />
              Votre praticien
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {siteConfig.doctor.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-lg leading-relaxed text-muted-foreground"
            >
              {siteConfig.doctor.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {siteConfig.doctor.highlights.slice(0, 3).map((h) => (
                <div
                  key={h.title}
                  className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground"
                >
                  <Star className="h-3.5 w-3.5 text-gold" />
                  {h.title}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <Button variant="outline" size="lg" className="group gap-2" asChild>
                <a href="/docteur">
                  Découvrir le parcours du Dr. Belhamidi
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
