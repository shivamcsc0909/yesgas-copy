import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { WhyChooseUs } from "../components/why-choose-us";
import { HowItWorks } from "../components/how-it-works";
import { Testimonials } from "../components/testimonials";
import { BeforeAfter } from "../components/before-after";
import { ServiceAreas } from "../components/service-areas";
import { Faq } from "../components/faq";
import { ContactSection } from "../components/contact-section";
import { FinalCta } from "../components/final-cta";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whatsapp-button";

export default function Landing() {
  return (
    <main className="relative bg-[#05091A]">
      <Navbar />
      
      {/* Hero with mesh-dark-blue — Continuous Flow */}
      <Hero />
      
      {/* ── Visual Transition — No Blank Gaps ── */}
      <div className="relative z-10 -mt-10">
        <WhyChooseUs />
      </div>

      <Services />

      <HowItWorks />

      <Testimonials />

      <BeforeAfter />

      <ServiceAreas />

      <Faq />

      <ContactSection />

      <FinalCta />

      <Footer />
      
      <WhatsAppButton />
    </main>
  );
}
