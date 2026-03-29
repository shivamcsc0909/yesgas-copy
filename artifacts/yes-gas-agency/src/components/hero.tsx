import { Phone, ShieldCheck, Clock, Star, Zap, Users } from "lucide-react";

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Hero() {
  return (
    <div className="relative">
      {/* ── Main Hero Section with Gradient Background ── */}
      <section
        className="relative pt-36 pb-48 lg:pb-60 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0284c7 0%, #1e40af 40%, #e11d48 75%, #ea580c 100%)",
        }}
      >
        {/* Abstract glowing layers for depth */}
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-200 rounded-full blur-[140px]" />
          <div className="absolute top-[30%] -right-[20%] w-[60%] h-[60%] bg-orange-300 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-8">
            
            {/* ── Left Content (Text & CTAs) ── */}
            <div className="w-full lg:w-[50%] xl:w-[55%]">
              
              {/* Top Trust Chip */}
              <div 
                className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full"
                style={{ 
                  background: "rgba(255, 255, 255, 0.12)", 
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">
                  Trusted by 5,000+ Hyderabad Homes
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-display font-black text-white mb-6 leading-[1.15]"
                style={{ 
                  fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
                  textShadow: "0 8px 24px rgba(0,0,0,0.15)"
                }}
              >
                Stop Struggling With
                <br />
                Your Gas Stove —
                <br />
                <span style={{ color: "#ffd8a8" }}>We Fix It Today.</span>
              </h1>

              {/* Subheadline */}
              <p 
                className="text-blue-50 text-lg leading-relaxed mb-10 max-w-xl font-medium"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              >
                Certified technicians reach your door in <strong>2–4 hours</strong>. All brands. All problems. Guaranteed safe repair with 30-day warranty.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919849000000" 
                  className="btn-orange !text-base !font-bold !py-4 !px-9"
                  style={{ 
                    boxShadow: "0 12px 28px rgba(234, 88, 12, 0.45), inset 0 1px 1px rgba(255,255,255,0.2)"
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 98490 00000
                </a>
                <a 
                  href="https://wa.me/919849000000" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 bg-white text-[#16a34a] font-bold text-base py-4 px-9 rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ 
                    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(255,255,255,0.8)"
                  }}
                >
                  {WA_ICON}
                  Book on WhatsApp
                </a>
              </div>
            </div>

            {/* ── Right Image ── */}
            <div className="w-full lg:w-[50%] xl:w-[45%] flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[480px]">
                {/* Visual back glow for image blending */}
                <div 
                  className="absolute inset-0 rounded-[2.5rem] bg-white opacity-15 blur-2xl transform scale-105"
                  style={{ pointerEvents: "none" }}
                />
                
                <img
                  src="/technician.png"
                  alt="Professional gas technician repairing stove"
                  className="relative z-10 w-full rounded-[2.5rem] object-cover"
                  style={{
                    height: "460px",
                    objectPosition: "center top",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.35), 0 10px 20px rgba(0,0,0,0.2)",
                    border: "2px solid rgba(255,255,255,0.15)",
                    background: "transparent"
                  }}
                />
                
                {/* Subtle decor dots around the image to create layered UI */}
                <svg className="absolute -top-6 -right-6 w-20 h-20 text-white opacity-20" fill="currentColor" viewBox="0 0 100 100">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Wave Separator ── */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg 
            viewBox="0 0 1440 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full block" 
            preserveAspectRatio="none" 
            style={{ height: "160px" }}
          >
            {/* Elegant deep swoop curve */}
            <path d="M0,40 C480,180 960,180 1440,40 L1440,160 L0,160 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Overlapping Floating Info Cards ── */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 lg:-mt-36 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { 
              title: "Same Day Service", 
              desc: "Book before 5 PM and we guarantee your stove is fixed today.", 
              icon: Zap, 
              color: "#ea580c" 
            },
            { 
              title: "5,000+ Customers", 
              desc: "Verified and trusted by hundreds of families across Hyderabad.", 
              icon: Users, 
              color: "#2563eb" 
            },
            { 
              title: "4.9/5 Rating", 
              desc: "Consistently rated 5 stars for our safety and speed.", 
              icon: Star, 
              color: "#059669" 
            }
          ].map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)",
                border: "1px solid rgba(0,0,0,0.03)"
              }}
            >
              {/* Icon Box */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ 
                  border: `2px solid ${card.color}`,
                  background: "transparent",
                }}
              >
                <card.icon size={26} style={{ color: card.color }} />
              </div>

              {/* Content */}
              <h3 className="font-display font-black text-xl text-gray-900 mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {card.desc}
              </p>

              {/* Faux small button (reference style detail) */}
              <div 
                className="mt-auto px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ 
                  background: card.color, 
                  color: "#fff",
                  boxShadow: `0 4px 12px ${card.color}40`,
                  transition: "background 0.2s"
                }}
              >
                Learn More
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
