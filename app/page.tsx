import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { DoctorIntro } from '@/components/sections/doctor-intro';
import { FeaturedTreatments } from '@/components/sections/featured-treatments';
import { DigitalDentistry } from '@/components/sections/digital-dentistry';
import { HygieneSection } from '@/components/sections/hygiene-section';
import { PatientJourney } from '@/components/sections/patient-journey';
import { TestimonialsPreview } from '@/components/sections/testimonials-preview';
import { FAQPreview } from '@/components/sections/faq-preview';
import { CTASection } from '@/components/sections/cta-section';
import { ContactPreview } from '@/components/sections/contact-preview';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <DoctorIntro />
      <FeaturedTreatments />
      <DigitalDentistry />
      <HygieneSection />
      <PatientJourney />
      <TestimonialsPreview />
      <FAQPreview />
      <CTASection />
      <ContactPreview />
    </>
  );
}
