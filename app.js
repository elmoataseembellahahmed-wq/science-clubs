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
    offline: "You're offline. Showing the last saved content.", refresh: "Refresh", lang: "عربي", jointBadge: "Joint", account: "Profile", signIn: "Sign in", createAccount: "Create account", username: "Username", fullName: "Full name", password: "Password", signOut: "Sign out", myResults: "My results", noResults: "No results yet. Your score appears here a few minutes after you finish a quiz.", signInToSee: "Sign in to see your quiz results", signInFirst: "Sign in first to take this quiz", accountNote: "Only you can see your results. Use the same username when a quiz asks for it.", hello: "Signed in as", loadingRes: "Loading your results...", resultsErr: "Could not load results. Try again later.", err_invalid_username: "Username must be 3-20 letters, numbers, dot, dash or underscore.", err_invalid_password: "Password must be at least 6 characters.", err_invalid_name: "Please enter your name.", err_taken: "This username is already taken.", err_bad_credentials: "Wrong username or password.", err_locked: "Too many attempts. Try again in 10 minutes.", err_generic: "Something went wrong. Check your connection and try again.", pleaseWait: "Please wait...", accountSub: "Your private quiz results", quizTakeHint: "Sign in first", general: "General", items: "items", los: "LOs", losSub: "Files, videos and more, by LO", refsTitle: "References", refsPageSub: "Links and further reading", back: "Back", revision: "Revision", revisionTitle: "Revision & Exams", revisionMaterial: "Revision files", exams: "Exams", revisionSub: "Summaries, revision files and exams", revisionAll: "Revision files and exams from your club and joint ones", quizzes: "Quizzes", quizzesSub: "Test yourself", quizTitle: "Quizzes", quizAll: "Quizzes from your club and joint quizzes" },
  ar: { app: "نوادي العلوم", tagline: "نوادي مدرستك في مكان واحد", home: "الرئيسية", library: "المكتبة", events: "المواعيد", joint: "مشترك",
    chemistry: "الكيمياء", physics: "الفيزياء", next: "الاجتماع القادم", noNext: "مفيش اجتماعات قادمة لسه", files: "ملفات", videos: "فيديوهات", refs: "مراجع",
    filesSub: "ملخصات وسلايدات وشيتات", videosSub: "شرح وتجارب معملية", refsSub: "لينكات وقراءة إضافية", jointSpace: "المساحة المشتركة", jointSub: "الكيمياء + الفيزياء",
    recent: "أُضيف حديثًا", all: "الكل", search: "ابحث في المكتبة", empty: "مفيش حاجة هنا لسه.", upcoming: "القادم", jointTitle: "حيث تلتقي الكيمياء بالفيزياء",
    jointBlurb: "موضوعات ومواعيد ومواد يستخدمها النادِيان.", shared: "مشترك بين النادييْن", sharedMaterials: "مواد مشتركة", jointEvents: "فعاليات مشتركة",
    offline: "مفيش إنترنت. بنعرض آخر محتوى محفوظ.", refresh: "تحديث", lang: "EN", jointBadge: "مشترك", account: "حسابي", signIn: "تسجيل الدخول", createAccount: "إنشاء حساب", username: "اسم المستخدم", fullName: "الاسم بالكامل", password: "كلمة المرور", signOut: "تسجيل الخروج", myResults: "نتائجي", noResults: "مفيش نتائج لسه. نتيجتك بتظهر هنا بعد دقايق من ما تخلص الكويز.", signInToSee: "سجّل دخول عشان تشوف نتائج الكويزات", signInFirst: "سجّل دخول الأول عشان تحل الكويز", accountNote: "نتائجك ماحدش يشوفها غيرك. اكتب نفس اسم المستخدم لما الكويز يطلبه.", hello: "داخل باسم", loadingRes: "بنحمّل نتائجك...", resultsErr: "مقدرناش نحمّل النتائج. جرّب بعد شوية.", err_invalid_username: "اسم المستخدم من 3 لـ 20 حرف إنجليزي أو رقم أو . - _", err_invalid_password: "كلمة المرور لازم تكون 6 حروف على الأقل.", err_invalid_name: "اكتب اسمك.", err_taken: "اسم المستخدم ده مستخدم قبل كده.", err_bad_credentials: "اسم المستخدم أو كلمة المرور غلط.", err_locked: "محاولات كتير. جرّب بعد 10 دقايق.", err_generic: "حصلت مشكلة. اتأكد من الإنترنت وجرّب تاني.", pleaseWait: "استنى شوية...", accountSub: "نتائج الكويزات الخاصة بيك", quizTakeHint: "سجّل الدخول الأول", general: "عام", items: "عنصر", los: "LOs", losSub: "ملفات وفيديوهات وأكتر، لكل LO", refsTitle: "المراجع", refsPageSub: "لينكات وقراءة إضافية", back: "رجوع", revision: "المراجعة", revisionTitle: "المراجعة والامتحانات", revisionMaterial: "ملفات المراجعة", exams: "الامتحانات", revisionSub: "ملخصات وملفات مراجعة وامتحانات", revisionAll: "ملفات المراجعة والامتحانات الخاصة بناديك والمشتركة", quizzes: "الكويزات", quizzesSub: "اختبر نفسك", quizTitle: "الكويزات", quizAll: "كويزات ناديك والكويزات المشتركة" },
};

