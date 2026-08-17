'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink, type WhatsAppIntent } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  const [visible, setVisible] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBooking = () => {
    window.open(buildWhatsAppLink('booking'), '_blank', 'noopener,noreferrer');
  };

  const handleEstimate = () => {
    window.open(buildWhatsAppLink('estimate'), '_blank', 'noopener,noreferrer');
  };

  const handleContact = () => {
    window.open(buildWhatsAppLink('contact'), '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded menu */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2"
              >
                <WhatsAppMenuItem
                  label="Prendre rendez-vous"
                  onClick={handleBooking}
                />
                <WhatsAppMenuItem
                  label="Demander une estimation"
                  onClick={handleEstimate}
                />
                <WhatsAppMenuItem
                  label="Poser une question"
                  onClick={handleContact}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-shadow hover:shadow-xl"
            aria-label="Contact WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />

            <AnimatePresence mode="wait" initial={false}>
              {expanded ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <X className="h-6 w-6 text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="whatsapp"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <MessageCircle className="h-6 w-6 text-white fill-white/10" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function WhatsAppMenuItem({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground shadow-premium transition-colors hover:bg-secondary"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
        <MessageCircle className="h-4 w-4" />
      </span>
      {label}
    </motion.button>
  );
}
