import { FadeIn } from "./fade-in";
import { Clock, Award, Package, ShieldCheck, Banknote, Heart } from "lucide-react";

export function WhyChooseUs() {
  const stats = [
    { value: "5000+", label: "Happy Customers" },
    { value: "10+", label: "Years Experience" },
    { value: "2-4 hrs", label: "Response Time" },
    { value: "30 Days", label: "Service Warranty" }
  ];

  const features = [
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Technician at your door within 2–4 hours. Koi wait nahi!"
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "10+ years experienced, background-verified technicians."
    },
    {
      icon: Package,
      title: "Original Parts",
      description: "100% genuine spare parts. No duplicates, ever."
    },
    {
      icon: ShieldCheck,
      title: "30-Day Warranty",
      description: "Every repair backed by our solid guarantee."
    },
    {
      icon: Banknote,
      title: "Zero Hidden Cost",
      description: "Upfront pricing. Jo dikhta hai, wohi lagta hai."
    },
    {
      icon: Heart,
      title: "Safety First",
      description: "We treat your home like our own. Safety protocols strictly followed."
    }
  ];

  return (
    <section className="flex flex-col">
      {/* PART 1 - Stats Banner */}
      <div className="w-full bg-[#0F172A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center px-4">
                <p className="text-4xl md:text-5xl font-black text-[#F97316] mb-2 font-display tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/60 font-medium text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2 - Feature Cards */}
      <div className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mb-4">
              Why Hyderabad Trusts Us
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center mb-6 text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Hover bottom border */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}