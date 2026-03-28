import { MapPin, Phone, Sparkles, Navigation } from "lucide-react";
import { FadeIn } from "./fade-in";

const areas = [
  "Madhapur", "Gachibowli", "Kondapur", "Kukatpally", "Jubilee Hills",
  "Banjara Hills", "Secunderabad", "Ameerpet", "Hitech City", "Miyapur",
  "Begumpet", "LB Nagar", "Dilsukhnagar", "Mehdipatnam", "Uppal",
  "Alwal", "Kompally", "Bachupally", "Manikonda", "Tolichowki",
  "Attapur", "Habsiguda", "ECIL", "Malkajgiri", "Sanath Nagar",
  "Erragadda", "Bowenpally", "Tarnaka", "Amberpet", "Nacharam",
];

const mainAreas = areas.slice(0, 6);
const otherAreas = areas.slice(6);

export function ServiceAreas() {
  return (
    <section 
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 mesh-grid-light opacity-50" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05091A] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[100px]" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-24">
          <div className="section-label mb-6" style={{ margin: "0 auto 20px" }}>Wide Coverage</div>
          <h2 
            className="text-[#060B1E] font-display font-extrabold tracking-tighter"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            Serving All of <br />
            <span className="shimmer-text">Hyderabad.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mt-6">
            Our expert technicians are stationed in localized clusters to reach you within <span className="text-[#F97316] font-black">2–4 hours</span>, guaranteed.
          </p>
        </FadeIn>

        {/* Featured Areas (Main Pills) */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {mainAreas.map((area, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div 
                className="group flex items-center gap-3 rounded-full px-6 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-105 cursor-default relative overflow-hidden"
                style={{ 
                  background: 'rgba(249,115,22,0.08)', 
                  border: '1px solid rgba(249,115,22,0.22)',
                  color: '#C2560A'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Navigation className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span className="font-black text-sm tracking-tight">{area}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Supporting Areas (Glass Pills) */}
        <div className="flex flex-wrap justify-center gap-3 mb-24 max-w-5xl mx-auto">
          {otherAreas.map((area, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.03}>
              <div 
                className="group flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-[#F97316]/30 cursor-default shadow-sm"
                style={{ 
                  background: 'rgba(255,255,255,0.7)', 
                  border: '1px solid rgba(0,0,0,0.08)',
                  color: '#475569'
                }}
              >
                <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#F97316] transition-colors" />
                <span className="font-bold text-xs tracking-wide">{area}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Call to Action Bar */}
        <FadeIn className="text-center" delay={0.5}>
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[0.7rem]">
              Technicians stationed nearby ready to go.
            </p>
            <a href="tel:+919849000000" className="btn-primary group h-14 !px-12 text-base">
              <Phone className="w-5 h-5 flex-shrink-0" />
              Check Availability → +91 98490 00000
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
