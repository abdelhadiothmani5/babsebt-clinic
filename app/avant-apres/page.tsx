'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

export default function BeforeAfterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Avant / Après"
        title="Des transformations qui parlent d'elles-mêmes"
        description="Découvrez les résultats de nos traitements à travers des cas cliniques. Les images seront ajoutées prochainement."
      />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {siteConfig.beforeAfter.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
                  <div className="grid gap-0 md:grid-cols-2">
                    {/* Before */}
                    <div className="relative aspect-[4/3] bg-secondary">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive">
                          Avant
                        </span>
                        <p className="text-sm text-muted-foreground">Image à venir</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/50" />
                    </div>

                    {/* After */}
                    <div className="relative aspect-[4/3] bg-secondary">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                          Après
                        </span>
                        <p className="text-sm text-muted-foreground">Image à venir</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.treatment}</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href="/contact">
                        <Calendar className="h-4 w-4" />
                        Consulter
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Note */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 rounded-xl border border-border bg-secondary/50 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Les photos avant/après seront publiées avec le consentement des patients.
                Chaque cas est unique et les résultats peuvent varier d'un patient à l'autre.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
