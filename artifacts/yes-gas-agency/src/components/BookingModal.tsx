import { useEffect, useRef, useState } from "react";
import { X, Phone, CheckCircle2, Send, Loader2, Flame, ShieldCheck, Clock, Star } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import { SITE_CONFIG } from "@/config";
import { submitLeadToSheets, submitLeadToPHP } from "@/lib/submitLead";

const SERVICES = [
  "Gas Stove Repair",
  "Deep Burner Cleaning",
  "Ignition Fix",
  "Emergency Gas Leak",
  "Hob / Cooking Range Repair",
  "Pipeline Installation",
  "Auto Ignition Repair",
  "Gas Regulator Service",
  "Annual Maintenance",
  "Other",
];

export default function BookingModal() {
  const { isOpen, closeModal, selectedService } = useBookingModal();
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", problem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; area?: string }>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setForm(prev => ({ ...prev, service: selectedService || "" }));
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setForm({ name: "", phone: "", service: "", area: "", problem: "" });
      setSubmitted(false);
      setSubmitting(false);
      setErrors({});
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, selectedService]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const e: typeof errors = {};
    const cleanPhone = form.phone.replace(/\D/g, "").slice(-10);
    if (!form.name.trim()) e.name = "Please enter your name";
    if (cleanPhone.length !== 10) e.phone = "Enter valid 10-digit number";
    if (!form.area.trim()) e.area = "Please enter your area";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    const cleanPhone = form.phone.replace(/\D/g, "").slice(-10);
    const payload = { ...form, name: form.name.trim(), phone: cleanPhone, area: form.area.trim(), source: "Booking Modal" };

    try {
      await Promise.allSettled([
        submitLeadToSheets(payload),
        submitLeadToPHP(payload),
      ]);
    } catch (err) {
      console.error(err);
    }

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "form_submit", form_name: "booking_modal", status: "success", page: window.location.pathname });

    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 250);
  };

  if (!isOpen) return null;

  /* ── Field styles ── */
  const fieldBase = "w-full h-11 px-4 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all bg-white";
  const fieldNormal = `${fieldBase} border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100`;
  const fieldErr    = `${fieldBase} border border-red-400 focus:ring-2 focus:ring-red-100`;

  const Label = ({ num, text }: { num: string; text: string }) => (
    <div className="flex items-center gap-2 mb-1.5">
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #1e3a8f, #2563eb)" }}
      >
        {num}
      </span>
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{text}</span>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={closeModal} />

      {/* Card */}
      <div
        className="relative z-10 w-full sm:max-w-[520px] rounded-t-3xl sm:rounded-2xl shadow-2xl"
        style={{ maxHeight: "95dvh", overflowY: "auto", background: "#f8fafc" }}
      >
        {/* ── Close button — card level, always on top ── */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/30 transition-all"
          style={{ zIndex: 50 }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Dark navy header ── */}
        <div
          className="relative px-5 pt-5 pb-5 rounded-t-3xl sm:rounded-t-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #080f20 0%, #0f2350 55%, #1a3a8f 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-6 bottom-0 w-32 h-32 rounded-full bg-orange-400/8 blur-2xl pointer-events-none" />
          <Flame className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20 text-white/5 pointer-events-none" />

          {/* Brand + headline (right padding to avoid close btn overlap) */}
          <div className="flex items-center gap-3 mb-3 pr-10">
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 overflow-hidden bg-white p-0.5"
              style={{ boxShadow: "0 4px 14px rgba(249,115,22,0.45)" }}
            >
              <img src="/logo.jpeg" alt="Yes Gas Agency" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Yes Gas Agency</p>
              <h2 className="text-xl font-black text-white leading-tight">Book a Service</h2>
            </div>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {[
              { icon: Clock,       text: "Same Day Service" },
              { icon: ShieldCheck, text: "30-Day Warranty"  },
              { icon: Star,        text: "4.9★ Rated"       },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-2.5 py-1">
                <Icon className="w-3 h-3 text-orange-300 flex-shrink-0" />
                <span className="text-[11px] font-semibold text-white/85">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Form / Success body ── */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center bg-white">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 shadow-lg shadow-green-100">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-1">Booking Confirmed!</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Our technician will call you within{" "}
              <span className="font-black text-gray-800">15 minutes</span> to confirm your slot.
            </p>
          </div>
        ) : (
          <div className="px-5 py-5 flex flex-col gap-4">
            {/* Row 1 — Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label num="1" text="Full Name *" />
                <input
                  ref={firstInputRef}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? fieldErr : fieldNormal}
                />
                {errors.name && <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.name}</p>}
              </div>
              <div>
                <Label num="2" text="Phone Number *" />
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 select-none pointer-events-none">+91</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    type="tel"
                    inputMode="numeric"
                    className={`${errors.phone ? fieldErr : fieldNormal} pl-11`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 2 — Service + Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label num="3" text="Service Needed" />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg text-sm text-gray-900 bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <Label num="4" text="Your Area *" />
                <input
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="e.g. Madhapur, Gachibowli…"
                  className={errors.area ? fieldErr : fieldNormal}
                />
                {errors.area && <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.area}</p>}
              </div>
            </div>

            {/* Row 3 — Problem */}
            <div>
              <Label num="5" text="Describe the Problem" />
              <textarea
                name="problem"
                value={form.problem}
                onChange={handleChange}
                rows={2}
                placeholder="e.g. Burner not lighting, gas smell, ignition sparks but doesn't light…"
                className="w-full px-4 py-2.5 rounded-lg text-sm text-gray-900 bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none placeholder:text-gray-400"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl font-black text-sm text-white transition-all duration-200 hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #1e3a8f 0%, #2563eb 100%)",
                  boxShadow: "0 6px 20px rgba(37,99,235,0.35)",
                }}
              >
                {submitting
                  ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                  : <><Send className="w-4 h-4" /> Confirm Booking</>
                }
              </button>
              <a
                href={`tel:+${SITE_CONFIG.phoneRaw}`}
                className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl font-black text-sm transition-all duration-200 hover:-translate-y-[1px]"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "white",
                  boxShadow: "0 6px 20px rgba(249,115,22,0.3)",
                }}
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({ event: "call_click", button_name: "Modal Call", page: window.location.pathname });
                }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <p className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-green-500" />
              Your information is 100% secure & private
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
