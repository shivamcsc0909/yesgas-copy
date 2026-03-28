import { useState, useEffect } from "react";
import { FadeIn } from "./fade-in";
import {
  Phone, ShieldCheck, Zap, Star, CheckCircle2,
  Clock, ArrowRight, Wrench, Flame, TrendingUp, Sparkles, MoveRight
} from "lucide-react";

const WHATSAPP_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Hero() {
  const [count, setCount] = useState(47);
  useEffect(() => {
    const t = setInterval(() => setCount(c => (Math.random() > 0.7 ? c + 1 : c)), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section 
      className="relative min-h-[105vh] flex items-center overflow-hidden pt-24 pb-20 mesh-dark-blue noise"
    >
      {/* ── Background Patterns ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[1000px] h-[1000px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 60%)",
          animation: "driftA 25s ease-in-out infinite blur-3xl",
          filter: "blur(80px)"
        }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)",
          animation: "driftB 30s ease-in-out infinite blur-3xl",
          filter: "blur(100px)"
        }} />
        <div className="absolute inset-0 mesh-dots opacity-[0.08]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-28">
          
          {/* ────── Left Content ────── */}
          <div className="w-full lg:w-[52%]">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-4 rounded-full px-6 py-2.5 mb-10 glass-dark grad-border">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#10B981]" />
                </span>
                <span className="text-white/70 font-bold tracking-tight text-sm">
                  TRUSTED BY 5,000+ HYDERABAD HOMES
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display font-black mb-8 leading-[0.9] tracking-[-0.05em]">
                <small className="block text-[#F97316] text-[15px] font-black uppercase tracking-[0.4em] mb-4 ml-1">
                  Premium Kitchen Service
                </small>
                <span className="block text-white" style={{ fontSize: "clamp(3.8rem, 8vw, 6.5rem)" }}>
                  Your Kitchen, 
                </span>
                <span className="block shimmer-text" style={{ fontSize: "clamp(3.8rem, 8vw, 6.5rem)" }}>
                  Perfectly Restored.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mb-12 text-white/40 text-xl font-medium leading-relaxed max-w-lg">
                Experience the ₹50k+ luxury service for your gas appliances. Same-day repair with <span className="text-white font-black italic">industrial precision</span> and total safety.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-5 mb-14">
                <a href="tel:+919849000000" className="btn-primary h-16 !px-12 text-lg group">
                   <Phone className="w-5 h-5 flex-shrink-0" />
                   Book Now
                   <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </a>
                <a href="https://wa.me/919849000000" className="btn-ghost h-16 !px-10 text-lg">
                  {WHATSAPP_ICON} WhatsApp
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-6 p-1">
                <div className="flex -space-x-3.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#050816] bg-slate-800 flex items-center justify-center text-[11px] font-black text-white shadow-xl">
                      {["RK", "PS", "SA", "AR", "MV"][i-1]}
                    </div>
                  ))}
                </div>
                <div>
                   <div className="flex items-center gap-1.5 mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} style={{ width: 14, height: 14, fill: '#FBBF24', color: '#FBBF24' }} />)}
                      <span className="text-white font-black ml-2 text-lg tracking-tight">4.9 / 5.0</span>
                   </div>
                   <p className="text-white/20 text-[0.65rem] font-bold uppercase tracking-widest">Verified by 5k+ Families</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ────── Right Dashboard (High-end 3D Perspective) ────── */}
          <div className="hidden lg:block w-full lg:w-[48%] relative perspective-2000 h-[600px]">
            <FadeIn delay={0.5} direction="left">
               <div className="relative rotate-3d-dashboard transition-3d translate-x-12">
                  
                  {/* — Main Container — */}
                  <div className="relative z-20 w-[440px] rounded-[48px] glass-dark grad-border p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
                     
                     {/* Dashboard Header */}
                     <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse glow-orange-lg" />
                           <span className="text-white/50 text-[10px] font-black uppercase tracking-widest">System Status: Active</span>
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
                           <span className="text-[#10B981] text-[10px] font-black">LIVE UPDATE</span>
                        </div>
                     </div>

                     {/* Requests Counter */}
                     <div className="mb-10 text-center py-6 border-y border-white/5 relative">
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Requests Handled Today</p>
                        <h4 className="text-white text-6xl font-black tracking-tighter leading-none">{count}</h4>
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                           <TrendingUp className="w-8 h-8 text-emerald-400 opacity-20" />
                        </div>
                     </div>

                     {/* Activity Stack */}
                     <div className="space-y-4 mb-10">
                        {[
                          { name: "Suresh R.", task: "Burner Fix", time: "2m ago", color: "#F97316" },
                          { name: "Anita K.", task: "Deep Cleaning", time: "Ongoing", color: "#60A5FA" },
                          { name: "Rahul V.", task: "Leak Check", time: "Arriving", color: "#10B981" }
                        ].map((act, i) => (
                           <div key={i} className="flex items-center gap-4 rounded-2xl bg-white/[0.03] border border-white/5 p-4 hover:bg-white/[0.06] transition-colors">
                              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[10px] font-black" style={{ background: `${act.color}15`, color: act.color }}>
                                 {act.name.split(' ')[0][0]}
                              </div>
                              <div className="flex-1">
                                 <p className="text-white font-bold text-xs truncate">{act.name} — {act.task}</p>
                                 <p className="text-white/30 text-[9px] font-bold uppercase mt-0.5">{act.time}</p>
                              </div>
                              <CheckCircle2 style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.1)' }} />
                           </div>
                        ))}
                     </div>

                     {/* Mini Metrics */}
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/5">
                           <Sparkles className="w-5 h-5 text-amber-400 mb-2 opacity-50" />
                           <p className="text-white font-black text-xl leading-none mb-1">4.9 ★</p>
                           <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Global Review</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/5">
                           <Clock className="w-5 h-5 text-blue-400 mb-2 opacity-50" />
                           <p className="text-white font-black text-xl leading-none mb-1">SAME</p>
                           <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Day Service</p>
                        </div>
                     </div>
                  </div>

                  {/* ─── Floating Dynamic Layers ─── */}
                  
                  {/* Floating Shield Layer */}
                  <div className="absolute top-[-40px] right-[-50px] z-[30] transition-3d" 
                    style={{ animation: "floatY 6s ease-in-out infinite" }}>
                    <div className="glass-light rounded-3xl p-5 shadow-2xl border-white/80 group transform rotate-12">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner group-hover:scale-110 transition-transform">
                             <ShieldCheck style={{ width: 28, height: 28 }} />
                          </div>
                          <div>
                             <p className="text-slate-900 font-black text-sm">Industrial Safety</p>
                             <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">30D Guarantee</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Floating Performance Layer */}
                  <div className="absolute bottom-[-10px] left-[-70px] z-[30] transition-3d" 
                    style={{ animation: "floatYSlow 5s ease-in-out infinite 0.5s" }}>
                    <div className="glass-light rounded-3xl p-6 shadow-2xl border-white/80 group transform -rotate-12">
                       <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-inner group-hover:rotate-12 transition-transform">
                             <TrendingUp style={{ width: 32, height: 32 }} />
                          </div>
                          <div>
                             <p className="text-slate-900 font-extrabold text-[1.4rem] leading-none mb-1">5,000+</p>
                             <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Successful Fixes</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Decorator Light Orb Inside 3D Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[48px] z-10" />
               </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
