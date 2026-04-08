import { Home, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-8xl font-black text-orange-500 mb-4">404</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you're looking for doesn't exist. Let us help you get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </a>
          <a
            href={`tel:+${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
