import { useState, useEffect } from "react";
import { FadeIn } from "./fade-in";
import {
  Phone, ShieldCheck, Zap, Star, CheckCircle2,
  Clock, ArrowRight, Wrench, Flame, TrendingUp
} from "lucide-react";

const WHATSAPP_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const liveJobs = [
  { name: "Ramesh K.", service: "Burner Deep Clean", status: "Completed", time: "8 min ago", iconBg: "rgba(16,185,129,0.12)", iconColor: "#10B981", dotColor: "#10B981", pulse: false, Icon: CheckCircle2 },
  { name: "Priya S.", service: "Gas Leakage Repair", status: "In Progress", time: "Ongoing", iconBg: "rgba(59,130,246,0.12)", iconColor: "#60A5FA", dotColor: "#60A5FA", pulse: true, Icon: Zap },
  { name: "Anita R.", service: "Stove Installation", status: "Arriving Soon", time: "~20 min", iconBg: "rgba(249,115,22,0.12)", iconColor: "#FB923C", dotColor: "#FB923C", pulse: false, Icon: Clock },
];

function LiveCounter() {
  const [count, setCount] = useState(47);
  useEffect(() => {
    const t = setInterval(() => setCount(c => (Math.random() > 0.7 ? c + 1 : c)), 9000);
    return () => clearInterval(t);
  }, []);
  return <>{count}</>;
}

