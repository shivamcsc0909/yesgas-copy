import { FadeIn } from "./fade-in";

export function FinalCta() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1e2d47]">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none noise-bg" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F97316] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            Technicians Available Now
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight leading-tight">
            Aaj Hi Fix Karwao — <br className="hidden sm:block" />
            <span className="gradient-text">Kal Mat Chhodna</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium">
            Gas leak ka risk mat lo. Limited slots today — our technicians are ready right now.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
          <a 
            href="tel:+919849000000"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-full font-bold text-xl bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white shadow-[0_8px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            📞 Call Now: +91 98490 00000
          </a>
          <a 
            href="https://wa.me/919849000000"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-full font-bold text-xl bg-[#22C55E] text-white shadow-[0_8px_30px_rgba(34,197,94,0.25)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.4)] hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-300"
          >
            💬 Book on WhatsApp
          </a>
        </FadeIn>

        <FadeIn delay={0.3} className="space-y-4">
          <p className="text-white/60 text-sm font-medium flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 items-center uppercase tracking-wide">
            <span>✅ Free Inspection</span>
            <span className="hidden sm:inline">•</span>
            <span>✅ Same Day Service</span>
            <span className="hidden sm:inline">•</span>
            <span>✅ 30-Day Warranty</span>
          </p>
          <div className="pt-6 border-t border-white/10 inline-block">
            <p className="text-white/80 font-medium">
              Join <span className="text-white font-bold">5,247</span> happy families who trusted us ❤️
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}