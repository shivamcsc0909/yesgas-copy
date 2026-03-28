import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919849000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full bg-green-400 opacity-70 animate-ping z-0"></span>
      
      <MessageCircle className="w-7 h-7 z-10" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us
        <span className="absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
      </span>
    </a>
  );
}
