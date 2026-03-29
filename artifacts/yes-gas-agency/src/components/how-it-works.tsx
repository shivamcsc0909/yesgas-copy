import { PhoneCall, Truck, Wrench } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "STEP 1",
    title: "Call or WhatsApp Us",
    desc: "Reach us in under 2 minutes. Tell us your issue and location.",
    highlight: "Available 8 AM – 8 PM, 7 days a week.",
    color: "#eab308", // Yellow
    bg: "#fefce8"
  },
  {
    icon: Truck,
    step: "STEP 2",
    title: "Technician at Your Door",
    desc: "A certified, ID-verified technician reaches you in 2–4 hours.",
    highlight: "Get SMS with technician ETA.",
    color: "#3b82f6", // Blue
    bg: "#eff6ff"
  },
  {
    icon: Wrench,
    step: "STEP 3",
    title: "Fixed, Safe & Guaranteed",
    desc: "Problem resolved correctly the first time with safety testing.",
    highlight: "Free replacement within 30 days.",
    color: "#22c55e", // Green
    bg: "#f0fdf4"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[#f4f7fb] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching reference block-center styling */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/50 text-orange-700 font-bold text-sm uppercase tracking-widest mb-4">
            How It Works
          </div>
          <h2 className="font-display font-black text-gray-900 leading-tight tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
            Fixed in <span className="text-gradient-orange">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-500">
            From first call to working stove — the whole process is designed to be fast and hassle-free.
          </p>
        </div>

        {/* 3 Step Cards - floating style matching the premium layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-premium transition-transform hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Subtle top border accent matching the step color */}
              <div 
                className="absolute top-0 left-0 w-full h-1.5 transition-all duration-300 opacity-50 group-hover:opacity-100" 
                style={{ backgroundColor: item.color }} 
              />
              
              <div className="flex justify-between items-start mb-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: item.bg, color: item.color }}
                >
                  <item.icon size={26} strokeWidth={2.5} />
                </div>
                <div className="text-[11px] font-black uppercase tracking-widest text-slate-300">
                  {item.step}
                </div>
              </div>

              <h3 className="font-display font-extrabold text-xl lg:text-2xl text-gray-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 mb-6 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-auto inline-flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl w-full border border-slate-100 text-sm font-semibold text-slate-600">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                {item.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
