import { Flame, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative text-blue-50 pt-20 pb-8 mt-10 overflow-hidden"
      style={{
        background: `linear-gradient(rgba(10, 15, 30, 0.75), rgba(10, 15, 30, 0.85)), url("https://images.unsplash.com/photo-1629234358103-5b5ee53ece9c?auto=format&fit=crop&q=80&w=1400")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-6 group">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F97316, #ea580c)", boxShadow: "0 4px 16px rgba(249,115,22,0.4)" }}
              >
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-black text-white text-[18px] leading-none tracking-tight">Yes Gas</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1 text-orange-400">Agency</p>
              </div>
            </a>
            <p className="text-blue-200 text-[15px] leading-relaxed mb-6 font-medium">
              Hyderabad's most trusted gas appliance service. Certified, fast, and completely focused on your family's safety.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
             <h3 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Top Services</h3>
             <ul className="space-y-4">
                {["Gas Stove Repair", "Deep Burner Cleaning", "Pipeline Installation", "Emergency Leak Repair", "Auto Ignition Repair"].map((item, i) => (
                  <li key={i}>
                    <a href="#services" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                      {item}
                    </a>
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
                   <a href="#areas" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                     {item}
                   </a>
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
                <span className="font-medium">102, Hitech Lane, Madhapur, Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Phone className="w-5 h-5 flex-shrink-0 text-orange-400" />
                <a href="tel:+919849000000" className="hover:text-white font-medium">+91 98490 00000</a>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Mail className="w-5 h-5 flex-shrink-0 text-orange-400" />
                <a href="mailto:support@yesgas.in" className="hover:text-white font-medium">support@yesgas.in</a>
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

        <div className="pt-8 mt-12 border-t border-blue-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-blue-300">
            © {currentYear} Yes Gas Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-blue-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
