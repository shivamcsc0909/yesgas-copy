import { FadeIn } from "./fade-in";
import { PhoneCall, MapPin, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Book Karen",
      description: "Call karen ya form bharo. 2 minute ka kaam.",
      icon: PhoneCall
    },
    {
      number: "2",
      title: "Expert Arrives",
      description: "2-4 hours mein certified technician ghar pe.",
      icon: MapPin
    },
    {
      number: "3",
      title: "All Fixed! ✓",
      description: "Repair done, warranty diya, aap khush!",
      icon: CheckCircle2
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F97316]/10 via-[#0F172A]/0 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Simple. Fast. Hassle-Free.
          </h2>
          <p className="text-lg text-white/60">
            3 kadaam mein aapka problem solve
          </p>
        </FadeIn>

        <div className="relative mb-16">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] border-t-2 border-dashed border-[#F97316]/30 z-0">
            <div className="absolute top-[-2px] left-0 w-full border-t-2 border-dashed border-[#F97316] animate-[pulse_2s_ease-in-out_infinite] opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white font-black text-2xl flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] mb-6 relative">
                  {step.number}
                  <div className="absolute inset-0 rounded-full border border-[#F97316] animate-ping opacity-20" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed mb-6 max-w-[260px]">
                  {step.description}
                </p>
                
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <step.icon className="w-6 h-6 text-white/60" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.6} className="flex justify-center mt-12">
          <a 
            href="tel:+919849000000"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-full font-bold text-lg bg-[#F97316] text-white shadow-[0_8px_30px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center justify-center"
          >
            Ready to fix your gas stove? → Call +91 98490 00000
          </a>
        </FadeIn>
      </div>
    </section>
  );
}