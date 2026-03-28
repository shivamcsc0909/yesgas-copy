import { Phone, MessageSquare } from "lucide-react";
import { FadeIn } from "./fade-in";

export function FinalCta() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Technicians Available Now
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Don't Let a Broken Stove Ruin Your Day
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            ⚡ Limited service slots available today — Book now and get priority service!
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <a 
            href="tel:+919849000000"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            📞 Call Now: +91 98490 00000
          </a>
          <a 
            href="https://wa.me/919849000000"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
          >
            💬 Book on WhatsApp
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-white/60 text-sm font-medium flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 items-center">
            <span>✅ Free Inspection</span>
            <span className="hidden sm:inline">•</span>
            <span>✅ Same Day Service</span>
            <span className="hidden sm:inline">•</span>
            <span>✅ 30-Day Warranty</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
