'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { siteConfig } from '@/lib/site-config';

export function ContactPreview() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nous trouver"
          title="Clinique dentaire Bab Sebt"
          description="Située dans le quartier de Bab Sebt à Blida, notre clinique vous accueille dans un environnement moderne et confortable."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <ScrollReveal className="lg:col-span-3">
            <Card className="relative h-full min-h-[400px] overflow-hidden border-border/60 p-0 shadow-premium">
              <iframe
                src={siteConfig.location.mapEmbed}
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

          {/* Contact info card */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <Card className="flex h-full flex-col p-8 shadow-premium">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Adresse</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.location.address}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.location.district}, {siteConfig.location.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Téléphone</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Horaires</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button className="gap-2" size="lg" asChild>
                  <a href={siteConfig.location.mapLink} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4" />
                    Obtenir l'itinéraire
                  </a>
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="gap-2" size="lg" asChild>
                    <a href={siteConfig.location.mapLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Google Maps
                    </a>
                  </Button>
                  <WhatsAppButton
                    intent="contact"
                    label="WhatsApp"
                    variant="outline"
                    size="lg"
                  />
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
