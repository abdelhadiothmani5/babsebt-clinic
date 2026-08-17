'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos Traitements"
        title="Des soins complets pour votre sourire"
        description="Du diagnostic à l'esthétique, chaque traitement est réalisé avec précision, bienveillance et une technologie de pointe."
      />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.treatments.map((treatment, i) => (
              <ScrollReveal key={treatment.slug} delay={i * 0.06}>
                <Link href={`/services/${treatment.slug}`} className="group block h-full">
                  <Card className="group relative h-full overflow-hidden border-border/60 p-0 transition-all duration-500 ease-premium hover:border-accent/40 hover:shadow-premium">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={treatment.image}
                        alt={treatment.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-xl font-semibold text-primary-foreground drop-shadow-lg">
                          {treatment.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {treatment.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                        En savoir plus
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
