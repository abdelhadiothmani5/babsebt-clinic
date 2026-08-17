export type WhatsAppIntent = 'booking' | 'estimate' | 'contact' | 'general';
export type WhatsAppLang = 'fr' | 'ar' | 'en';

const messages: Record<WhatsAppIntent, Record<WhatsAppLang, string>> = {
  booking: {
    fr: "Bonjour, je souhaite prendre un rendez-vous à la Clinique dentaire Bab Sebt. Merci de me communiquer vos disponibilités.",
    ar: "مرحباً، أرغب في حجز موعد في عيادة باب السبت لطب الأسنان. يرجى إعلامي بالأوقات المتاحة. شكراً.",
    en: "Hello, I would like to book an appointment at Clinique dentaire Bab Sebt. Please let me know your available slots.",
  },
  estimate: {
    fr: "Bonjour, je souhaite obtenir une estimation pour un traitement dentaire à la Clinique dentaire Bab Sebt. Merci de me recontacter.",
    ar: "مرحباً، أرغب في الحصول على تقدير لتكلفة علاج في عيادة باب السبت لطب الأسنان. يرجى التواصل معي. شكراً.",
    en: "Hello, I would like to request an estimate for a dental treatment at Clinique dentaire Bab Sebt. Please get in touch.",
  },
  contact: {
    fr: "Bonjour, j'ai une question pour la Clinique dentaire Bab Sebt. Merci de me recontacter.",
    ar: "مرحباً، لدي سؤال لعيادة باب السبت لطب الأسنان. يرجى التواصل معي. شكراً.",
    en: "Hello, I have a question for Clinique dentaire Bab Sebt. Please get in touch.",
  },
  general: {
    fr: "Bonjour, je vous contacte depuis le site web de la Clinique dentaire Bab Sebt.",
    ar: "مرحباً، أتواصل معكم عبر موقع عيادة باب السبت لطب الأسنان.",
    en: "Hello, I am contacting you from the Clinique dentaire Bab Sebt website.",
  },
};

function detectLang(): WhatsAppLang {
  if (typeof navigator === 'undefined') return 'fr';
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith('ar')) return 'ar';
  if (lang.startsWith('en')) return 'en';
  return 'fr';
}

export function getWhatsAppNumber(): string {
  return siteConfig.social.whatsapp || '';
}

export function buildWhatsAppLink(
  intent: WhatsAppIntent = 'general',
  lang?: WhatsAppLang,
  customMessage?: string,
): string {
  const detectedLang = lang ?? detectLang();
  const message = customMessage ?? messages[intent][detectedLang];
  const encoded = encodeURIComponent(message);
  const number = getWhatsAppNumber().replace(/[^0-9]/g, '');

  if (number) {
    return `https://wa.me/${number}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

export function buildWhatsAppLinkForTreatment(
  treatmentName: string,
  lang?: WhatsAppLang,
): string {
  const detectedLang = lang ?? detectLang();
  const treatmentMessages: Record<WhatsAppLang, string> = {
    fr: `Bonjour, je suis intéressé(e) par le traitement « ${treatmentName} » à la Clinique dentaire Bab Sebt. Merci de me recontacter pour un rendez-vous.`,
    ar: `مرحباً، أنا مهتم بعلاج «${treatmentName}» في عيادة باب السبت لطب الأسنان. يرجى التواصل معي لحجز موعد.`,
    en: `Hello, I am interested in the "${treatmentName}" treatment at Clinique dentaire Bab Sebt. Please contact me for an appointment.`,
  };
  return buildWhatsAppLink('general', detectedLang, treatmentMessages[detectedLang]);
}

import { siteConfig } from '@/lib/site-config';
