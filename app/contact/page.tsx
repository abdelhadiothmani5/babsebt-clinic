'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Calendar, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { PageHeader } from '@/components/shared/page-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { LocationSection } from '@/components/sections/location-section';
import { siteConfig } from '@/lib/site-config';

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Prenons rendez-vous"
        description="Contactez-nous pour une consultation, une question ou une demande d'estimation. Nous vous répondrons dans les meilleurs délais."
      />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact info */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  Informations de contact
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  La Clinique dentaire Bab Sebt est située dans le quartier de Bab Sebt à Blida.
                  Nous serons ravis de vous accueillir.
                </p>
              </ScrollReveal>

              <div className="mt-8 space-y-6">
                <ScrollReveal delay={0.1}>
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
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
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
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">E-mail</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
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
                </ScrollReveal>
              </div>

              {/* WhatsApp CTAs */}
              <ScrollReveal delay={0.3}>
                <div className="mt-8 space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Contact rapide
                  </h4>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <WhatsAppButton
                      intent="booking"
                      label="Prendre rendez-vous"
                      size="lg"
                      className="flex-1"
                    />
                    <WhatsAppButton
                      intent="estimate"
                      label="Demander une estimation"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="gap-2 flex-1" size="lg" asChild>
                      <a href={siteConfig.location.mapLink} target="_blank" rel="noopener noreferrer">
                        <Navigation className="h-4 w-4" />
                        Itinéraire
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2 flex-1" size="lg" asChild>
                      <a href={siteConfig.location.mapLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact form */}
            <ScrollReveal delay={0.15}>
              <Card className="p-8 shadow-premium">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Calendar className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Message envoyé
                    </h3>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Merci pour votre message. Nous vous contacterons dans les meilleurs délais.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Demande de rendez-vous
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Remplissez ce formulaire et nous vous recontacterons.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Votre prénom" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Votre nom" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="Votre adresse e-mail" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre demande ou votre question..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2 shadow-glow-accent">
                      Envoyer ma demande
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Premium location section with map */}
      <LocationSection />
    </>
  );
}
