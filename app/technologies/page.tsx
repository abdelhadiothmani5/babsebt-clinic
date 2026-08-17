'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Scan, Monitor, MousePointerClick, Workflow, Cpu, Layers, type LucideIcon } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

const featureIcons: LucideIcon[] = [Scan, MousePointerClick, Monitor, Workflow];

export default function TechnologiesPage() {
  const [mainTech, ...otherTech] = siteConfig.technologies;

  return (
    <>
      <PageHeader
        eyebrow="Technologies"
        title="La dentisterie numérique au service de votre confort"
        description="Notre clinique investit dans des technologies de pointe pour des soins plus précis, plus rapides et plus confortables."
      />

      {/* Main technology — 3Shape TRIOS */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <ScrollReveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                  <img
                    src={mainTech.image}
                    alt={mainTech.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
                </div>
              </ScrollReveal>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-4 -right-4 rounded-2xl bg-primary px-5 py-4 text-center shadow-premium"
              >
                <span className="block font-display text-lg font-bold text-gold">3Shape</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-primary-foreground/70">
                  TRIOS Scanner
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  <span className="h-px w-8 bg-gold/60" />
                  Technologie phare
                </span>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  {mainTech.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {mainTech.description}
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Features grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mainTech.features.map((feature, i) => {
              const Icon = featureIcons[i] ?? Scan;
              return (
                <ScrollReveal key={feature.title} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card p-8 transition-all duration-500 ease-premium hover:border-accent/40 hover:shadow-premium">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-accent transition-all duration-500 ease-premium group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other technologies */}
      <section className="relative bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Autres équipements
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
              D'autres technologies modernes complètent notre arsenal diagnostique et thérapeutique.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {otherTech.map((tech, i) => (
              <ScrollReveal key={tech.title} delay={i * 0.12}>
                <div className="group h-full overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 ease-premium hover:border-accent/40 hover:shadow-premium">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-xl font-semibold text-primary-foreground drop-shadow-lg">
                        {tech.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
