import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whatsapp-button";
import {
  CheckCircle2, Phone, ShieldCheck, Zap, Clock,
  Star, Award, MessageCircle, AlertCircle
} from "lucide-react";
import { SITE_CONFIG } from "@/config";
import { useContent } from "../hooks/useContent";

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const plans = [
  {
    name: "Basic Inspection",
    price: "₹199",
    priceNote: "Inspection fee waived on repair",
    badge: null,
    popular: false,
    description: "Quick diagnostic visit to identify the problem and give you a repair estimate.",
    features: [
      "Full gas stove inspection",
      "Burner flame check",
      "Leakage test included",
      "Visual safety report",
      "Travel charges included",
    ],
    cta: "Book Inspection",
  },
  {
    name: "Standard Service",
    price: "₹399",
    priceNote: "Starting price — spares extra at MRP",
    badge: "Most Popular",
    popular: true,
    description: "Our most popular package — deep clean + performance tune for all brands.",
    features: [
      "Everything in Basic",
      "Complete stove dismantling",
      "Chemical deep cleaning",
      "Jet & nozzle unblocking",
      "Ignition system check",
      "30-day service warranty",
    ],
    cta: "Book Now",
  },
  {
    name: "Pipeline Install",
    price: "₹999",
    priceNote: "Starting price for standard runs",
    badge: null,
    popular: false,
    description: "New gas pipeline laid with ISI-certified copper/steel fittings and full pressure testing.",
    features: [
      "ISI-certified pipes & fittings",
      "High-pressure seal jointing",
      "Multi-point leak verification",
      "Compliance with safety norms",
      "1-year warranty on workmanship",
    ],
    cta: "Get a Quote",
  },
];

const serviceRates = [
  { service: "Gas Stove Repair (Single Burner)",  range: "₹299 – ₹599" },
  { service: "Gas Stove Repair (2/3 Burner)",     range: "₹399 – ₹799" },
  { service: "Deep Burner Cleaning",              range: "₹199 – ₹499" },
  { service: "Auto Ignition Repair",              range: "₹299 – ₹699" },
  { service: "Gas Regulator Service",             range: "₹199 – ₹499" },
  { service: "Emergency Gas Leak Fix",            range: "₹499 onwards" },
  { service: "Pipeline Installation",             range: "₹999 onwards" },
  { service: "Hose Pipe Replacement",             range: "₹199 – ₹349" },
];

const faqs = [
  { q: "Is the inspection fee waived if I get a repair?", a: "Yes — the ₹199 inspection fee is fully waived if you proceed with the repair during the same visit." },
  { q: "Are spare parts included in the price?", a: "Spare parts are billed separately, strictly at MRP. We never mark up parts. You'll be informed before we use any part." },
  { q: "Is there a call-out fee for emergency service?", a: "No hidden call-out fees. Emergency service pricing starts at ₹499 which covers detection, sealing, and a safety certificate." },
];

export default function PricingPage() {
  const { content } = useContent();

  return (
    <main className="relative bg-[#f8fafc] min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080f20 0%, #0f2350 60%, #1a3a8f 100%)" }}
      >
        <div className="absolute -left-24 top-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Transparent Pricing</span>
          </div>
          <h1 className="font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5 whitespace-pre-line">
            {content.pricing_title}
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {content.pricing_subtitle}
          </p>

          {/* Trust pill */}
          <div className="mt-8 inline-flex items-center gap-2 bg-green-500/15 border border-green-400/25 rounded-full px-4 py-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-bold">No Hidden Charges. Spare parts at MRP only.</span>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path d="M0,0 C480,80 960,80 1440,0 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:items-center">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-3xl overflow-visible transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-orange-400 shadow-[0_24px_60px_-12px_rgba(249,115,22,0.3)] md:scale-105 z-10"
                    : "border border-gray-200 shadow-xl shadow-gray-200/50 hover:-translate-y-1"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-1.5 rounded-full text-sm font-black shadow-md whitespace-nowrap z-20">
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-black text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xs text-gray-400 font-semibold">Starting at</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black text-gray-900 tracking-tight">{plan.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mb-6">{plan.priceNote}</p>

                  <div className="w-full h-px bg-gray-100 mb-6" />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-gray-700 text-sm font-medium">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-orange-500" : "text-blue-500"}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:+${SITE_CONFIG.phoneRaw}`}
                    onClick={() => { (window as any).dataLayer?.push({ event: "call_click", button_name: `Pricing ${plan.name}`, page: "/pricing" }); }}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
                        : "bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <Phone className="w-4 h-4" /> {plan.cta}
                  </a>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'm interested in ${encodeURIComponent(plan.name)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm mt-2 bg-[#25D366]/10 text-[#16a34a] hover:bg-[#25D366]/20 transition-colors"
                  >
                    {WA_ICON} Book on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICE LIST TABLE ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-4">
              All Services
            </div>
            <h2 className="font-black text-2xl lg:text-3xl text-gray-900">Complete Price Reference</h2>
            <p className="text-gray-500 mt-2 text-sm">All prices are starting rates. Final cost depends on brand, model, and parts required.</p>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-2 bg-gray-900 px-6 py-3.5">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400">Service</span>
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 text-right">Price Range</span>
            </div>
            {serviceRates.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-orange-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}
              >
                <span className="text-gray-800 font-semibold text-sm">{row.service}</span>
                <span className="text-orange-600 font-black text-sm text-right">{row.range}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            Spare parts are billed separately at MRP. No markup, ever.
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-12 lg:py-16 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-black text-2xl lg:text-3xl text-gray-900 mb-2">Pricing FAQs</h2>
            <p className="text-gray-500">Answers to common questions about our charges.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-black text-xs">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-900 mb-1.5">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: ShieldCheck, color: "#16a34a", label: "ISI Certified", sub: "All parts & fittings" },
              { icon: Clock,       color: "#2563eb", label: "Same Day Service", sub: "Book before 5 PM" },
              { icon: Star,        color: "#f59e0b", label: "4.9★ Rated",    sub: "5,000+ reviews" },
              { icon: Award,       color: "#f97316", label: "30-Day Warranty", sub: "On all repairs" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${item.color}18` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <p className="font-black text-gray-900 text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 mb-4">
            Not Sure Which Plan?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Just Call Us
            </span>
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Describe your problem over the phone — we'll recommend the right service and give you an exact quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+${SITE_CONFIG.phoneRaw}`}
              onClick={() => { (window as any).dataLayer?.push({ event: "call_click", button_name: "Pricing CTA Call", page: "/pricing" }); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 8px 24px rgba(249,115,22,0.35)" }}
            >
              <Phone className="w-5 h-5" /> Call {SITE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#1db954] transition-colors shadow-lg"
            >
              {WA_ICON} WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
