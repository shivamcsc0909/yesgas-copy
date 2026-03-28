import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl text-white">Yes Gas Agency</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Expert Gas Stove Repair & Service in Hyderabad. We deliver safe, fast, and reliable kitchen solutions directly to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Gas Stove Repair</li>
              <li>Gas Leakage Repair</li>
              <li>Burner Cleaning</li>
              <li>Copper Pipeline</li>
              <li>Ignition Fixes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="text-slate-500 text-xs">Phone</span>
                <a href="tel:+919849000000" className="text-white font-medium hover:text-primary">+91 98490 00000</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 text-xs">Working Hours</span>
                <span className="text-white">Mon - Sun: 8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-500 text-xs">Serving</span>
                <span className="text-white">All areas of Hyderabad</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Yes Gas Agency. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
