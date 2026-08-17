'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, HeartHandshake, Microscope } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { siteConfig } from '@/lib/site-config';

const aboutImage =
  'https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&w=1200';

const aboutImage2 =
  'https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=800';

const values = [
  { icon: GraduationCap, label: 'Expertise reconnue', desc: 'Formation continue et maîtrise des techniques modernes.' },
  { icon: Microscope, label: 'Technologie de pointe', desc: 'Équipements dernière génération pour un diagnostic précis.' },
  { icon: HeartHandshake, label: 'Soins personnalisés', desc: 'Chaque patient reçoit une attention et un plan sur mesure.' },
  { icon: Award, label: 'Excellence clinique', desc: "Des standards de qualité et d'hygiène irréprochables." },
];

export function AboutPreview() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div className="relative">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={aboutImage}
                  alt="Soins dentaires à la Clinique Bab Sebt"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Floating second image */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-4 hidden aspect-square w-48 overflow-hidden rounded-2xl border-4 border-background shadow-premium sm:block lg:w-56"
            >
              <img
                src={aboutImage2}
                alt="Clinique moderne"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-4 top-8 flex flex-col items-center justify-center rounded-2xl bg-primary px-6 py-5 text-center text-primary-foreground shadow-premium"
            >
              <span className="font-display text-3xl font-bold text-gold">15+</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground/70">
                Années
                <br />
                d'expérience
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="À Propos"
              title="Une clinique où l'humain est au cœur du soin"
              description="Sous la direction du Dr. Redouane Belhamidi, la Clinique dentaire Bab Sebt allie expertise médicale, technologie moderne et approche personnalisée pour offrir des soins dentaires d'exception à Blida."
              align="left"
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((value, i) => (
                <ScrollReveal key={value.label} delay={i * 0.1}>
                  <div className="group flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{value.label}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.desc}
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
