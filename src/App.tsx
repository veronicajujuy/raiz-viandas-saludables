/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WeeklyMenu } from './components/WeeklyMenu';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fefae0] text-[#283618]">
      <Header />
      <main className="flex-1">
        <Hero />
        <WeeklyMenu />
        <HowItWorks />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