const S = {
  club: store.get("club", "chemistry") === "physics" ? "physics" : "chemistry",
  tab: "home", filter: "all", q: "", open: {},
  lang: store.get("lang", (navigator.language || "en").startsWith("ar") ? "ar" : "en"),
  resources: [], events: [], live: true,
  user: (() => { try { return JSON.parse(store.get("acct", "")) || null; } catch { return null; } })(),
  results: { state: "idle", list: [] }, acct: { mode: "login", err: "" }, form: {},
};
const t = (k) => T[S.lang][k];

const P = {
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  book: '<path d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M20 4h-6"/><path d="M20 4v14h-6"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  joint: '<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',
  file: '<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5"/>',
  video: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',
  revision: '<path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 4v5h-5"/>',
  exam: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12h6M9 16h4"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 015 .5c0 1.5-2.5 2-2.5 3.5M12 17v.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
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
const TYPES = { file: "file", "ملف": "file", video: "video", "فيديو": "video", reference: "reference", link: "reference", revision: "revision", "مراجعة": "revision", exam: "exam", "امتحان": "exam", quiz: "quiz", "كويز": "quiz", "اختبار": "quiz", "مرجع": "reference", "لينك": "reference" };
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
const toRes = (rows, base, forceType) => rows.map((x, i) => ({ club: CLUBS[x.club?.toLowerCase()] || null, type: forceType ? forceType(x) : (TYPES[x.type?.toLowerCase()] || "reference"),
  title: x.title, desc: x.description, url: x.url, lo: (x.lo || "").trim(), date: parseDate(x.date), i: base + i })).filter((x) => x.club && x.title);
async function loadAll() {
  // References and Revision can have their own published sheet (REFERENCES_CSV, REVISION_CSV in config.js).
  // Rows of those types in the main resources sheet still show up too.
  const extra = (u, k) => (u ? loadCsv(u, k) : Promise.resolve({ text: "", live: true }));
  const [r, e, rf, rv] = await Promise.all([loadCsv(CFG.RESOURCES_CSV, "csv_res"), loadCsv(CFG.EVENTS_CSV, "csv_evt"), extra(CFG.REFERENCES_CSV, "csv_ref"), extra(CFG.REVISION_CSV, "csv_rev")]);
  S.live = r.live && e.live && rf.live && rv.live;
  S.resources = [
    ...toRes(parseCsv(r.text), 0),
    ...toRes(parseCsv(rf.text), 10000, () => "reference"),
    ...toRes(parseCsv(rv.text), 20000, (x) => (TYPES[x.type?.toLowerCase()] === "exam" ? "exam" : "revision")),
  ];
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

// ---- accounts and private quiz results (needs API_URL in config.js) ----
const NEEDS_USER = /\{user\}|%7Buser%7D/i;
const FILL_USER = /\{user\}|%7Buser%7D/gi;
async function api(action, data) {
  const r = await fetch(CFG.API_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action, ...data }) });
  return r.json();
}
function setUser(u) { S.user = u; store.set("acct", u ? JSON.stringify(u) : ""); }
function signOut() { setUser(null); S.results = { state: "idle", list: [] }; S.acct = { mode: "login", err: "" }; S.form = {}; S.tab = "account"; render(); }
async function loadResults() {
  if (!CFG.API_URL || !S.user) return;
  S.results = { state: "loading", list: S.results.list }; render(true);
  try {
    const r = await api("results", { token: S.user.token });
    if (r.ok) S.results = { state: "ok", list: r.results || [] };
    else if (r.error === "auth") { signOut(); return; }
    else S.results = { state: "error", list: [] };
  } catch { S.results = { state: "error", list: [] }; }
  render(true);
}
async function submitAccount(form) {
  const v = Object.fromEntries(new FormData(form));
  const reg = S.acct.mode === "register";
  S.form = { username: v.username, name: v.name };
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = t("pleaseWait");
  try {
    const r = await api(reg ? "register" : "login", { username: v.username, name: v.name, password: v.password });
    if (r.ok) { setUser({ username: r.username, name: r.name, token: r.token }); S.acct.err = ""; S.form = {}; S.tab = "quizzes"; render(); loadResults(); return; }
    S.acct.err = T[S.lang]["err_" + r.error] || t("err_generic");
  } catch { S.acct.err = t("err_generic"); }
  render();
}
function resultTile(x) {
  const m = /([\d.]+)\s*\/\s*([\d.]+)/.exec(String(x.score));
  const pct = m && +m[2] ? Math.round((+m[1] / +m[2]) * 100) : null;
  const d = new Date(x.when);
  const when = x.when && !isNaN(d) ? new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short" }).format(d) : "";
  return `<div class="card"><div class="ico">${pct === null ? icon("quiz") : `<b class="pct">${pct}%</b>`}</div><div class="grow"><b dir="auto">${esc(x.quiz)}</b><span dir="auto">${esc(x.score)}${when ? " · " + when : ""}</span></div></div>`;
}
function resultsBlock() {
  if (!CFG.API_URL) return "";
  if (!S.user) return `<button class="card" data-go="account"><div class="ico">${icon("user")}</div><div class="grow"><b>${t("signInToSee")}</b></div></button>`;
  const R = S.results;
  const body = R.state === "loading" || R.state === "idle" ? `<p class="note">${t("loadingRes")}</p>`
    : R.state === "error" ? `<div class="warn">${t("resultsErr")}</div>`
    : !R.list.length ? `<p class="note">${t("noResults")}</p>` : R.list.map(resultTile).join("");
  return `<h2>${t("myResults")}</h2>${body}<h2>${t("quizzes")}</h2>`;
}
function accountScreen() {
  if (S.user) return `<div class="hero"><small>${t("hello")}</small><b dir="auto">${esc(S.user.name)}</b><span dir="ltr">@${esc(S.user.username)}</span></div><p class="note">${t("accountNote")}</p><button class="btn ghost" data-act="signout">${t("signOut")}</button>`;
  const reg = S.acct.mode === "register";
  return `<div class="seg" role="group"><button data-acct-mode="login" class="${reg ? "" : "on"}">${t("signIn")}</button><button data-acct-mode="register" class="${reg ? "on" : ""}">${t("createAccount")}</button></div>
  <form id="acct-form" class="form">
    <label for="f-user">${t("username")}</label><input id="f-user" name="username" autocomplete="username" autocapitalize="none" spellcheck="false" dir="ltr" required value="${esc(S.form.username || "")}">
    ${reg ? `<label for="f-name">${t("fullName")}</label><input id="f-name" name="name" autocomplete="name" required value="${esc(S.form.name || "")}">` : ""}
    <label for="f-pass">${t("password")}</label><input id="f-pass" name="password" type="password" autocomplete="${reg ? "new-password" : "current-password"}" minlength="6" required>
    ${S.acct.err ? `<div class="warn" role="alert">${esc(S.acct.err)}</div>` : ""}
    <button class="btn" type="submit">${reg ? t("createAccount") : t("signIn")}</button>
  </form><p class="note">${t("accountNote")}</p>`;
}

