import { FadeIn } from "./fade-in";
import { Settings2, Sparkles, Zap, AlertTriangle, GitBranch, ChefHat, Wrench, PlusCircle, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Settings2,
      title: "Gas Stove Repair",
      description: "Full diagnostics & repair for all brands"
    },
    {
      icon: Sparkles,
      title: "Burner Cleaning",
      description: "Deep clean for strong, even blue flame"
    },
    {
      icon: Zap,
      title: "Ignition Fixing",
      description: "Auto-ignition & spark plug repair"
    },
    {
      icon: AlertTriangle,
      title: "Gas Leakage Repair",
      description: "Emergency response. Safety first. URGENT.",
      urgent: true
    },
    {
      icon: GitBranch,
      title: "Copper Pipeline",
      description: "Safe, durable copper pipe installation"
    },
    {
      icon: ChefHat,
      title: "Cooking Range Repair",
      description: "Heavy-duty range & hob servicing"
    },
    {
      icon: Wrench,
      title: "Spare Parts",
      description: "100% genuine parts replacement"
    },
    {
      icon: PlusCircle,
      title: "New Installation",
      description: "Professional gas stove setup"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mb-4">
            Kya Problem Hai Aapko?
          </h2>
          <p className="text-lg text-gray-500">
            We handle every gas appliance issue — from routine cleaning to emergency repairs
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div 
                className={`bg-white rounded-2xl p-6 border group cursor-pointer transition-all duration-300 h-full relative overflow-hidden flex flex-col ${
                  service.urgent 
                    ? "border-red-100 hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] hover:border-red-300" 
                    : "border-gray-100 hover:shadow-[0_20px_60px_rgba(249,115,22,0.1)] hover:border-orange-200"
                } hover:-translate-y-1`}
              >
                {service.urgent && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-md">
                    URGENT
                  </div>
                )}
                
                <div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-md ${
                    service.urgent 
                      ? "bg-gradient-to-br from-red-500 to-rose-600 shadow-red-500/20" 
                      : "bg-gradient-to-br from-[#F97316] to-[#FB923C] shadow-orange-500/20"
                  }`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-bold text-lg text-[#0F172A] mb-2 flex-grow">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {service.description}
                </p>
                
                <div className="flex justify-end mt-auto">
                  <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0 ${
                    service.urgent ? "text-red-500" : "text-[#F97316]"
                  }`} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}