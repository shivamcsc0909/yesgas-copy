import { CheckCircle2, Phone, Home } from "lucide-react";
import { SITE_CONFIG } from "@/config";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-3">Thank You for Your Enquiry!</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Your request has been submitted. Our team will contact you soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:+${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", boxShadow: "0 6px 20px rgba(249,115,22,0.35)" }}
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
