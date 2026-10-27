import { useState } from "react";
import { Wrench, Flame, ShieldCheck, ShieldAlert, Zap, Settings, ArrowRight, Clock, CheckCircle, Star, Send, Loader2, Phone, MessageCircle } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import { useContent } from "../hooks/useContent";
import { useBookingModal } from "@/context/BookingModalContext";
import BookingModal from "../components/BookingModal";

const services = [
  {
    id: "stove-repair",
    title: "Gas Stove Repair",
    tagline: "All brands, all problems — fixed same day.",
    description:
      "Whether your stove won't ignite, flame is uneven, or burner is clogged — our certified technicians diagnose and fix the issue at your doorstep. We carry spare parts for all major brands.",
    icon: Wrench,
    image: "/service-stove-repair.png",
    badge: "Most Popular",
    badgeColor: "bg-orange-500",
    timeEstimate: "2–4 Hours",
    priceRange: "₹299 – ₹999",
    features: [
      "All brands: Prestige, Pigeon, Glen, Sunflame & more",
      "Burner replacement & cleaning",
      "Valve & knob repair",
      "Ignition system fix",
      "30-day service warranty",
    ],
  },
  {
    id: "burner-cleaning",
    title: "Deep Burner Cleaning",
    tagline: "Blue flame restored. Cooking efficiency back.",
    description:
      "Carbon buildup turns your flame orange and wastes gas. Our deep cleaning process removes grease, carbon deposits, and food residue — restoring optimal blue flame performance.",
    icon: Flame,
    image: "/service-burner-cleaning.png",
    badge: "Best Value",
    badgeColor: "bg-blue-500",
    timeEstimate: "1–2 Hours",
    priceRange: "₹199 – ₹499",
    features: [
      "Complete dismantling & reassembly",
      "Chemical degreasing solution",
      "Jet & nozzle unclogging",
      "Blue flame optimization",
      "Gas efficiency check",
    ],
  },
  {
    id: "pipeline",
    title: "Pipeline Installation",
    tagline: "Safe, sealed, and professionally installed.",
    description:
      "New gas pipeline installation for homes, kitchens, and commercial establishments. We use ISI-certified pipes and fittings, with full leak testing before handover.",
    icon: ShieldCheck,
    image: "/service-pipeline.png",
    badge: null,
    badgeColor: "",
    timeEstimate: "2–6 Hours",
    priceRange: "₹599 – ₹1,999",
    features: [
      "ISI-certified pipes & fittings",
      "Domestic & commercial installations",
      "Pressure leak testing included",
      "Compliance with safety norms",
      "Post-install safety inspection",
    ],
  },
  {
    id: "gas-leak",
    title: "Emergency Gas Leak",
    tagline: "24/7 emergency response — we arrive in 60 min.",
    description:
      "Suspected a gas leak? Don't wait. Our emergency team is available round the clock, 365 days a year. We detect, seal, and make your home safe before leaving.",
    icon: ShieldAlert,
    image: "/service-gas-leak.png",
    badge: "24/7 Emergency",
    badgeColor: "bg-red-500",
    timeEstimate: "Within 60 Min",
    priceRange: "₹499 onwards",
    features: [
      "Available 24/7 including holidays",
      "Electronic leak detector",
      "Immediate sealing & repair",
      "Full safety checklist",
      "Written safety clearance certificate",
    ],
  },
  {
    id: "ignition-repair",
    title: "Auto Ignition Repair",
    tagline: "Spark back in seconds — no more manual lighting.",
    description:
      "Faulty auto ignition is both inconvenient and a safety risk. We repair or replace spark modules, wiring, and electrodes for all stove models to restore auto-light functionality.",
    icon: Zap,
    image: "/service-stove-repair.png",
    badge: null,
    badgeColor: "",
    timeEstimate: "1–3 Hours",
    priceRange: "₹299 – ₹699",
    features: [
      "Spark module replacement",
      "Electrode cleaning & realignment",
      "Battery & wiring check",
      "All brand compatibility",
      "On-site testing before leaving",
    ],
  },
  {
    id: "regulator-service",
    title: "Gas Regulator Service",
    tagline: "Correct pressure. Safe flow. Every time.",
    description:
      "A worn or faulty regulator can cause dangerous gas flow issues. We inspect, clean, calibrate, or replace your cylinder regulator to ensure safe and accurate pressure delivery.",
    icon: Settings,
    image: "/service-pipeline.png",
    badge: null,
    badgeColor: "",
    timeEstimate: "30–60 Min",
    priceRange: "₹199 – ₹499",
    features: [
      "Pressure calibration & testing",
      "Regulator replacement (if needed)",
      "Hose pipe inspection",
      "Leak point detection",
      "Safety compliance check",
    ],
  },
];

import { submitLeadToSheets, submitLeadToPHP } from "@/lib/submitLead";

