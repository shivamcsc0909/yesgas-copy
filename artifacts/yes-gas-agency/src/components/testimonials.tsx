import { Star, ShieldCheck } from "lucide-react";

// Using real 5-star ratings style referencing Urban Company
const testimonials = [
  {
    name: "Ravi Kumar",
    area: "Madhapur, Hyderabad",
    date: "2 days ago",
    text: "The technician arrived within an hour of my WhatsApp message. Fixed my Prestige glass top stove perfectly. Very professional and they actually use a gas leak detector before leaving. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    area: "Kukatpally, Hyderabad",
    date: "1 week ago",
    text: "Had a scary gas leak from the pipeline. Yes Gas sent someone immediately. He changed the copper pipe and regulator, tested everything twice. Worth every rupee for the peace of mind.",
    rating: 5,
  },
  {
    name: "Abdul Rahman",
    area: "Banjara Hills, Hyderabad",
    date: "3 weeks ago",
    text: "My Faber stove auto-ignition stopped working. Booked them online. The guy was wearing a uniform, carried all spare parts, and fixed it in 30 mins. Very neat job.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-10 lg:py-14 bg-[#fdfcfe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="section-badge mx-auto mb-4">Customer Reviews</div>
          <h2 className="font-black text-gray-900 leading-[1.15] tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
            Trusted by 5,000+ Families in Hyderabad
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <span className="font-extrabold text-xl text-gray-900">4.9/5</span>
          </div>
          <p className="mt-3 text-slate-500 font-medium">Average rating across all platforms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-6 shadow-premium border border-slate-50 transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              <blockquote className="text-slate-600 text-[14px] leading-relaxed mb-5 flex-1">
                "{t.text}"
              </blockquote>
              
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold title-font text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.area}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                   <ShieldCheck className="w-3.5 h-3.5" />
                   <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
