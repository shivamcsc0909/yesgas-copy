import { SITE_CONFIG } from "@/config";

export async function submitLeadToSheets(payload: Record<string, string>): Promise<void> {
  const url = SITE_CONFIG.googleSheetsUrl;
  if (!url) return;

  const params = new URLSearchParams(payload).toString();
  const getUrl = `${url}?${params}`;

  // 1. Primary: fetch with mode: 'no-cors' and keepalive: true (never cancelled on page redirect)
  try {
    fetch(getUrl, {
      method: "GET",
      mode: "no-cors",
      keepalive: true,
      cache: "no-cache",
    }).catch((e) => console.warn("fetch error:", e));
  } catch (err) {
    console.warn("fetch failed:", err);
  }

  // 2. Secondary: navigator.sendBeacon if supported
  try {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: "text/plain" });
      navigator.sendBeacon(url, blob);
    }
  } catch (err) {}

  // 3. Fallback: invisible form in hidden iframe
  try {
    const iframeName = "sheets_iframe_" + Math.random().toString(36).slice(2);
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "GET";
    form.action = url;
    form.target = iframeName;

    Object.entries(payload).forEach(([k, v]) => {
      const inp = document.createElement("input");
      inp.type = "hidden";
      inp.name = k;
      inp.value = v;
      form.appendChild(inp);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      try {
        if (form.parentNode) document.body.removeChild(form);
        if (iframe.parentNode) document.body.removeChild(iframe);
      } catch (_) {}
    }, 4000);
  } catch (err) {}

  // Small delay so network dispatch is guaranteed before page unload
  await new Promise((r) => setTimeout(r, 350));
}

export async function submitLeadToPHP(payload: Record<string, string>): Promise<void> {
  try {
    await fetch("/api/add_lead.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    // Ignore PHP errors if backend is not PHP
  }
}
