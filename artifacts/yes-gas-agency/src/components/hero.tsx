import { FadeIn } from "./fade-in";
import { ArrowRight, Phone, Star, ShieldCheck, Clock, Wrench } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-secondary">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract gas flame background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/90 to-secondary"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Hyderabad's #1 Trusted Repair Service
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
              Your Gas Stove Problems, Solved in <span className="text-primary">Hours</span> — Not Days
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
              Expert technicians at your doorstep, same day. We handle everything from basic cleaning to complex leakage repairs with 100% genuine parts.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-orange-600 text-white shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              Book a Repair Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:+919849000000"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white/80 text-sm font-medium">5000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-white/80 text-sm font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-white/80 text-sm font-medium">30-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-400" />
                <span className="text-white/80 text-sm font-medium">Genuine Parts</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
