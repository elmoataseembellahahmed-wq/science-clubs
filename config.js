// ===== إعدادات التطبيق / App settings =====
// حط هنا لينكات الجدول (Publish to web -> CSV) بدل ملفات التجربة.
// Put your published Google Sheet CSV links here instead of the sample files.
window.APP_CONFIG = {
  RESOURCES_CSV: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDHLN3C02SvWfWU7Gqy1vivQepcbSKrTyfJAUOly1pOYDqMOG0OzGLccFVhoyrspjYDt_pbbv4CCWK/pub?gid=2028042843&single=true&output=csv",
  EVENTS_CSV: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDHLN3C02SvWfWU7Gqy1vivQepcbSKrTyfJAUOly1pOYDqMOG0OzGLccFVhoyrspjYDt_pbbv4CCWK/pub?gid=8042362&single=true&output=csv",
  // Address of the accounts and results service (Google Apps Script). Leave empty to hide accounts.
  API_URL: "https://script.google.com/macros/s/AKfycbyE7XaAzTWPdpU6Q1BXOmLr4h5WGAQgphRTSwB0g0qZzKAC6Sr5gZ18GQ--8i061YKjtw/exec",
  // Logo paths per club. Replace icons/physics_logo.png with your real logo (png/svg) and update the path.
  LOGOS: { chemistry: "icons/chemistry_logo.png", physics: "icons/physics_logo.png" },
};
