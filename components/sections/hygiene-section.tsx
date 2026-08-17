'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, FlaskConical, PackageCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { siteConfig } from '@/lib/site-config';

const icons = [FlaskConical, ShieldCheck, PackageCheck, Sparkles];

export function HygieneSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Sécurité"
              title="Hygiène & Stérilisation"
              description={siteConfig.sterilization.description}
              align="left"
            />

            <div className="mt-10 space-y-6">
              {siteConfig.sterilization.steps.map((step, i) => {
                const Icon = icons[i] ?? ShieldCheck;
                return (
                  <ScrollReveal key={step.title} delay={i * 0.1}>
                    <div className="group flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{step.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={siteConfig.sterilization.image}
                  alt="Stérilisation et hygiène à la clinique"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-background p-5 shadow-premium"
            >
              <ShieldCheck className="h-8 w-8 text-accent" />
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
                  Protocoles stricts
                </p>
                <p className="text-xs text-muted-foreground">Normes les plus exigeantes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
