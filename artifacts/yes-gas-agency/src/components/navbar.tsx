import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config";

import { Link, useLocation } from "wouter";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 w-full z-50 flex justify-center pt-5 px-4">
      <header
        className={`w-full max-w-6xl transition-all duration-300 bg-white rounded-full flex items-center justify-between px-5 py-2.5 relative ${
          scrolled ? "shadow-lg bg-white/95 backdrop-blur-md translate-y-2" : "shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white"
        }`}
      >
        {/* Logo — left */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0 group"
        >
          <img
            src="/logo.jpeg"
            alt="Yes Gas Agency"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            style={{ mixBlendMode: "multiply" }}
          />
          <div className="flex flex-col leading-none">
            <span className="font-black text-[17px] text-gray-900 tracking-tight">Yes Gas</span>
            <span className="text-[9px] font-bold tracking-[0.12em] text-orange-500 uppercase mt-0.5">Agency</span>
          </div>
        </Link>

        {/* Nav links — absolute center */}
        <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] font-semibold transition-colors ${
                location === link.href ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-[14px] font-bold text-green-600 bg-green-50 border border-green-100 hover:bg-green-100 rounded-full transition-all"
            onClick={() => {
              (window as any).dataLayer = (window as any).dataLayer || [];
              (window as any).dataLayer.push({ event: "whatsapp_click", button_name: "WhatsApp", page: window.location.pathname });
            }}
          >
            {WA_ICON}
            WhatsApp
          </a>
          <a
            href={`tel:+${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 px-6 py-2 text-[14px] font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 shadow-md hover:shadow-lg rounded-full transition-all"
            onClick={() => {
              (window as any).dataLayer = (window as any).dataLayer || [];
              (window as any).dataLayer.push({ event: "call_click", button_name: "Call Now", page: window.location.pathname });
            }}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-900 focus:outline-none p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col gap-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-bold ${
                  location === link.href ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <a
                href={`tel:+${SITE_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({ event: "call_click", button_name: "Call Now", page: window.location.pathname });
                }}
              >
                <Phone className="w-5 h-5" /> Call {SITE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-green-600 bg-green-50 rounded-full border border-green-200"
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({ event: "whatsapp_click", button_name: "WhatsApp", page: window.location.pathname });
                }}
              >
                {WA_ICON} Book on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}