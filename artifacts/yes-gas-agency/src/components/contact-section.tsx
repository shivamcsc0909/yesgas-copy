import { useState } from "react";
import { FadeIn } from "./fade-in";
import { Phone, MapPin, MessageSquare, Loader2 } from "lucide-react";
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
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info (Left Side) */}
          <div className="lg:col-span-2 bg-secondary text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <FadeIn>
                <h2 className="text-3xl font-display font-bold mb-4">Get in Touch</h2>
                <p className="text-white/70 mb-10">
                  Ready to fix your gas stove? Fill out the form or reach us directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">Call Us Now</p>
                      <a href="tel:+919849000000" className="text-xl font-semibold hover:text-primary transition-colors">
                        +91 98490 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">WhatsApp</p>
                      <a href="https://wa.me/919849000000" target="_blank" rel="noreferrer" className="text-xl font-semibold hover:text-green-400 transition-colors">
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1">Service Area</p>
                      <p className="text-lg font-medium">
                        Hyderabad, Telangana<br/>
                        <span className="text-sm text-white/70 font-normal">All surrounding areas</span>
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
              <h3 className="text-2xl font-bold text-secondary mb-2">Book Your Repair Today</h3>
              <p className="text-muted-foreground mb-8 text-sm">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                We usually respond within 30 minutes.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone Number *</label>
                    <input required type="tel" placeholder="+91" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Address / Area *</label>
                  <input required type="text" placeholder="e.g. Madhapur, Hyderabad" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>Gas Stove Repair</option>
                      <option>Gas Leakage (Urgent)</option>
                      <option>Burner Cleaning</option>
                      <option>Ignition Problem</option>
                      <option>Installation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Preferred Time</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>As soon as possible</option>
                      <option>Today Morning</option>
                      <option>Today Afternoon</option>
                      <option>Tomorrow</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Describe Issue (Optional)</label>
                  <textarea rows={3} placeholder="Tell us what's wrong..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : "Book My Repair Now"}
                </button>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
