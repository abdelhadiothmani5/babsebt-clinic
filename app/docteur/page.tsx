'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HeartHandshake, Microscope, Award, Info, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

const icons = [GraduationCap, HeartHandshake, Microscope, Award];

export default function DocteurPage() {
  const { doctor } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Le Praticien"
        title={doctor.name}
        description={doctor.role}
      />

      {/* Doctor intro with images */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Images */}
            <div className="relative">
              <ScrollReveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </ScrollReveal>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 -right-4 hidden aspect-square w-48 overflow-hidden rounded-2xl border-4 border-background shadow-premium sm:block lg:w-56"
              >
                <img
                  src={doctor.imageSecondary}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-4 top-8 flex flex-col items-center justify-center rounded-2xl bg-primary px-6 py-5 text-center text-primary-foreground shadow-premium"
              >
                <span className="font-display text-3xl font-bold text-gold">20+</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground/70">
                  Ans
                  <br />
                  d'expérience
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <ScrollReveal>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {doctor.intro}
                </p>
              </ScrollReveal>

              {/* Note about credentials */}
              <ScrollReveal delay={0.2}>
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-5">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {doctor.note}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctor.highlights.map((h, i) => {
              const Icon = icons[i] ?? Award;
              return (
                <ScrollReveal key={h.title} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-background p-8 transition-all duration-500 ease-premium hover:border-accent/40 hover:shadow-premium">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-accent transition-all duration-500 ease-premium group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {h.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
