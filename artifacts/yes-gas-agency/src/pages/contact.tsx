import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/whatsapp-button";
import { SITE_CONFIG } from "@/config";
import { useContent } from "../hooks/useContent";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, ShieldCheck, Send,
  Loader2, CheckCircle2, MessageCircle, Zap, Star
} from "lucide-react";

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function ContactForm() {
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("Gas Stove Repair");
  const [time, setTime]       = useState("As soon as possible");
  const [problem, setProblem] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]   = useState(false);
  const [errors, setErrors]     = useState<{ name?: string; phone?: string; address?: string }>({});

  const submitToSheets = (payload: Record<string, string>) => {
    if (!SITE_CONFIG.googleSheetsUrl) return;
    const iframe = document.createElement("iframe");
    iframe.name = "contact-sheets-frame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const form = document.createElement("form");
    form.method = "GET";
    form.action = SITE_CONFIG.googleSheetsUrl;
    form.target = "contact-sheets-frame";
    Object.entries(payload).forEach(([k, v]) => {
      const inp = document.createElement("input");
      inp.type = "hidden"; inp.name = k; inp.value = v;
      form.appendChild(inp);
    });
    document.body.appendChild(form);
    form.submit();
    setTimeout(() => { document.body.removeChild(form); document.body.removeChild(iframe); }, 5000);
  };

  const submitToPHP = async (payload: Record<string, string>) => {
    try {
      await fetch('/api/add_lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (e) { console.error(e); }
  };

  const validate = () => {
    const e: { name?: string; phone?: string; address?: string } = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!/^\d{10}$/.test(phone.trim())) e.phone = "Enter a valid 10-digit mobile number";
    if (!address.trim()) e.address = "Please enter your area";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const payload = { name, phone, address, service, time, problem, source: "Contact Form" };
    submitToSheets(payload);
    await submitToPHP(payload);
    // Redirect immediately on success
    window.location.href = "/thank-you";
  };

  const inputClass = (err?: string) =>
    `w-full h-12 px-4 rounded-xl border-2 bg-gray-50 text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:bg-white focus:outline-none transition-all ${err ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange-400"}`;

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5 shadow-lg shadow-green-200">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed!</h3>
        <p className="text-gray-500 leading-relaxed max-w-xs">
          Our technician will call you within <span className="font-black text-gray-800">15 minutes</span> to confirm your slot.
        </p>
        <div className="mt-6 flex items-center gap-1.5 text-sm text-gray-400">
          <Loader2 className="w-4 h-4 animate-spin" />
          Redirecting you shortly…
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5 pl-1">Full Name *</label>
          <input
            type="text" value={name}
            onChange={e => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: undefined })); }}
            placeholder="Your full name"
            className={inputClass(errors.name)}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1 pl-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5 pl-1">Mobile Number *</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 select-none pointer-events-none">+91</span>
            <input
              type="tel" value={phone}
              onChange={e => { setPhone(e.target.value); if (errors.phone) setErrors(p => ({ ...p, phone: undefined })); }}
              placeholder="10-digit number"
              className={`${inputClass(errors.phone)} pl-12`}
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1 pl-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Area */}
      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5 pl-1">Your Area / Address *</label>
        <input
          type="text" value={address}
          onChange={e => { setAddress(e.target.value); if (errors.address) setErrors(p => ({ ...p, address: undefined })); }}
          placeholder="e.g. Madhapur, Gachibowli, Kondapur…"
          className={inputClass(errors.address)}
        />
        {errors.address && <p className="text-xs text-red-500 mt-1 pl-1">{errors.address}</p>}
      </div>

      {/* Service + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5 pl-1">Service Required</label>
          <select
            value={service} onChange={e => setService(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm font-medium focus:border-orange-400 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
          >
            <option>Gas Stove Repair</option>
            <option>Deep Burner Cleaning</option>
            <option>Emergency Gas Leak</option>
            <option>Pipeline Installation</option>
            <option>Auto Ignition Repair</option>
            <option>Gas Regulator Service</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5 pl-1">Preferred Time</label>
          <select
            value={time} onChange={e => setTime(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm font-medium focus:border-orange-400 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
          >
            <option>As soon as possible</option>
            <option>Today: Morning (8 AM – 12 PM)</option>
            <option>Today: Afternoon (12 – 4 PM)</option>
            <option>Today: Evening (4 – 8 PM)</option>
            <option>Schedule for tomorrow</option>
          </select>
        </div>
      </div>

      {/* Problem */}
      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5 pl-1">Describe the Problem (Optional)</label>
        <textarea
          value={problem} onChange={e => setProblem(e.target.value)}
          rows={3}
          placeholder="Tell us what's wrong — e.g. stove won't ignite, gas smell, weak flame…"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl text-white font-black text-base flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", boxShadow: "0 8px 24px rgba(249,115,22,0.35)" }}
      >
        {submitting
          ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing…</>
          : <><Send className="w-5 h-5" /> Confirm Booking</>
        }
      </button>

      <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
        Your information is 100% private and secure
      </p>
    </form>
  );
}

