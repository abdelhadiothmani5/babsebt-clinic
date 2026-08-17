'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Stethoscope, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24);
  });

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
          isScrolled
            ? 'glass border-b py-3 shadow-premium'
            : 'border-b border-transparent py-5'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-md transition-transform duration-500 ease-premium group-hover:scale-105">
              <Stethoscope className="h-5 w-5 text-primary-foreground" />
              <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background bg-gold" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Bab Sebt
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Clinique Dentaire
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative px-3 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute inset-x-3 bottom-1 h-px origin-left bg-gold transition-transform duration-300 ease-premium',
                    isActive(item.href)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <Button
                size="sm"
                className="gap-2 text-sm font-medium shadow-glow-accent"
                asChild
              >
                <Link href={siteConfig.cta.primary.href}>
                  <Calendar className="h-4 w-4" />
                  <span className="hidden 2xl:inline">{siteConfig.cta.primary.label}</span>
                  <span className="2xl:hidden">RDV</span>
                </Link>
              </Button>
            </div>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm xl:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-background p-6 shadow-2xl xl:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {siteConfig.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                        isActive(item.href)
                          ? 'bg-secondary text-foreground'
                          : 'text-foreground hover:bg-secondary'
                      )}
                    >
                      {item.label}
                      <span className="text-gold">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
                <Button className="gap-2" size="lg" asChild>
                  <Link href={siteConfig.cta.primary.href} onClick={() => setIsOpen(false)}>
                    <Calendar className="h-4 w-4" />
                    {siteConfig.cta.primary.label}
                  </Link>
                </Button>
                <Button variant="outline" className="gap-2" size="lg" asChild>
                  <Link href={siteConfig.cta.secondary.href} onClick={() => setIsOpen(false)}>
                    <Phone className="h-4 w-4" />
                    {siteConfig.cta.secondary.label}
                  </Link>
                </Button>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  {siteConfig.clinic.doctorName}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
