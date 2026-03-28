import { FadeIn } from "./fade-in";
import { ArrowRight } from "lucide-react";

export function BeforeAfter() {
  const comparisons = [
    {
      title: "Burner Restoration",
      before: "Clogged, yellow flame, soot buildup",
      after: "Clean, strong blue flame, efficient",
      beforeGrad: "from-amber-900 to-red-900",
      afterGrad: "from-blue-500 to-cyan-500"
    },
    {
      title: "Ignition Mechanism",
      before: "Broken spark plug, manual lighting needed",
      after: "Instant auto-ignition, safe to use",
      beforeGrad: "from-gray-700 to-gray-900",
      afterGrad: "from-emerald-500 to-teal-500"
    },
    {
      title: "Pipeline Safety",
      before: "Old rubber tube, minor leak risk",
      after: "Secure copper piping, zero leaks",
      beforeGrad: "from-orange-800 to-orange-950",
      afterGrad: "from-primary to-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              See The Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              We transform hazardous, faulty appliances back into safe, efficient cooking machines.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((comp, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-border p-2">
                <h3 className="font-bold text-center py-3 text-secondary">{comp.title}</h3>
                
                <div className="grid grid-cols-2 gap-2 h-48">
                  {/* Before */}
                  <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${comp.beforeGrad} p-4 flex items-end`}>
                    <span className="absolute top-2 left-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                    <p className="text-white/90 text-sm font-medium leading-tight">{comp.before}</p>
                  </div>
                  
                  {/* After */}
                  <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${comp.afterGrad} p-4 flex items-end`}>
                    <span className="absolute top-2 right-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                    <p className="text-white text-sm font-bold leading-tight">{comp.after}</p>
                    
                    {/* Decorative Arrow */}
                    <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                      <ArrowRight className="w-3 h-3 text-secondary" />
                    </div>
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
