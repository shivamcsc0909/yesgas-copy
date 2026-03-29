import { ArrowRight, Flame, ShieldAlert, Wrench, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Gas Stove Repair",
    detail: "All Brands • 30 Day Warranty",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1607324772107-8ad6740ca195?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Deep Burner Cleaning",
    detail: "Blue Flame • Carbon Removal",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1595166986545-bf6dacb22b4e?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Pipeline Installation",
    detail: "Safety Tested • New Fittings",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1654440122140-f1fc995ddb34?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    title: "Emergency Gas Leak",
    detail: "24/7 Response • 60 Min Arrival",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1629234358103-5b5ee53ece9c?auto=format&fit=crop&q=80&w=800&h=500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-10 lg:py-14 bg-white relative">
      
      {/* Decorative background clouds / elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="section-badge mx-auto mb-4">Our Services</div>
          <h2 className="font-black text-gray-900 leading-tight tracking-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            Book Your Gas Expert Today!
          </h2>
          <p className="mt-3 text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
            From routine repair to emergency leaks, our certified technicians handle it all with complete safety guarantees.
          </p>
        </div>

        {/* Reference Image Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col rounded-[24px] overflow-hidden cursor-pointer shadow-premium transition-transform duration-300 hover:-translate-y-2 bg-white"
            >
              {/* Top Image Half */}
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Bottom Solid Block (matching reference blue block) */}
              <div 
                className="p-6 flex-1 flex flex-col justify-end text-white z-20 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0284c7 0%, #1e40af 100%)",
                }}
              >
                {/* Decorative lighting effect inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none group-hover:opacity-20 transition-opacity" />

                <h3 className="font-display font-bold text-[22px] mb-1.5 leading-tight tracking-tight relative z-10">
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-100 text-sm font-medium relative z-10">
                  <service.icon className="w-4 h-4 text-orange-400" />
                  <span>{service.detail}</span>
                </div>

                {/* Arrow hover indicator */}
                <div className="absolute right-5 bottom-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Services */}
        <div className="mt-8 block text-center">
            <a 
              href="tel:+919849000000" 
              className="inline-flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-orange-600 transition-colors group"
            >
              See All Services 
              <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <ArrowRight className="w-5 h-5 text-orange-600 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
        </div>

      </div>
    </section>
  );
}
