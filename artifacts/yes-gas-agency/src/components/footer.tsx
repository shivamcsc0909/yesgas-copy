import { Flame, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ShieldCheck, ChevronRight, MessageCircle, Heart, Sparkles, Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05091A] pt-32 pb-16 overflow-hidden">
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 mesh-dots opacity-[0.03]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 mb-8 group">
              <div className="w-12 h-12 rounded-xl bg-[#F97316] flex items-center justify-center transition-transform group-hover:rotate-12 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                <Flame className="w-7 h-7 text-white fill-white" />
              </div>
              <div>
                <span className="block text-xl font-display font-black text-white leading-tight tracking-tight uppercase">Yes Gas</span>
                <span className="block text-[#F97316] text-[0.65rem] font-black tracking-[0.2em] uppercase">Agency</span>
              </div>
            </a>
            <p className="text-white/30 text-base font-medium leading-relaxed mb-10 max-w-xs">
              Hyderabad's premier gas appliance repair and maintenance service. We bring industrial safety to your home kitchen.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl glass-dark grad-border flex items-center justify-center text-white/40 hover:text-white hover:bg-[#F97316] hover:border-[#F97316] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Quick Explore
            </h4>
            <ul className="space-y-5">
              {["Services", "How It Works", "Testimonials", "Service Areas", "FAQ"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/30 hover:text-[#F97316] font-bold text-sm tracking-tight transition-all duration-300 flex items-center gap-3 group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Hub */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Support Hub
            </h4>
            <div className="space-y-6">
              {[
                { icon: Phone, text: "+91 98490 00000", sub: "24/7 HELPLINE", color: "#F97316" },
                { icon: MessageCircle, text: "WhatsApp Chat", sub: "INSTANT RESPONSE", color: "#10B981" },
                { icon: MapPin, text: "Hyderabad, Telangana", sub: "AREA COVERAGE", color: "#60A5FA" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-default">
                  <div 
                    className="w-11 h-11 rounded-xl glass-dark flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-110"
                    style={{ border: `1px solid rgba(255,255,255,0.05)` }}
                  >
                    <item.icon style={{ width: 18, height: 18, color: item.color }} />
                  </div>
                  <div>
                    <p className="text-white/20 text-[0.625rem] font-bold tracking-widest uppercase mb-1">{item.sub}</p>
                    <p className="text-white font-bold text-sm tracking-tight group-hover:text-[#F97316] transition-colors">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Center */}
          <div className="p-8 rounded-[40px] glass-dark grad-border backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                <span className="text-emerald-400 font-black text-[0.625rem] tracking-widest uppercase">System Online</span>
              </div>
              <h4 className="text-white font-black text-lg mb-3 tracking-tight leading-snug">Technicians <br />Available Now</h4>
              <p className="text-white/30 text-xs font-medium leading-relaxed mb-6">Local service units are operational in your area. Request booking to secure same-day arrival.</p>
              
              <a href="tel:+919849000000" className="btn-primary w-full h-12 text-sm">
                Request Slot
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <span className="text-white font-black text-sm tracking-tighter opacity-70">
              © {currentYear} YES GAS AGENCY. <span className="text-white/20 ml-2">All Rights Reserved.</span>
            </span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-default">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-[0.625rem] font-black uppercase tracking-widest text-white">Verified Business</span>
            </div>
            <div className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-default">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-[0.625rem] font-black uppercase tracking-widest text-white">Hyderabad's #1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
