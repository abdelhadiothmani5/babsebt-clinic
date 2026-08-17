'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Microscope, Award, type LucideIcon } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  HeartHandshake,
  Microscope,
  Award,
};

export default function CliniquePage() {
  const { clinicAbout } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="La Clinique"
        title="Un espace de soins moderne et accueillant"
        description={clinicAbout.intro}
      />

      {/* Images section */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={clinicAbout.image}
                  alt="Clinique dentaire Bab Sebt"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={clinicAbout.imageSecondary}
                  alt="Équipement moderne de la clinique"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clinicAbout.values.map((value, i) => {
              const Icon = iconMap[value.icon] ?? ShieldCheck;
              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card p-8 transition-all duration-500 ease-premium hover:border-accent/40 hover:shadow-premium">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-accent transition-all duration-500 ease-premium group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {value.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location info */}
      <section className="relative bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-gold/60" />
              Localisation
              <span className="h-px w-8 bg-gold/60" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {siteConfig.location.district}, {siteConfig.location.city}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {siteConfig.location.address}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
