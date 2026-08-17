'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Scan, Monitor, MousePointerClick, Workflow } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { siteConfig } from '@/lib/site-config';

const techImage =
  'https://images.pexels.com/photos/6812508/pexels-photo-6812508.jpeg?auto=compress&cs=tinysrgb&w=1200';

const features = [
  {
    icon: Scan,
    title: 'Empreintes numériques',
    text: "Adieu aux empreintes en pâte inconfortables. Le scanner capture une image 3D précise de vos dents en quelques minutes, dans un confort total.",
  },
  {
    icon: MousePointerClick,
    title: 'Confort du patient',
    text: "Pas de goût désagréable, pas de sensation d'étouffement. Le scannage est rapide, non invasif et adapté même aux patients les plus sensibles.",
  },
  {
    icon: Monitor,
    title: 'Planification moderne',
    text: 'Les données numériques permettent une planification de traitement précise, avec visualisation du résultat avant même de commencer.',
  },
  {
    icon: Workflow,
    title: 'Flux numérique complet',
    text: 'Du scan à la fabrication des restaurations, tout le circuit est numérique — plus rapide, plus précis, et avec moins d\'allers-retours.',
  },
];

export function DigitalDentistry() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={techImage}
                  alt="Scannage intraoral numérique 3Shape TRIOS"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-4 rounded-2xl bg-primary px-5 py-4 text-center shadow-premium"
            >
              <span className="block font-display text-lg font-bold text-gold">3Shape</span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-primary-foreground/70">
                TRIOS Scanner
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Technologie"
              title="Dentisterie numérique 3Shape TRIOS"
              description="Le scanner intraoral 3Shape TRIOS remplace les empreintes traditionnelles en pâte par une capture numérique 3D en couleur de votre cavité buccale."
              align="left"
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 0.1}>
                  <div className="group flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background text-accent shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{f.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
