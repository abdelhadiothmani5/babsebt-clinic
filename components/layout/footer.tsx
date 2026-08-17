'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Stethoscope, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary to-primary" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground">
                <Stethoscope className="h-6 w-6 text-primary" />
                <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-gold" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-tight">
                  Bab Sebt
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
                  Clinique Dentaire
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.clinic.description}
            </p>
            <p className="mt-4 font-arabic text-sm text-primary-foreground/60" dir="rtl">
              {siteConfig.clinic.nameAr}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Navigation
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm transition-colors hover:text-gold',
                      isActive(item.href)
                        ? 'text-gold'
                        : 'text-primary-foreground/70'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Contact & Accès
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                <span>{siteConfig.location.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0 text-gold/80" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0 text-gold/80" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                { Icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href || '#'}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-all duration-300 ease-premium hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © {year} {siteConfig.clinic.nameFr}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={siteConfig.cta.primary.href}
              className="flex items-center gap-2 text-xs text-primary-foreground/50 transition-colors hover:text-gold"
            >
              <Calendar className="h-3.5 w-3.5" />
              {siteConfig.cta.primary.label}
            </Link>
            <p className="text-xs text-primary-foreground/50">
              {siteConfig.clinic.doctorName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
