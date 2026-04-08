import { MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config";
import { useContent } from "../hooks/useContent";

const featuredAreas = [
  "Madhapur", "Gachibowli", "Kondapur", "Kukatpally",
  "Jubilee Hills", "Banjara Hills", "Hitech City", "Ameerpet",
];

const otherAreas = [
  "Secunderabad", "Miyapur", "Begumpet", "LB Nagar", "Dilsukhnagar",
  "Mehdipatnam", "Uppal", "Alwal", "Kompally", "Bachupally",
  "Manikonda", "Tolichowki", "Attapur", "Habsiguda", "ECIL",
  "Malkajgiri", "Sanath Nagar", "Erragadda", "Bowenpally",
  "Tarnaka", "Amberpet", "Nacharam",
];

export function ServiceAreas() {
  const { content } = useContent();
  return (
    <section
      id="areas"
      className="py-10 lg:py-14"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-6">
          <div className="section-badge mx-auto mb-4">Service Coverage</div>
          <h2 className="font-black text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            {content.areas_title}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            {content.areas_subtitle}
          </p>
        </div>

        {/* Featured areas — larger pills with icon */}
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 text-center">
            🔥 High-Demand Areas
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {featuredAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-default"
                style={{
                  background: "#fff7ed",
                  border: "1.5px solid #fbbf7d",
                  color: "#92400e",
                  boxShadow: "0 2px 8px rgba(249,115,22,0.1)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#F97316";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#fff7ed";
                  (e.currentTarget as HTMLElement).style.color = "#92400e";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <MapPin style={{ width: 13, height: 13, flexShrink: 0 }} />
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Other areas — smaller neutral pills */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 text-center">
            Also Covered
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {otherAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm text-gray-600 font-medium cursor-default transition-all duration-150 hover:bg-white hover:shadow-sm"
                style={{
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-5 font-medium">
            Don't see your area? Call us — we likely cover it!
          </p>
          <a href={`tel:+${SITE_CONFIG.phoneRaw}`} className="btn-orange !text-base">
            <Phone className="w-5 h-5" />
            Check My Area Availability
          </a>
        </div>
      </div>
    </section>
  );
}
