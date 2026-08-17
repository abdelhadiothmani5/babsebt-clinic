import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter, Noto_Kufi_Arabic } from 'next/font/google';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { PageTransition } from '@/components/shared/page-transition';
import { FloatingWhatsApp } from '@/components/shared/floating-whatsapp';
import { siteConfig } from '@/lib/site-config';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${siteConfig.clinic.nameFr} — ${siteConfig.clinic.doctorName}`,
  description: siteConfig.clinic.description,
  openGraph: {
    title: `${siteConfig.clinic.nameFr} — ${siteConfig.clinic.doctorName}`,
    description: siteConfig.clinic.description,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.clinic.nameFr,
    description: siteConfig.clinic.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${notoKufi.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
