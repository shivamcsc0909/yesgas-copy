import { MapPin } from "lucide-react";
import { FadeIn } from "./fade-in";

const areas = [
  "Madhapur", "Gachibowli", "Kondapur", "Kukatpally", "Jubilee Hills", 
  "Banjara Hills", "Secunderabad", "Ameerpet", "Hitech City", "Miyapur", 
  "Begumpet", "LB Nagar", "Dilsukhnagar", "Mehdipatnam", "Uppal", 
  "Alwal", "Kompally", "Bachupally", "Manikonda", "Tolichowki", 
  "Attapur", "Habsiguda", "ECIL", "Malkajgiri", "Sanath Nagar", 
  "Erragadda", "Bowenpally", "Tarnaka", "Amberpet", "Nacharam"
];

export function ServiceAreas() {
  return (
    <section className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Poora Hyderabad, Ek Call Mein
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our technicians cover every neighborhood — reach you in 2–4 hours
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-12">
          {areas.map((area) => (
            <div 
              key={area}
              className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#F97316] hover:border-[#F97316] transition-all cursor-default"
            >
              <MapPin className="w-4 h-4 text-[#F97316] mix-blend-screen" />
              {area}
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.3} className="text-center flex flex-col items-center gap-6">
          <p className="text-white/60 font-medium">
            Don't see your area? Call us — we probably cover you!
          </p>
          <a 
            href="tel:+919849000000"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-[#F97316] text-white shadow-[0_4px_14px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Call Now → +91 98490 00000
          </a>
        </FadeIn>
      </div>
    </section>
  );
}