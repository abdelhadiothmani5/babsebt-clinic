'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

export default function TemoignagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Témoignages"
        title="L'expérience de nos patients"
        description="Les avis ci-dessous sont publiés par la clinique. Ils n'ont pas fait l'objet d'une vérification indépendante."
      />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <ScrollReveal>
            <div className="mx-auto mb-12 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-secondary/50 p-5">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ces témoignages sont publiés par la Clinique dentaire Bab Sebt à titre informatif.
                Ils ne constituent pas une vérification indépendante et les résultats peuvent varier
                selon chaque patient.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="relative h-full border-border/60 p-8 shadow-sm transition-shadow duration-500 hover:shadow-premium">
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/20" />

                  <div className="flex items-center gap-0.5 text-gold">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {t.text}
                  </p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.treatment}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