function resTile(r) {
  let url = r.url || "";
  if (r.type === "quiz" && NEEDS_USER.test(url)) {
    if (!CFG.API_URL) url = url.replace(FILL_USER, "");
    else if (!S.user) return `<button class="card" data-go="account"><div class="ico">${icon("quiz")}</div><div class="grow"><b dir="auto">${esc(r.title)}</b><span>${t("signInFirst")}</span></div></button>`;
    else url = url.replace(FILL_USER, encodeURIComponent(S.user.username));
  }
  r = { ...r, url };
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

// ---- learning objectives (LO) ----
const TYPE_ORDER = { file: 0, video: 1, reference: 2, revision: 3, exam: 3, quiz: 4 };
function groupByLo(items) {
  const m = new Map();
  [...items].sort((a, b) => a.i - b.i).forEach((r) => { if (!m.has(r.lo)) m.set(r.lo, []); m.get(r.lo).push(r); });
  const secs = [...m.entries()].map(([key, list]) => ({ key, list: list.sort((a, b) => TYPE_ORDER[a.type] - TYPE_ORDER[b.type] || (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0) || a.i - b.i) }));
  return secs.sort((a, b) => (a.key === "") - (b.key === ""));
}
function secHtml(id, title, list, open) {
  return `<section class="lo"><button class="lo-head" data-lo="${esc(id)}" data-open="${open ? 1 : 0}" aria-expanded="${open}"><span class="grow"><b dir="auto">${esc(title)}</b><span>${list.length} ${t("items")}</span></span><span class="chev" aria-hidden="true">${open ? "−" : "+"}</span></button>${open ? `<div class="lo-body">${list.map(resTile).join("")}</div>` : ""}</section>`;
}
function loSections(scope, items, forceOpen) {
  return groupByLo(items).map((sec, n) => {
    const id = scope + "|" + sec.key;
    return secHtml(id, sec.key || t("general"), sec.list, S.open[id] ?? (forceOpen || n === 0));
  }).join("");
}
const CHILD = ["references", "quizzes", "revision", "joint"]; // pages opened from Home tiles
const OWN_PAGE = ["reference", "revision", "exam", "quiz"]; // these never appear in the Library (LOs) page

// ---- screens ----
function home() {
  const evs = upcoming(S.events.filter((e) => e.club === S.club || e.club === "joint"));
  const next = evs[0];
  const when = next ? new Intl.DateTimeFormat(locale(), { weekday: "long", day: "numeric", month: "long" }).format(next.date) + [next.time && " · " + next.time, next.place && " · " + next.place].filter(Boolean).join("") : "";
  const recent = recentFirst(S.resources.filter((r) => r.club === S.club && !OWN_PAGE.includes(r.type))).slice(0, 3);
  const tile = (ic, b, s, tab, f, wide) => `<button class="tile${wide ? " wide" : ""}" data-go="${tab}" data-filter="${f || "all"}">${icon(ic, 26)}<b>${t(b)}</b><span>${t(s)}</span></button>`;
  return `<div class="hero"><small>${t("next")}</small><b dir="auto">${next ? esc(next.title) : t("noNext")}</b><span dir="auto">${esc(when)}</span></div>
  <div class="grid">${tile("book", "los", "losSub", "library")}${tile("reference", "refs", "refsSub", "references")}${tile("revision", "revision", "revisionSub", "revision")}${tile("quiz", "quizzes", "quizzesSub", "quizzes")}${tile("joint", "jointSpace", "jointSub", "joint", "all", true)}</div>
  <h2>${t("recent")}</h2>${recent.map(resTile).join("") || empty()}`;
}
function library() {
  const q = S.q.trim().toLowerCase();
  const items = recentFirst(S.resources.filter((r) => r.club === S.club && !OWN_PAGE.includes(r.type) && (!q || (r.title + " " + r.desc).toLowerCase().includes(q))));
  return `<input type="search" id="q" placeholder="${t("search")}" aria-label="${t("search")}" value="${esc(S.q)}">
  ${loSections(S.club, items, !!q) || empty()}`;
}
function eventsScreen() {
  const list = upcoming(S.events.filter((e) => e.club === S.club || e.club === "joint"));
  return `<h2>${t("upcoming")}</h2>${list.map(evTile).join("") || empty()}`;
}
function referencesScreen() {
  const list = recentFirst(S.resources.filter((r) => r.type === "reference" && (r.club === S.club || r.club === "joint")));
  const body = list.some((r) => r.lo) ? loSections(S.club + "-ref", list, true) : list.map(resTile).join("");
  return `<div class="hero"><small>${t("refs")}</small><b>${t("refsTitle")}</b><span>${t("refsPageSub")}</span></div>${body || empty()}`;
}
function quizzesScreen() {
  const list = recentFirst(S.resources.filter((r) => r.type === "quiz" && (r.club === S.club || r.club === "joint")));
  return `<div class="hero"><small>${t("quizzes")}</small><b>${t("quizTitle")}</b><span>${t("quizAll")}</span></div>${resultsBlock()}${list.map((r) => resTile({ ...r, desc: [r.lo, r.desc].filter(Boolean).join(" · ") })).join("") || empty()}`;
}
function revisionScreen() {
  const list = S.resources.filter((r) => ["revision", "exam"].includes(r.type) && (r.club === S.club || r.club === "joint"));
  const groups = [["revision", "revisionMaterial"], ["exam", "exams"]].map(([ty, label]) => {
    const items = recentFirst(list.filter((r) => r.type === ty));
    if (!items.length) return "";
    const id = S.club + "-rev|" + ty;
    return secHtml(id, t(label), items, S.open[id] ?? true);
  }).join("");
  return `<div class="hero"><small>${t("revision")}</small><b>${t("revisionTitle")}</b><span>${t("revisionAll")}</span></div>${groups || empty()}`;
}
function jointScreen() {
  const res = recentFirst(S.resources.filter((r) => r.club === "joint" && !OWN_PAGE.includes(r.type)));
  const evs = upcoming(S.events.filter((e) => e.club === "joint"));
  return `<div class="hero joint"><small>${t("shared")}</small><b>${t("jointTitle")}</b><span>${t("jointBlurb")}</span></div>
  <h2>${t("sharedMaterials")}</h2>${loSections("joint", res, false) || empty()}<h2>${t("jointEvents")}</h2>${evs.map(evTile).join("") || empty()}`;
}

// ---- shell ----
function render(keep) {
  const prev = keep ? document.querySelector("main")?.scrollTop : 0;
  const root = document.documentElement;
  root.dataset.club = S.club; root.lang = S.lang; root.dir = S.lang === "ar" ? "rtl" : "ltr";
  document.querySelector('meta[name="theme-color"]').content = clubColor(S.club);
  const screens = { home, library, events: eventsScreen, quizzes: quizzesScreen, revision: revisionScreen, references: referencesScreen, joint: jointScreen, account: accountScreen };
  const titles = { home: t("app"), library: t("library"), references: t("refsTitle"), events: t("events"), quizzes: t("quizzes"), revision: t("revisionTitle"), joint: t("jointSpace"), account: t("account") };
  const subs = { home: t("tagline"), library: t("losSub"), references: t("refsPageSub"), events: t("upcoming"), quizzes: t("quizzesSub"), revision: t("revisionSub"), joint: `${t("chemistry")} + ${t("physics")}`, account: t("accountSub") };
  const showSwitch = S.tab !== "joint" && S.tab !== "account";
  const logo = S.tab === "home" ? `<img src="icons/combined_logo.png" alt="" style="border-radius:50%;width:52px;height:52px">` : S.tab === "joint" || S.tab === "account" ? "" : `<img src="${esc(CFG.LOGOS[S.club])}" alt="">`;
  const back = CHILD.includes(S.tab) ? `<button class="icon-btn" data-go="home" aria-label="${t("back")}">${S.lang === "ar" ? "→" : "←"}</button>` : "";
  const app = document.getElementById("app");
  const fu = document.getElementById("f-user"), fn = document.getElementById("f-name");
  if (fu) S.form.username = fu.value;
  if (fn) S.form.name = fn.value;
  const keepFocusQ = document.activeElement?.id === "q";
  app.innerHTML = `<header><div class="top">${back}${logo}<div class="t"><div class="title">${titles[S.tab]}</div><div class="sub">${subs[S.tab]}</div></div>
    <button class="icon-btn" data-act="refresh" aria-label="${t("refresh")}">↻</button><button class="icon-btn" data-act="lang">${t("lang")}</button></div>
    ${showSwitch ? `<div class="switch" role="group">${["chemistry", "physics"].map((c) => `<button data-club="${c}" class="${S.club === c ? "on" : ""}" aria-pressed="${S.club === c}">${t(c)}</button>`).join("")}</div>` : ""}</header>
  <main>${S.live ? "" : `<div class="warn">${t("offline")}</div>`}${screens[S.tab]()}</main>
  <nav>${[["home", "home"], ["library", "book"], ["events", "cal"], ...(CFG.API_URL ? [["account", "user"]] : [])].map(([k, ic]) => `<button data-go="${k}" class="${S.tab === k || (k === "home" && CHILD.includes(S.tab)) ? "on" : ""}"${S.tab === k ? ' aria-current="page"' : ""}>${icon(ic)}<span>${t(k)}</span></button>`).join("")}</nav>`;
  if (prev) document.querySelector("main").scrollTop = prev;
  if (keepFocusQ) { const q = document.getElementById("q"); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-go],[data-club],[data-act],[data-filter-set],[data-lo],[data-acct-mode]");
  // the <html> element carries data-club too, so ignore anything outside the app
  if (!el || !document.getElementById("app").contains(el)) return;
  if (el.dataset.lo) { S.open[el.dataset.lo] = el.dataset.open !== "1"; render(true); return; }
  if (el.dataset.acctMode) { S.acct.mode = el.dataset.acctMode; S.acct.err = ""; render(); return; }
  if (el.dataset.act === "signout") { signOut(); return; }
  if (el.dataset.club) { S.club = el.dataset.club; store.set("club", S.club); }
  else if (el.dataset.filterSet) S.filter = el.dataset.filterSet;
  else if (el.dataset.go) { S.tab = el.dataset.go; S.filter = el.dataset.filter || "all"; S.q = ""; }
  else if (el.dataset.act === "lang") { S.lang = S.lang === "ar" ? "en" : "ar"; store.set("lang", S.lang); }
  else if (el.dataset.act === "refresh") { loadAll(); loadResults(); return; }
  render();
  if (el.dataset.go === "quizzes") loadResults();
});
document.addEventListener("input", (e) => { if (e.target.id === "q") { S.q = e.target.value; render(true); } });
document.addEventListener("submit", (e) => { if (e.target.id === "acct-form") { e.preventDefault(); submitAccount(e.target); } });
document.addEventListener("visibilitychange", () => { if (!document.hidden) { loadAll(); if (S.tab === "quizzes") loadResults(); } });

render();
loadAll();
if (S.user) loadResults();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
