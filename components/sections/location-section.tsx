'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { siteConfig } from '@/lib/site-config';

export function LocationSection() {
  const { location, contact } = siteConfig;

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <ScrollReveal className="lg:col-span-3">
            <Card className="relative h-full min-h-[400px] overflow-hidden border-border/60 p-0 shadow-premium">
              <iframe
                src={location.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de la Clinique dentaire Bab Sebt"
              />
            </Card>
          </ScrollReveal>

          {/* Location card */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <Card className="flex h-full flex-col p-8 shadow-premium">
              {/* Clinic name */}
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Clinique dentaire Bab Sebt
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {location.district}, {location.city}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {location.address}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm text-muted-foreground">
                    {contact.phone}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm text-muted-foreground">
                    {contact.hours}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button className="gap-2" size="lg" asChild>
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4" />
                    Obtenir l'itinéraire
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" size="lg" asChild>
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Voir sur Google Maps
                  </a>
                </Button>
                <WhatsAppButton
                  intent="contact"
                  label="Contacter sur WhatsApp"
                  variant="outline"
                  size="lg"
                  className="w-full"
                />
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
