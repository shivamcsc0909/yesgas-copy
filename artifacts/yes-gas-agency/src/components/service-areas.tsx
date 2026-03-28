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
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
            Serving All Corners of Hyderabad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wherever you are in Hyderabad, our technicians reach you within 2–4 hours
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-10">
          {areas.map((area) => (
            <div 
              key={area}
              className="flex items-center gap-1.5 bg-white border border-orange-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-50 hover:border-orange-400 hover:text-orange-700 transition-all cursor-default"
            >
              <MapPin className="w-4 h-4 text-orange-400" />
              {area}
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.3} className="text-center">
          <p className="text-secondary font-medium text-lg">
            Don't see your area? Call us — we likely serve you too!
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
