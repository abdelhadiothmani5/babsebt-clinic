'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/lib/site-config';

export function TestimonialsPreview() {
  return (
    <section className="relative bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent nos patients"
          description="Avis publiés par la clinique. Ces témoignages n'ont pas fait l'objet d'une vérification indépendante."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Témoignages publiés par la clinique — non vérifiés de manière indépendante.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
