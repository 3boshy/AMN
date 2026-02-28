import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { CTASection } from '../components/home/CTASection';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
