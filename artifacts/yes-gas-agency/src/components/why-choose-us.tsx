import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Award } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    { title: "10+ Years Experience", icon: Award },
    { title: "ID-Verified Technicians", icon: ShieldCheck },
    { title: "Zero Leakage Guaranteed", icon: CheckCircle2 },
    { title: "Same Day Output", icon: Zap },
  ];

  return (
    <section className="section-padding bg-[#fcfdfe] relative overflow-hidden">
      
      {/* Soft glowing background element (Reference depth style) */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ── Left Side: Prominent Image (like AC unit in reference) ── */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Soft backdrop glow to ground the image */}
            <div className="absolute bottom-0 w-[80%] h-12 bg-gray-900/10 rounded-[100%] blur-xl translate-y-6" />
            
            <div className="relative w-full max-w-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1771122453274-d3270e73cf94?auto=format&fit=crop&q=80&w=800&h=800"
                alt="Safe Gas Appliance Servicing"
                className="w-full rounded-[2.5rem] shadow-premium object-cover border-[6px] border-white z-10 relative"
                style={{ height: "540px" }}
              />

              {/* Decorative elements representing airflow/energy (Reference design) */}
              <div className="absolute -top-12 -left-12 w-32 h-32 hidden md:block opacity-60 pointer-events-none z-0">
                <svg viewBox="0 0 100 100" className="text-orange-400 stroke-current drop-shadow-lg" fill="none" strokeWidth="3" strokeLinecap="round">
                  <path d="M10,80 C30,40 50,40 90,20" />
                  <path d="M80,10 L95,15 L90,30" />
                </svg>
              </div>

              <div className="absolute -bottom-8 -right-8 w-40 h-40 hidden md:block opacity-70 pointer-events-none z-20">
                <svg viewBox="0 0 100 100" className="text-blue-500 stroke-current drop-shadow-md" fill="none" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M20,80 C50,90 70,70 80,20" />
                  <path d="M65,30 L80,15 L95,30" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Right Side: Text & Actions ── */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-display font-black text-gray-900 leading-[1.1] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
              Safety is Our <span className="text-gradient-orange">Religion</span> Today
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-8">
              Every technician carries a multi-point safety checklist. Before leaving, we verify zero leakage using certified pressure testing equipment. Your family's safety is non-negotiable.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-10">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center bg-blue-50 text-blue-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-gray-800 tracking-tight text-[15px]">{item.title}</span>
                </div>
              ))}
            </div>

            {/* Solid Red/Orange Button matching reference */}
            <a 
              href="https://wa.me/919849000000" 
              className="btn-orange !py-4 !px-10 inline-flex group"
            >
              Book An Expert
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
}
