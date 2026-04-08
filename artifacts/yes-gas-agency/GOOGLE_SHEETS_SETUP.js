/**
 * YES GAS AGENCY — Google Sheets Integration Setup
 * ============================================
 * HOW TO USE:
 *
 * STEP 1: Create a Google Sheet
 *   - Go to sheets.google.com → create new sheet
 *   - Name the tab (bottom tab): "Booking"
 *   - Share this sheet with your email for access
 *
 * STEP 2: Open Apps Script
 *   - In the Google Sheet: Extensions → Apps Script
 *   - Delete all existing code in the editor
 *   - Paste ALL the code below (from the line "function doPost...")
 *
 * STEP 3: Deploy as Web App
 *   - Click "Deploy" → "New deployment"
 *   - Type: Web App
 *   - Execute as: Me
 *   - Who has access: Anyone
 *   - Click "Deploy" → copy the Web App URL
 *
 * STEP 4: Paste the URL in config.ts
 *   - Open src/config.ts
 *   - Paste the URL in: googleSheetsUrl: "PASTE_HERE"
 *
 * ============================================
 * PASTE THIS CODE INTO GOOGLE APPS SCRIPT:
 * ============================================
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet()
                  .getSheetByName("Booking")
                  || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Phone",
        "Service",
        "Address / Area",
        "Problem Description",
        "Source"
      ]);
      // Style header row
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#F97316").setFontColor("#ffffff");
    }

    // Parse incoming data
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (ex) {
        var params = e.postData.contents.split("&");
        for (var i = 0; i < params.length; i++) {
          var pair = params[i].split("=");
          data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
        }
      }
    }

    // Append the row
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name    || "",
      data.phone   || "",
      data.service || "",
      data.area    || data.address || "",
      data.problem || "",
      data.source  || "Website"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle form submissions via GET (works reliably from browsers)
  if (e.parameter && e.parameter.name) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet()
                    .getSheetByName("Booking")
                    || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(["Timestamp", "Full Name", "Phone", "Service", "Address / Area", "Problem Description", "Source"]);
        sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#F97316").setFontColor("#ffffff");
      }

      sheet.appendRow([
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        e.parameter.name    || "",
        e.parameter.phone   || "",
        e.parameter.service || "",
        e.parameter.area    || e.parameter.address || "",
        e.parameter.problem || "",
        e.parameter.source  || "Website"
      ]);

      return ContentService
        .createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Yes Gas Agency Sheets API is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}
