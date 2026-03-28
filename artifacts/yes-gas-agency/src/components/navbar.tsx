import { useState, useEffect } from "react";
import { Flame, Phone, Menu, X } from "lucide-react";

const WHATSAPP_ICON = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(6, 12, 24, 0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "12px 0",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }
          : {
              background: "transparent",
              padding: "20px 0",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0">
          <div
            className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.1))",
              border: "1px solid rgba(249,115,22,0.35)",
              boxShadow: "0 0 20px rgba(249,115,22,0.2)",
            }}
          >
            <Flame className="w-5 h-5 text-[#F97316]" />
          </div>
          <div>
            <p className="font-display font-bold text-white text-lg leading-none tracking-wide">
              Yes Gas
            </p>
            <p className="text-[#F97316] text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">
              Agency
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 group"
              style={{ color: activeLink === link.name ? "white" : "rgba(255,255,255,0.55)" }}
              onClick={() => setActiveLink(link.name)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => {
                if (activeLink !== link.name) e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              }}
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919849000000"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-sm py-2.5 px-5"
          >
            {WHATSAPP_ICON}
            WhatsApp
          </a>
          <a
            href="tel:+919849000000"
            className="btn-primary text-sm py-2.5 px-5"
          >
            <Phone className="w-4 h-4" />
            +91 98490 00000
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen
            ? <X className="w-5 h-5 text-white" />
            : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "400px" : "0",
          background: "rgba(6,12,24,0.97)",
          backdropFilter: "blur(24px)",
          borderTop: mobileOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-3 rounded-xl font-medium transition-all duration-200"
              style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.03)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "white";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <a href="tel:+919849000000" className="btn-primary justify-center py-3 w-full text-sm">
              <Phone className="w-4 h-4" /> Call +91 98490 00000
            </a>
            <a href="https://wa.me/919849000000" className="btn-ghost justify-center py-3 w-full text-sm">
              {WHATSAPP_ICON} Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}