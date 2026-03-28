import { FadeIn } from "./fade-in";
import { AlertTriangle, Wrench, Zap, Sparkles, Shield, Compass, PenTool, LayoutGrid } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: LayoutGrid,
      title: "Gas Stove Repair",
      description: "Complete diagnostics and repair for all major brands and models.",
    },
    {
      icon: Sparkles,
      title: "Burner Cleaning",
      description: "Deep cleaning of clogged burners for an even, strong blue flame.",
    },
    {
      icon: Zap,
      title: "Ignition Problems Fix",
      description: "Repairing faulty auto-ignition systems and spark plugs.",
    },
    {
      icon: AlertTriangle,
      title: "Gas Leakage Repair",
      description: "Immediate response to fix hazardous gas leaks. Safety first.",
      urgent: true
    },
    {
      icon: Compass,
      title: "Copper Pipeline Installation",
      description: "Safe and durable copper pipe fitting for modern kitchens.",
    },
    {
      icon: Shield,
      title: "Cooking Range Repair",
      description: "Specialized service for heavy-duty cooking ranges and hobs.",
    },
    {
      icon: PenTool,
      title: "Spare Parts Replacement",
      description: "We provide genuine knobs, valves, and glass tops replacements.",
    },
    {
      icon: Wrench,
      title: "Gas Stove Installation",
      description: "Professional setup of new stoves ensuring zero leaks.",
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
                Everything Gas, Handled With Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                From simple cleaning to complex installations, our technicians are equipped to handle any issue your kitchen throws at them.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <a href="#contact" className="px-6 py-3 rounded-xl font-bold bg-secondary text-white hover:bg-secondary/90 transition-colors inline-block">
              Book Service
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className={`h-full p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${
                service.urgent 
                  ? "bg-red-50/50 border-red-200 hover:border-red-400 hover:shadow-md hover:shadow-red-500/10" 
                  : "bg-white border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
              }`}>
                {service.urgent && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></span>
                    URGENT
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  service.urgent ? "bg-red-100 text-red-600" : "bg-primary/10 text-primary"
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                
                {/* Decorative background element */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  service.urgent ? "bg-red-500" : "bg-primary"
                }`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
