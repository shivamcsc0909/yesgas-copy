import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Award } from "lucide-react";
import { useContent } from "../hooks/useContent";
import { useBookingModal } from "@/context/BookingModalContext";

export function WhyChooseUs() {
  const { content } = useContent();
  const { openModal } = useBookingModal();
  const features = [
    { title: "10+ Years Experience", icon: Award },
    { title: "ID-Verified Technicians", icon: ShieldCheck },
    { title: "Zero Leakage Guaranteed", icon: CheckCircle2 },
    { title: "Same Day Output", icon: Zap },
  ];

  return (
    <section className="py-10 lg:py-14 bg-[#fcfdfe] relative overflow-hidden">
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="absolute bottom-0 w-[80%] h-10 bg-gray-900/10 rounded-[100%] blur-xl translate-y-5" />
            <div className="relative w-full max-w-[460px]">
              <img
                src={content.about_tech_img}
                alt="Safe Gas Appliance Servicing"
                className="w-full rounded-[2rem] object-cover border-[5px] border-white relative z-10"
                style={{ height: "380px", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}
              />
              {/* Floating trust badge */}
              <div
                className="absolute -bottom-5 -right-4 z-20 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)", border: "1.5px solid #f1f5f9" }}
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div className="leading-none">
                  <p className="font-black text-gray-900 text-sm">Safety Certified</p>
                  <p className="text-xs text-gray-400 mt-0.5">Every technician</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="section-badge mb-4">Why Choose Us</div>
            <h2
              className="font-black text-gray-900 leading-[1.1] tracking-tight mb-4 whitespace-pre-line"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              <span dangerouslySetInnerHTML={{ __html: content.about_title.replace("Religion", '<span class="text-gradient-orange">Religion</span>') }} />
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed max-w-lg mb-5 whitespace-pre-line">
              {content.about_subtitle}
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex flex-shrink-0 items-center justify-center bg-orange-50 text-orange-600">
                    <item.icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                  </div>
                  <span className="font-bold text-gray-800 text-[14px]">{item.title}</span>
                </div>
              ))}
            </div>

            <button onClick={() => openModal()} className="btn-orange !py-3.5 !px-8 inline-flex group">
              Book An Expert
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
