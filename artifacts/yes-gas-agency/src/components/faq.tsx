import { useState } from "react";
import { ChevronDown, Phone, MessageSquare, HelpCircle, Sparkles, Zap, MessageCircle } from "lucide-react";
import { FadeIn } from "./fade-in";

const faqs = [
  {
    question: "How quickly can a technician reach me?",
    answer: "In most Hyderabad areas, our technicians arrive within 2–4 hours of booking. For gas leakage emergencies, we prioritize your call and aim to reach you within 60 minutes.",
  },
  {
    question: "Do you charge for the visit?",
    answer: "No — our inspection and visit is completely free of cost. You only pay if we repair your appliance, and we give you a clear quote before starting any work.",
  },
  {
    question: "What brands do you repair?",
    answer: "We repair all major brands — Prestige, Butterfly, Sunflame, Glen, Elica, Faber, Pigeon, Inalsa, Bosch, and more. No brand is too big or too small for us.",
  },
  {
    question: "Are your spare parts genuine?",
    answer: "Absolutely. We use 100% original manufacturer spare parts. No local copies, no shortcuts. Your safety is our top priority.",
  },
  {
    question: "What does the 30-day warranty cover?",
    answer: "Every repair we do comes with a 30-day service warranty. If the same issue returns within 30 days, we fix it at no extra charge — guaranteed.",
  },
  {
    question: "Can I book on WhatsApp?",
    answer: "Yes! Simply send a WhatsApp message to +91 98490 00000 with your name, area, and issue. We'll confirm your slot within minutes.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section 
      id="faq" 
      className="relative py-32 overflow-hidden bg-[#05091A]"
    >
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 mesh-dots opacity-[0.05]" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05091A] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#05091A] to-transparent pointer-events-none" />
        <div className="section-wave" style={{ top: -1 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

          {/* — Left: Title & Support Hub — */}
          <div className="lg:w-5/12">
            <div className="sticky top-32">
              <FadeIn>
                <div className="section-label section-label-dark mb-8">FAQ</div>
                <h2 
                  className="text-white font-display font-extrabold tracking-tighter"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", lineHeight: 1.05 }}
                >
                  Expert <br />
                  <span className="shimmer-text">Insights.</span>
                </h2>
                <p className="text-white/30 text-lg font-medium leading-relaxed my-8">
                  Everything you need to know about our industrial-grade gas service, pricing, and safety standars.
                </p>

                {/* Support Hub Card */}
                <div className="rounded-[40px] p-8 glass-dark grad-border relative overflow-hidden group shadow-2xl">
                  {/* Gloss Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                      <span className="text-white font-black text-xs uppercase tracking-widest">Support Hub Available</span>
                    </div>
                    
                    <h4 className="text-white font-black text-xl mb-4">Still have questions?</h4>
                    <p className="text-white/40 font-medium text-sm leading-relaxed mb-8">Our expert advisors are standing by to guide you through any gas emergency or service booking.</p>

                    <div className="space-y-4">
                      <a 
                        href="tel:+919849000000" 
                        className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 bg-white/5 border border-white/5 hover:bg-[#F97316] hover:border-[#F97316] hover:scale-105 group/btn"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors group-hover/btn:bg-white/20">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-black text-sm">Call Expert Staff</p>
                          <p className="text-white/40 text-xs font-bold uppercase tracking-widest transition-colors group-hover/btn:text-white/60">Fastest Response</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://wa.me/919849000000" 
                        className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 bg-white/5 border border-white/5 hover:bg-emerald-500 hover:border-emerald-500 hover:scale-105 group/btn"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors group-hover/btn:bg-white/20">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-black text-sm">WhatsApp Chat</p>
                          <p className="text-white/40 text-xs font-bold uppercase tracking-widest transition-colors group-hover/btn:text-white/60">Message Now</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* — Right: Modern Accordion — */}
          <div className="lg:w-7/12">
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <FadeIn key={i} delay={0.1 + i * 0.05}>
                    <div 
                      className={`rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 glass-dark grad-border ${
                        isOpen ? 'bg-white/[0.04] !border-[#F97316]/40 shadow-2xl scale-[1.02]' : 'hover:bg-white/[0.02]'
                      }`}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      {/* Interaction Glow Ribbon */}
                      {isOpen && (
                        <div className="h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-60" />
                      )}

                      <div className="flex items-center justify-between gap-6 px-10 py-7">
                        <h3 className={`font-black text-lg tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#F97316]' : 'text-white'}`}>
                          {faq.question}
                        </h3>
                        <div 
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                            isOpen ? 'bg-[#F97316] text-white rotate-180' : 'bg-white/5 text-white/20 group-hover:scale-110'
                          }`}
                        >
                          <ChevronDown style={{ width: 18, height: 18 }} />
                        </div>
                      </div>

                      <div 
                        style={{ 
                          maxHeight: isOpen ? 400 : 0, 
                          opacity: isOpen ? 1 : 0, 
                          overflow: "hidden", 
                          transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease" 
                        }}
                      >
                        <div className="px-10 pb-8 pt-2">
                          <div className="h-px w-full bg-white/5 mb-8" />
                          <p className="text-white/40 text-[0.9375rem] font-medium leading-relaxed max-w-xl italic">
                            {faq.answer}
                          </p>
                          <div className="mt-8 flex items-center gap-3">
                            <Zap className="w-4 h-4 text-amber-400 opacity-40" />
                            <span className="text-[0.625rem] font-black uppercase tracking-[0.2em] text-white/20">Professional Verified Answer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
