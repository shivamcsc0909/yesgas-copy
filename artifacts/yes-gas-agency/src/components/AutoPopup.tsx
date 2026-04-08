import { useState, useEffect, useRef, useCallback } from "react";
import { X, Phone, MessageCircle, Send, Loader2, CheckCircle2, Clock, Flame, Star } from "lucide-react";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";

const SHOW_DELAY = 3000;
const AUTO_CLOSE = 12;

export default function AutoPopup() {
  const [show, setShow]             = useState(false);
  const [countdown, setCountdown]   = useState(AUTO_CLOSE);
  const [name, setName]             = useState("");
  const [phone, setPhone]           = useState("");
  const [service, setService]       = useState("Gas Stove Repair");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [errors, setErrors]         = useState<{ name?: string; phone?: string }>({});

  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTyping  = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), SHOW_DELAY);
    return () => clearTimeout(t);
  }, []);

  const startCountdown = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timerRef.current!);
          if (!isTyping.current) setShow(false);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (!show) return;
    setCountdown(AUTO_CLOSE);
    startCountdown();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [show, startCountdown]);

  const handleNameChange = (v: string) => {
    setName(v);
    if (v.length > 0) {
      isTyping.current = true;
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    }
  };

  const handlePhoneChange = (v: string) => {
    setPhone(v);
    if (v.length > 0) {
      isTyping.current = true;
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    }
  };

  const close = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setShow(false);
  };

  const validate = () => {
    const e: { name?: string; phone?: string } = {};
    if (name.trim().length < 2)         e.name  = "Please enter your name";
    if (!/^\d{10}$/.test(phone.trim())) e.phone = "Enter valid 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitToSheets = (payload: Record<string, string>) => {
    if (!SITE_CONFIG.googleSheetsUrl) return;
    const iframe = document.createElement("iframe");
    iframe.name = "popup-sheets-frame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const form = document.createElement("form");
    form.method = "GET";
    form.action = SITE_CONFIG.googleSheetsUrl;
    form.target = "popup-sheets-frame";
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
    } catch(e) {
      console.error(e);
    }
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    const payload = { name, phone, service, source: "Auto Popup" };
    submitToSheets(payload);
    submitToPHP(payload);
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "form_submit",
      form_name: "popup_lead_form",
      status: "success",
      page: window.location.pathname,
    });
    window.location.href = "/thank-you";
  };

  if (!show) return null;

  const progress = ((AUTO_CLOSE - countdown) / AUTO_CLOSE) * 100;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

      {/* Card — centered on all screen sizes */}
      <div
        className="relative w-full max-w-[390px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{
          animation: "popupIn 0.4s cubic-bezier(0.34,1.4,0.64,1) both",
          maxHeight: "88vh",
        }}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-20 bg-white/10">
          <div
            className="h-full bg-orange-400 transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ── HEADER (flex-shrink-0 so it never scrolls away) ── */}
        <div
          className="relative px-5 pt-5 pb-4 text-white overflow-hidden flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #080f20 0%, #0f2350 55%, #1a3a8f 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />
          <Flame className="absolute right-3 top-1/2 -translate-y-1/2 w-24 h-24 text-white/5 pointer-events-none" />

          {/* Top row: urgency badge + countdown + close */}
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-400/25 rounded-full px-2.5 py-1 min-w-0">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inset-0 rounded-full bg-red-400 opacity-75" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-red-400" />
              </span>
              <span className="text-[10px] font-black text-red-300 uppercase tracking-wide truncate">3 Slots Left Today</span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
              {!isTyping.current && countdown > 0 && (
                <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5 border border-white/15">
                  <Clock className="w-3 h-3 text-orange-300" />
                  <span className="text-white font-bold text-xs tabular-nums">{countdown}s</span>
                </div>
              )}
              <button
                onClick={close}
                className="w-7 h-7 rounded-full bg-white/15 border border-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                <X className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          {/* Logo + Headline */}
          <div className="flex items-center gap-3 relative z-10 mb-3">
            <div
              className="w-11 h-11 rounded-xl flex-shrink-0 overflow-hidden bg-white p-0.5"
              style={{ boxShadow: "0 6px 18px rgba(249,115,22,0.5)" }}
            >
              <img src="/logo.jpeg" alt="Yes Gas Agency" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Yes Gas Agency</p>
              <h2 className="text-[20px] font-black text-white leading-tight">
                Book a <span className="text-orange-400">FREE</span> Callback
              </h2>
              <p className="text-white/50 text-[11px]">Expert calls within 15 minutes</p>
            </div>
          </div>

          {/* Stars strip */}
          <div className="flex items-center gap-2 pt-3 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-0.5 flex-shrink-0">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/40 text-[10px] font-medium truncate">4.9★ · 5,000+ families trust us in Hyderabad</span>
          </div>
        </div>

        {/* ── BODY (flex-1 + overflow-y-auto = scrollable if content overflows) ── */}
        <div className="flex-1 overflow-y-auto bg-white px-5 py-4">
          {success ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-base font-black text-gray-900 mb-1">Booking Confirmed!</h3>
              <p className="text-sm text-gray-500">
                Our technician will call you within <span className="font-bold text-gray-700">15 minutes</span>.
              </p>
            </div>
          ) : (
            <>
              {/* Trust pills */}
              <div className="flex flex-wrap gap-1 mb-3">
                {["✓ No Advance", "✓ 30-Day Warranty", "✓ Certified"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Inputs */}
              <div className="space-y-2.5 mb-3">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="Your Full Name"
                    className={cn(
                      "w-full px-4 py-2.5 rounded-xl border-2 text-sm bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none transition-all",
                      errors.name ? "border-red-400" : "border-gray-100 focus:border-blue-800"
                    )}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1 pl-1">{errors.name}</p>}
                </div>
                <div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 select-none pointer-events-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      placeholder="10-digit Mobile Number"
                      className={cn(
                        "w-full pl-11 pr-4 py-2.5 rounded-xl border-2 text-sm bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none transition-all",
                        errors.phone ? "border-red-400" : "border-gray-100 focus:border-blue-800"
                      )}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1 pl-1">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-blue-800 text-sm bg-gray-50 text-gray-900 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option>Gas Stove Repair</option>
                    <option>Deep Burner Cleaning</option>
                    <option>Pipeline Installation</option>
                    <option>Emergency Gas Leak</option>
                    <option>Auto Ignition Repair</option>
                    <option>Gas Regulator Service</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full py-3 rounded-xl text-white font-black text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 mb-3"
                style={{ background: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)", boxShadow: "0 5px 16px rgba(249,115,22,0.4)" }}
              >
                {submitting
                  ? <><Loader2 className="w-4 h-4 animate-spin" />Submitting...</>
                  : <><Send className="w-4 h-4" />Request Free Callback</>}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide whitespace-nowrap">or directly</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Direct contact */}
              <div className="grid grid-cols-2 gap-2 mb-2.5">
                <a
                  href={`tel:+${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #0f2350, #1a3a8f)" }}
                  onClick={() => {
                    (window as any).dataLayer = (window as any).dataLayer || [];
                    (window as any).dataLayer.push({ event: "call_click", button_name: "Call Now", page: window.location.pathname });
                  }}
                >
                  <Phone className="w-3.5 h-3.5" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1db954] transition-colors"
                  onClick={() => {
                    (window as any).dataLayer = (window as any).dataLayer || [];
                    (window as any).dataLayer.push({ event: "whatsapp_click", button_name: "WhatsApp", page: window.location.pathname });
                  }}
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>

              <p className="text-center text-[10px] text-gray-400">
                🔒 Your information is 100% secure & private
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}
