import { FadeIn } from "./fade-in";
import { Phone, CheckCircle2, Clock, ShieldCheck, MapPin, Zap, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A] pt-24 pb-16">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#F97316]/20 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#F97316] animate-pulse"></span>
              🔥 Hyderabad's Most Trusted Gas Service
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight mb-6 text-white">
              <span className="block">Gas Stove Ki</span>
              <span className="block gradient-text">Har Problem,</span>
              <span className="block">Turat Solve!</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-lg leading-relaxed font-sans">
              Expert technicians at your doorstep within hours. Gas leak? Broken ignition? Clogged burner? — Aaj hi fix karwao.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              Free Visit
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/90">
              <Zap className="w-4 h-4 text-[#F97316]" />
              Same Day
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/90">
              <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
              30-Day Warranty
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-col gap-4 w-full sm:w-auto min-w-[280px]">
            <a 
              href="tel:+919849000000"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white shadow-[0_8px_30px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300 w-full"
            >
              📞 Call Now: +91 98490 00000
            </a>
            <a 
              href="https://wa.me/919849000000"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg bg-[#22C55E] text-white shadow-[0_8px_30px_rgba(34,197,94,0.2)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-300 w-full"
            >
              💬 Book on WhatsApp
            </a>
            <p className="text-center text-sm font-medium text-red-400 mt-2">
              🔴 Only 3 slots left today — Book now!
            </p>
          </FadeIn>
        </div>

        {/* Right Column (Visual) */}
        <div className="hidden md:block w-1/2 relative perspective-1000">
          <FadeIn delay={0.4} direction="left">
            <div className="relative rotate-2 transform-gpu">
              {/* Main Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-6 relative z-10 w-full max-w-md mx-auto">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#F97316] animate-pulse" />
                  <h3 className="text-white font-semibold text-lg">Active Service Status</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-3">
                    <div className="bg-[#22C55E]/20 p-2 rounded-lg text-[#22C55E]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Ramesh K. — Burner Repair</p>
                      <p className="text-white/50 text-xs">Completed 12 min ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                      <Zap className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Priya S. — Gas Leak Fix</p>
                      <p className="text-white/50 text-xs">🔄 In Progress</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-3">
                    <div className="bg-[#F97316]/20 p-2 rounded-lg text-[#F97316]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Anita R. — Installation</p>
                      <p className="text-white/50 text-xs">⏳ Scheduled 2:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center px-2">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">47</p>
                    <p className="text-xs text-white/50">repairs today</p>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white flex items-center gap-1">4.9<Star className="w-4 h-4 fill-[#F97316] text-[#F97316]" /></p>
                    <p className="text-xs text-white/50">avg rating</p>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform rotate-3 animate-bounce-slow">
                <p className="text-[#0F172A] font-bold text-sm">5000+ Happy Customers ⭐</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform -rotate-3 z-20">
                <p className="text-[#0F172A] font-bold text-sm">30-Day Warranty 🛡️</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}