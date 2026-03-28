import { FadeIn } from "./fade-in";
import { Clock, ShieldCheck, Wrench, BadgeDollarSign, HeartHandshake, CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "Same Day Service",
      description: "We value your time. Our technicians arrive within hours of your booking anywhere in Hyderabad.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: ShieldCheck,
      title: "Certified Technicians",
      description: "Trained, background-checked experts with 10+ years of experience in gas appliances.",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: Wrench,
      title: "Genuine Spare Parts",
      description: "We use 100% authentic replacement parts to ensure the longevity of your stove.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: CheckCircle,
      title: "30-Day Warranty",
      description: "Total peace of mind. All our repair work is backed by a solid 30-day service guarantee.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      icon: BadgeDollarSign,
      title: "Transparent Pricing",
      description: "No hidden charges. You get a clear, upfront quote before we begin any work.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      icon: HeartHandshake,
      title: "Safe & Reliable",
      description: "We follow strict safety protocols. Your family's safety is our top priority.",
      color: "text-teal-500",
      bg: "bg-teal-50"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              Why Thousands Trust Yes Gas Agency
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just fix stoves; we deliver peace of mind. Here's why Hyderabad chooses us for their kitchen needs.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
