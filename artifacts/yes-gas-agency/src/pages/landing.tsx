import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { WhyChooseUs } from "../components/why-choose-us";
import { Services } from "../components/services";
import { HowItWorks } from "../components/how-it-works";
import { Testimonials } from "../components/testimonials";
import { ServiceAreas } from "../components/service-areas";
import { FAQ } from "../components/faq";
import { FinalCTA } from "../components/final-cta";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whatsapp-button";

import BookingModal from "../components/BookingModal";

export default function Landing() {
  return (
    <main className="relative bg-white">

      <BookingModal />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