function DailyProgress() {
  const pct = 74;
  return (
    <div className="mt-4 px-1">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-white/40 text-[10px] font-medium tracking-wide uppercase">Daily Capacity</span>
        <span className="text-white/60 text-[10px] font-bold">{pct}% filled</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${pct}%`, background: "linear-gradient(90deg, #F97316, #FBBF24)" }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12" style={{ background: "#060C18" }}>

      {/* ══ BACKGROUND SYSTEM ══ */}
      <div className="pointer-events-none absolute inset-0">

        {/* Animated orb 1 — orange, bottom-left */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-15%", left: "-10%",
            width: 700, height: 700,
            background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
            animation: "drift1 18s ease-in-out infinite",
          }}
        />
        {/* Animated orb 2 — violet, top-right */}
        <div
          className="absolute rounded-full"
          style={{
            top: "-15%", right: "-8%",
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            animation: "drift2 22s ease-in-out infinite",
          }}
        />
        {/* Animated orb 3 — cyan, center-right */}
        <div
          className="absolute rounded-full"
          style={{
            top: "40%", right: "20%",
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
            animation: "drift3 14s ease-in-out infinite",
          }}
        />
        {/* Dim warm spotlight — hero center */}
        <div
          className="absolute"
          style={{
            top: "10%", left: "5%", right: "5%", height: "70%",
            background: "radial-gradient(ellipse at 40% 50%, rgba(249,115,22,0.06) 0%, transparent 60%)",
          }}
        />

        {/* Fine dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.18,
          }}
        />

        {/* Edge vignettes */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, #060C18 100%)" }} />
        <div className="absolute top-0 inset-x-0 h-28" style={{ background: "linear-gradient(to bottom, #060C18, transparent)" }} />
        <div className="absolute bottom-0 inset-x-0 h-24" style={{ background: "linear-gradient(to top, #060C18, transparent)" }} />
      </div>

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">

          {/* ══════════ LEFT — Copy ══════════ */}
          <div className="w-full lg:w-[54%] flex flex-col">

            {/* Live pill */}
            <FadeIn delay={0.05}>
              <div
                className="inline-flex self-start items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-white/80 mb-8"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Hyderabad's #1 Gas Appliance Repair Service
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.12}>
              <h1 className="font-display font-black tracking-tight mb-6" style={{ lineHeight: 1.04 }}>
                <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
                  Your Kitchen,
                </span>
                <span
                  className="block hero-shimmer-text"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
                >
                  Back in Action.
                </span>
                <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
                  Today.
                </span>
              </h1>
            </FadeIn>

            {/* Sub-headline */}
            <FadeIn delay={0.22}>
              <p className="font-sans font-light leading-relaxed mb-9 max-w-[490px]"
                style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
                From gas leaks to broken ignitions — our certified technicians reach your doorstep within hours and fix it right, the first time.
              </p>
            </FadeIn>

            {/* Trust pills */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2 mb-9">
                {[
                  { Icon: CheckCircle2, label: "Free Inspection", glow: "rgba(16,185,129,0.25)", color: "#10B981" },
                  { Icon: Zap, label: "Same-Day Service", glow: "rgba(249,115,22,0.25)", color: "#F97316" },
                  { Icon: ShieldCheck, label: "30-Day Warranty", glow: "rgba(99,102,241,0.25)", color: "#818CF8" },
                  { Icon: Wrench, label: "Genuine Parts", glow: "rgba(168,85,247,0.25)", color: "#C084FC" },
                ].map(({ Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-px cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.035)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.72)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Icon style={{ width: 13, height: 13, color, flexShrink: 0 }} />
                    {label}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA buttons */}
            <FadeIn delay={0.38}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {/* Primary — orange gradient */}
                <a
                  href="tel:+919849000000"
                  className="group relative flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-bold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #F97316 0%, #C2560A 100%)",
                    boxShadow: "0 0 0 1px rgba(249,115,22,0.35), 0 4px 24px rgba(249,115,22,0.35), 0 1px 3px rgba(0,0,0,0.5)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {/* Shine overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)" }}
                  />
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Call Now: +91 98490 00000</span>
                  <ArrowRight
                    className="w-4 h-4 flex-shrink-0 transition-all duration-200"
                    style={{ opacity: 0, marginLeft: -8 }}
                    ref={(el) => {
                      if (!el) return;
                      el.parentElement?.addEventListener("mouseenter", () => {
                        el.style.opacity = "1";
                        el.style.marginLeft = "0";
                      });
                      el.parentElement?.addEventListener("mouseleave", () => {
                        el.style.opacity = "0";
                        el.style.marginLeft = "-8px";
                      });
                    }}
                  />
                </a>

                {/* Secondary — glass */}
                <a
                  href="https://wa.me/919849000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                    fontSize: "0.9375rem",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                >
                  {WHATSAPP_ICON}
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </FadeIn>

            {/* Social proof */}
            <FadeIn delay={0.46}>
              <div className="flex items-center gap-4">
                {/* Avatar stack */}
                <div className="flex -space-x-2.5">
                  {(["#F97316", "#3B82F6", "#8B5CF6", "#10B981", "#EC4899"] as const).map((bg, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: bg, border: "2px solid #060C18" }}
                    >
                      {["RK", "PS", "SA", "AR", "MR"][i]}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-px">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} style={{ width: 13, height: 13, fill: "#FBBF24", color: "#FBBF24" }} />
                    ))}
                  </div>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)" }}>
                    <strong style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>4.9</strong> from 5,000+ happy customers
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ══════════ RIGHT — Premium Dashboard Card ══════════ */}
          <div className="hidden lg:block w-full lg:w-[46%] relative">
            <FadeIn delay={0.28} direction="left">
              <div className="relative mx-auto" style={{ maxWidth: 430 }}>

                {/* Deep glow behind card */}
                <div
                  className="absolute rounded-[32px] scale-90 translate-y-6"
                  style={{
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(249,115,22,0.35), rgba(99,102,241,0.25))",
                    filter: "blur(36px)",
                    zIndex: 0,
                  }}
                />

                {/* Gradient border wrapper */}
                <div
                  className="relative rounded-[28px] p-px z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(249,115,22,0.45) 0%, rgba(255,255,255,0.10) 40%, rgba(99,102,241,0.35) 100%)",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Inner card */}
                  <div
                    className="rounded-[27px] p-6 relative overflow-hidden"
                    style={{ background: "linear-gradient(160deg, rgba(12,20,40,0.98) 0%, rgba(8,14,28,0.99) 100%)" }}
                  >
                    {/* Inner radial highlight */}
                    <div
                      className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full"
                      style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
                    />

                    {/* Header */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="flex items-center gap-2.5">
                        <div className="relative flex-shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-50" />
                        </div>
                        <span className="text-white font-semibold text-sm tracking-wide">Live Service Dashboard</span>
                      </div>
                      <div
                        className="flex items-center gap-1.5 rounded-full px-3 py-1"
                        style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                      >
                        <Flame style={{ width: 12, height: 12, color: "#F97316" }} />
                        <span style={{ fontSize: "0.7rem", color: "rgba(249,115,22,0.9)", fontWeight: 600 }}>
                          <LiveCounter /> repairs today
                        </span>
                      </div>
                    </div>

                    {/* Live job rows */}
                    <div className="space-y-2 mb-4 relative z-10">
                      {liveJobs.map((job, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-2xl px-3.5 py-3 transition-all duration-300 group cursor-default"
                          style={{
                            background: "rgba(255,255,255,0.025)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                          onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.025)")}
                        >
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: job.iconBg }}
                          >
                            <job.Icon style={{ width: 16, height: 16, color: job.iconColor }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium truncate">{job.name} — {job.service}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{
                                  background: job.dotColor,
                                  animation: job.pulse ? "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" : "none",
                                }}
                              />
                              <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.38)" }}>{job.status} · {job.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Daily capacity bar */}
                    <DailyProgress />

                    {/* Stats grid */}
                    <div
                      className="grid grid-cols-4 mt-4 rounded-2xl overflow-hidden relative z-10"
                      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      {[
                        { value: "5k+", label: "Repairs" },
                        { value: "4.9★", label: "Rating" },
                        { value: "< 4h", label: "Arrival" },
                        { value: "30d", label: "Warranty" },
                      ].map(({ value, label }, i) => (
                        <div
                          key={label}
                          className="flex flex-col items-center py-3 px-1"
                          style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                        >
                          <span className="text-white font-bold text-sm tabular-nums">{value}</span>
                          <span style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.32)", marginTop: 2 }}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Floating badge: Rating (top-right) ── */}
                <div
                  className="absolute -top-5 -right-5 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 z-20"
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.9) inset",
                    animation: "floatA 5s ease-in-out infinite",
                  }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "#FEF3C7" }}>
                    <Star style={{ width: 16, height: 16, fill: "#FBBF24", color: "#FBBF24" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0F172A", lineHeight: 1, marginBottom: 3 }}>4.9 / 5 Rating</p>
                    <p style={{ fontSize: "0.625rem", color: "#94A3B8", lineHeight: 1 }}>5,000+ reviews</p>
                  </div>
                </div>

                {/* ── Floating badge: Guarantee (bottom-left) ── */}
                <div
                  className="absolute -bottom-5 -left-5 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 z-20"
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.9) inset",
                    animation: "floatB 5s ease-in-out 1.8s infinite",
                  }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "#ECFDF5" }}>
                    <ShieldCheck style={{ width: 16, height: 16, color: "#10B981" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0F172A", lineHeight: 1, marginBottom: 3 }}>30-Day Guarantee</p>
                    <p style={{ fontSize: "0.625rem", color: "#94A3B8", lineHeight: 1 }}>All repairs covered</p>
                  </div>
                </div>

                {/* ── Floating badge: Response time (right-center) ── */}
                <div
                  className="absolute -right-8 top-1/2 -translate-y-1/2 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 z-20"
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.9) inset",
                    animation: "floatA 5s ease-in-out 3.2s infinite",
                  }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "#EFF6FF" }}>
                    <TrendingUp style={{ width: 16, height: 16, color: "#3B82F6" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0F172A", lineHeight: 1, marginBottom: 3 }}>Same-Day Fix</p>
                    <p style={{ fontSize: "0.625rem", color: "#94A3B8", lineHeight: 1 }}>Avg. 2–4 hrs</p>
                  </div>
                </div>

                {/* ── Urgency chip (top-left) ── */}
                <div
                  className="absolute top-5 -left-8 rounded-full px-3 py-1.5 flex items-center gap-2 z-20"
                  style={{
                    background: "rgba(239,68,68,0.14)",
                    border: "1px solid rgba(239,68,68,0.28)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#F87171", animation: "pulse 2s infinite" }}
                  />
                  <span style={{ fontSize: "0.7rem", color: "#FCA5A5", fontWeight: 600, whiteSpace: "nowrap" }}>3 slots left today</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ══ KEYFRAMES ══ */}
      <style>{`
        @keyframes drift1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(40px,-30px) scale(1.06); }
          66%      { transform: translate(-25px,40px) scale(0.94); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-50px,30px) scale(1.08); }
          70%      { transform: translate(30px,-20px) scale(0.95); }
        }
        @keyframes drift3 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-20px,25px); }
        }
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes floatA {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
