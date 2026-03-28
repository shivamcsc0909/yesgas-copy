import { useState } from "react";
import { FadeIn } from "./fade-in";
import { Phone, MapPin, MessageSquare, Loader2, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Confirmed!",
        description: "We'll call you within 30 minutes to confirm your slot.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
          
          {/* Contact Info (Left Side) */}
          <div className="lg:col-span-2 bg-[#0F172A] text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Animated orange glow blob and grid texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FB923C] rounded-full blur-[80px] opacity-20 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, #FFF 1px, #FFF 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, #FFF 1px, #FFF 2px)", backgroundSize: "30px 30px" }}></div>
            
            <div className="relative z-10">
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Get in Touch</h2>
                <p className="text-white/70 mb-12 text-lg">
                  Ready to fix your gas stove? Fill out the form or reach us directly.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1 uppercase tracking-wider font-semibold">Call Us Now</p>
                      <a href="tel:+919849000000" className="text-2xl font-bold hover:text-[#F97316] transition-colors">
                        +91 98490 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                      <MessageSquare className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1 uppercase tracking-wider font-semibold">WhatsApp</p>
                      <a href="https://wa.me/919849000000" target="_blank" rel="noreferrer" className="text-2xl font-bold hover:text-[#22C55E] transition-colors">
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1 uppercase tracking-wider font-semibold">Service Area</p>
                      <p className="text-xl font-bold">
                        Hyderabad, TS<br/>
                        <span className="text-base text-white/70 font-normal">All surrounding areas</span>
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Form (Right Side) */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-2">Book Your Repair Today</h3>
              <p className="text-gray-500 mb-8 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-[#22C55E] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                We usually respond within 30 minutes.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all font-medium text-gray-900 placeholder:text-gray-400 placeholder:font-normal" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input required type="tel" placeholder="+91" className="w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all font-medium text-gray-900 placeholder:text-gray-400 placeholder:font-normal" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Address / Area *</label>
                  <input required type="text" placeholder="e.g. Madhapur, Hyderabad" className="w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all font-medium text-gray-900 placeholder:text-gray-400 placeholder:font-normal" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Service Required</label>
                    <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all appearance-none cursor-pointer font-medium text-gray-900">
                      <option>Gas Stove Repair</option>
                      <option>Gas Leakage (Urgent)</option>
                      <option>Burner Cleaning</option>
                      <option>Ignition Problem</option>
                      <option>Installation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Preferred Time</label>
                    <select className="w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all appearance-none cursor-pointer font-medium text-gray-900">
                      <option>As soon as possible</option>
                      <option>Today Morning</option>
                      <option>Today Afternoon</option>
                      <option>Tomorrow</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Describe Issue (Optional)</label>
                  <textarea rows={3} placeholder="Tell us what's wrong..." className="w-full px-4 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all resize-none font-medium text-gray-900 placeholder:text-gray-400 placeholder:font-normal"></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white shadow-[0_8px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_10px_25px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : "Book My Repair Now"}
                  </button>
                  <p className="flex items-center justify-center gap-2 mt-4 text-xs font-medium text-gray-500">
                    <Lock className="w-3 h-3" />
                    Your info is 100% safe with us
                  </p>
                </div>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}