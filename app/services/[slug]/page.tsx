'use client';

import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { siteConfig } from '@/lib/site-config';

export default function TreatmentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const treatment = siteConfig.treatments.find((t) => t.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  const currentIndex = siteConfig.treatments.findIndex((t) => t.slug === params.slug);
  const nextTreatment = siteConfig.treatments[(currentIndex + 1) % siteConfig.treatments.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Retour aux traitements
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium"
            >
              <img
                src={treatment.image}
                alt={treatment.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>

            <div className="flex flex-col justify-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              >
                <span className="h-px w-8 bg-gold/60" />
                Traitement
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
              >
                {treatment.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
              >
                {treatment.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <Button size="lg" className="group gap-2 shadow-glow-accent" asChild>
                  <Link href="/contact">
                    <Calendar className="h-4 w-4" />
                    Prendre rendez-vous
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  Les bénéfices
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Ce traitement vous offre des avantages concrets pour votre santé et votre confort.
                </p>
              </ScrollReveal>
            </div>
            <div className="space-y-4">
              {treatment.benefits.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="pt-1 text-sm font-medium text-foreground">{benefit}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process / Details */}
      <section className="relative bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Le déroulement du traitement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
              Chaque étape est réalisée avec soin et précision pour garantir un résultat optimal.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {treatment.details.map((detail, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <Card className="h-full border-border/60 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary font-display text-xl font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                    {detail.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {detail.text}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next treatment */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/services/${nextTreatment.slug}`}
            className="group flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card p-8 transition-all duration-500 ease-premium hover:border-accent/40 hover:shadow-premium sm:flex-row"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Traitement suivant
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                {nextTreatment.name}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              Découvrir
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
