/**
 * ╔══════════════════════════════════════════════════════╗
 *  YES GAS AGENCY — SITE CONFIGURATION
 *  All editable values are here. Change once, updates everywhere.
 * ╚══════════════════════════════════════════════════════╝
 */

export const SITE_CONFIG = {

  // ── Brand ───────────────────────────────────────────
  brandName:   "Yes Gas Agency",
  tagline:     "Gas Stove Repair at Your Doorstep",

  // ── Phone / WhatsApp ─────────────────────────────────
  // Format for display: "+91 XXXXX XXXXX"
  // Format for phoneRaw: "91XXXXXXXXXX" (country code + number, no spaces)
  phone:       "+91 81259 63038",
  phoneRaw:    "918125963038",
  whatsapp:    "918125963038",

  // ── Email ────────────────────────────────────────────
  email:       "support@yesgas.in",

  // ── Location ─────────────────────────────────────────
  city:        "Hyderabad",
  serviceArea: "Hyderabad & Secunderabad",
  address:     "102, Hitech Lane, Madhapur, Hyderabad, Telangana 500081",

  // ── Working Hours ────────────────────────────────────
  workingHours: "8:00 AM – 9:00 PM",
  workingDays:  "Everyday, including Sundays",

  // ── Google Sheets Integration ─────────────────────────
  // SETUP INSTRUCTIONS:
  // 1. Create a new Google Sheet and name the first tab "Booking"
  // 2. Go to Extensions → Apps Script
  // 3. Paste the code from GOOGLE_SHEETS_SETUP.js (in project root)
  // 4. Click Deploy → New deployment → Web app
  googleSheetsUrl: "https://script.google.com/macros/s/AKfycbzIDYwY8i9NMXVTodJiAxXrKwMYQM3NpnnhdScHwsOHomrUC6oWqKU9tWcsys0QNYcO/exec",   // ← PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
};
