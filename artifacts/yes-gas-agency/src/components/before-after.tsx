import { FadeIn } from "./fade-in";
import { ArrowRight, Flame, Sparkles, XCircle, Zap, AlertTriangle, ShieldCheck, CornerRightUp } from "lucide-react";

const comparisons = [
  {
    title: "Burner Restoration",
    BeforeIcon: Flame,
    AfterIcon: Sparkles,
    beforeText: "Yellow flame, clogged & smoky",
    afterText: "Blue flame, clean & efficient",
    beforeColor: "#F87171",
    afterColor: "#34D399",
    afterAccent: "emerald",
  },
  {
    title: "Ignition Mechanism",
    BeforeIcon: XCircle,
    AfterIcon: Zap,
    beforeText: "Broken spark, manual lighting",
    afterText: "Instant auto-ignition, safe",
    beforeColor: "#F87171",
    afterColor: "#60A5FA",
    afterAccent: "blue",
  },
  {
    title: "Pipeline Safety",
    BeforeIcon: AlertTriangle,
    AfterIcon: ShieldCheck,
    beforeText: "Old rubber tube, leak risk",
    afterText: "Secure copper pipe, zero leaks",
    beforeColor: "#FBBF24",
    afterColor: "#34D399",
    afterAccent: "emerald",
  },
];

export function BeforeAfter() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#05091A]">
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 mesh-dots opacity-[0.04]" />
        <div className="section-wave" style={{ top: -1 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-24">
          <div className="section-label section-label-dark mb-6" style={{ margin: "0 auto 20px" }}>The Transformation</div>
          <h2 className="font-display font-extrabold text-white tracking-tighter" style={{ fontSize: "clamp(3rem, 5vw, 4rem)", lineHeight: 1 }}>
            See the <span className="shimmer-text">Elite Result.</span>
          </h2>
          <p className="text-white/30 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-6">
            We transform broken, dangerous appliances into safe, efficient ones — usually within a single visit.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div 
                className="group relative h-full rounded-[40px] glass-dark grad-border transition-all duration-500 overflow-hidden hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              >
                {/* Visual Label Top */}
                <div className="px-10 py-5 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
                  <h3 className="text-white font-black text-sm uppercase tracking-widest">{item.title}</h3>
                  <div className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                </div>

                <div className="grid grid-cols-2 relative">
                  {/* Before */}
                  <div className="p-10 border-r border-white/5 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-red-400/5 border border-red-400/10 flex items-center justify-center mb-6">
                      <item.BeforeIcon style={{ width: 32, height: 32, color: '#FCA5A5' }} />
                    </div>
                    <p className="text-white/20 text-[0.6rem] font-black uppercase tracking-widest mb-2">Before Repair</p>
                    <p className="text-white/40 text-sm font-bold leading-snug">{item.beforeText}</p>
                  </div>

                  {/* After */}
                  <div className="p-10 flex flex-col items-center text-center bg-white/[0.01]">
                    <div className="w-16 h-16 rounded-2xl bg-[#F97316]/5 border border-[#F97316]/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <item.AfterIcon style={{ width: 32, height: 32, color: item.afterColor }} />
                    </div>
                    <p className="text-[#F97316] text-[0.6rem] font-black uppercase tracking-widest mb-2">After Service</p>
                    <p className="text-white font-bold leading-snug">{item.afterText}</p>
                  </div>

                  {/* Center Divider Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#05091A] border border-white/10 flex items-center justify-center shadow-2xl z-20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-[#F97316]" />
                  </div>
                </div>

                {/* Footer Glow Accent */}
                <div className="absolute bottom-0 inset-x-0 h-1 blur-md opacity-20 transition-opacity group-hover:opacity-40" style={{ background: item.afterColor }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
