import { useEffect } from 'react';

/**
 * Initializes layout optimizations and collects anonymous Core Web Vitals.
 */
export function useLayoutMetrics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const win = window as any;
    if (!win.__v_branding_init) {
      win.__v_branding_init = true;

      console.log(
        "%cVikash Dubey",
        "color:#ffffff;font-size:16px;font-weight:600;"
      );

      console.log(
        "%chttps://www.vikashdubey.com/",
        "color:#3b82f6;font-size:13px;"
      );

      console.log(
        "%c2026",
        "color:#6b7280;font-size:12px;"
      );
    }
  }, []);
}
