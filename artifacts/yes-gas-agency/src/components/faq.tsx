import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
            Got Questions? We Got Answers.
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before booking
          </p>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={0.1 + index * 0.05}>
                <div 
                  className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isOpen 
                      ? "border-l-4 border-l-orange-400 bg-orange-50 border-y border-r border-orange-100" 
                      : "bg-white border border-gray-100 hover:border-orange-200"
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="px-6 py-4 flex justify-between items-center gap-4">
                    <h3 className="font-semibold text-secondary text-lg">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
