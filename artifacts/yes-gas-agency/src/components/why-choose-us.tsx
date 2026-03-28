import { FadeIn } from "./fade-in";
import { ShieldCheck, Clock, CheckCircle, BadgeCheck, Zap, Sparkles, Phone, Award } from "lucide-react";

const stats = [
  { label: "Happy Customers", value: "5,000+", icon: Award, color: "#F97316" },
  { label: "Years Experience", value: "10+", icon: ShieldCheck, color: "#60A5FA" },
  { label: "Response Time", value: "2-4 hrs", icon: Clock, color: "#FBBF24" },
  { label: "Service Warranty", value: "30 Days", icon: BadgeCheck, color: "#10B981" },
];

const features = [
  {
    title: "Certified Experts",
    description: "Every technician is background-verified and professionally trained for all major gas appliance brands.",
    icon: CheckCircle,
    type: "glass-light",
    accent: "#F97316",
  },
  {
    title: "Safety First Protocol",
    description: "Multi-point safety checks performed after every repair to ensure zero leakage and total peace of mind.",
    icon: ShieldCheck,
    type: "grad-border",
    accent: "#60A5FA",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges. Get a clear estimate before the work begins. Pay only for what you see.",
    icon: Zap,
    type: "minimal",
    accent: "#FB923C",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden pt-36 pb-40 bg-white rounded-t-[60px] -mt-10 shadow-[0_-30px_60px_rgba(0,0,0,0.4)]">
      {/* Background Ornaments */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 to-transparent opacity-50" />
        <div className="absolute inset-0 mesh-dots opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Strip (Now on Top for High Contrast) */}
        <FadeIn className="mb-32">
          <div 
            className="rounded-[40px] overflow-hidden grad-border shadow-[0_45px_100px_rgba(0,0,0,0.12)] relative"
            style={{ 
              background: "linear-gradient(135deg, #0A0F26 0%, #05091A 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <div className="relative divide-y divide-white/5 lg:divide-y-0 lg:divide-x lg:divide-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="px-12 py-14 flex flex-col items-center lg:items-start transition-all duration-400 group hover:bg-white/[0.04]"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/5 shadow-xl transition-all group-hover:scale-110 group-hover:rotate-6">
                    <stat.icon style={{ width: 28, height: 28, color: stat.color }} />
                  </div>
                  <h3 className="text-5xl font-black text-white mb-3 tracking-tighter shimmer-text">
                    {stat.value}
                  </h3>
                  <p className="text-white/30 font-black uppercase tracking-[0.2em] text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end gap-12 mb-24">
          <FadeIn className="lg:max-w-2xl">
            <h2 
              className="text-[#060B1E] font-display font-black tracking-tighter mb-8"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 0.95 }}
            >
              Why Hyderabad <br />
              <span className="shimmer-text">Trusts Us.</span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:max-w-md ml-auto" delay={0.1}>
            <p className="text-slate-500 font-bold leading-relaxed text-xl border-l-[6px] border-[#F97316] pl-10">
              "We provide industrial-grade reliability to the home kitchen, ensuring safety with an elite finish."
            </p>
          </FadeIn>
        </div>

        {/* Feature Grid with Variety Card Styles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={`h-full min-h-[440px] p-12 rounded-[48px] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] group relative overflow-hidden flex flex-col ${
                  feature.type === 'glass-light' ? 'glass-light shadow-2xl border-white' : 
                  feature.type === 'grad-border' ? 'grad-border bg-white shadow-xl' : 
                  'bg-slate-50 border border-slate-100'
                }`}
              >
                {/* Surface Mesh */}
                <div className="absolute inset-0 mesh-dots opacity-[0.03] group-hover:opacity-[0.06] pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-12 bg-white shadow-lg transition-all group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon style={{ width: 32, height: 32, color: feature.accent }} />
                </div>
                
                <h3 className="text-2xl font-black text-[#040816] mb-6 tracking-tight leading-tight transition-colors group-hover:text-[#F97316]">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 font-bold leading-relaxed mb-10 flex-1">
                  {feature.description}
                </p>

                <div className="mt-auto flex items-center gap-3">
                   <div className="h-1 w-12 rounded-full bg-[#F97316] opacity-30 group-hover:w-24 group-hover:opacity-100 transition-all duration-500" />
                   <Sparkles className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
