import { FadeIn } from "./fade-in";
import { 
  Flame, Wrench, Zap, ShieldAlert, Sparkles, CheckCircle2, ArrowRight,
  Droplets, Cog, AlertTriangle, Lightbulb
} from "lucide-react";

const services = [
  {
    title: "Gas Stove Repair",
    desc: "Precision fixing of low flames, messy burners, and ignition failures for all prestige brands.",
    icon: Flame,
    color: "#F97316",
    urgent: false,
    delay: 0,
    tags: ["Burner", "Knobs", "Leakage"]
  },
  {
    title: "Deep Burner Cleaning",
    desc: "Complete restoration of blue flame performance. Clogging removal and body cleaning.",
    icon: Sparkles,
    color: "#60A5FA",
    urgent: false,
    delay: 0.1,
    tags: ["Blue Flame", "Carbon Removal"]
  },
  {
    title: "Ignition Fixing",
    desc: "Spark plug repair, electrode replacement, and circuit fixing for auto-ignition stoves.",
    icon: Zap,
    color: "#FBBF24",
    urgent: false,
    delay: 0.2,
    tags: ["Auto Ignition", "Manual To Auto"]
  },
  {
    title: "Emergency Leak Repair",
    desc: "Immediate response for pipeline or cylinder leaks. Safety is our #1 priority.",
    icon: ShieldAlert,
    color: "#EF4444",
    urgent: true,
    delay: 0.3,
    tags: ["24/7", "Leak Proofing"]
  },
  {
    title: "Pipeline Installation",
    desc: "Safe, industrial-grade copper and rubber pipeline installations for home kitchens.",
    icon: Droplets,
    color: "#10B981",
    urgent: false,
    delay: 0.4,
    tags: ["Copper Pipe", "New Fitting"]
  },
  {
    title: "Spare Parts Replace",
    desc: "100% Genuine manufacturer spare parts with 30-day replacement warranty.",
    icon: Cog,
    color: "#A78BFA",
    urgent: false,
    delay: 0.5,
    tags: ["Original Parks", "30-Day Guarantee"]
  },
];

export function Services() {
  return (
    <section 
      id="services" 
      className="relative py-32 overflow-hidden" 
      style={{ background: "#05091A" }}
    >
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 mesh-grid opacity-[0.05]" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05091A] to-transparent pointer-events-none" />
        <div className="section-wave" style={{ top: -1 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-24">
          <div className="section-label section-label-dark mb-6" style={{ margin: "0 auto 20px" }}>Our Solutions</div>
          <h2 
            className="font-display font-extrabold text-white tracking-tighter mb-8"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.2rem)", lineHeight: 1 }}
          >
            Every Gas Problem, <br />
            <span className="shimmer-text">Perfectly Solved.</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            From restoration to emergency repairs — we provide industrial-grade tech with a personal touch.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <FadeIn key={i} delay={service.delay}>
              <div 
                className="h-full p-10 rounded-[36px] glass-dark grad-border transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] group relative overflow-hidden"
              >
                {/* Surface Mesh */}
                <div className="absolute inset-0 mesh-dots opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />
                
                {/* Decorative Gradient Glow */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: service.color }} />

                <div className="flex justify-between items-start mb-10">
                  <div 
                    className="w-16 h-16 rounded-[22px] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: `rgba(255,255,255,0.03)`, border: `1px solid rgba(255,255,255,0.08)` }}
                  >
                    <service.icon style={{ width: 32, height: 32, color: service.color }} />
                  </div>
                  {service.urgent ? (
                    <div className="urgency-badge">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                      PRIORITY
                    </div>
                  ) : (
                    <Lightbulb className="w-5 h-5 text-white/10 group-hover:text-amber-400 transition-colors" />
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-white/30 leading-relaxed font-medium text-[0.9375rem] mb-8 min-h-[4rem]">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
                  {service.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[0.625rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg transition-all duration-300 group-hover:bg-[#F97316]/10 group-hover:text-[#F97316]/70"
                      style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow reveal on hover */}
                <div className="absolute bottom-10 right-10 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className="w-6 h-6 text-[#F97316]" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center" delay={0.3}>
          <div className="rounded-[32px] p-8 glass-dark inline-flex flex-col sm:flex-row items-center gap-8 border border-white/5 max-w-3xl">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#0A0F26] bg-emerald-500 flex items-center justify-center text-[10px] font-black text-white">
                  98%
                </div>
              ))}
            </div>
            <div className="text-left flex-1">
              <p className="text-white font-bold leading-tight">Satisfaction Guarantee</p>
              <p className="text-white/40 text-[0.75rem] font-medium tracking-wide mt-1 uppercase">98.4% Customer Retention across Hyderabad</p>
            </div>
            <a href="tel:+919849000000" className="btn-primary h-14 !px-10">
              Get Fixed Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