export default function ContactPage() {
  const { content } = useContent();

  const contactItems = [
    {
      icon: Phone, color: "#f97316", bg: "#fff7ed",
      label: "Call Us Now",
      value: content.contact_phone || SITE_CONFIG.phone,
      sub: "We answer within 60 seconds",
      href: `tel:+${SITE_CONFIG.phoneRaw}`,
      trackEvent: "call_click",
    },
    {
      icon: MessageCircle, color: "#16a34a", bg: "#f0fdf4",
      label: "WhatsApp",
      value: "Chat & book instantly",
      sub: "Fastest way to reach us",
      href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
      trackEvent: "whatsapp_click",
    },
    {
      icon: Mail, color: "#3b82f6", bg: "#eff6ff",
      label: "Email",
      value: content.contact_email || SITE_CONFIG.email,
      sub: "We reply within a few hours",
      href: `mailto:${SITE_CONFIG.email}`,
      trackEvent: null,
    },
    {
      icon: Clock, color: "#8b5cf6", bg: "#f5f3ff",
      label: "Working Hours",
      value: "Mon – Sun, 8 AM – 9 PM",
      sub: "Including public holidays",
      href: null,
      trackEvent: null,
    },
    {
      icon: MapPin, color: "#ec4899", bg: "#fdf2f8",
      label: "Service Area",
      value: content.contact_address || "Hyderabad & Secunderabad",
      sub: "30+ locations covered",
      href: null,
      trackEvent: null,
    },
  ];

  return (
    <main className="relative bg-white min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080f20 0%, #0f2350 60%, #1a3a8f 100%)" }}
      >
        <div className="absolute -left-24 top-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Book a Service</span>
          </div>
          <h1 className="font-black text-white text-4xl sm:text-5xl leading-tight tracking-tight mb-5">
            Get Your Gas Appliance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Fixed Today
            </span>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
            Fill the form below or call us directly — our technician will be at your door in 2–4 hours.
          </p>
        </div>

        {/* Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 60 }} preserveAspectRatio="none">
            <path d="M0,0 C480,80 960,80 1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

            {/* Left: Contact Info + Quick CTAs */}
            <div className="flex flex-col gap-8">

              {/* Quick CTA buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:+${SITE_CONFIG.phoneRaw}`}
                  onClick={() => { (window as any).dataLayer?.push({ event: "call_click", button_name: "Contact Call", page: "/contact" }); }}
                  className="flex flex-col items-center justify-center gap-2 py-5 rounded-2xl text-white font-bold text-sm transition-all hover:-translate-y-0.5 text-center"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 8px 20px rgba(249,115,22,0.3)" }}
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                  <span className="text-xs opacity-80 font-medium">{SITE_CONFIG.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => { (window as any).dataLayer?.push({ event: "whatsapp_click", button_name: "Contact WhatsApp", page: "/contact" }); }}
                  className="flex flex-col items-center justify-center gap-2 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1db954] transition-colors text-center"
                  style={{ boxShadow: "0 8px 20px rgba(37,211,102,0.3)" }}
                >
                  {WA_ICON}
                  <span>WhatsApp</span>
                  <span className="text-xs opacity-80 font-medium">Chat instantly</span>
                </a>
              </div>

              {/* Contact info cards */}
              <div className="space-y-3">
                {contactItems.map((item, i) => {
                  const Inner = (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: item.bg }}>
                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="font-black text-gray-900 text-sm truncate group-hover:text-orange-500 transition-colors">{item.value}</p>
                        <p className="text-xs text-gray-400 font-medium">{item.sub}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={i} href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      onClick={item.trackEvent ? () => {
                        (window as any).dataLayer = (window as any).dataLayer || [];
                        (window as any).dataLayer.push({ event: item.trackEvent, button_name: item.label, page: "/contact" });
                      } : undefined}
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={i}>{Inner}</div>
                  );
                })}
              </div>

              {/* Trust note */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">4.9 / 5 Average Rating</p>
                  <p className="text-xs text-gray-500">Trusted by 5,000+ families in Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_48px_rgba(0,0,0,0.08)] p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="font-black text-xl text-gray-900">Book Your Service</h2>
                    <p className="text-gray-400 text-sm">We'll call back in 15 minutes</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 340 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60887.61878527395!2d78.35353524316405!3d17.44551699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688bf79d6d848f!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709800000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yes Gas Agency Service Area"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-3 font-medium">
            <MapPin className="w-3.5 h-3.5 inline mr-1" />
            Serving Madhapur, Gachibowli, Kondapur, Kukatpally, Banjara Hills & all of Hyderabad
          </p>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            {[
              { icon: ShieldCheck, color: "#16a34a", label: "Certified Technicians" },
              { icon: Clock,       color: "#2563eb", label: "2–4 Hour Arrival" },
              { icon: Star,        color: "#f59e0b", label: "4.9★ Rated" },
              { icon: CheckCircle2, color: "#f97316", label: "30-Day Warranty" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${item.color}18` }}>
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <span className="font-black text-gray-900 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
