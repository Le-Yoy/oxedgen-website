import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TrustedBySection from '@/components/TrustedBySection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TrustedBySection />
    </main>
  );
}
