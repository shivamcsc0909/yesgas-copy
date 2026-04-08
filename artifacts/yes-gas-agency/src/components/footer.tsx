import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";
import { SITE_CONFIG } from "@/config";
import { useContent } from "../hooks/useContent";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = useContent();

  return (
    <footer
      className="relative text-blue-50 pt-10 pb-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #080f20 0%, #0d1b3e 55%, #111827 100%)",
      }}
    >
      {/* Top Edge Wave */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-0 transform">
        <svg 
          viewBox="0 0 1440 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full rotate-180 block" 
          preserveAspectRatio="none" 
          style={{ height: "60px" }}
        >
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 mb-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
                <div
                  className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden p-1"
                  style={{ boxShadow: "0 4px 16px rgba(249,115,22,0.35)" }}
                >
                  <img
                    src="/logo.jpeg"
                    alt="Yes Gas Agency"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-display font-black text-white text-[18px] leading-none tracking-tight">Yes Gas</p>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1 text-orange-400">Agency</p>
                </div>
            </Link>
            <p className="text-blue-200 text-[15px] leading-relaxed mb-6 font-medium">
              Hyderabad's most trusted gas appliance service. Certified, fast, and completely focused on your family's safety.
            </p>
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-sm" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/yesgass_repair?igsh=bDlxZWc0NW5rM3Y3&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-gradient-to-br transition-all shadow-sm group" aria-label="Instagram"
                style={{} as React.CSSProperties}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = ""}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/17XU6YZ11U/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Email */}
              <a href={`mailto:${SITE_CONFIG.email}`} className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
             <h3 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Top Services</h3>
             <ul className="space-y-4">
                {["Gas Stove Repair", "Deep Burner Cleaning", "Pipeline Installation", "Emergency Leak Repair", "Auto Ignition Repair"].map((item, i) => (
                  <li key={i}>
                    <Link href="/services" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                        {item}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Reference Service Areas */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-4">
               {["Madhapur & Jubilee Hills", "Kukatpally & Miyapur", "Kondapur & Gachibowli", "Banjara Hills", "Secunderabad (Center)"].map((item, i) => (
                 <li key={i}>
                   <Link href="/services" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                       {item}
                   </Link>
                 </li>
               ))}
            </ul>
         </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-blue-200">
                <MapPin className="w-5 h-5 flex-shrink-0 text-orange-400 mt-0.5" />
                <span className="font-medium">{content.contact_address}</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Phone className="w-5 h-5 flex-shrink-0 text-orange-400" />
                <a
                  href={`tel:+${SITE_CONFIG.phoneRaw}`}
                  className="hover:text-white font-medium"
                  onClick={() => {
                    (window as any).dataLayer = (window as any).dataLayer || [];
                    (window as any).dataLayer.push({ event: "call_click", button_name: "Call Now", page: window.location.pathname });
                  }}
                >{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Mail className="w-5 h-5 flex-shrink-0 text-orange-400" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white font-medium">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-start gap-3 text-blue-200">
                <Clock className="w-5 h-5 flex-shrink-0 text-orange-400 mt-0.5" />
                <div className="font-medium">
                  <p>Mon - Sun</p>
                  <p>8:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-5 mt-6 border-t border-blue-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-blue-300">
            © {currentYear} Yes Gas Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-300 hover:text-white transition-colors">Contact Us</a>
            <a href={`tel:+${SITE_CONFIG.phoneRaw}`} className="text-blue-300 hover:text-white transition-colors">{SITE_CONFIG.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
