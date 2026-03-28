import { useState, useEffect } from "react";
import { Flame, Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Flame className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className={`font-display font-bold text-xl leading-none ${isScrolled ? "text-secondary" : "text-white"}`}>
              Yes Gas<br/><span className="text-primary text-lg">Agency</span>
            </h1>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`font-medium hover:text-primary transition-colors ${
                    isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="tel:+919849000000"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>+91 98490 00000</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-7 h-7 ${isScrolled ? "text-secondary" : "text-white"}`} />
          ) : (
            <Menu className={`w-7 h-7 ${isScrolled ? "text-secondary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+919849000000"
            className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground shadow-md"
          >
            <Phone className="w-5 h-5" />
            <span>Call +91 98490 00000</span>
          </a>
        </div>
      </div>
    </header>
  );
}
