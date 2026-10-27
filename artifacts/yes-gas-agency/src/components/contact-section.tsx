import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, Heart, Sparkles, Zap, MessageCircle, Loader2 } from "lucide-react";
import { FadeIn } from "./fade-in";
import { useState } from "react";
import { SITE_CONFIG } from "@/config";
import { useContent } from "../hooks/useContent";
import { submitLeadToSheets, submitLeadToPHP } from "@/lib/submitLead";

export function ContactSection() {
  const { content } = useContent();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("Gas Stove Repair");
  const [time, setTime] = useState("As soon as possible");
  const [problem, setProblem] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});

  return (
    <section 
      id="contact" 
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 mesh-grid-light opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px]" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 xl:gap-24">
          
          {/* — Left: Information Hub — */}
          <div className="w-full lg:w-5/12">
            <FadeIn>
              <div className="section-label mb-10">Get in Touch</div>
              <h2 
                className="text-[#060B1E] font-display font-extrabold tracking-tighter"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", lineHeight: 1.05 }}
              >
                Fast Arrival. <br />
                <span className="shimmer-text">Guaranteed.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed my-10 max-w-md">
                Fill the form or reach us directly — we confirm your expert slot within <span className="text-[#F97316] font-black italic">60 seconds</span>.
              </p>

              <div className="space-y-4 mb-16">
                {[
                  { icon: Phone, color: "#F97316", text: content.contact_phone || SITE_CONFIG.phone, sub: "CALL US NOW", link: `tel:+${SITE_CONFIG.phoneRaw}`, trackEvent: "call_click", trackName: "Call Now" },
                  { icon: MessageCircle, color: "#10B981", text: "Chat with us", sub: "WHATSAPP", link: `https://wa.me/${SITE_CONFIG.whatsapp}`, trackEvent: "whatsapp_click", trackName: "WhatsApp" },
                  { icon: Clock, color: "#60A5FA", text: "Mon–Sun, 8 AM – 9 PM", sub: "WORKING HOURS", link: "#", trackEvent: null, trackName: null },
                  { icon: MapPin, color: "#A78BFA", text: content.contact_address || "All of Hyderabad, TS", sub: "SERVICE AREA", link: "#", trackEvent: null, trackName: null },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-center gap-5 p-6 rounded-[28px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                    onClick={item.trackEvent ? () => {
                      (window as any).dataLayer = (window as any).dataLayer || [];
                      (window as any).dataLayer.push({ event: item.trackEvent, button_name: item.trackName, page: window.location.pathname });
                    } : undefined}
                  >
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6"
                      style={{ background: `${item.color}12` }}
                    >
                      <item.icon style={{ width: 24, height: 24, color: item.color }} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[0.6rem] font-black uppercase tracking-[0.2em] mb-1">{item.sub}</p>
                      <p className="text-[#060B1E] font-black text-lg tracking-tight group-hover:text-[#F97316] transition-colors">{item.text}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust Tag */}
              <div className="flex items-center gap-4 py-8 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-200" />)}
                </div>
                <p className="text-slate-400 text-xs font-bold leading-relaxed italic">
                  Join <span className="text-[#060B1E] font-black">5,000+ satisfied families</span> who trust us with their homes.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* — Right: Premium Form — */}
          <div className="w-full lg:w-7/12">
            <FadeIn delay={0.3}>
              <div 
                className="p-10 lg:p-14 rounded-[48px] bg-white border border-slate-100 shadow-[0_50px_100px_rgba(0,0,0,0.06)] relative overflow-hidden"
              >
                {/* Surface Mesh */}
                <div className="absolute inset-0 mesh-grid-light opacity-30 pointer-events-none" />
                
                <h3 className="text-[#060B1E] font-black text-2xl mb-12 flex items-center gap-3">
                  <Zap className="w-7 h-7 fill-[#FCC64A] text-[#F97316]" />
                  Request Expert Booking
                </h3>

                {success ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Booking Confirmed!</h3>
                    <p className="text-gray-500 text-sm">We will contact you shortly.</p>
                  </div>
                ) : (
                <form
                  className="space-y-8 relative z-10"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
                    const errs: { name?: string; phone?: string } = {};
                    if (!name.trim()) errs.name = "Please enter your name";
                    if (cleanPhone.length !== 10) errs.phone = "Please enter a valid 10-digit phone number";
                    if (Object.keys(errs).length > 0) { setFormErrors(errs); return; }
                    setFormErrors({});
                    setSubmitting(true);
                    const payload = {
                      name: name.trim(),
                      phone: cleanPhone,
                      address: address.trim(),
                      service,
                      time,
                      problem: problem.trim(),
                      source: "Contact Form"
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
                      form_name: "lead_form",
                      status: "success",
                      page: window.location.pathname,
                    });

                    setTimeout(() => {
                      window.location.href = "/thank-you";
                    }, 250);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-slate-400 text-[0.625rem] font-black uppercase tracking-widest pl-1 mb-3 block">Full Name *</label>
                      <input
                        type="text"
                        value={name} onChange={e => { setName(e.target.value); if (formErrors.name) setFormErrors(p => ({...p, name: undefined})); }}
                        placeholder="Your name"
                        className={`w-full h-14 px-6 rounded-2xl bg-slate-50 border focus:bg-white focus:shadow-xl focus:ring-0 transition-all font-bold text-slate-800 placeholder:text-slate-300 ${formErrors.name ? 'border-red-400' : 'border-slate-100 focus:border-[#F97316]'}`}
                      />
                      {formErrors.name && <p className="text-xs text-red-500 mt-1 pl-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="text-slate-400 text-[0.625rem] font-black uppercase tracking-widest pl-1 mb-3 block">Phone Number *</label>
                      <input
                        type="tel"
                        value={phone} onChange={e => { setPhone(e.target.value); if (formErrors.phone) setFormErrors(p => ({...p, phone: undefined})); }}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full h-14 px-6 rounded-2xl bg-slate-50 border focus:bg-white focus:shadow-xl focus:ring-0 transition-all font-bold text-slate-800 placeholder:text-slate-300 ${formErrors.phone ? 'border-red-400' : 'border-slate-100 focus:border-[#F97316]'}`}
                      />
                      {formErrors.phone && <p className="text-xs text-red-500 mt-1 pl-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-[0.625rem] font-black uppercase tracking-widest pl-1 mb-3 block">Address / Area *</label>
                    <input 
                      type="text" 
                      value={address} onChange={e => setAddress(e.target.value)} required
                      placeholder="e.g. Madhapur, Hyderabad" 
                      className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#F97316] focus:shadow-xl focus:ring-0 transition-all font-bold text-slate-800 placeholder:text-slate-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-slate-400 text-[0.625rem] font-black uppercase tracking-widest pl-1 mb-3 block">Service Required</label>
                      <select value={service} onChange={e => setService(e.target.value)} className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#F97316] transition-all font-black text-slate-800 appearance-none">
                        <option>Gas Stove Repair</option>
                        <option>Deep Burner Cleaning</option>
                        <option>Emergency Leak Check</option>
                        <option>Installation Service</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-400 text-[0.625rem] font-black uppercase tracking-widest pl-1 mb-3 block">Preferred Time</label>
                      <select value={time} onChange={e => setTime(e.target.value)} className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#F97316] transition-all font-black text-slate-800 appearance-none">
                        <option>As soon as possible</option>
                        <option>Today: Morning (8-12)</option>
                        <option>Today: Evening (4-8)</option>
                        <option>Schedule for tomorrow</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-[0.625rem] font-black uppercase tracking-widest pl-1 mb-3 block">Describe Issue (Optional)</label>
                    <textarea 
                      value={problem} onChange={e => setProblem(e.target.value)}
                      placeholder="Tell us what's wrong..." 
                      className="w-full h-32 px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-[#F97316] focus:shadow-xl focus:ring-0 transition-all font-bold text-slate-800 placeholder:text-slate-300 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full btn-primary h-16 text-lg group disabled:opacity-60"
                  >
                    {submitting ? <><Loader2 className="w-5 h-5 animate-spin mr-2"/> Processing...</> : <span className="flex items-center gap-2">Confirm Elite Booking <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" /></span>}
                  </button>

                  <div className="text-center pt-4">
                    <p className="text-slate-400 text-[0.7rem] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-emerald-500" />
                       Your information is 100% private and secure
                    </p>
                  </div>
                </form>
                )}

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 p-8">
                  <Sparkles className="w-8 h-8 text-amber-100 animate-pulse" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoveRight(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
}
