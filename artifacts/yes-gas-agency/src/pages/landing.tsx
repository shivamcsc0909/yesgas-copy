import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { BeforeAfter } from "@/components/before-after";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Landing() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <BeforeAfter />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
