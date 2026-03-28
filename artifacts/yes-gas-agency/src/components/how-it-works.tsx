import { FadeIn } from "./fade-in";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Book Your Repair",
      description: "Call us directly or fill out our quick online form to schedule a visit.",
    },
    {
      number: "02",
      title: "Technician Arrives",
      description: "Our certified expert reaches your doorstep within 2-4 hours anywhere in Hyderabad.",
    },
    {
      number: "03",
      title: "Problem Solved!",
      description: "We fix the issue efficiently, test it for safety, and provide a 30-day warranty.",
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Simple. Fast. Hassle-Free.
            </h2>
            <p className="text-lg text-white/70">
              Getting your gas stove fixed shouldn't be a headache. We've streamlined our process to get your kitchen running again in no time.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="relative text-center">
                <div className="w-24 h-24 mx-auto bg-secondary border-2 border-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  <span className="text-3xl font-display font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed px-4">
                  {step.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
