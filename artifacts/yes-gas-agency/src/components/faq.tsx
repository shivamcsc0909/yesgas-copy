import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

// Standard Q/A tailored for a real gas service based in Hyderabad
const faqs = [
  {
    q: "How fast can you reach my location in Hyderabad?",
    a: "We have multiple technicians spread across Hyderabad. Depending on your location, we usually arrive within 2–4 hours of your booking confirmation.",
  },
  {
    q: "Do you repair all brands of gas stoves?",
    a: "Yes! Our technicians are certified to repair over 20+ brands including Prestige, Glen, Elica, Faber, Butterfly, Pigeon, and imported models.",
  },
  {
    q: "What if the problem returns after repair?",
    a: "We provide a 30-day service warranty on all our repairs. If the exact same issue occurs within 30 days, we will fix it completely free of charge.",
  },
  {
    q: "Are there any visiting charges?",
    a: "We charge a nominal ₹199 inspection fee. However, if you choose to proceed with the repair after exploring the estimate, the inspection fee is completely waived off.",
  },
  {
    q: "Is it safe? How do you check for gas leaks?",
    a: "Safety is our priority. After every repair, our technician uses a digital manometer and soap solution tests to ensure there is zero gas leakage before leaving your home.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-20 bg-[#f4f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full lg:w-1/3">
            <div className="inline-flex items-center justify-center p-4 bg-orange-100/50 rounded-full mb-6 text-orange-600">
               <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="font-display font-black text-gray-900 leading-tight mb-5" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Frequently Asked <span className="text-gradient-orange">Questions</span>
            </h2>
            <p className="text-base text-slate-500 mb-5 leading-relaxed">
              Have a question about our repair process, pricing, or safety standards? Find practical answers here.
            </p>
            <a
              href="https://wa.me/919849000000"
              className="btn-outline !py-3 !px-7 hover:!border-orange-500 hover:!text-orange-600"
            >
              Ask on WhatsApp
            </a>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div 
                  key={i}
                  className={`border transition-all duration-300 rounded-[1.5rem] bg-white overflow-hidden cursor-pointer ${
                    isOpen 
                      ? "border-orange-200 shadow-[0_8px_30px_rgb(249,115,22,0.06)]" 
                      : "border-slate-100 shadow-sm hover:border-slate-200"
                  }`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div className="w-full px-8 py-6 flex items-center justify-between gap-4">
                    <h3 className={`font-bold text-lg text-left transition-colors ${isOpen ? 'text-orange-600' : 'text-gray-900'}`}>
                      {faq.q}
                    </h3>
                    <div 
                      className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-orange-50 text-orange-600' : 'text-slate-400'}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div 
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="px-8 pb-6 text-slate-500 leading-relaxed text-[15px] border-t border-slate-50 pt-4 mt-2 mx-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
