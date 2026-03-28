import { FadeIn } from "./fade-in";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const smallReviews = [
    {
      name: "Priya Sharma",
      location: "Gachibowli",
      text: "Ignition problem tha kaafi time se. Inki team ne 20 minute mein fix kar di. Bahut fast aur affordable service!",
      initial: "P",
      color: "bg-purple-100 text-purple-700"
    },
    {
      name: "Syed Ahmed",
      location: "Banjara Hills",
      text: "Copper pipeline installation ke liye call kiya. Clean work, zero mess. Price bhi pehle bata diya — no surprises!",
      initial: "S",
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "Anitha Reddy",
      location: "Madhapur",
      text: "5 saal purana stove bilkul new jaisa kar diya. Burner cleaning kamaal ki thi. Blue flame wapas aa gaya!",
      initial: "A",
      color: "bg-green-100 text-green-700"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-6">
              <span className="font-bold text-[#0F172A]">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="text-gray-500 text-sm font-medium border-l border-gray-300 pl-2">Average Rating • 5000+ Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mb-4">
              5000+ Happy Families Can't Be Wrong
            </h2>
            <p className="text-lg text-gray-500">
              Real reviews from real Hyderabad customers
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Testimonial */}
          <FadeIn className="w-full lg:w-2/3">
            <div className="h-full bg-gradient-to-br from-[#0F172A] to-[#1e2d47] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col justify-between">
              {/* Decorative quote mark */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
              <Quote className="w-10 h-10 text-[#F97316] mb-8 relative z-10" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-10 relative z-10 text-white/90">
                "Bahut accha service tha! Mere gas pipe se leak aa raha tha, jo ki bahut dangerous tha. Yes Gas Agency ka technician 40 minute mein aaya aur professionally fix kiya. Transparent pricing, no hidden charges. Highly recommended to all Hyderabad families!"
              </p>
              
              <div className="flex items-center justify-between mt-auto relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-xl font-bold">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Ramesh Kumar</h4>
                    <p className="text-white/60">Kukatpally</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-[#22C55E]/20 text-[#22C55E] px-4 py-2 rounded-full font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Customer
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 3 Smaller Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {smallReviews.map((review, idx) => (
              <FadeIn key={idx} delay={0.2 + idx * 0.1} className="h-full">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 text-sm md:text-base flex-grow">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${review.color}`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-sm">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}