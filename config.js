// ===== إعدادات التطبيق / App settings =====
window.APP_CONFIG = {
  // ورقة المحتوى (LOs: ملفات وفيديوهات وكويزات) وورقة المواعيد
  RESOURCES_CSV: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDHLN3C02SvWfWU7Gqy1vivQepcbSKrTyfJAUOly1pOYDqMOG0OzGLccFVhoyrspjYDt_pbbv4CCWK/pub?gid=2028042843&single=true&output=csv",
  EVENTS_CSV: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDHLN3C02SvWfWU7Gqy1vivQepcbSKrTyfJAUOly1pOYDqMOG0OzGLccFVhoyrspjYDt_pbbv4CCWK/pub?gid=8042362&single=true&output=csv",
  // شيت المراجع وشيت المراجعة والامتحانات (كل واحد لوحده)
  REFERENCES_CSV: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7ChD7wCalTrkJtqcFiKMs6yCKwi8qXVGu1rdcbIgKGurm1EcfSP2uY8aWvDOpQA/pub?gid=1019266989&single=true&output=csv",
  REVISION_CSV: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTig4BxAJkrB7B20LesAZwjDirZR0fba4oj73rZRNgqY96x6sadZiIeNQNTQSSBcw/pub?gid=1649821499&single=true&output=csv",
  // خدمة الحسابات ونتائج الكويزات (Apps Script)
  API_URL: "https://script.google.com/macros/s/AKfycbyE7XaAzTWPdpU6Q1BXOmLr4h5WGAQgphRTSwB0g0qZzKAC6Sr5gZ18GQ--8i061YKjtw/exec",
  LOGOS: { chemistry: "icons/chemistry_logo.png", physics: "icons/physics_logo.png" },
  // قائمة النوادي / Clubs list. لإضافة نادي جديد: أضف سطر هنا + اسمه في T جوه app.js + اكتب id في عمود club في الشيت.
  // To add a club: add a line here, its name in T (app.js), and use the id in the sheet's "club" column.
  // "joint" القديمة في الشيت = النوادي دي بس / legacy "joint" rows in the sheet mean only these clubs
  JOINT_CLUBS: ["chemistry", "physics"],
  CLUBS: [
    { id: "chemistry", color: "#6D3FC7", tint: "#F1EBFC", logo: "icons/chemistry_logo.png" },
    { id: "physics",   color: "#1F5FD1", tint: "#E8F0FD", logo: "icons/physics_logo.png" },
    { id: "deutsch",   color: "#B45309", tint: "#FDF1E3", glyph: "DE" },
    { id: "mechanics", color: "#0F766E", tint: "#E3F5F3", glyph: "⚙" },
    { id: "capstone",  color: "#BE185D", tint: "#FCE9F1", glyph: "CP" },
    { id: "math",      color: "#15803D", tint: "#E6F5EB", glyph: "∑" },
  ],
};
