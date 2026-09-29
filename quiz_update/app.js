(() => {
const CFG = window.APP_CONFIG;
const store = {
  get(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

const T = {
  en: { app: "Science Clubs", tagline: "Your school clubs in one place", home: "Home", library: "Library", events: "Events", joint: "Joint",
    chemistry: "Chemistry", physics: "Physics", next: "Next meeting", noNext: "No upcoming meetings yet", files: "Files", videos: "Videos", refs: "References",
    filesSub: "Notes, slides, worksheets", videosSub: "Lessons and lab demos", refsSub: "Links and further reading", jointSpace: "Joint space", jointSub: "Chemistry + Physics",
    recent: "Recently added", all: "All", search: "Search the library", empty: "Nothing here yet.", upcoming: "Upcoming", jointTitle: "Where chemistry meets physics",
    jointBlurb: "Topics, events and materials that both clubs use.", shared: "SHARED BY BOTH CLUBS", sharedMaterials: "Shared materials", jointEvents: "Joint events",
    offline: "You're offline. Showing the last saved content.", refresh: "Refresh", lang: "عربي", jointBadge: "Joint", quizzes: "Quizzes", quizzesSub: "Test yourself", quizTitle: "Quizzes", quizAll: "Quizzes from your club and joint quizzes" },
  ar: { app: "نوادي العلوم", tagline: "نوادي مدرستك في مكان واحد", home: "الرئيسية", library: "المكتبة", events: "المواعيد", joint: "مشترك",
    chemistry: "الكيمياء", physics: "الفيزياء", next: "الاجتماع القادم", noNext: "مفيش اجتماعات قادمة لسه", files: "ملفات", videos: "فيديوهات", refs: "مراجع",
    filesSub: "ملخصات وسلايدات وشيتات", videosSub: "شرح وتجارب معملية", refsSub: "لينكات وقراءة إضافية", jointSpace: "المساحة المشتركة", jointSub: "الكيمياء + الفيزياء",
    recent: "أُضيف حديثًا", all: "الكل", search: "ابحث في المكتبة", empty: "مفيش حاجة هنا لسه.", upcoming: "القادم", jointTitle: "حيث تلتقي الكيمياء بالفيزياء",
    jointBlurb: "موضوعات ومواعيد ومواد يستخدمها النادِيان.", shared: "مشترك بين النادييْن", sharedMaterials: "مواد مشتركة", jointEvents: "فعاليات مشتركة",
    offline: "مفيش إنترنت. بنعرض آخر محتوى محفوظ.", refresh: "تحديث", lang: "EN", jointBadge: "مشترك", quizzes: "الكويزات", quizzesSub: "اختبر نفسك", quizTitle: "الكويزات", quizAll: "كويزات ناديك والكويزات المشتركة" },
};

const S = {
  club: store.get("club", "chemistry") === "physics" ? "physics" : "chemistry",
  tab: "home", filter: "all", q: "",
  lang: store.get("lang", (navigator.language || "en").startsWith("ar") ? "ar" : "en"),
  resources: [], events: [], live: true,
};
const t = (k) => T[S.lang][k];

const P = {
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  book: '<path d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M20 4h-6"/><path d="M20 4v14h-6"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  joint: '<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',
  file: '<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5"/>',
  video: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 015 .5c0 1.5-2.5 2-2.5 3.5M12 17v.5"/>',
  reference: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
};
const icon = (n, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const safeUrl = (u) => (/^https?:\/\//i.test(u) ? u : "#");

// ---- CSV ----
function parseCsv(text) {
  const rows = []; let row = [], f = "", q = false;
  text = text.replace(/^﻿/, "");
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(f); rows.push(row); row = []; f = ""; }
    else f += c;
  }
  if (f !== "" || row.length) { row.push(f); rows.push(row); }
  if (!rows.length) return [];
  const head = rows[0].map((h) => h.trim().toLowerCase());
  return rows.slice(1).filter((r) => r.some((x) => x.trim())).map((r) => Object.fromEntries(head.map((h, i) => [h, (r[i] ?? "").trim()])));
}
const CLUBS = { chemistry: "chemistry", "كيمياء": "chemistry", "الكيمياء": "chemistry", physics: "physics", "فيزياء": "physics", "الفيزياء": "physics", joint: "joint", "مشترك": "joint" };
const TYPES = { file: "file", "ملف": "file", video: "video", "فيديو": "video", reference: "reference", link: "reference", quiz: "quiz", "كويز": "quiz", "اختبار": "quiz", "مرجع": "reference", "لينك": "reference" };
function parseDate(s) { const m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(s || ""); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }

async function loadCsv(url, key) {
  try {
    const r = await fetch(url, { cache: "no-store" });
    if (!r.ok) throw new Error(r.status);
    const text = await r.text();
    store.set(key, text);
    return { text, live: true };
  } catch { return { text: store.get(key, ""), live: false }; }
}
async function loadAll() {
  const [r, e] = await Promise.all([loadCsv(CFG.RESOURCES_CSV, "csv_res"), loadCsv(CFG.EVENTS_CSV, "csv_evt")]);
  S.live = r.live && e.live;
  S.resources = parseCsv(r.text).map((x, i) => ({ club: CLUBS[x.club?.toLowerCase()] || null, type: TYPES[x.type?.toLowerCase()] || "reference",
    title: x.title, desc: x.description, url: x.url, date: parseDate(x.date), i })).filter((x) => x.club && x.title);
  S.events = parseCsv(e.text).map((x) => ({ club: CLUBS[x.club?.toLowerCase()] || null, title: x.title, date: parseDate(x.date), time: x.time, place: x.place, note: x.note }))
    .filter((x) => x.club && x.title && x.date);
  render();
}

// ---- helpers ----
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const locale = () => (S.lang === "ar" ? "ar-EG" : "en-GB");
const upcoming = (list) => list.filter((e) => e.date >= today()).sort((a, b) => a.date - b.date);
const recentFirst = (list) => [...list].sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0) || b.i - a.i);
const clubColor = (c) => (c === "chemistry" ? "#6D3FC7" : c === "physics" ? "#1F5FD1" : "#4B4FC9");

function resTile(r) {
  return `<a class="card" href="${esc(safeUrl(r.url))}" target="_blank" rel="noopener"><div class="ico">${icon(r.type)}</div><div class="grow"><b dir="auto">${esc(r.title)}</b><span dir="auto">${esc(r.desc)}</span></div></a>`;
}
function evTile(e) {
  const mon = new Intl.DateTimeFormat(locale(), { month: "short" }).format(e.date);
  const where = [e.time, e.place].filter(Boolean).join(" · ");
  return `<div class="card"><div class="date" style="background:${clubColor(e.club)}"><small>${esc(mon)}</small><b>${new Intl.NumberFormat(locale()).format(e.date.getDate())}</b></div>
  <div class="grow"><b dir="auto">${esc(e.title)}</b><span dir="auto">${esc(where)}${e.note ? " — " + esc(e.note) : ""}</span></div>
  ${e.club === "joint" ? `<span class="badge">${t("jointBadge")}</span>` : ""}</div>`;
}
const empty = () => `<p class="note">${t("empty")}</p>`;

// ---- screens ----
function home() {
  const evs = upcoming(S.events.filter((e) => e.club === S.club || e.club === "joint"));
  const next = evs[0];
  const when = next ? new Intl.DateTimeFormat(locale(), { weekday: "long", day: "numeric", month: "long" }).format(next.date) + [next.time && " · " + next.time, next.place && " · " + next.place].filter(Boolean).join("") : "";
  const recent = recentFirst(S.resources.filter((r) => r.club === S.club && r.type !== "quiz")).slice(0, 3);
  const tile = (ic, b, s, tab, f, wide) => `<button class="tile${wide ? " wide" : ""}" data-go="${tab}" data-filter="${f || "all"}">${icon(ic, 26)}<b>${t(b)}</b><span>${t(s)}</span></button>`;
  return `<div class="hero"><small>${t("next")}</small><b dir="auto">${next ? esc(next.title) : t("noNext")}</b><span dir="auto">${esc(when)}</span></div>
  <div class="grid">${tile("file", "files", "filesSub", "library", "file")}${tile("video", "videos", "videosSub", "library", "video")}${tile("reference", "refs", "refsSub", "library", "reference")}${tile("quiz", "quizzes", "quizzesSub", "quizzes")}${tile("joint", "jointSpace", "jointSub", "joint", "all", true)}</div>
  <h2>${t("recent")}</h2>${recent.map(resTile).join("") || empty()}`;
}
function library() {
  const q = S.q.trim().toLowerCase();
  const items = recentFirst(S.resources.filter((r) => r.club === S.club && r.type !== "quiz" && (S.filter === "all" || r.type === S.filter) && (!q || (r.title + " " + r.desc).toLowerCase().includes(q))));
  const chip = (k, l) => `<button data-filter-set="${k}" class="${S.filter === k ? "on" : ""}">${t(l)}</button>`;
  return `<input type="search" id="q" placeholder="${t("search")}" aria-label="${t("search")}" value="${esc(S.q)}">
  <div class="chips">${chip("all", "all")}${chip("file", "files")}${chip("video", "videos")}${chip("reference", "refs")}</div>${items.map(resTile).join("") || empty()}`;
}
function eventsScreen() {
  const list = upcoming(S.events.filter((e) => e.club === S.club || e.club === "joint"));
  return `<h2>${t("upcoming")}</h2>${list.map(evTile).join("") || empty()}`;
}
function quizzesScreen() {
  const list = recentFirst(S.resources.filter((r) => r.type === "quiz" && (r.club === S.club || r.club === "joint")));
  return `<div class="hero"><small>${t("quizzes")}</small><b>${t("quizTitle")}</b><span>${t("quizAll")}</span></div>${list.map(resTile).join("") || empty()}`;
}
function jointScreen() {
  const res = recentFirst(S.resources.filter((r) => r.club === "joint"));
  const evs = upcoming(S.events.filter((e) => e.club === "joint"));
  return `<div class="hero joint"><small>${t("shared")}</small><b>${t("jointTitle")}</b><span>${t("jointBlurb")}</span></div>
  <h2>${t("sharedMaterials")}</h2>${res.map(resTile).join("") || empty()}<h2>${t("jointEvents")}</h2>${evs.map(evTile).join("") || empty()}`;
}

// ---- shell ----
function render() {
  const root = document.documentElement;
  root.dataset.club = S.club; root.lang = S.lang; root.dir = S.lang === "ar" ? "rtl" : "ltr";
  document.querySelector('meta[name="theme-color"]').content = clubColor(S.club);
  const screens = { home, library, events: eventsScreen, quizzes: quizzesScreen, joint: jointScreen };
  const titles = { home: t("app"), library: t("library"), events: t("events"), quizzes: t("quizzes"), joint: t("jointSpace") };
  const subs = { home: t("tagline"), library: `${t("files")} · ${t("videos")} · ${t("refs")}`, events: t("upcoming"), quizzes: t("quizzesSub"), joint: `${t("chemistry")} + ${t("physics")}` };
  const showSwitch = S.tab !== "joint";
  const logo = S.tab === "joint" ? "" : `<img src="${esc(CFG.LOGOS[S.club])}" alt="">`;
  const app = document.getElementById("app");
  const keepFocusQ = document.activeElement?.id === "q";
  app.innerHTML = `<header><div class="top">${logo}<div class="t"><div class="title">${titles[S.tab]}</div><div class="sub">${subs[S.tab]}</div></div>
    <button class="icon-btn" data-act="refresh" aria-label="${t("refresh")}">↻</button><button class="icon-btn" data-act="lang">${t("lang")}</button></div>
    ${showSwitch ? `<div class="switch" role="group">${["chemistry", "physics"].map((c) => `<button data-club="${c}" class="${S.club === c ? "on" : ""}" aria-pressed="${S.club === c}">${t(c)}</button>`).join("")}</div>` : ""}</header>
  <main>${S.live ? "" : `<div class="warn">${t("offline")}</div>`}${screens[S.tab]()}</main>
  <nav>${[["home", "home"], ["library", "book"], ["events", "cal"], ["quizzes", "quiz"], ["joint", "joint"]].map(([k, ic]) => `<button data-go="${k}" class="${S.tab === k ? "on" : ""}">${icon(ic)}<span>${t(k)}</span></button>`).join("")}</nav>`;
  if (keepFocusQ) { const q = document.getElementById("q"); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-go],[data-club],[data-act],[data-filter-set]");
  if (!el) return;
  if (el.dataset.club) { S.club = el.dataset.club; store.set("club", S.club); }
  else if (el.dataset.filterSet) S.filter = el.dataset.filterSet;
  else if (el.dataset.go) { S.tab = el.dataset.go; S.filter = el.dataset.filter || "all"; S.q = ""; }
  else if (el.dataset.act === "lang") { S.lang = S.lang === "ar" ? "en" : "ar"; store.set("lang", S.lang); }
  else if (el.dataset.act === "refresh") { loadAll(); return; }
  render();
});
document.addEventListener("input", (e) => { if (e.target.id === "q") { S.q = e.target.value; render(); } });
document.addEventListener("visibilitychange", () => { if (!document.hidden) loadAll(); });

render();
loadAll();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
