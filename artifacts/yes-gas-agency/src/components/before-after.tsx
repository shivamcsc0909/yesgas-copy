import { FadeIn } from "./fade-in";
import { ArrowRight, Flame, Sparkles, XCircle, Zap, AlertTriangle, ShieldCheck } from "lucide-react";

export function BeforeAfter() {
  const comparisons = [
    {
      title: "Burner Restoration",
      beforeIcon: Flame,
      afterIcon: Sparkles,
      beforeText: "Yellow flame, clogged & smoky",
      afterText: "Blue flame, clean & efficient"
    },
    {
      title: "Ignition Mechanism",
      beforeIcon: XCircle,
      afterIcon: Zap,
      beforeText: "Broken spark, manual lighting",
      afterText: "Instant auto-ignition, safe"
    },
    {
      title: "Pipeline Safety",
      beforeIcon: AlertTriangle,
      afterIcon: ShieldCheck,
      beforeText: "Old rubber tube, leak risk",
      afterText: "Secure copper pipe, zero leaks"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
            Dekho Farq
          </h2>
          <p className="text-lg text-gray-500">
            We transform broken, dangerous appliances into safe, efficient ones
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((comp, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 relative group">
                {/* Title Bar */}
                <div className="bg-gradient-to-r from-[#F97316] to-[#FB923C] py-3 text-center">
                  <h3 className="text-white font-bold text-lg font-display tracking-wide">{comp.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 h-full relative">
                  {/* Before Side */}
                  <div className="bg-red-50/50 p-6 sm:p-8 flex flex-col items-center text-center">
                    <div className="bg-white px-3 py-1 rounded-full border border-red-100 text-red-500 text-xs font-bold mb-6 shadow-sm">
                      ❌ Before
                    </div>
                    <comp.beforeIcon className="w-12 h-12 text-red-400 mb-4" />
                    <p className="text-gray-600 font-medium text-sm sm:text-base leading-snug">{comp.beforeText}</p>
                  </div>

                  {/* After Side */}
                  <div className="bg-green-50/50 p-6 sm:p-8 flex flex-col items-center text-center">
                    <div className="bg-white px-3 py-1 rounded-full border border-green-100 text-green-600 text-xs font-bold mb-6 shadow-sm">
                      ✅ After
                    </div>
                    <comp.afterIcon className="w-12 h-12 text-green-500 mb-4" />
                    <p className="text-gray-800 font-bold text-sm sm:text-base leading-snug">{comp.afterText}</p>
                  </div>

                  {/* Centered Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 z-10 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-[#F97316]" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}