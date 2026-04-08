import { ArrowRight, Flame, ShieldAlert, Wrench, ShieldCheck } from "lucide-react";
import { useContent } from "../hooks/useContent";
import { Link } from "wouter";
import { useBookingModal } from "@/context/BookingModalContext";

export function Services() {
  const { content } = useContent();
  const { openModal } = useBookingModal();

  const services = [
    {
      title: "Gas Stove Repair",
      detail: "All Brands • 30 Day Warranty",
      icon: Wrench,
      image: content.service_1_img,
    },
    {
      title: "Deep Burner Cleaning",
      detail: "Blue Flame • Carbon Removal",
      icon: Flame,
      image: content.service_2_img,
    },
    {
      title: "Pipeline Installation",
      detail: "Safety Tested • New Fittings",
      icon: ShieldCheck,
      image: content.service_3_img,
    },
    {
      title: "Emergency Gas Leak",
      detail: "24/7 Response • 60 Min Arrival",
      icon: ShieldAlert,
      image: content.service_4_img,
    },
  ];

  return (
    <section id="services" className="py-10 lg:py-14 bg-white relative overflow-hidden">
      
      {/* Decorative background clouds / elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="section-badge mx-auto mb-4">Our Services</div>
          <h2 className="font-black text-gray-900 leading-tight tracking-tight whitespace-pre-line" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            {content.services_title}
          </h2>
          <p className="mt-3 text-base text-gray-500 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {content.services_subtitle}
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
                className="p-6 flex-1 flex flex-col justify-between text-white z-20 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0284c7 0%, #1e40af 100%)",
                }}
              >
                {/* Decorative lighting effect inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none group-hover:opacity-20 transition-opacity" />

                <div className="relative z-10">
                  <h3 className="font-display font-bold text-[22px] mb-1.5 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-100 text-sm font-medium">
                    <service.icon className="w-4 h-4 text-orange-400" />
                    <span>{service.detail}</span>
                  </div>
                </div>

                {/* Book Now button */}
                <button
                  onClick={() => openModal(service.title)}
                  className="relative z-10 mt-4 w-full py-2 rounded-xl text-blue-900 bg-white font-bold text-sm transition-opacity hover:opacity-90"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Services */}
        <div className="mt-8 block text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-orange-600 transition-colors group"
            >
                See All Services
              <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <ArrowRight className="w-5 h-5 text-orange-600 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
        </div>

      </div>
    </section>
  );
}

