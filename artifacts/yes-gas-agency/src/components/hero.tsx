import { Clock, Users, Star } from "lucide-react";

export function Hero() {
  return (
    <div className="relative">
      {/* ── Main Hero Section ── */}
      <section
        className="relative w-full overflow-hidden flex items-center min-h-[56vh] lg:min-h-[64vh] lg:max-h-[720px] pt-24 pb-24"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hero-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.44) 55%, rgba(0,0,0,0.64) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-bold text-white"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              Technicians Available Now — Hyderabad
            </div>

            {/* Headline */}
            <h1
              className="font-black text-white mb-5 leading-[1.08] max-w-3xl"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                textShadow: "0 3px 20px rgba(0,0,0,0.75)",
              }}
            >
              Stop Struggling With
              <br />
              Your Gas Stove —
              <br />
              <span style={{ color: "#fb923c", textShadow: "0 3px 20px rgba(0,0,0,0.7)" }}>
                We Fix It Today.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/90 text-lg sm:text-xl mb-0 max-w-lg mx-auto font-medium leading-relaxed"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
            >
              Certified technicians at your door in{" "}
              <strong className="text-white">2–4 hours</strong>. All brands.
              All problems. 30-day warranty.
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            style={{ height: "80px" }}
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,160 960,160 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Stat Cards ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 mb-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              stat: "2–4 hrs",
              label: "Same Day Service",
              sub: "Book before 5 PM",
              icon: Clock,
              accent: "#f97316",
              bg: "#fff7ed",
              border: "#fed7aa",
            },
            {
              stat: "5,000+",
              label: "Happy Customers",
              sub: "Across Hyderabad",
              icon: Users,
              accent: "#2563eb",
              bg: "#eff6ff",
              border: "#bfdbfe",
            },
            {
              stat: "4.9★",
              label: "Average Rating",
              sub: "All platforms",
              icon: Star,
              accent: "#16a34a",
              bg: "#f0fdf4",
              border: "#bbf7d0",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                border: `1.5px solid ${card.border}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: card.bg }}
              >
                <card.icon size={20} style={{ color: card.accent }} strokeWidth={2} />
              </div>
              <span
                className="font-black text-2xl sm:text-3xl leading-none mb-1"
                style={{ color: card.accent }}
              >
                {card.stat}
              </span>
              <span className="font-bold text-gray-900 text-[13px] sm:text-[14px] leading-tight">
                {card.label}
              </span>
              <span className="text-gray-400 text-[11px] sm:text-[12px] mt-0.5">{card.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
