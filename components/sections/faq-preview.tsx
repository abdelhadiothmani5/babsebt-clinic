'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';

export function FAQPreview() {
  const faqs = siteConfig.faq.slice(0, 4);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Les réponses aux questions les plus posées par nos patients."
        />

        <ScrollReveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
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

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="/faq">Voir toutes les questions</a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
