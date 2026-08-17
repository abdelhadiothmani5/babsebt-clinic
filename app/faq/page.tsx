'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Trouvez les réponses aux questions les plus posées par nos patients."
      />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {siteConfig.faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border/60"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 rounded-xl border border-border bg-secondary/50 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Vous ne trouvez pas la réponse à votre question ?{' '}
                <a
                  href="/contact"
                  className="font-medium text-accent transition-colors hover:text-foreground"
                >
                  Contactez-nous
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
