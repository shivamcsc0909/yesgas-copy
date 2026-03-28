import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageSquare } from "lucide-react";
import { FadeIn } from "./fade-in";

const faqs = [
  {
    question: "How quickly can a technician reach me?",
    answer: "In most Hyderabad areas, our technicians arrive within 2–4 hours of booking. For gas leakage emergencies, we prioritize your call and aim to reach you within 60 minutes."
  },
  {
    question: "Do you charge for visiting?",
    answer: "No! Our inspection and visit is completely free of cost. You only pay if we actually repair your appliance, and we give you a clear quote before starting any work."
  },
  {
    question: "What brands do you repair?",
    answer: "We repair all major brands — Prestige, Butterfly, Sunflame, Glen, Elica, Faber, Pigeon, Inalsa, Bosch, and more. No brand is too big or too small for us."
  },
  {
    question: "Are your spare parts genuine?",
    answer: "Absolutely. We use 100% original manufacturer spare parts. No local copies, no shortcuts. Your safety is our top priority."
  },
  {
    question: "What is the 30-day warranty?",
    answer: "Every repair we do comes with a 30-day service warranty. If the same issue returns within 30 days, we fix it at no extra charge."
  },
  {
    question: "Is it safe to stay home during a gas leakage repair?",
    answer: "Our technicians are trained to handle gas leakage emergencies safely. They will guide you on safety precautions when they arrive. We recommend turning off the gas valve and ventilating the area until we reach you."
  },
  {
    question: "Can I book on WhatsApp?",
    answer: "Yes! Simply send us a WhatsApp message at +91 98490 00000 with your name, area, and issue. We'll confirm your slot within minutes."
  },
  {
    question: "What are your working hours?",
    answer: "We operate 7 days a week, 8:00 AM to 9:00 PM, including Sundays and public holidays. Gas problems don't take holidays, and neither do we!"
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Sticky */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mb-4 leading-tight">
                  Got Questions?
                </h2>
                <p className="text-lg text-gray-500 mb-8">
                  Hum hain na! We've answered everything below.
                </p>
                
                <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-[#0F172A] mb-4">Still have questions?</h3>
                  <div className="space-y-3">
                    <a href="tel:+919849000000" className="flex items-center gap-3 text-gray-700 hover:text-[#F97316] transition-colors font-medium">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#F97316]">
                        <Phone className="w-5 h-5" />
                      </div>
                      +91 98490 00000
                    </a>
                    <a href="https://wa.me/919849000000" className="flex items-center gap-3 text-gray-700 hover:text-[#22C55E] transition-colors font-medium">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#22C55E]">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      WhatsApp us
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column - Accordions */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <FadeIn key={index} delay={0.1 + index * 0.05}>
                    <div 
                      className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                        isOpen 
                          ? "bg-orange-50 border-l-4 border-[#F97316] shadow-sm" 
                          : "bg-gray-50 hover:bg-gray-100 border-l-4 border-transparent"
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="px-6 py-5 flex justify-between items-center gap-4">
                        <h3 className={`font-semibold text-lg transition-colors ${isOpen ? "text-[#0F172A]" : "text-gray-700"}`}>
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                      
                      <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
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