function BookingForm() {
  const [name, setName]         = useState("");
  const [phone, setPhone]       = useState("");
  const [service, setService]   = useState(services[0].title);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]   = useState(false);
  const [errors, setErrors]     = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const e: { name?: string; phone?: string } = {};
    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    if (name.trim().length < 2) e.name = "Please enter your name";
    if (cleanPhone.length !== 10) e.phone = "Enter valid 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    const payload = {
      name: name.trim(),
      phone: cleanPhone,
      service,
      source: "Services Page"
    };

    try {
      await Promise.allSettled([
        submitLeadToSheets(payload),
        submitLeadToPHP(payload)
      ]);
    } catch (err) {
      console.error(err);
    }

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "form_submit",
      form_name: "services_quick_form",
      status: "success",
      page: window.location.pathname,
    });

    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 250);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-black text-gray-900 mb-2">We Got Your Request!</h3>
        <p className="text-gray-500 text-sm">Our team will call you within 15 minutes to confirm your booking.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all",
              errors.name ? "border-red-400" : "border-gray-200 focus:border-blue-800"
            )}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1 pl-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit Mobile Number"
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all",
              errors.phone ? "border-red-400" : "border-gray-200 focus:border-blue-800"
            )}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1 pl-1">{errors.phone}</p>}
        </div>
      </div>

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-800 focus:outline-none text-sm text-gray-900 bg-white transition-all"
      >
        {services.map((s) => (
          <option key={s.id} value={s.title}>{s.title}</option>
        ))}
      </select>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl text-white font-black text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-60"
        style={{ background: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)", boxShadow: "0 6px 20px rgba(249,115,22,0.35)" }}
      >
        {submitting
          ? <><Loader2 className="w-4 h-4 animate-spin" />Booking...</>
          : <><Send className="w-4 h-4" />Book Free Callback</>}
      </button>
    </form>
  );
}

function ServiceCard({ svc, onBook }: { svc: typeof services[0]; onBook: (service: string) => void }) {
  return (
    <div
      className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={svc.image}
          alt={svc.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {svc.badge && (
          <span className={`absolute top-3 left-3 ${svc.badgeColor} text-white text-[11px] font-black uppercase tracking-wide px-3 py-1 rounded-full`}>
            {svc.badge}
          </span>
        )}
        {/* Price chip */}
        <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-black rounded-full px-3 py-1">
          {svc.priceRange}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #0f2350, #1a3a8f)" }}
          >
            <svc.icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-black text-gray-900 text-lg leading-tight">{svc.title}</h3>
            <p className="text-orange-500 text-xs font-semibold mt-0.5">{svc.tagline}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {svc.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Time estimate */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-4 pb-4 border-b border-gray-100">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          Service Time: <span className="text-gray-700 font-bold">{svc.timeEstimate}</span>
        </div>

        {/* CTA button */}
        <button
          onClick={() => onBook(svc.title)}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white font-bold text-sm transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #f97316, #c2410c)" }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { content } = useContent();
  const { openModal } = useBookingModal();

  const handleBook = (serviceTitle: string) => {
    openModal(serviceTitle);
  };

  return (
    <main className="relative bg-white">
      <BookingModal />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080f20 0%, #0f2350 55%, #1a3a8f 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute -left-24 top-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 rounded-full px-4 py-1.5 mb-5">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">All Services</span>
          </div>
          <h1 className="font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 whitespace-pre-line">
            {content.services_page_title}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed whitespace-pre-line">
            {content.services_page_subtitle}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-white/10">
            {[
              { stat: "5,000+", label: "Customers Served" },
              { stat: "4.9★", label: "Average Rating" },
              { stat: "2–4 hrs", label: "Same Day Arrival" },
              { stat: "30 days", label: "Warranty" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-orange-400">{item.stat}</p>
                <p className="text-white/50 text-xs font-medium mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: "60px" }} preserveAspectRatio="none">
            <path d="M0,0 C480,80 960,80 1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <ServiceCard key={svc.id} svc={svc} onBook={handleBook} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: ShieldCheck, color: "#16a34a", label: "ISI Certified", sub: "All parts & fittings" },
              { icon: Clock,       color: "#2563eb", label: "Same Day Service", sub: "Book before 5 PM" },
              { icon: Star,        color: "#f59e0b", label: "4.9★ Rated", sub: "5,000+ reviews" },
              { icon: ShieldAlert, color: "#f97316", label: "30-Day Warranty", sub: "On all repairs" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: `${item.color}18` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <p className="font-black text-gray-900 text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-5">
                <Zap className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-orange-600 font-bold text-sm">Quick Booking</span>
              </div>
              <h2 className="font-black text-gray-900 text-3xl sm:text-4xl leading-tight mb-4">
                Book Your Service<br />
                <span className="text-orange-500">Right Now</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Leave your name and number — our team will call you back within 15 minutes to confirm the slot and send a technician.
              </p>

              {/* Contact options */}
              <div className="space-y-3">
                <a
                  href={`tel:+${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Phone className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Directly</p>
                    <p className="font-black text-gray-900">{SITE_CONFIG.phone}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </a>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  className="flex items-center w-full text-left gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">WhatsApp Us</p>
                    <p className="font-black text-gray-900">Chat & Book Instantly</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>

            {/* Right: form card */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8">
              <h3 className="font-black text-gray-900 text-xl mb-1">Request a Callback</h3>
              <p className="text-gray-400 text-sm mb-6">We'll call you back in 15 minutes.</p>
              <BookingForm />
              <p className="text-center text-[11px] text-gray-400 mt-4">🔒 Your information is 100% secure & private</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
