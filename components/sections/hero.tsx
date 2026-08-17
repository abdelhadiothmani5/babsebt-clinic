'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';

const heroImage =
  'https://images.pexels.com/photos/6809639/pexels-photo-6809639.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Floating accent shapes */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[8%] top-[20%] hidden h-24 w-24 rounded-full bg-accent/10 blur-2xl lg:block"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[20%] bottom-[15%] hidden h-32 w-32 rounded-full bg-gold/10 blur-3xl lg:block"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-medium text-gold"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {siteConfig.clinic.doctorName}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteConfig.clinic.heroHeadline}
          </motion.h1>

          {/* Arabic subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-arabic text-xl text-muted-foreground"
            dir="rtl"
          >
            {siteConfig.clinic.nameAr}
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {siteConfig.clinic.heroSubheadline}
          </motion.p>

          {/* Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold" />
            {siteConfig.clinic.heroHighlight}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button size="lg" className="group gap-2 px-8 text-base shadow-glow-accent" asChild>
              <a href={siteConfig.cta.primary.href}>
                <Calendar className="h-4 w-4" />
                {siteConfig.cta.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-base" asChild>
              <a href="/services">
                Découvrir nos traitements
              </a>
            </Button>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-medium text-foreground">98%</span> de satisfaction
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Protocoles d'hygiène stricts
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-muted-foreground/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
