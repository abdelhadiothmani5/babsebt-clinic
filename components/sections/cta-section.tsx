'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { siteConfig } from '@/lib/site-config';

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground shadow-premium sm:px-16 sm:py-24"
        >
          {/* Decorative gradients */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-medium text-gold">
              Prenez soin de votre sourire
            </span>

            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Réservez votre consultation dès aujourd'hui
            </h2>

            <p className="mt-5 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Notre équipe vous accueille dans un environnement moderne et
              confortable. Contactez-nous pour un rendez-vous ou une question.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                variant="secondary"
                className="group gap-2 px-8 text-base"
                asChild
              >
                <a href={siteConfig.cta.primary.href}>
                  <Calendar className="h-4 w-4" />
                  {siteConfig.cta.primary.label}
                </a>
              </Button>
              <WhatsAppButton
                intent="booking"
                label="Prendre rendez-vous sur WhatsApp"
                size="lg"
                className="gap-2 px-8"
              />
              <WhatsAppButton
                intent="estimate"
                label="Demander une estimation"
                variant="outline"
                size="lg"
                className="gap-2 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8"
              />
            </div>

            <p className="mt-8 text-sm text-primary-foreground/50">
              {siteConfig.contact.address}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
