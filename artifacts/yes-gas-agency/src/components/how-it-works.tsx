import { FadeIn } from "./fade-in";
import { Phone, Calendar, Wrench, CheckCircle2, ChevronRight, Zap, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book in 60 Seconds",
    desc: "Call us or fill out our high-speed form. We'll confirm your preferred time slot within minutes.",
    Icon: Phone,
    color: "#F97316",
    delay: 0,
    accent: "orange"
  },
  {
    number: "02",
    title: "Expert at Your Door",
    desc: "A background-verified technician arrives within 2–4 hours. No delays, no excuses — just professional gear.",
    Icon: Calendar,
    color: "#60A5FA",
    delay: 0.2,
    accent: "blue"
  },
  {
    number: "03",
    title: "Fixed. Guaranteed.",
    desc: "Your appliance is repaired correctly the first time — backed by our iron-clad 30-day service warranty.",
    Icon: CheckCircle2,
    color: "#10B981",
    delay: 0.4,
    accent: "emerald"
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 inset-x-0 h-px mesh-grid-light opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.02) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-24">
          <div className="section-label mb-6" style={{ margin: "0 auto 20px" }}>The Process</div>
          <h2 
            className="text-[#060B1E] font-display font-extrabold tracking-tighter"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            Simple. Fast. <br />
            <span className="shimmer-text">Zero Friction.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-6">
            From first call to blue flame — we've optimized every second to save you time and stress.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Animated Timeline Connector Line */}
          <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-1 border-t-4 border-dashed border-slate-100">
            <div 
              className="absolute top-[-4px] left-0 h-1.5 w-[50px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent" 
              style={{ animation: "pulseRing 4s linear infinite" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={step.delay}>
                <div className="flex flex-col items-center text-center group relative">
                  
                  {/* Step Number Circle */}
                  <div className="relative mb-12">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black transition-all duration-500 glass-dark grad-border group-hover:scale-110 group-hover:rotate-6 shadow-2xl relative z-10"
                      style={{ color: step.color, background: '#05091A' }}
                    >
                      {step.number}
                      {/* Glow Behind Circle */}
                      <div 
                        className="absolute inset-[-10px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                        style={{ background: step.color }}
                      />
                    </div>
                    
                    {/* Floating Pulse Dot */}
                    <div 
                      className="absolute -bottom-2 right-0 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center z-20 shadow-lg"
                      style={{ background: step.color }}
                    >
                      <Zap style={{ width: 10, height: 10, color: 'white' }} />
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="p-8 rounded-[36px] bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 group-hover:border-[#F97316]/20">
                    <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[0.6rem] font-black tracking-[0.2em] uppercase text-slate-400 group-hover:bg-[#F97316]/10 group-hover:text-[#F97316] transition-colors">
                      <Sparkles className="w-3.5 h-3.5" />
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-black text-[#060B1E] mb-4 tracking-tight group-hover:text-[#F97316] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  {/* Right Arrow (Mobile/Desktop connector) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden my-8 transform rotate-90">
                      <ChevronRight className="w-8 h-8 text-slate-200" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="text-center mt-24" delay={0.5}>
          <div className="inline-flex items-center gap-4 rounded-3xl p-6 glass-dark grad-border bg-[#05091A] shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-white text-left max-w-sm">
              <span className="font-black block text-sm uppercase tracking-widest text-[#F97316] mb-1">Ultra-Speed Mode</span>
              <span className="text-[0.9375rem] font-medium text-white/50 leading-relaxed">Most bookings are confirmed within <span className="text-white">60 seconds</span>. Try it now.</span>
            </p>
            <a href="tel:+919849000000" className="btn-primary h-12 !px-8 text-sm">
              Call Now
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
