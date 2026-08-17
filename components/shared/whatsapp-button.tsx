'use client';

import * as React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buildWhatsAppLink, type WhatsAppIntent } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  intent?: WhatsAppIntent;
  label?: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  customMessage?: string;
}

export function WhatsAppButton({
  intent = 'general',
  label = 'WhatsApp',
  className,
  size = 'default',
  variant = 'default',
  customMessage,
}: WhatsAppButtonProps) {
  const sizeClasses = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8 text-base',
  };

  const variantClasses = {
    default: 'bg-[#25D366] text-white hover:bg-[#1da851] shadow-md',
    outline: 'border border-[#25D366]/40 text-[#1da851] hover:bg-[#25D366]/10',
    ghost: 'text-[#1da851] hover:bg-[#25D366]/10',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink(intent, undefined, customMessage);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </button>
  );
}
