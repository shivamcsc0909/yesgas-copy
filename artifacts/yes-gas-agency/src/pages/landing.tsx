import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Services } from "@/components/services";
import { ServiceAreas } from "@/components/service-areas";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { BeforeAfter } from "@/components/before-after";
import { Faq } from "@/components/faq";
import { ContactSection } from "@/components/contact-section";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Landing() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <ServiceAreas />
      <HowItWorks />
      <Testimonials />
      <BeforeAfter />
      <Faq />
      <ContactSection />
      <FinalCta />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
