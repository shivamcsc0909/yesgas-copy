import { Zap, Users, Star, Clock, ThumbsUp, Shield } from "lucide-react";

export function Hero() {
  return (
    <div className="relative">
      {/* ── Main Hero Section ── */}
      <section className="relative w-full overflow-hidden flex items-center min-h-[70vh] lg:min-h-[80vh] lg:max-h-[820px] pt-32 pb-40">
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hero-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Functional Overlay: LEFT — slightly dark for text readability, RIGHT — almost transparent */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.60) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">

            {/* ── Content (Text & CTAs) ── */}
            <div className="w-full max-w-3xl pt-4 lg:pt-0 relative z-20">
              {/* Headline */}
              <h1
                className="font-black text-white mb-6 leading-[1.1]"
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)"
                }}
              >
                Stop Struggling With
                <br />
                Your Gas Stove —
                <br />
                <span style={{ color: "#fdba74", textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>We Fix It Today.</span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-white text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
              >
                Certified technicians reach your door in <strong>2–4 hours</strong>. All brands. All problems. Guaranteed safe repair with 30-day warranty.
              </p>

            </div>

          </div>
        </div>

        {/* ── Bottom Wave Separator ── */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg 
            viewBox="0 0 1440 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full block h-[80px] sm:h-[120px]" 
            preserveAspectRatio="none" 
          >
            <path d="M0,0 C480,220 960,220 1440,0 L1440,160 L0,160 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Overlapping Floating Info Cards ── */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Same Day Service",
              stat: "2–4 hrs",
              desc: "Book before 5 PM — stove fixed today.",
              icon: Clock,
              accent: "#f97316",
              bg: "#fff7ed",
            },
            {
              title: "5,000+ Customers",
              stat: "5,000+",
              desc: "Trusted families across Hyderabad.",
              icon: Users,
              accent: "#2563eb",
              bg: "#eff6ff",
            },
            {
              title: "4.9 / 5 Rating",
              stat: "4.9★",
              desc: "Consistently 5-star rated service.",
              icon: Star,
              accent: "#16a34a",
              bg: "#f0fdf4",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon bubble */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: card.bg }}
              >
                <card.icon size={22} style={{ color: card.accent }} strokeWidth={2} />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span
                  className="font-black text-2xl leading-none mb-1"
                  style={{ color: card.accent }}
                >
                  {card.stat}
                </span>
                <span className="font-bold text-gray-900 text-[15px] leading-tight mb-1">
                  {card.title}
                </span>
                <span className="text-gray-500 text-[13px] leading-snug">
                  {card.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
