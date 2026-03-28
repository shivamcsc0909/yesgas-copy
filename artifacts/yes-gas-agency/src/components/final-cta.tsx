import { Phone, ArrowRight, ShieldCheck, Zap, Sparkles, MessageCircle, Heart, Star, CloudLightning } from "lucide-react";
import { FadeIn } from "./fade-in";

export function FinalCta() {
  return (
    <section className="relative py-40 overflow-hidden bg-[#05091A]">
      {/* Background System — No Empty Transitions */}
      <div className="pointer-events-none absolute inset-0">
         <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent opacity-5" />
         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05091A] to-transparent opacity-80" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] rounded-full blur-[140px]" 
           style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.14) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[70px] overflow-hidden glass-dark grad-border backdrop-blur-3xl shadow-[0_80px_160px_rgba(0,0,0,1)] group">
          
          {/* Surface Patterns */}
          <div className="absolute inset-0 mesh-dots opacity-[0.06]" />
          <div className="absolute top-[-50px] right-[-50px] p-24 opacity-[0.03] transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12">
             <CloudLightning className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-20 px-8 py-24 lg:py-32 text-center max-w-5xl mx-auto">
            <FadeIn>
               <div className="flex justify-center mb-10">
                  <div className="px-6 py-2.5 rounded-full glass-dark grad-border flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse glow-orange-lg" />
                     <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Live Technician Availability: 97%</span>
                  </div>
               </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-white font-display font-black tracking-tighter mb-10"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6.2rem)", lineHeight: 0.9 }}>
                The Elite Standard in <br />
                <span className="shimmer-text">Kitchen Safety.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-white/40 text-[1.4rem] font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
                Join 5,000+ Hyderabad homes who have elevated their kitchens to industrial safety standards. One call transforms your home.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-20 border-b border-white/5 mx-auto max-w-2xl">
                <a href="tel:+919849000000" className="btn-primary h-18 !px-16 text-xl group shadow-[0_20px_50px_rgba(249,115,22,0.4)]">
                   <Phone className="w-6 h-6" />
                   Fix My Kitchen
                   <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </a>
                <a href="https://wa.me/919849000000" className="btn-ghost h-18 !px-12 text-xl">
                   WhatsApp
                </a>
              </div>
            </FadeIn>

            {/* Trust Footer Strip Layered Inside Card */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 pt-16">
                 {[
                   { icon: ShieldCheck, text: "Verified Experts", color: "#F97316" },
                   { icon: Zap, text: "Same-Day Fix", color: "#60A5FA" },
                   { icon: Heart, text: "5k+ Happy Homes", color: "#10B981" },
                   { icon: Star, text: "4.9/5 Rating", color: "#FBBF24" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3.5 opacity-40 hover:opacity-100 transition-all cursor-default group/trust">
                       <item.icon style={{ width: 16, height: 16, color: item.color }} className="transition-transform group-hover/trust:scale-125 group-hover/trust:rotate-12" />
                       <span className="text-white font-black text-xs uppercase tracking-[0.2em]">{item.text}</span>
                    </div>
                 ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
