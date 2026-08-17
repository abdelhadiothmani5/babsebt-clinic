'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { siteConfig } from '@/lib/site-config';

export function PatientJourney() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Votre parcours"
          title="Un accompagnement à chaque étape"
          description="De la première consultation au suivi post-traitement, nous vous accompagnons avec attention et transparence."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.patientJourney.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.12}>
              <div className="group relative">
                {/* Connector line */}
                {i < siteConfig.patientJourney.length - 1 && (
                  <div className="absolute top-8 left-1/2 hidden h-px w-full bg-border lg:block" />
                )}

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground shadow-md transition-transform duration-500 ease-premium group-hover:scale-110">
                    {item.step}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
