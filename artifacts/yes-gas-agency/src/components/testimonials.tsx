import { FadeIn } from "./fade-in";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Kumar",
      location: "Kukatpally",
      text: "Excellent service! My hob was leaking gas, which was terrifying. Their technician arrived within 45 minutes and fixed it safely. Highly professional.",
      initial: "R",
      bg: "bg-blue-100 text-blue-700"
    },
    {
      name: "Priya Sharma",
      location: "Gachibowli",
      text: "The auto-ignition on my stove stopped working months ago. Yes Gas Agency fixed it in 20 minutes. I wish I had called them sooner!",
      initial: "P",
      bg: "bg-purple-100 text-purple-700"
    },
    {
      name: "Syed Ahmed",
      location: "Banjara Hills",
      text: "Very transparent pricing. They told me exactly how much the new copper pipeline would cost before starting. Clean and tidy work.",
      initial: "S",
      bg: "bg-orange-100 text-orange-700"
    },
    {
      name: "Anitha Reddy",
      location: "Madhapur",
      text: "They deep-cleaned the clogged burners of my 5-year-old stove, and the flame is bright blue again like it's brand new. Great job!",
      initial: "A",
      bg: "bg-green-100 text-green-700"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              What Our Happy Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Join 5000+ satisfied families across Hyderabad.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 h-full flex flex-col relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-100" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 flex-grow leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${review.bg}`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.location}, Hyderabad</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
