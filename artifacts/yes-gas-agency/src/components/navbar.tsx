import { useState, useEffect } from "react";
import { Flame, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Areas", href: "#areas" },
  { name: "FAQ", href: "#faq" },
];

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex justify-center w-full z-50 fixed top-0 pointer-events-none">
      <header
        className={`transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "w-full rounded-none md:mt-0"
            : "w-[calc(100%-2rem)] max-w-7xl md:mt-5 rounded-full"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                padding: "12px 0",
              }
            : {
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                padding: "8px 24px",
                marginTop: "16px"
              }
        }
      >
        <div className="w-full mx-auto px-4 flex items-center justify-between" style={scrolled ? { maxWidth: "1280px" } : {}}>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="w-10 h-10 rounded-[14px] flex items-center justify-center transition-transform group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F97316, #ea580c)",
                boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
              }}
            >
              <Flame className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <p className="font-display font-black text-gray-900 text-[17px] leading-none tracking-tight">Yes Gas</p>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1" style={{ color: "#F97316" }}>Agency</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[15px] font-semibold text-slate-600 rounded-full hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919849000000"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp !py-2.5 !px-5 !text-[15px]"
              style={{ padding: "10px 20px", borderRadius: "99px" }}
            >
              {WA_ICON}
              WhatsApp
            </a>
            <a 
              href="tel:+919849000000" 
              className="btn-orange !py-2.5 !px-6 !text-[15px]"
              style={{ padding: "10px 24px", borderRadius: "99px" }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 absolute left-0 right-0"
          style={{
            top: "100%",
            marginTop: "12px",
            maxHeight: mobileOpen ? "400px" : "0",
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
            borderRadius: "24px",
            boxShadow: mobileOpen ? "0 20px 40px rgba(0,0,0,0.15)" : "none",
            border: mobileOpen ? "1px solid rgba(0,0,0,0.05)" : "none",
            opacity: mobileOpen ? 1 : 0
          }}
        >
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-3.5 rounded-2xl font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-[15px]"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100 px-1">
              <a href="tel:+919849000000" className="btn-orange justify-center !py-3.5">
                <Phone className="w-5 h-5 mr-1" /> Call +91 98490 00000
              </a>
              <a href="https://wa.me/919849000000" className="btn-whatsapp justify-center !py-3.5 mt-1">
                {WA_ICON} Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}