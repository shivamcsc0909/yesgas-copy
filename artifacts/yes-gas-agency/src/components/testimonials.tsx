import { useState } from "react";
import { FadeIn } from "./fade-in";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, CloudLightning, MessageCircle, Heart, Sparkles } from "lucide-react";

const reviews = [
  {
    name: "Rohan Mehra",
    area: "Madhapur",
    service: "Gas Leakage Repair",
    rating: 5,
    text: "There was a gas pipe leaking in my kitchen — extremely dangerous. Yes Gas Agency sent a technician within 40 minutes. He was professional, fixed it instantly, and did a full safety check. Best service in Hyderabad!",
    avatar: "RM",
    color: "#F97316"
  },
  {
    name: "Priya Sharma",
    area: "Gachibowli",
    service: "Ignition Repair",
    rating: 5,
    text: "My ignition had been broken for months. Their team fixed it in under 20 minutes. Incredibly fast and the price was very reasonable. I cooked that evening — the blue flame is perfect now!",
    avatar: "PS",
    color: "#60A5FA"
  },
  {
    name: "Vikram Reddy",
    area: "Kukatpally",
    service: "Stove Deep Clean",
    rating: 5,
    text: "Absolutely stunning service. My stove looks brand new after the deep cleaning. The technician arrived on time and was very tidy with his work. Highly recommended for any kitchen service.",
    avatar: "VR",
    color: "#10B981"
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((c) => (c === reviews.length - 1 ? 0 : c + 1));
  const prev = () => setActive((c) => (c === 0 ? reviews.length - 1 : c - 1));

  return (
    <section 
      id="testimonials" 
      className="relative py-40 overflow-hidden bg-[#05091A]"
    >
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#05091A] to-transparent z-10" />
        <div className="absolute inset-0 mesh-dots opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px]" 
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 xl:gap-32">
          
          {/* — Left: Content — */}
          <div className="w-full lg:w-[45%]">
            <FadeIn>
              <div className="section-label section-label-dark mb-10">Social Proof</div>
              <h2 className="text-white font-display font-black tracking-tighter"
                style={{ fontSize: "clamp(3.5rem, 6vw, 4.8rem)", lineHeight: 0.95 }}>
                Hyderabad's <br />
                <span className="shimmer-text">Favorite.</span>
              </h2>
              
              <div className="my-12 space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl glass-dark grad-border flex items-center justify-center shrink-0">
                    <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl mb-1">4.9 / 5.0 Global Rating</h4>
                    <p className="text-white/30 font-medium leading-relaxed max-w-sm">Verified by 5,000+ independent reviews across major service zones.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                   <div className="w-14 h-14 rounded-2xl glass-dark grad-border flex items-center justify-center shrink-0">
                      <Sparkles className="w-7 h-7 text-emerald-400" />
                   </div>
                   <div>
                      <h4 className="text-white font-black text-xl mb-1">Elite Standard Fix</h4>
                      <p className="text-white/30 font-medium leading-relaxed max-w-sm">Every repair is checked by a senior expert before final sign-off.</p>
                   </div>
                </div>
              </div>

              {/* Avatar Stack Footer */}
              <div className="flex items-center gap-6 p-8 rounded-[40px] glass-dark grad-border shadow-2xl relative overflow-hidden">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-[4px] border-[#0A0F26] bg-slate-800 flex items-center justify-center text-xs font-black text-white" style={{ zIndex: 10-i }}>
                      {["RK", "PS", "VR", "SA", "MV"][i-1]}
                    </div>
                  ))}
                </div>
                <div>
                   <p className="text-white font-black text-lg">Trusted by Neighborhoods</p>
                   <p className="text-white/20 text-xs font-bold uppercase tracking-widest mt-1">Community Approved</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* — Right: Dynamic 3D Stacked Cards — */}
          <div className="w-full lg:w-[55%] relative h-[500px] flex items-center justify-center">
            <FadeIn direction="left" delay={0.3}>
               <div className="relative w-full max-w-[500px] h-[400px]">
                  
                  {/* Layered Cards Logic */}
                  {reviews.map((review, i) => {
                     const isFront = i === active;
                     const isNext = i === (active + 1) % reviews.length;
                     const isThird = i === (active + 2) % reviews.length;
                     
                     let transform = "scale(0.8) translateY(100px) rotate(0deg)";
                     let zIndex = 0;
                     let opacity = 0;
                     let blur = "blur(10px)";

                     if (isFront) {
                        transform = "scale(1) translateY(0) rotate(0deg)";
                        zIndex = 30;
                        opacity = 1;
                        blur = "blur(0px)";
                     } else if (isNext) {
                        transform = "scale(0.92) translateY(30px) rotate(-3deg) translateX(40px)";
                        zIndex = 20;
                        opacity = 0.5;
                        blur = "blur(4px)";
                     } else if (isThird) {
                        transform = "scale(0.84) translateY(60px) rotate(-6deg) translateX(80px)";
                        zIndex = 10;
                        opacity = 0.2;
                        blur = "blur(8px)";
                     }

                     return (
                        <div 
                          key={i}
                          className="absolute inset-0 rounded-[48px] glass-dark grad-border backdrop-blur-3xl p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-start justify-between shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                          style={{ transform, zIndex, opacity, filter: blur }}
                        >
                           <Quote className="w-12 h-12 text-[#F97316] mb-8 opacity-50" />
                           <p className="text-white font-bold text-xl leading-relaxed mb-10 line-clamp-4">
                              "{review.text}"
                           </p>

                           <div className="flex items-center gap-5 pt-8 border-t border-white/5 w-full">
                              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-white" style={{ background: `linear-gradient(135deg, ${review.color}, #000)` }}>
                                 {review.avatar}
                              </div>
                              <div className="flex-1">
                                 <h4 className="text-white font-black text-lg">{review.name}</h4>
                                 <p className="text-white/20 text-xs font-bold uppercase tracking-widest mt-1">{review.area} · {review.service}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                 {[...Array(5)].map((_, i) => <Star key={i} style={{ width: 12, height: 12, fill: '#FBBF24', color: '#FBBF24' }} />)}
                              </div>
                           </div>
                        </div>
                     );
                  })}

                  {/* Navigation Controls */}
                  <div className="absolute -bottom-20 right-0 flex gap-4 z-[40]">
                     <button onClick={prev} className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#F97316] hover:text-white transition-all flex items-center justify-center text-white/40">
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button onClick={next} className="w-14 h-14 rounded-2xl border border-white/10 bg-[#F97316] text-white hover:scale-105 transition-all flex items-center justify-center shadow-xl">
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
