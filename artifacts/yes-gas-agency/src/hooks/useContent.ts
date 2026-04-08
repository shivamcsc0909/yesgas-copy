import { useState, useEffect } from "react";

type ContentData = {
  // Home / shared
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  // Homepage sections
  services_title: string;
  services_subtitle: string;
  about_title: string;
  about_subtitle: string;
  testimonials_title: string;
  contact_title: string;
  // About Page
  about_hero_intro: string;
  about_mission: string;
  about_vision: string;
  // Services Page
  services_page_title: string;
  services_page_subtitle: string;
  // Contact Page
  contact_address: string;
  contact_phone: string;
  contact_email: string;
  // Pricing Page
  pricing_title: string;
  pricing_subtitle: string;
  // How It Works Section
  how_it_works_title: string;
  how_it_works_subtitle: string;
  // FAQ Section
  faq_title: string;
  faq_subtitle: string;
  // Service Areas Section
  areas_title: string;
  areas_subtitle: string;
  // Images
  hero_bg: string;
  service_1_img: string;
  service_2_img: string;
  service_3_img: string;
  service_4_img: string;
  about_tech_img: string;
};

// Fallback content to ensure UI never breaks
const fallbackContent: ContentData = {
  hero_title: "Stop Struggling With\nYour Gas Stove —",
  hero_subtitle: "Certified technicians at your door in 2–4 hours. All brands. All problems. 30-day warranty.",
  hero_cta: "Call Now",
  services_title: "Book Your Gas Expert Today!",
  services_subtitle: "From routine repair to emergency leaks, our certified technicians handle it all with complete safety guarantees.",
  about_title: "Safety is Our\nReligion Today",
  about_subtitle: "Every technician carries a multi-point safety checklist. Before leaving, we verify zero leakage using certified pressure testing equipment. Your family's safety is non-negotiable.",
  testimonials_title: "Trusted by 5,000+ Families in Hyderabad",
  contact_title: "Don't Wait For An Emergency.\nGet It Fixed Today.",
  // About page
  about_hero_intro: "Started with a vision to eliminate gas-related hazards in Hyderabad, Yes Gas Agency has grown into the city's most trusted partner for premium, safe, and certified gas appliance servicing.",
  about_mission: "To provide absolutely safe, zero-leak, and highly efficient gas services within 60 minutes for every household in Hyderabad, ensuring peace of mind at every meal.",
  about_vision: "To become the gold standard in domestic gas apparatus maintenance across South India, pioneered by technology, speed, and uncompromising safety protocols.",
  // Services page
  services_page_title: "All Gas Services in Hyderabad",
  services_page_subtitle: "Certified, fast, and safe — every service comes with a 30-day warranty and ID-verified technicians.",
  // Contact page
  contact_address: "102, Hitech Lane, Madhapur, Hyderabad, Telangana 500081",
  contact_phone: "+91 81259 63038",
  contact_email: "support@yesgas.in",
  // Pricing page
  pricing_title: "Clear Pricing. No Surprises.",
  pricing_subtitle: "We charge flat straightforward fees for all standard procedures. Any spare parts required are billed separately strictly at MRP.",
  // How It Works
  how_it_works_title: "Fixed in 3 Simple Steps",
  how_it_works_subtitle: "From first call to working stove — the whole process is designed to be fast and hassle-free.",
  // FAQ
  faq_title: "Frequently Asked Questions",
  faq_subtitle: "Have a question about our repair process, pricing, or safety standards? Find practical answers here.",
  // Service Areas
  areas_title: "We Serve All of Hyderabad",
  areas_subtitle: "Technicians stationed across the city to reach you in 2–4 hours.",
  // Images
  hero_bg: "/hero-bg.png",
  service_1_img: "/service-stove-repair.png",
  service_2_img: "/service-burner-cleaning.png",
  service_3_img: "/service-pipeline.png",
  service_4_img: "/service-gas-leak.png",
  about_tech_img: "/technician.png"
};

let cachedContent: ContentData | null = null;
let fetchPromise: Promise<void> | null = null;

export function useContent() {
  const [content, setContent] = useState<ContentData>(cachedContent || fallbackContent);
  const [loading, setLoading] = useState(!cachedContent);

  useEffect(() => {
    if (cachedContent) {
      setContent(cachedContent);
      setLoading(false);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = Promise.all([
        fetch("/api/get_content.php").then(res => res.json()).catch(() => ({})),
        fetch("/api/get_images.php").then(res => res.json()).catch(() => ({}))
      ]).then(([textRes, imgRes]) => {
        let mergedData: Partial<ContentData> = {};
        if (textRes.success && textRes.data) {
          mergedData = { ...mergedData, ...textRes.data };
        }
        if (imgRes.success && imgRes.data) {
          mergedData = { ...mergedData, ...imgRes.data };
        }
        cachedContent = { ...fallbackContent, ...mergedData };
      }).catch((err) => {
        console.error("Failed to fetch dynamic content:", err);
        cachedContent = fallbackContent;
      });
    }

    fetchPromise.then(() => {
      if (cachedContent) {
        setContent(cachedContent);
      }
      setLoading(false);
    });
  }, []);

  return { content, loading };
}
