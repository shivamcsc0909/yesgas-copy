import { useState, useEffect } from "react";
import { FadeIn } from "./fade-in";
import {
  Phone, ShieldCheck, Zap, Star, CheckCircle2,
  Clock, ArrowRight, Wrench, Flame
} from "lucide-react";

const stats = [
  { value: "5,000+", label: "Repairs Done" },
  { value: "4.9★", label: "Avg. Rating" },
  { value: "< 4hrs", label: "Response Time" },
  { value: "30-Day", label: "Warranty" },
];

const liveJobs = [
  {
    name: "Ramesh K.",
    service: "Burner Deep Clean",
    status: "Completed",
    time: "8 min ago",
    color: "bg-emerald-500/15 text-emerald-400",
    dot: "bg-emerald-400",
    Icon: CheckCircle2,
  },
  {
    name: "Priya S.",
    service: "Gas Leakage Repair",
    status: "In Progress",
    time: "Ongoing",
    color: "bg-blue-500/15 text-blue-400",
    dot: "bg-blue-400",
    Icon: Zap,
  },
  {
    name: "Anita R.",
    service: "Stove Installation",
    status: "Arriving Soon",
    time: "~20 min",
    color: "bg-orange-500/15 text-orange-400",
    dot: "bg-orange-400",
    Icon: Clock,
  },
];

function LiveCounter() {
  const [count, setCount] = useState(47);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => (Math.random() > 0.7 ? c + 1 : c));
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  return <span className="tabular-nums">{count}</span>;
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080E1A] pt-20 pb-12">

      {/* ── Background depth layers ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large orange glow — bottom left */}
        <div className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-[#F97316]/12 blur-[120px]" />
        {/* Soft blue glow — top right */}
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[140px]" />
        {/* Subtle center warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-[#F97316]/5 blur-[100px]" />
        {/* Fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top vignette */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#080E1A] to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#080E1A] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* ══════════════════ LEFT — Copy ══════════════════ */}
          <div className="w-full lg:w-[52%] flex flex-col">

            {/* Live badge */}
            <FadeIn delay={0.05}>
              <div className="inline-flex self-start items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Hyderabad's #1 Gas Appliance Repair Service
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.15}>
              <h1 className="font-display font-black leading-[1.05] tracking-tight text-white mb-6">
                <span className="block text-5xl sm:text-6xl xl:text-7xl">Your Kitchen,</span>
                <span
                  className="block text-5xl sm:text-6xl xl:text-7xl"
                  style={{
                    background: "linear-gradient(135deg, #F97316 0%, #FBBF24 60%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Back in Action.
                </span>
                <span className="block text-5xl sm:text-6xl xl:text-7xl">Today.</span>
              </h1>
            </FadeIn>

            {/* Sub-headline */}
            <FadeIn delay={0.25}>
              <p className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-lg mb-10 font-sans font-light">
                From gas leaks to broken ignitions — our certified technicians reach your doorstep within hours and fix it right, the first time.
              </p>
            </FadeIn>

            {/* Trust pills */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2.5 mb-10">
                {[
                  { icon: CheckCircle2, label: "Free Inspection", color: "text-emerald-400" },
                  { icon: Zap, label: "Same-Day Service", color: "text-[#F97316]" },
                  { icon: ShieldCheck, label: "30-Day Warranty", color: "text-blue-400" },
                  { icon: Wrench, label: "Genuine Parts", color: "text-purple-400" },
                ].map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm text-white/75 backdrop-blur-sm"
                  >
                    <Icon className={`w-3.5 h-3.5 ${color}`} />
                    {label}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.38}>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="tel:+919849000000"
                  className="group flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-bold text-base text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #F97316 0%, #EA6C0A 100%)",
                    boxShadow: "0 0 0 1px rgba(249,115,22,0.3), 0 8px 32px rgba(249,115,22,0.3), 0 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now: +91 98490 00000
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                </a>
                <a
                  href="https://wa.me/919849000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-7 py-4 font-bold text-base text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Book on WhatsApp
                </a>
              </div>
            </FadeIn>

            {/* Social proof row */}
            <FadeIn delay={0.45}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["RK", "PS", "SA", "AR", "MR"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#080E1A] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{
                        background: ["#F97316", "#3B82F6", "#8B5CF6", "#10B981", "#EC4899"][i],
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-white/50">
                    <span className="text-white/80 font-semibold">4.9</span> from 5,000+ customers
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ══════════════════ RIGHT — Visual Widget ══════════════════ */}
          <div className="hidden lg:block w-full lg:w-[48%] relative">
            <FadeIn delay={0.3} direction="left">
              <div className="relative mx-auto" style={{ maxWidth: 440 }}>

                {/* Glow behind card */}
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 bg-gradient-to-br from-[#F97316] to-blue-600 scale-95 translate-y-4" />

                {/* Main glass card */}
                <div
                  className="relative rounded-3xl p-6 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Card inner noise */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.03]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }}
                  />

                  {/* Card header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                      </div>
                      <span className="text-white font-semibold text-sm tracking-wide">Live Service Dashboard</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                      <Flame className="w-3.5 h-3.5 text-[#F97316]" />
                      <span className="text-white/60 text-xs font-medium"><LiveCounter /> today</span>
                    </div>
                  </div>

                  {/* Job rows */}
                  <div className="space-y-2.5 mb-5">
                    {liveJobs.map((job, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 transition-all duration-300 hover:bg-white/5"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${job.color}`}>
                          <job.Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">{job.name} — {job.service}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${job.dot} ${i === 1 ? "animate-pulse" : ""}`} />
                            <p className="text-white/40 text-xs">{job.status} · {job.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div
                    className="grid grid-cols-4 divide-x rounded-2xl overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", divideColor: "rgba(255,255,255,0.06)" }}
                  >
                    {stats.map(({ value, label }) => (
                      <div key={label} className="flex flex-col items-center py-3 px-1" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                        <span className="text-white font-bold text-sm tabular-nums">{value}</span>
                        <span className="text-white/35 text-[10px] mt-0.5 text-center leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge — top right */}
                <div
                  className="absolute -top-4 -right-4 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 z-20 animate-[float_4s_ease-in-out_infinite]"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.8) inset",
                  }}
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] font-bold text-xs leading-none mb-0.5">4.9 / 5 Rating</p>
                    <p className="text-slate-400 text-[10px] leading-none">5,000+ reviews</p>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div
                  className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 z-20 animate-[float_4s_ease-in-out_1.5s_infinite]"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.8) inset",
                  }}
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[#0F172A] font-bold text-xs leading-none mb-0.5">30-Day Guarantee</p>
                    <p className="text-slate-400 text-[10px] leading-none">All repairs covered</p>
                  </div>
                </div>

                {/* Floating urgency pill — top left */}
                <div
                  className="absolute top-4 -left-6 rounded-full px-3 py-1.5 flex items-center gap-2 z-20"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                  <span className="text-red-300 text-xs font-semibold whitespace-nowrap">3 slots left today</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Float keyframe */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
