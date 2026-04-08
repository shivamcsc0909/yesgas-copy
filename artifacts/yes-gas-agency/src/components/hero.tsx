import { useEffect, useState } from "react";
import { Clock, Users, Star, ArrowRight, Phone } from "lucide-react";
import { useContent } from "../hooks/useContent";
import { SITE_CONFIG } from "@/config";
import { useBookingModal } from "@/context/BookingModalContext";

function useTypewriter(text: string, typeSpeed = 70, deleteSpeed = 40, pauseAfterType = 1800, pauseAfterDelete = 500) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      if (!deleting) {
        // Typing
        i++;
        setDisplayed(text.slice(0, i));
        setDone(false);
        if (i >= text.length) {
          // Finished typing — pause then start deleting
          setDone(true);
          timer = setTimeout(() => {
            deleting = true;
            setDone(false);
            timer = setTimeout(tick, deleteSpeed);
          }, pauseAfterType);
        } else {
          timer = setTimeout(tick, typeSpeed);
        }
      } else {
        // Deleting
        i--;
        setDisplayed(text.slice(0, i));
        if (i <= 0) {
          // Finished deleting — pause then start typing again
          deleting = false;
          timer = setTimeout(tick, pauseAfterDelete);
        } else {
          timer = setTimeout(tick, deleteSpeed);
        }
      }
    }

    // Initial delay before first type
    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [text, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return { displayed, done };
}

export function Hero() {
  const { content } = useContent();
  const { displayed, done } = useTypewriter("We Fix It Today.", 120, 25, 1800, 500);
  const { openModal } = useBookingModal();

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
            backgroundImage: `url("${content.hero_bg}")`,
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
              className="font-black text-white mb-5 leading-[1.08] max-w-3xl whitespace-pre-line"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                textShadow: "0 3px 20px rgba(0,0,0,0.75)",
              }}
            >
              {content.hero_title}
              <br />
              <span style={{ color: "#fb923c", textShadow: "0 3px 20px rgba(0,0,0,0.7)" }}>
                {displayed}
                {/* Blinking cursor — steady when done typing, blinks while typing/deleting */}
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "0.85em",
                    background: "#fb923c",
                    marginLeft: "3px",
                    verticalAlign: "middle",
                    borderRadius: "2px",
                    animation: done ? "none" : "blink 0.65s step-end infinite",
                    opacity: 1,
                  }}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/90 text-lg sm:text-xl mb-7 max-w-lg mx-auto font-medium leading-relaxed whitespace-pre-line"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
            >
              {content.hero_subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
              {/* Book Service Now */}
              <button
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({ event: "book_click", button_name: "Book Service Now", page: window.location.pathname });
                  openModal();
                }}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "white",
                  borderRadius: "50px",
                  padding: "16px 36px",
                  fontWeight: "800",
                  fontSize: "17px",
                  border: "none",
                  boxShadow: "0 8px 28px rgba(249,115,22,0.55), 0 3px 8px rgba(249,115,22,0.25)",
                  transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.03)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 36px rgba(249,115,22,0.65), 0 4px 12px rgba(249,115,22,0.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(249,115,22,0.55), 0 3px 8px rgba(249,115,22,0.25)";
                }}
              >
                Book Service Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Call Now */}
              <a
                href={`tel:+${SITE_CONFIG.phoneRaw}`}
                aria-label="Call"
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({ event: "call_click", button_name: "Call Now", page: window.location.pathname });
                }}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                style={{
                  color: "white",
                  borderRadius: "50px",
                  padding: "16px 36px",
                  fontWeight: "800",
                  fontSize: "17px",
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1), background 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)";
                }}
              >
                <Phone size={20} />
                {content.hero_cta}
              </a>
            </div>
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
