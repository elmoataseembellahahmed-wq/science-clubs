(() => {
const CFG = window.APP_CONFIG;
const store = {
  get(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

const T = {
  en: { app: "Science Clubs", tagline: "Your school clubs in one place", home: "Home", library: "Library", events: "Events", joint: "Joint",
    chemistry: "Chemistry", physics: "Physics", deutsch: "Deutsch", mechanics: "Mechanics", capstone: "Capstone", math: "Math", next: "Next meeting", noNext: "No upcoming meetings yet", files: "Files", videos: "Videos", refs: "References",
    filesSub: "Notes, slides, worksheets", videosSub: "Lessons and lab demos", refsSub: "Links and further reading", jointSpace: "Joint space", jointSub: "Shared with other clubs",
    recent: "Recently added", all: "All", search: "Search the library", empty: "Nothing here yet.", upcoming: "Upcoming", jointTitle: "Where our clubs meet",
    jointBlurb: "Topics, events and materials your club shares with other clubs.", shared: "SHARED WITH OTHER CLUBS", sharedMaterials: "Shared materials", jointEvents: "Joint events",
    refreshing: "Refreshing…", updated: "Updated ✓", support: "Support", supportSub: "Ask us anything, we reply here", askTitle: "Ask the team", askPh: "Write your question…", send: "Send", sending: "Sending…", sentOk: "Sent. We will reply here.", myQuestions: "Your questions", teamReply: "Team reply", waiting: "Waiting for a reply", noQuestions: "No questions yet.", signInToAsk: "Sign in to contact the team", supportErr: "Could not load your questions.", err_empty: "Write your question first.", err_too_long: "Message is too long (max 500 characters).", err_too_fast: "You sent many messages. Try again in a little while.", offline: "You're offline. Showing the last saved content.", refresh: "Refresh", lang: "عربي", jointBadge: "Joint", account: "Profile", signIn: "Sign in", createAccount: "Create account", username: "Username", fullName: "Full name", password: "Password", signOut: "Sign out", myResults: "My results", noResults: "No results yet. Your score appears here a few minutes after you finish a quiz.", signInToSee: "Sign in to see your quiz results", signInFirst: "Sign in first to take this quiz", accountNote: "Only you can see your results. Use the same username when a quiz asks for it.", hello: "Signed in as", loadingRes: "Loading your results...", resultsErr: "Could not load results. Try again later.", err_invalid_username: "Username must be 3-20 letters, numbers, dot, dash or underscore.", err_invalid_password: "Password must be at least 6 characters.", err_invalid_name: "Please enter your name.", err_taken: "This username is already taken.", err_bad_credentials: "Wrong username or password.", err_locked: "Too many attempts. Try again in 10 minutes.", err_generic: "Something went wrong. Check your connection and try again.", pleaseWait: "Please wait...", accountSub: "Your private quiz results", quizTakeHint: "Sign in first", general: "General", items: "items", los: "LOs", losSub: "Files, videos and more, by LO", refsTitle: "References", refsPageSub: "Links and further reading", back: "Back", download: "Download", downloading: "Downloading…", dlNote: "Download started. Big files can take a few minutes depending on your internet. Follow the progress in your phone's notifications and find the file in Downloads.", openExt: "Open in browser", revision: "Revision", revisionTitle: "Revision & Exams", revisionMaterial: "Revision files", exams: "Exams", revisionSub: "Summaries, revision files and exams", revisionAll: "Revision files and exams from your club and joint ones", quizzes: "Quizzes", quizzesSub: "Test yourself", quizTitle: "Quizzes", quizAll: "Quizzes from your club and joint quizzes" },
  ar: { app: "نوادي العلوم", tagline: "نوادي مدرستك في مكان واحد", home: "الرئيسية", library: "المكتبة", events: "المواعيد", joint: "مشترك",
    chemistry: "الكيمياء", physics: "الفيزياء", deutsch: "الألماني", mechanics: "الميكانيكا", capstone: "الكابستون", math: "الرياضيات", next: "الاجتماع القادم", noNext: "مفيش اجتماعات قادمة لسه", files: "ملفات", videos: "فيديوهات", refs: "مراجع",
    filesSub: "ملخصات وسلايدات وشيتات", videosSub: "شرح وتجارب معملية", refsSub: "لينكات وقراءة إضافية", jointSpace: "المساحة المشتركة", jointSub: "مشترك مع نوادي تانية",
    recent: "أُضيف حديثًا", all: "الكل", search: "ابحث في المكتبة", empty: "مفيش حاجة هنا لسه.", upcoming: "القادم", jointTitle: "حيث تلتقي نوادينا",
    jointBlurb: "موضوعات ومواعيد ومواد ناديك بيشاركها مع نوادي تانية.", shared: "مشترك مع نوادي تانية", sharedMaterials: "مواد مشتركة", jointEvents: "فعاليات مشتركة",
    refreshing: "جاري التحديث…", updated: "تم التحديث ✓", support: "الدعم", supportSub: "اسألنا وهنرد عليك هنا", askTitle: "اسأل الفريق", askPh: "اكتب سؤالك…", send: "إرسال", sending: "جاري الإرسال…", sentOk: "اتبعت. هنرد عليك هنا.", myQuestions: "أسئلتك", teamReply: "رد الفريق", waiting: "في انتظار الرد", noQuestions: "مفيش أسئلة لسه.", signInToAsk: "سجّل دخول عشان تتواصل مع الفريق", supportErr: "مقدرناش نحمّل أسئلتك.", err_empty: "اكتب سؤالك الأول.", err_too_long: "الرسالة طويلة (الحد 500 حرف).", err_too_fast: "بعتّ رسائل كتير. جرّب بعد شوية.", offline: "مفيش إنترنت. بنعرض آخر محتوى محفوظ.", refresh: "تحديث", lang: "EN", jointBadge: "مشترك", account: "حسابي", signIn: "تسجيل الدخول", createAccount: "إنشاء حساب", username: "اسم المستخدم", fullName: "الاسم بالكامل", password: "كلمة المرور", signOut: "تسجيل الخروج", myResults: "نتائجي", noResults: "مفيش نتائج لسه. نتيجتك بتظهر هنا بعد دقايق من ما تخلص الكويز.", signInToSee: "سجّل دخول عشان تشوف نتائج الكويزات", signInFirst: "سجّل دخول الأول عشان تحل الكويز", accountNote: "نتائجك ماحدش يشوفها غيرك. اكتب نفس اسم المستخدم لما الكويز يطلبه.", hello: "داخل باسم", loadingRes: "بنحمّل نتائجك...", resultsErr: "مقدرناش نحمّل النتائج. جرّب بعد شوية.", err_invalid_username: "اسم المستخدم من 3 لـ 20 حرف إنجليزي أو رقم أو . - _", err_invalid_password: "كلمة المرور لازم تكون 6 حروف على الأقل.", err_invalid_name: "اكتب اسمك.", err_taken: "اسم المستخدم ده مستخدم قبل كده.", err_bad_credentials: "اسم المستخدم أو كلمة المرور غلط.", err_locked: "محاولات كتير. جرّب بعد 10 دقايق.", err_generic: "حصلت مشكلة. اتأكد من الإنترنت وجرّب تاني.", pleaseWait: "استنى شوية...", accountSub: "نتائج الكويزات الخاصة بيك", quizTakeHint: "سجّل الدخول الأول", general: "عام", items: "عنصر", los: "LOs", losSub: "ملفات وفيديوهات وأكتر، لكل LO", refsTitle: "المراجع", refsPageSub: "لينكات وقراءة إضافية", back: "رجوع", download: "تحميل", downloading: "جاري التحميل…", dlNote: "بدأ التحميل. الملفات الكبيرة ممكن ياخدوا كام دقيقة حسب سرعة النت. تابع التحميل من إشعارات الموبايل (الشريط اللي فوق)، وهتلاقي الملف في فولدر Downloads.", openExt: "فتح في المتصفح", revision: "المراجعة", revisionTitle: "المراجعة والامتحانات", revisionMaterial: "ملفات المراجعة", exams: "الامتحانات", revisionSub: "ملخصات وملفات مراجعة وامتحانات", revisionAll: "ملفات المراجعة والامتحانات الخاصة بناديك والمشتركة", quizzes: "الكويزات", quizzesSub: "اختبر نفسك", quizTitle: "الكويزات", quizAll: "كويزات ناديك والكويزات المشتركة" },
};

Object.assign(T.en, {
  admin: "Admin", adminSub: "Manage your club content", adminBadge: "Admin", roleSuper: "Main admin (all clubs)", student: "Student",
  adm_content: "Content", adm_inbox: "Messages", adm_team: "Team",
  addEvent: "+ Event", addResource: "+ Material", fhEvent: "Event", fhRes: "Material",
  edit: "Edit", del: "Delete", cancel: "Cancel", save: "Save", saving: "Saving…", saved: "Saved ✓", deleted: "Deleted ✓", confirmDel: "Delete this item?",
  fClubs: "Clubs", fAll: "All clubs", fTitle: "Title", fDate: "Date", fDateOpt: "Date (optional)", fTime: "Time", fPlace: "Place", fNote: "Note", fType: "Type",
  fDesc: "Description", fUrl: "Link (https://…)", fLo: "Group / learning outcome (optional)",
  quizHint: "Paste the Google Form link. Put {user} in the link to pre-fill the student's username.",
  evSection: "Events", resSection: "Materials", nothingYet: "Nothing added from the app yet.",
  legacyNote: "Items that still come from the old sheets can't be edited here. Run importLegacy once in Apps Script to bring them in.",
  noAccess: "This page is for admins only.", replyPh: "Write your reply…", sendReply: "Send reply", updateReply: "Update reply", noMsgs: "No messages.", answered: "Answered",
  changeRole: "Change role", searchUsers: "Search by name or username", roleNote: "A main admin controls every club. Otherwise pick the clubs this person manages.", roleSaved: "Role updated ✓",
  err_forbidden: "You don't have permission for this.", err_invalid_club: "Pick at least one of your clubs.", err_invalid_title: "Enter a title.",
  err_invalid_date: "Check the date.", err_invalid_time: "Check the time.", err_invalid_url: "Enter a valid link starting with https://", err_invalid_type: "Pick a type.",
  err_not_found: "Item not found.", err_self: "You can't change your own role.",
});
Object.assign(T.ar, {
  admin: "الإدارة", adminSub: "إدارة محتوى ناديك", adminBadge: "أدمن", roleSuper: "أدمن رئيسي (كل النوادي)", student: "طالب",
  adm_content: "المحتوى", adm_inbox: "الرسائل", adm_team: "الفريق",
  addEvent: "+ موعد", addResource: "+ مادة", fhEvent: "موعد", fhRes: "مادة",
  edit: "تعديل", del: "حذف", cancel: "إلغاء", save: "حفظ", saving: "جاري الحفظ…", saved: "تم الحفظ ✓", deleted: "تم الحذف ✓", confirmDel: "تحذف العنصر ده؟",
  fClubs: "النوادي", fAll: "كل النوادي", fTitle: "العنوان", fDate: "التاريخ", fDateOpt: "التاريخ (اختياري)", fTime: "الوقت", fPlace: "المكان", fNote: "ملاحظة", fType: "النوع",
  fDesc: "الوصف", fUrl: "اللينك (https://…)", fLo: "المجموعة / الـ LO (اختياري)",
  quizHint: "الصق لينك الجوجل فورم. لو عايز اسم المستخدم يتملي لوحده حط {user} في اللينك.",
  evSection: "المواعيد", resSection: "المواد", nothingYet: "لسه مفيش حاجة اتضافت من التطبيق.",
  legacyNote: "المحتوى اللي لسه جاي من الشيتات القديمة مش بيتعدل من هنا. شغّل importLegacy مرة واحدة في Apps Script عشان يتنقل.",
  noAccess: "الصفحة دي للأدمن بس.", replyPh: "اكتب ردك…", sendReply: "ابعت الرد", updateReply: "عدّل الرد", noMsgs: "مفيش رسايل.", answered: "اتجاوب",
  changeRole: "تغيير الصلاحية", searchUsers: "دوّر بالاسم أو اسم المستخدم", roleNote: "الأدمن الرئيسي بيتحكم في كل النوادي. غير كده اختار النوادي اللي الشخص ده مسؤول عنها.", roleSaved: "تم تحديث الصلاحية ✓",
  err_forbidden: "معندكش صلاحية لده.", err_invalid_club: "اختار نادي واحد على الأقل من نوادي حسابك.", err_invalid_title: "اكتب عنوان.",
  err_invalid_date: "راجع التاريخ.", err_invalid_time: "راجع الوقت.", err_invalid_url: "اكتب لينك صحيح يبدأ بـ https://", err_invalid_type: "اختار النوع.",
  err_not_found: "العنصر مش موجود.", err_self: "مينفعش تغيّر صلاحيتك أنت.",
});

Object.assign(T.en, {
  pickClubs: "Choose your club(s)", myClubs: "My clubs", saveClubs: "Save my clubs", clubsSaved: "Clubs updated ✓",
  gateLogin: "Sign in or create an account to see your club.", gateClubs: "Choose your club to continue.",
  err_pick_club: "Choose at least one club.", err_need_two: "A shared session needs at least two clubs, including yours.",
  questionsWord: "questions", attemptsLbl: "Attempts", attemptsUnl: "Unlimited", attemptsLeft: "Attempts left",
  qzSubmit: "Submit answers", qzAnswerAll: "Answer every question to submit.", qzScore: "Your score", qzRetake: "Try again", qzBack: "Back to quizzes",
  qzRight: "Correct", qzWrong: "Wrong", qzCorrectAns: "Correct answer", qzYour: "Your answer", qzLoadErr: "Couldn't open this quiz.", qzNoAnswer: "No answer",
  err_attempts_done: "You've used all your attempts for this quiz.", err_invalid_questions: "Each question needs text, at least 2 options and one correct answer.",
  addQuiz: "+ Quiz", fhQuiz: "Quiz", question: "Question", option: "Option", correctMark: "Correct answer", addQuestion: "+ Question", addOption: "+ Option",
  explainLbl: "Explanation (optional)", results: "Results", noAttempts: "Nobody has taken this quiz yet.", qSection: "Quizzes",
  uploadFile: "Upload a file (max 8 MB) or paste a link below", uploading: "Uploading…", uploaded: "Uploaded ✓", err_too_big: "File is too big (max 8 MB).", err_invalid_file: "This file type isn't allowed.",
  reqTitle: "Shared sessions", reqEvent: "Request shared event", reqMat: "Request shared material", reqNote: "Note to the main admin (optional)", reqSend: "Send request",
  reqSent: "Request sent ✓", reqHint: "A session shared between clubs needs the main admin's approval. Pick your club plus the other clubs.",
  myRequests: "My requests", adm_requests: "Requests", approve: "Approve", reject: "Reject", pending: "Pending", approved: "Approved", rejected: "Rejected",
  approvedOk: "Approved ✓", rejectedOk: "Rejected", by: "From", noRequests: "No requests.",
});
Object.assign(T.ar, {
  pickClubs: "اختار ناديك (أو نواديك)", myClubs: "نواديّ", saveClubs: "احفظ نواديّ", clubsSaved: "تم تحديث النوادي ✓",
  gateLogin: "سجّل دخولك أو اعمل حساب عشان تشوف ناديك.", gateClubs: "اختار ناديك عشان تكمل.",
  err_pick_club: "اختار نادي واحد على الأقل.", err_need_two: "الجلسة المشتركة لازم تبقى بين نادييْن على الأقل، من ضمنهم ناديك.",
  questionsWord: "سؤال", attemptsLbl: "المحاولات", attemptsUnl: "مفتوحة", attemptsLeft: "محاولات متبقية",
  qzSubmit: "سلّم الإجابات", qzAnswerAll: "جاوب على كل الأسئلة عشان تسلّم.", qzScore: "درجتك", qzRetake: "حاول تاني", qzBack: "رجوع للكويزات",
  qzRight: "صح", qzWrong: "غلط", qzCorrectAns: "الإجابة الصح", qzYour: "إجابتك", qzLoadErr: "مقدرناش نفتح الكويز ده.", qzNoAnswer: "من غير إجابة",
  err_attempts_done: "خلّصت كل محاولاتك في الكويز ده.", err_invalid_questions: "كل سؤال لازم يبقى له نص واختيارين على الأقل وإجابة صح واحدة.",
  addQuiz: "+ كويز", fhQuiz: "كويز", question: "سؤال", option: "اختيار", correctMark: "الإجابة الصح", addQuestion: "+ سؤال", addOption: "+ اختيار",
  explainLbl: "شرح (اختياري)", results: "النتائج", noAttempts: "لسه محدش حل الكويز ده.", qSection: "الكويزات",
  uploadFile: "ارفع ملف (حد أقصى 8 ميجا) أو الصق لينك تحت", uploading: "جاري الرفع…", uploaded: "اترفع ✓", err_too_big: "الملف كبير (الحد الأقصى 8 ميجا).", err_invalid_file: "نوع الملف ده مش مسموح.",
  reqTitle: "الجلسات المشتركة", reqEvent: "اطلب موعد مشترك", reqMat: "اطلب مادة مشتركة", reqNote: "ملاحظة للمشرف العام (اختياري)", reqSend: "ابعت الطلب",
  reqSent: "الطلب اتبعت ✓", reqHint: "الجلسة المشتركة بين النوادي لازم المشرف العام يوافق عليها. اختار ناديك مع النوادي التانية.",
  myRequests: "طلباتي", adm_requests: "الطلبات", approve: "موافقة", reject: "رفض", pending: "في الانتظار", approved: "تمت الموافقة", rejected: "مرفوض",
  approvedOk: "تمت الموافقة ✓", rejectedOk: "تم الرفض", by: "من", noRequests: "مفيش طلبات.",
});

const VERSION = "2026.10.07-clubs-quiz";
const CLUB_LIST = CFG.CLUBS || [{ id: "chemistry", color: "#6D3FC7", tint: "#F1EBFC" }, { id: "physics", color: "#1F5FD1", tint: "#E8F0FD" }];
const clubInfo = (id) => CLUB_LIST.find((c) => c.id === id);
const S = {
  club: clubInfo(store.get("club", "")) ? store.get("club", "") : CLUB_LIST[0].id,
  tab: "home", filter: "all", q: "", open: {},
  lang: store.get("lang", (navigator.language || "en").startsWith("ar") ? "ar" : "en"),
  resources: [], events: [], quizzes: [], qz: null, myc: undefined, live: true,
  user: (() => { try { return JSON.parse(store.get("acct", "")) || null; } catch { return null; } })(),
  results: { state: "idle", list: [] }, support: { state: "idle", list: [] }, draft: "", supErr: "", supOk: false, sending: false, acct: { mode: "login", err: "" }, form: {},
};
// Each person only sees their own clubs (chosen at sign-up) plus the clubs they administer. The main admin sees all.
const visibleIds = () => {
  if (!CFG.API_URL) return CLUB_LIST.map((c) => c.id);
  const u = S.user; if (!u) return [];
  if (u.role?.super) return CLUB_LIST.map((c) => c.id);
  const ids = [...(u.clubs || []), ...(u.role?.clubs || [])];
  return CLUB_LIST.map((c) => c.id).filter((id) => ids.includes(id));
};
const visClubs = () => CLUB_LIST.filter((c) => visibleIds().includes(c.id));
const gate = () => (!CFG.API_URL ? "" : !S.user ? "login" : !visibleIds().length ? "clubs" : "");
const seesItem = (x) => !CFG.API_URL || S.user?.role?.super || x.clubs.includes("*") || x.clubs.some((c) => visibleIds().includes(c));
const newAdm = () => ({ sec: "content", form: null, req: false, uploading: "", reqs: [], qres: null, kind: "", editId: "", busy: false, err: "", inbox: { state: "idle", list: [] }, users: { state: "idle", list: [] }, drafts: {}, roleEdit: null });
S.adm = newAdm();
const t = (k) => T[S.lang][k];
// small message pinned to the top of the screen; lives outside #app so re-renders don't remove it
function toast(msg, ms) {
  let d = document.getElementById("toast");
  if (!d) {
    d = document.createElement("div");
    d.id = "toast";
    d.setAttribute("role", "status");
    d.style.cssText = "position:fixed;top:calc(8px + env(safe-area-inset-top));left:50%;transform:translateX(-50%);z-index:60;background:#1E1B2E;color:#fff;padding:10px 18px;border-radius:999px;font-size:14px;font-weight:600;box-shadow:0 4px 14px rgba(0,0,0,.25);max-width:90%";
    document.body.appendChild(d);
  }
  d.textContent = msg;
  clearTimeout(d._t);
  if (ms) d._t = setTimeout(() => d.remove(), ms);
}

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
  support: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9 10h6M9 13.5h4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>',
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
const CLUBS = { chemistry: "chemistry", "كيمياء": "chemistry", "الكيمياء": "chemistry", physics: "physics", "فيزياء": "physics", "الفيزياء": "physics",
  deutsch: "deutsch", german: "deutsch", "ألماني": "deutsch", "الماني": "deutsch", "الألماني": "deutsch", "ألمانى": "deutsch", "دويتش": "deutsch",
  mechanics: "mechanics", mechanic: "mechanics", "ميكانيكا": "mechanics", "الميكانيكا": "mechanics",
  capstone: "capstone", "كابستون": "capstone", "الكابستون": "capstone",
  math: "math", maths: "math", mathematics: "math", "رياضيات": "math", "الرياضيات": "math",
  joint: "joint", "مشترك": "joint" };
// عمود club ممكن يحتوي أكتر من نادي مفصولين بـ + أو , أو / (مثلاً chemistry+physics). "all" = كل النوادي.
// "joint" القديمة = الكيمياء + الفيزياء بس (CFG.JOINT_CLUBS).
const ALL_WORDS = ["all", "everyone", "الكل", "كل النوادي"];
function parseClubs(str) {
  const out = new Set();
  for (const raw of String(str || "").split(/[+,&\/|;؛]/)) {
    const p = raw.trim().toLowerCase();
    if (!p) continue;
    if (ALL_WORDS.includes(p)) return ["*"];
    if (p === "joint" || p === "مشترك") (CFG.JOINT_CLUBS || ["chemistry", "physics"]).forEach((c) => out.add(c));
    else if (CLUBS[p] && clubInfo(CLUBS[p])) out.add(CLUBS[p]);
  }
  return [...out];
}
const inClub = (x, c) => x.clubs.includes("*") || x.clubs.includes(c);      // relevant to this club (own or shared)
const isShared = (x) => x.clubs.length > 1 || x.clubs[0] === "*";             // belongs to 2+ clubs
const ownOnly = (x, c) => !isShared(x) && x.clubs[0] === c;                   // belongs to this club only
const clubsLabel = (x) => (x.clubs[0] === "*" ? t("jointBadge") : x.clubs.map((c) => t(c)).join(" + "));
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
const toRes = (rows, base, forceType) => rows.map((x, i) => ({ clubs: parseClubs(x.club), type: forceType ? forceType(x) : (TYPES[x.type?.toLowerCase()] || "reference"),
  id: x.id || "", ds: x.date || "", title: x.title, desc: x.description, url: x.url, lo: (x.lo || "").trim(), date: parseDate(x.date), i: base + i })).filter((x) => x.clubs.length && x.title);
const cacheKey = () => "api_content_" + (S.user?.username || "guest");
async function loadApiContent() {
  if (!CFG.API_URL) return { live: true, data: null };
  try {
    const r = await api("content", { token: S.user?.token });
    if (r.ok) { store.set(cacheKey(), JSON.stringify(r)); return { live: true, data: r }; }
    if (r.error === "bad_request") return { live: true, data: null }; // backend not updated yet
    throw new Error("content");
  } catch { try { return { live: false, data: JSON.parse(store.get(cacheKey(), "")) }; } catch { return { live: false, data: null }; } }
}
const mapQuiz = (x, i) => ({ id: "", qid: x.id, native: true, clubs: parseClubs(x.club), type: "quiz", title: x.title, desc: "", lo: x.lo || "", url: "", date: parseDate(x.date), ds: x.date || "", attempts: +x.attempts || 0, count: x.count || 0, i: 40000 + i });
const mapEv = (x) => ({ id: x.id || "", clubs: parseClubs(x.club), title: x.title, date: parseDate(x.date), ds: x.date || "", time: x.time, place: x.place, note: x.note });
async function loadAll() {
  // Content comes from the app's own sheets (via the API). The old published CSV sheets still load too
  // unless LEGACY_CSV is false in config.js. Items that exist in both places show once.
  const legacy = CFG.LEGACY_CSV !== false;
  const csv = (u, k) => (legacy && u ? loadCsv(u, k) : Promise.resolve({ text: "", live: true }));
  const [r, e, rf, rv, ap] = await Promise.all([csv(CFG.RESOURCES_CSV, "csv_res"), csv(CFG.EVENTS_CSV, "csv_evt"), csv(CFG.REFERENCES_CSV, "csv_ref"), csv(CFG.REVISION_CSV, "csv_rev"), loadApiContent()]);
  S.live = r.live && e.live && rf.live && rv.live && ap.live;
  const A = ap.data || {};
  const resKey = (x) => (x.title || "").trim().toLowerCase() + "|" + (x.url || "").trim();
  const evKey = (x) => (x.title || "").trim().toLowerCase() + "|" + (x.ds || "");
  const apiRes = toRes(A.resources || [], 30000);
  const apiEv = (A.events || []).map(mapEv).filter((x) => x.clubs.length && x.title && x.date);
  const seenR = new Set(apiRes.map(resKey)), seenE = new Set(apiEv.map(evKey));
  S.resources = [
    ...toRes(parseCsv(r.text), 0),
    ...toRes(parseCsv(rf.text), 10000, () => "reference"),
    ...toRes(parseCsv(rv.text), 20000, (x) => (TYPES[x.type?.toLowerCase()] === "exam" ? "exam" : "revision")),
  ].filter((x) => !seenR.has(resKey(x))).concat(apiRes);
  S.events = parseCsv(e.text).map(mapEv).filter((x) => x.clubs.length && x.title && x.date && !seenE.has(evKey(x))).concat(apiEv);
  S.quizzes = (A.quizzes || []).map(mapQuiz).filter((x) => x.clubs.length);
  S.resources = S.resources.concat(S.quizzes);
  S.resources = S.resources.filter(seesItem); S.events = S.events.filter(seesItem);
  render();
}

// ---- helpers ----
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const locale = () => (S.lang === "ar" ? "ar-EG" : "en-GB");
const upcoming = (list) => list.filter((e) => e.date >= today()).sort((a, b) => a.date - b.date);
const recentFirst = (list) => [...list].sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0) || b.i - a.i);
const clubColor = (c) => clubInfo(c)?.color || "#4B4FC9";

// ---- accounts and private quiz results (needs API_URL in config.js) ----
const NEEDS_USER = /\{user\}|%7Buser%7D/i;
const FILL_USER = /\{user\}|%7Buser%7D/gi;
async function api(action, data) {
  const r = await fetch(CFG.API_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action, ...data }) });
  return r.json();
}
function setUser(u) { S.user = u; store.set("acct", u ? JSON.stringify(u) : ""); }
function signOut() { setUser(null); S.results = { state: "idle", list: [] }; S.support = { state: "idle", list: [] }; S.draft = ""; S.acct = { mode: "login", err: "" }; S.form = {}; S.adm = newAdm(); S.qz = null; S.myc = undefined; S.tab = "account"; render(); loadAll(); }
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
  S.form = { ...S.form, username: v.username, name: v.name };
  if (reg && !(S.form.clubs || []).length) { S.acct.err = t("err_pick_club"); render(); return; }
  const btn = form.querySelector("button[type=submit]");
  btn.disabled = true; btn.textContent = t("pleaseWait");
  try {
    const r = await api(reg ? "register" : "login", { username: v.username, name: v.name, password: v.password, clubs: reg ? S.form.clubs : undefined });
    if (r.ok) { setUser({ username: r.username, name: r.name, token: r.token, role: r.role || null, clubs: r.clubs || [] }); S.acct.err = ""; S.form = {}; S.myc = undefined; S.tab = "home"; render(); loadAll(); loadResults(); loadSupport(); refreshMe().then(loadAdminInbox); return; }
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
async function loadSupport() {
  if (!CFG.API_URL || !S.user) return;
  S.support = { state: "loading", list: S.support.list };
  if (S.tab === "support") render(true);
  try {
    const r = await api("inbox", { token: S.user.token });
    if (r.ok) S.support = { state: "ok", list: r.messages || [] };
    else if (r.error === "auth") { signOut(); return; }
    else S.support = { state: "error", list: [] };
  } catch { S.support = { state: "error", list: [] }; }
  render(true);
}
const answeredCount = () => S.support.list.filter((m) => m.reply).length;
async function submitSupport(form) {
  const msg = String(new FormData(form).get("message") || "").trim();
  S.draft = msg; S.supOk = false;
  if (!msg) { S.supErr = t("err_empty"); render(true); return; }
  if (msg.length > 500) { S.supErr = t("err_too_long"); render(true); return; }
  S.sending = true; S.supErr = ""; render(true);
  try {
    const r = await api("ask", { token: S.user.token, message: msg, club: S.club });
    if (r.ok) { S.draft = ""; const fm = document.getElementById("f-msg"); if (fm) fm.value = ""; S.supOk = true; S.sending = false; await loadSupport(); return; }
    if (r.error === "auth") { signOut(); return; }
    S.supErr = T[S.lang]["err_" + r.error] || t("err_generic");
  } catch { S.supErr = t("err_generic"); }
  S.sending = false; render(true);
}
function supportTile(m) {
  const d = new Date(m.when);
  const when = m.when && !isNaN(d) ? new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short" }).format(d) : "";
  return `<div class="lo" style="padding:14px;display:flex;flex-direction:column;gap:8px">
    <div dir="auto" style="white-space:pre-wrap;overflow-wrap:anywhere;font-size:14px">${esc(m.message)}</div>
    <span style="font-size:12px;color:var(--muted)">${esc(when)}</span>
    ${m.reply ? `<div style="background:var(--tint);border-radius:10px;padding:10px 12px"><b style="font-size:12px;color:var(--accent)">${t("teamReply")}</b><div dir="auto" style="white-space:pre-wrap;overflow-wrap:anywhere;font-size:14px;margin-top:4px">${esc(m.reply)}</div></div>`
      : `<span class="badge" style="align-self:flex-start">${t("waiting")}</span>`}</div>`;
}
function supportScreen() {
  if (!CFG.API_URL) return "";
  if (!S.user) return `<button class="card" data-go="account"><div class="ico">${icon("user")}</div><div class="grow"><b>${t("signInToAsk")}</b></div></button>`;
  const R = S.support;
  const list = R.state === "loading" && !R.list.length ? `<p class="note">${t("loadingRes")}</p>`
    : R.state === "error" ? `<div class="warn">${t("supportErr")}</div>`
    : !R.list.length ? `<p class="note">${t("noQuestions")}</p>` : R.list.map(supportTile).join("");
  return `<form id="sup-form" class="form"><label for="f-msg">${t("askTitle")}</label>
    <textarea id="f-msg" name="message" rows="4" maxlength="500" placeholder="${esc(t("askPh"))}" dir="auto" style="border:1px solid var(--line);border-radius:12px;padding:12px 14px;font:inherit;background:#fff;resize:vertical">${esc(S.draft)}</textarea>
    ${S.supErr ? `<div class="warn" role="alert">${esc(S.supErr)}</div>` : ""}${S.supOk && !S.supErr ? `<p class="note" role="status">${t("sentOk")}</p>` : ""}
    <button class="btn" type="submit"${S.sending ? " disabled" : ""}>${S.sending ? t("sending") : t("send")}</button></form>
  <h2>${t("myQuestions")}</h2>${list}`;
}
function myClubsBlock() {
  if (isSuper()) return "";
  const cur = S.myc ?? (S.user.clubs || []);
  return `<h2>${t("myClubs")}</h2><div class="checks">${CLUB_LIST.map((c) => `<label class="chk"><input type="checkbox" data-myc="${esc(c.id)}"${cur.includes(c.id) ? " checked" : ""}>${esc(t(c.id))}</label>`).join("")}</div>
  <button class="btn" data-my="save" style="margin-top:0">${t("saveClubs")}</button>`;
}
async function saveMyClubs() {
  const clubs = S.myc ?? (S.user.clubs || []);
  if (!clubs.length) { toast(t("err_pick_club"), 2500); return; }
  try {
    const r = await api("setClubs", { token: S.user.token, clubs });
    if (r.ok) { setUser({ ...S.user, clubs: r.clubs }); S.myc = undefined; toast(t("clubsSaved"), 2000); if (gate() === "") S.tab = S.tab === "account" && !isAdmin() ? "home" : S.tab; await loadAll(); return; }
    if (r.error === "auth") { signOut(); return; }
    toast(T[S.lang]["err_" + r.error] || t("err_generic"), 3000);
  } catch { toast(t("err_generic"), 3000); }
}
function accountScreen() {
  if (S.user) return `${gate() === "clubs" ? `<div class="warn">${t("gateClubs")}</div>` : ""}<div class="hero"><small>${t("hello")}</small><b dir="auto">${esc(S.user.name)}</b><span dir="ltr">@${esc(S.user.username)}</span>${isAdmin() ? `<span style="display:block;margin-top:8px"><span class="badge">${t("adminBadge")} · ${esc(roleLabel(S.user.role))}</span></span>` : ""}</div>${myClubsBlock()}<p class="note">${t("accountNote")}</p><button class="btn ghost" data-act="signout">${t("signOut")}</button><p class="note" dir="ltr" style="opacity:.6">v${VERSION}</p>`;
  const reg = S.acct.mode === "register";
  const regClubs = reg ? `<label>${t("pickClubs")}</label><div class="checks">${CLUB_LIST.map((c) => `<label class="chk"><input type="checkbox" data-regc="${esc(c.id)}"${(S.form.clubs || []).includes(c.id) ? " checked" : ""}>${esc(t(c.id))}</label>`).join("")}</div>` : "";
  return `${gate() === "login" ? `<p class="note">${t("gateLogin")}</p>` : ""}<div class="seg" role="group"><button data-acct-mode="login" class="${reg ? "" : "on"}">${t("signIn")}</button><button data-acct-mode="register" class="${reg ? "on" : ""}">${t("createAccount")}</button></div>
  <form id="acct-form" class="form">
    <label for="f-user">${t("username")}</label><input id="f-user" name="username" autocomplete="username" autocapitalize="none" spellcheck="false" dir="ltr" required value="${esc(S.form.username || "")}">
    ${reg ? `<label for="f-name">${t("fullName")}</label><input id="f-name" name="name" autocomplete="name" required value="${esc(S.form.name || "")}">` : ""}
    <label for="f-pass">${t("password")}</label><input id="f-pass" name="password" type="password" autocomplete="${reg ? "new-password" : "current-password"}" minlength="6" required>
    ${regClubs}
    ${S.acct.err ? `<div class="warn" role="alert">${esc(S.acct.err)}</div>` : ""}
    <button class="btn" type="submit">${reg ? t("createAccount") : t("signIn")}</button>
  </form><p class="note">${t("accountNote")}</p><p class="note" dir="ltr" style="opacity:.6">v${VERSION}</p>`;
}

// Opens Google Drive / Docs / YouTube links inside the app instead of leaving it
function viewInfo(u) {
  let m;
  if ((m = u.match(/^https?:\/\/drive\.google\.com\/file\/d\/([\w-]+)/) || u.match(/^https?:\/\/drive\.google\.com\/(?:open|uc)\?(?:[^#]*&)?id=([\w-]+)/)))
    return { embed: `https://drive.google.com/file/d/${m[1]}/preview`, dl: `https://drive.usercontent.google.com/download?id=${m[1]}&export=download&confirm=t` };
  if ((m = u.match(/^https?:\/\/docs\.google\.com\/(document|presentation|spreadsheets)\/d\/([\w-]+)/)))
    return { embed: `https://docs.google.com/${m[1]}/d/${m[2]}/preview`, dl: m[1] === "presentation" ? `https://docs.google.com/presentation/d/${m[2]}/export/pdf` : `https://docs.google.com/${m[1]}/d/${m[2]}/export?format=pdf` };
  if ((m = u.match(/^https?:\/\/(?:www\.|m\.)?youtube\.com\/watch\?(?:[^#]*&)?v=([\w-]{11})/) || u.match(/^https?:\/\/youtu\.be\/([\w-]{11})/)))
    return { embed: `https://www.youtube.com/embed/${m[1]}`, dl: "" };
  return null;
}

function openViewer(url, title) {
  const v = viewInfo(url);
  if (!v) { window.open(url, "_blank", "noopener"); return; }
  closeViewer(true);
  const d = document.createElement("div");
  d.id = "viewer";
  d.style.cssText = "position:fixed;inset:0;z-index:50;max-width:480px;margin:0 auto;background:#fff;display:flex;flex-direction:column";
  const bs = "min-width:44px;height:44px;border:1px solid #E6E4EE;background:#fff;border-radius:12px;font-weight:600;font-size:14px;color:#1E1B2E;display:flex;align-items:center;justify-content:center;padding:0 12px;text-decoration:none;flex-shrink:0";
  d.innerHTML = `<div style="display:flex;align-items:center;gap:8px;padding:calc(10px + env(safe-area-inset-top)) 12px 10px;border-bottom:1px solid #E6E4EE">
    <button data-vclose style="${bs}" aria-label="${t("back")}">${S.lang === "ar" ? "→" : "←"}</button>
    <b dir="auto" style="flex:1;min-width:0;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(title)}</b>
    ${v.dl ? `<button data-vdl="${esc(v.dl)}" style="${bs};background:var(--accent);border-color:var(--accent);color:#fff">${t("download")}</button>` : `<a href="${esc(url)}" target="_blank" rel="noopener" style="${bs}">${t("openExt")}</a>`}</div>
    <iframe src="${esc(v.embed)}" allow="autoplay; fullscreen" allowfullscreen style="flex:1;width:100%;border:0"></iframe>`;
  document.body.appendChild(d);
  history.pushState({ viewer: 1 }, "");
}
function closeViewer(silent) {
  const d = document.getElementById("viewer");
  if (!d) return;
  d.remove();
  if (!silent && history.state && history.state.viewer) history.back();
}
window.addEventListener("popstate", () => closeViewer(true));
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-vclose]")) { closeViewer(); return; }
  const dl = e.target.closest("[data-vdl]");
  if (dl) {
    // Direct download: the file is an attachment, so the browser keeps the app open and just saves it
    const a = document.createElement("a");
    a.href = dl.dataset.vdl;
    a.rel = "noopener";
    a.setAttribute("download", "");
    document.body.appendChild(a);
    a.click();
    a.remove();
    const v = document.getElementById("viewer");
    if (v) {
      let n = document.getElementById("dlnote");
      if (!n) {
        n = document.createElement("div");
        n.id = "dlnote";
        n.setAttribute("role", "status");
        n.style.cssText = "background:#FFF6E0;border-bottom:1px solid #F0D48A;padding:10px 14px;font-size:13px;line-height:1.5";
        v.children[0].after(n);
      }
      n.textContent = t("dlNote");
      clearTimeout(n._t);
      n._t = setTimeout(() => n.remove(), 20000);
    }
    const old = dl.textContent;
    dl.textContent = t("downloading");
    setTimeout(() => { dl.textContent = old; }, 4000);
    return;
  }
  const b = e.target.closest("[data-view]");
  if (b) openViewer(b.dataset.view, b.dataset.title);
});

function resTile(r) {
  if (r.native) return `<button class="card" data-qz="${esc(r.qid)}"><div class="ico">${icon("quiz")}</div><div class="grow"><b dir="auto">${esc(r.title)}</b><span dir="auto">${esc([r.lo, `${r.count} ${t("questionsWord")}`, r.attempts ? `${t("attemptsLbl")}: ${r.attempts}` : ""].filter(Boolean).join(" · "))}</span></div></button>`;
  let url = r.url || "";
  if (r.type === "quiz" && NEEDS_USER.test(url)) {
    if (!CFG.API_URL) url = url.replace(FILL_USER, "");
    else if (!S.user) return `<button class="card" data-go="account"><div class="ico">${icon("quiz")}</div><div class="grow"><b dir="auto">${esc(r.title)}</b><span>${t("signInFirst")}</span></div></button>`;
    else url = url.replace(FILL_USER, encodeURIComponent(S.user.username));
  }
  r = { ...r, url };
  if (r.type !== "quiz" && viewInfo(url)) return `<button class="card" data-view="${esc(url)}" data-title="${esc(r.title)}"><div class="ico">${icon(r.type)}</div><div class="grow"><b dir="auto">${esc(r.title)}</b><span dir="auto">${esc(r.desc)}</span></div></button>`;
  return `<a class="card" href="${esc(safeUrl(r.url))}" target="_blank" rel="noopener"><div class="ico">${icon(r.type)}</div><div class="grow"><b dir="auto">${esc(r.title)}</b><span dir="auto">${esc(r.desc)}</span></div></a>`;
}
function evTile(e) {
  const mon = new Intl.DateTimeFormat(locale(), { month: "short" }).format(e.date);
  const where = [e.time, e.place].filter(Boolean).join(" · ");
  return `<div class="card"><div class="date" style="background:${clubColor(e.clubs[0] === "*" ? "" : (e.clubs.includes(S.club) ? S.club : e.clubs[0]))}"><small>${esc(mon)}</small><b>${new Intl.NumberFormat(locale()).format(e.date.getDate())}</b></div>
  <div class="grow"><b dir="auto">${esc(e.title)}</b><span dir="auto">${esc(where)}${e.note ? " — " + esc(e.note) : ""}</span></div>
  ${isShared(e) ? `<span class="badge">${esc(clubsLabel(e))}</span>` : ""}</div>`;
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
const CHILD = ["references", "quizzes", "revision", "joint", "quiz"]; // pages opened from Home tiles
const OWN_PAGE = ["reference", "revision", "exam", "quiz"]; // these never appear in the Library (LOs) page

// ---- screens ----
function home() {
  const evs = upcoming(S.events.filter((e) => inClub(e, S.club)));
  const next = evs[0];
  const when = next ? new Intl.DateTimeFormat(locale(), { weekday: "long", day: "numeric", month: "long" }).format(next.date) + [next.time && " · " + next.time, next.place && " · " + next.place].filter(Boolean).join("") : "";
  const recent = recentFirst(S.resources.filter((r) => ownOnly(r, S.club) && !OWN_PAGE.includes(r.type))).slice(0, 3);
  const tile = (ic, b, s, tab, f, wide) => `<button class="tile${wide ? " wide" : ""}" data-go="${tab}" data-filter="${f || "all"}">${icon(ic, 26)}<b>${t(b)}</b><span>${t(s)}</span></button>`;
  return `<div class="hero"><small>${t("next")}</small><b dir="auto">${next ? esc(next.title) : t("noNext")}</b><span dir="auto">${esc(when)}</span></div>
  <div class="grid">${tile("book", "los", "losSub", "library")}${tile("reference", "refs", "refsSub", "references")}${tile("revision", "revision", "revisionSub", "revision")}${tile("quiz", "quizzes", "quizzesSub", "quizzes")}${tile("joint", "jointSpace", "jointSub", "joint", "all", true)}</div>
  <h2>${t("recent")}</h2>${recent.map(resTile).join("") || empty()}`;
}
function library() {
  const q = S.q.trim().toLowerCase();
  const items = recentFirst(S.resources.filter((r) => ownOnly(r, S.club) && !OWN_PAGE.includes(r.type) && (!q || (r.title + " " + r.desc).toLowerCase().includes(q))));
  return `<input type="search" id="q" placeholder="${t("search")}" aria-label="${t("search")}" value="${esc(S.q)}">
  ${loSections(S.club, items, !!q) || empty()}`;
}
function eventsScreen() {
  const list = upcoming(S.events.filter((e) => inClub(e, S.club)));
  return `<h2>${t("upcoming")}</h2>${list.map(evTile).join("") || empty()}`;
}
function referencesScreen() {
  const list = recentFirst(S.resources.filter((r) => r.type === "reference" && inClub(r, S.club)));
  const body = list.some((r) => r.lo) ? loSections(S.club + "-ref", list, true) : list.map(resTile).join("");
  return `<div class="hero"><small>${t("refs")}</small><b>${t("refsTitle")}</b><span>${t("refsPageSub")}</span></div>${body || empty()}`;
}
function quizzesScreen() {
  const list = recentFirst(S.resources.filter((r) => r.type === "quiz" && inClub(r, S.club)));
  return `<div class="hero"><small>${t("quizzes")}</small><b>${t("quizTitle")}</b><span>${t("quizAll")}</span></div>${resultsBlock()}${list.map((r) => resTile({ ...r, desc: [r.lo, r.desc].filter(Boolean).join(" · ") })).join("") || empty()}`;
}
function revisionScreen() {
  const list = S.resources.filter((r) => ["revision", "exam"].includes(r.type) && inClub(r, S.club));
  const groups = [["revision", "revisionMaterial"], ["exam", "exams"]].map(([ty, label]) => {
    const items = recentFirst(list.filter((r) => r.type === ty));
    if (!items.length) return "";
    const id = S.club + "-rev|" + ty;
    return secHtml(id, t(label), items, S.open[id] ?? true);
  }).join("");
  return `<div class="hero"><small>${t("revision")}</small><b>${t("revisionTitle")}</b><span>${t("revisionAll")}</span></div>${groups || empty()}`;
}
function jointScreen() {
  const res = recentFirst(S.resources.filter((r) => isShared(r) && inClub(r, S.club) && !OWN_PAGE.includes(r.type))).map((r) => ({ ...r, desc: [clubsLabel(r), r.desc].filter(Boolean).join(" · ") }));
  const evs = upcoming(S.events.filter((e) => isShared(e) && inClub(e, S.club)));
  return `<div class="hero joint"><small>${t("shared")} · ${t(S.club)}</small><b>${t("jointTitle")}</b><span>${t("jointBlurb")}</span></div>
  <h2>${t("sharedMaterials")}</h2>${loSections("joint", res, false) || empty()}<h2>${t("jointEvents")}</h2>${evs.map(evTile).join("") || empty()}`;
}

// ---- admin (club admins manage their own club, the main admin manages everything) ----
const isAdmin = () => !!(S.user && S.user.role && (S.user.role.super || (S.user.role.clubs || []).length));
const isSuper = () => !!(S.user && S.user.role && S.user.role.super);
const myClubs = () => (isSuper() ? CLUB_LIST.map((c) => c.id) : (S.user?.role?.clubs || []).filter((c) => clubInfo(c)));
// A club admin manages an item only if EVERY club on it is theirs. Shared items are the main admin's (club admins send a request).
const canManage = (x) => isAdmin() && (isSuper() || (x.clubs.length > 0 && !x.clubs.includes("*") && x.clubs.every((c) => (S.user.role.clubs || []).includes(c))));
const clubName = (c) => (clubInfo(c) ? t(c) : c);
const roleLabel = (r) => (!r ? t("student") : r.super ? t("roleSuper") : (r.clubs || []).map(clubName).join(" + ") || t("student"));
const parseRoleStr = (str) => { const o = { super: false, clubs: [] }; String(str || "").split(/[+,&\/|;؛\s]+/).forEach((p) => { p = p.trim().toLowerCase(); if (p === "super") o.super = true; else if (p && !o.clubs.includes(p)) o.clubs.push(p); }); return o; };
const TYPE_KEY = { file: "files", video: "videos", reference: "refs", quiz: "quizzes", revision: "revisionMaterial", exam: "exams" };
const admErr = (r) => T[S.lang]["err_" + r.error] || t("err_generic");
const pendingReqs = () => S.adm.reqs.filter((r) => r.status === "pending").length;
const unansweredAdm = () => S.adm.inbox.list.filter((m) => !m.reply).length + (isSuper() ? pendingReqs() : 0);
const shortDate = (d) => (d && !isNaN(d) ? new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short", year: "numeric" }).format(d) : "");
const newQ = () => ({ q: "", options: ["", "", "", ""], correct: 0, explain: "" });
const toggle = (arr, v, on) => (on ? [...new Set([...arr, v])] : arr.filter((x) => x !== v));

async function refreshMe() {
  if (!CFG.API_URL || !S.user) return;
  try {
    const r = await api("me", { token: S.user.token });
    if (r.ok) {
      const before = JSON.stringify([S.user.clubs, S.user.role]);
      setUser({ ...S.user, name: r.name, role: r.role || null, clubs: r.clubs || [] });
      if (before !== JSON.stringify([S.user.clubs, S.user.role])) await loadAll(); else render(true);
    } else if (r.error === "auth") signOut();
  } catch {}
}

function admOpen(kind, it, req) {
  const A = S.adm, mine = myClubs();
  A.err = ""; A.kind = kind; A.req = !!req; A.uploading = ""; A.editId = it ? it.id : "";
  const def = mine.includes(S.club) ? [S.club] : mine.slice(0, 1);
  A.form = it
    ? { clubs: it.clubs[0] === "*" ? ["all"] : [...it.clubs], title: it.title || "", date: it.ds || "", time: it.time || "", place: it.place || "", note: it.note || "", type: it.type || "file", description: it.desc || "", url: it.url || "", lo: it.lo || "", reqnote: "" }
    : { clubs: def, title: "", date: "", time: "", place: "", note: "", type: "file", description: "", url: "", lo: "", reqnote: "" };
  if (kind === "quiz") A.form = { clubs: def, title: "", lo: "", attempts: "0", questions: [newQ()] };
  render();
}
async function admEditQuiz(id) {
  const A = S.adm;
  try {
    const r = await api("adminQuizGet", { token: S.user.token, id });
    if (r.ok) {
      const q = r.quiz, cl = parseClubs(q.club);
      A.kind = "quiz"; A.editId = q.id; A.req = false; A.err = "";
      A.form = { clubs: cl[0] === "*" ? ["all"] : cl, title: q.title, lo: q.lo || "", attempts: String(q.attempts || 0), questions: q.questions.map((x) => ({ q: x.q, options: [...x.options], correct: x.correct, explain: x.explain || "" })) };
      render(); return;
    }
    if (r.error === "auth") { signOut(); return; }
    toast(admErr(r), 3000);
  } catch { toast(t("err_generic"), 3000); }
}
async function admSave() {
  const A = S.adm, f = A.form;
  if (!f || A.busy) return;
  A.err = "";
  if (!f.clubs.length) { A.err = t("err_invalid_club"); render(true); return; }
  const club = f.clubs.join("+");
  const item = A.kind === "event"
    ? { club, title: f.title, date: f.date, time: f.time, place: f.place, note: f.note }
    : { club, type: f.type, title: f.title, description: f.description, url: f.url, lo: f.lo, date: f.date };
  if (A.req && (f.clubs.length < 2 || !f.clubs.some((c) => myClubs().includes(c)))) { A.err = t("err_need_two"); render(true); return; }
  A.busy = true; render(true);
  try {
    const r = A.req
      ? await api("adminRequest", { token: S.user.token, kind: A.kind, item, note: f.reqnote })
      : await api("adminSave", { token: S.user.token, kind: A.kind, id: A.editId || undefined, item });
    if (r.ok) {
      const wasReq = A.req;
      A.form = null; A.busy = false; A.req = false; toast(t(wasReq ? "reqSent" : "saved"), 2000);
      if (wasReq) { await loadAdminInbox(); render(); } else await loadAll();
      return;
    }
    if (r.error === "auth") { signOut(); return; }
    if (r.error === "forbidden") refreshMe();
    A.err = admErr(r);
  } catch { A.err = t("err_generic"); }
  A.busy = false; render(true);
}
async function admSaveQuiz() {
  const A = S.adm, f = A.form;
  if (!f || A.busy) return;
  A.err = "";
  if (!f.clubs.length) { A.err = t("err_invalid_club"); render(true); return; }
  const okQ = f.questions.length && f.questions.every((q) => q.q.trim() && q.options.filter((o) => o.trim()).length >= 2 && q.options[q.correct]?.trim());
  if (!f.title.trim()) { A.err = t("err_invalid_title"); render(true); return; }
  if (!okQ) { A.err = t("err_invalid_questions"); render(true); return; }
  A.busy = true; render(true);
  try {
    const r = await api("adminQuizSave", { token: S.user.token, id: A.editId || undefined, item: { club: f.clubs.join("+"), title: f.title, lo: f.lo, attempts: +f.attempts || 0, questions: f.questions } });
    if (r.ok) { A.form = null; A.busy = false; toast(t("saved"), 2000); await loadAll(); return; }
    if (r.error === "auth") { signOut(); return; }
    if (r.error === "forbidden") refreshMe();
    A.err = admErr(r);
  } catch { A.err = t("err_generic"); }
  A.busy = false; render(true);
}
async function admDelete(kind, id) {
  if (!confirm(t("confirmDel"))) return;
  try {
    const r = await api("adminDelete", { token: S.user.token, kind, id });
    if (r.ok) { toast(t("deleted"), 2000); await loadAll(); return; }
    if (r.error === "auth") { signOut(); return; }
    toast(admErr(r), 3000);
  } catch { toast(t("err_generic"), 3000); }
}
async function admUpload(file) {
  const A = S.adm;
  if (!file || !A.form) return;
  if (file.size > 8 * 1024 * 1024) { A.err = t("err_too_big"); render(true); return; }
  A.err = ""; A.uploading = file.name; render(true);
  try {
    const data = await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(String(fr.result).split(",")[1] || ""); fr.onerror = () => rej(new Error("read")); fr.readAsDataURL(file); });
    const club = A.form.clubs.find((c) => myClubs().includes(c)) || A.form.clubs[0] || "";
    const r = await api("adminUpload", { token: S.user.token, name: file.name, data, club });
    if (r.ok) { A.form.url = r.url; if (!A.form.title) A.form.title = r.name.replace(/\.[^.]+$/, ""); toast(t("uploaded"), 2000); }
    else if (r.error === "auth") { signOut(); return; }
    else A.err = admErr(r);
  } catch { A.err = t("err_generic"); }
  A.uploading = ""; render(true);
}
async function admDecide(id, ok) {
  try {
    const r = await api("adminDecide", { token: S.user.token, id, approve: ok });
    if (r.ok) { toast(t(ok ? "approvedOk" : "rejectedOk"), 2000); await loadAdminInbox(); if (ok) await loadAll(); return; }
    if (r.error === "auth") { signOut(); return; }
    toast(admErr(r), 3000);
  } catch { toast(t("err_generic"), 3000); }
}
async function admQuizResults(it) {
  const A = S.adm;
  A.qres = { state: "loading", title: it.title, list: [] }; render();
  try {
    const r = await api("adminQuizResults", { token: S.user.token, id: it.qid });
    A.qres = r.ok ? { state: "ok", title: r.title, list: r.results || [] } : { state: "error", title: it.title, list: [] };
    if (r.error === "auth") { signOut(); return; }
  } catch { A.qres = { state: "error", title: it.title, list: [] }; }
  render(true);
}

async function loadAdminInbox() {
  if (!CFG.API_URL || !isAdmin()) return;
  const A = S.adm;
  if (!A.inbox.list.length) { A.inbox.state = "loading"; if (S.tab === "admin") render(true); }
  try {
    const r = await api("adminInbox", { token: S.user.token });
    if (r.ok) { A.inbox = { state: "ok", list: r.messages || [] }; A.reqs = r.requests || []; }
    else if (r.error === "auth") { signOut(); return; }
    else { A.inbox = { state: "error", list: [] }; if (r.error === "forbidden") refreshMe(); }
  } catch { A.inbox = { state: "error", list: A.inbox.list }; }
  // do not redraw while the admin is typing, it would drop the keyboard
  if (!document.activeElement?.closest?.("[data-ar],[data-af],[data-aq]")) render(true);
}
async function admReply(id) {
  const A = S.adm, m = A.inbox.list.find((x) => x.id === id);
  const txt = String(A.drafts[id] ?? m?.reply ?? "").trim();
  if (!txt) { toast(t("err_empty"), 2000); return; }
  try {
    const r = await api("adminReply", { token: S.user.token, id, reply: txt });
    if (r.ok) { delete A.drafts[id]; toast(t("saved"), 2000); await loadAdminInbox(); return; }
    if (r.error === "auth") { signOut(); return; }
    toast(admErr(r), 3000);
  } catch { toast(t("err_generic"), 3000); }
}
async function loadUsers() {
  if (!CFG.API_URL || !isSuper()) return;
  const A = S.adm;
  if (!A.users.list.length) { A.users.state = "loading"; render(true); }
  try {
    const r = await api("adminUsers", { token: S.user.token });
    if (r.ok) A.users = { state: "ok", list: r.users || [] };
    else if (r.error === "auth") { signOut(); return; }
    else A.users = { state: "error", list: [] };
  } catch { A.users = { state: "error", list: A.users.list }; }
  render(true);
}
async function admSaveRole() {
  const A = S.adm, e = A.roleEdit;
  if (!e) return;
  const role = e.super ? "super" : e.clubs.join("+");
  try {
    const r = await api("adminSetRole", { token: S.user.token, username: e.username, role });
    if (r.ok) { const u = A.users.list.find((x) => x.username === e.username); if (u) u.role = role; A.roleEdit = null; toast(t("roleSaved"), 2000); render(true); return; }
    if (r.error === "auth") { signOut(); return; }
    toast(admErr(r), 3000);
  } catch { toast(t("err_generic"), 3000); }
}

const clubBoxes = (f, pool, withAll) => [...(withAll ? [{ id: "all", label: t("fAll") }] : []), ...pool.map((c) => ({ id: c.id, label: t(c.id) }))]
  .map((c) => `<label class="chk"><input type="checkbox" data-afc="${esc(c.id)}"${f.clubs.includes(c.id) ? " checked" : ""}>${esc(c.label)}</label>`).join("");
const clubPool = () => (S.adm.req || isSuper() ? CLUB_LIST : CLUB_LIST.filter((c) => myClubs().includes(c.id)));

function adminForm() {
  const A = S.adm, f = A.form;
  if (A.kind === "quiz") return quizForm();
  const ev = A.kind === "event";
  const boxes = clubBoxes(f, clubPool(), isSuper() && !A.req);
  const inp = (name, label, type, extra) => `<label for="af-${name}">${label}</label><input id="af-${name}" data-af="${name}" type="${type || "text"}" value="${esc(f[name])}" ${type === "date" || type === "time" ? "" : 'dir="auto"'} ${extra || ""}>`;
  const types = Object.keys(TYPE_KEY).filter((k) => k !== "quiz" || f.type === "quiz").map((k) => `<option value="${k}"${f.type === k ? " selected" : ""}>${esc(t(TYPE_KEY[k]))}</option>`).join("");
  const fields = ev
    ? inp("title", t("fTitle"), "text", 'required maxlength="120"') + inp("date", t("fDate"), "date", "required") + inp("time", t("fTime"), "time") + inp("place", t("fPlace"), "text", 'maxlength="80"') + inp("note", t("fNote"), "text", 'maxlength="200"')
    : `<label for="af-type">${t("fType")}</label><select id="af-type" data-af="type">${types}</select>`
      + inp("title", t("fTitle"), "text", 'required maxlength="120"')
      + `<label for="af-file">${t("uploadFile")}</label><input id="af-file" type="file" data-af-file accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg,.txt,.mp4">${A.uploading ? `<p class="note" style="text-align:start">${t("uploading")} ${esc(A.uploading)}</p>` : ""}`
      + inp("url", t("fUrl"), "url", 'required dir="ltr" placeholder="https://"')
      + inp("description", t("fDesc"), "text", 'maxlength="300"') + inp("lo", t("fLo"), "text", 'maxlength="80"') + inp("date", t("fDateOpt"), "date");
  const reqExtra = A.req ? `<p class="note" style="text-align:start">${t("reqHint")}</p>` : "";
  const reqNote = A.req ? inp("reqnote", t("reqNote"), "text", 'maxlength="300"') : "";
  const head = A.req ? t(ev ? "reqEvent" : "reqMat") : t(ev ? "fhEvent" : "fhRes");
  return `<h2>${head}</h2>
  <form id="adm-form" class="form">${reqExtra}<label>${t("fClubs")}</label><div class="checks">${boxes}</div>${fields}${reqNote}
    ${A.err ? `<div class="warn" role="alert">${esc(A.err)}</div>` : ""}
    <button class="btn" type="submit"${A.busy || A.uploading ? " disabled" : ""}>${A.busy ? t("saving") : t(A.req ? "reqSend" : "save")}</button>
    <button class="btn ghost" type="button" data-adm="cancel">${t("cancel")}</button></form>`;
}
function quizForm() {
  const A = S.adm, f = A.form;
  const boxes = clubBoxes(f, clubPool(), isSuper());
  const qs = f.questions.map((q, i) => `<div class="lo" style="padding:14px;display:flex;flex-direction:column;gap:8px">
    <div style="display:flex;justify-content:space-between;align-items:center"><b>${t("question")} ${i + 1}</b>${f.questions.length > 1 ? `<button type="button" class="mini danger" data-adm="q-del" data-qi="${i}">${t("del")}</button>` : ""}</div>
    <textarea class="ta" data-aq="q" data-qi="${i}" rows="2" maxlength="300" dir="auto" placeholder="${esc(t("question"))}">${esc(q.q)}</textarea>
    ${q.options.map((o, j) => `<div class="qrow"><input type="radio" name="qc-${i}" data-aq="correct" data-qi="${i}" value="${j}"${q.correct === j ? " checked" : ""} aria-label="${esc(t("correctMark"))}"><input class="qo" data-aq="opt" data-qi="${i}" data-oj="${j}" value="${esc(o)}" maxlength="150" dir="auto" placeholder="${esc(t("option"))} ${j + 1}">${q.options.length > 2 ? `<button type="button" class="mini" data-adm="opt-del" data-qi="${i}" data-oj="${j}" aria-label="${esc(t("del"))}">×</button>` : ""}</div>`).join("")}
    ${q.options.length < 6 ? `<button type="button" class="mini" data-adm="opt-add" data-qi="${i}">${t("addOption")}</button>` : ""}
    <input data-aq="explain" data-qi="${i}" value="${esc(q.explain)}" maxlength="300" dir="auto" placeholder="${esc(t("explainLbl"))}"></div>`).join("");
  return `<h2>${t("fhQuiz")}</h2>
  <form id="adm-form" class="form"><label>${t("fClubs")}</label><div class="checks">${boxes}</div>
    <label for="af-title">${t("fTitle")}</label><input id="af-title" data-af="title" value="${esc(f.title)}" required maxlength="120" dir="auto">
    <label for="af-lo">${t("fLo")}</label><input id="af-lo" data-af="lo" value="${esc(f.lo)}" maxlength="80" dir="auto">
    <label for="af-attempts">${t("attemptsLbl")}</label><select id="af-attempts" data-af="attempts">${[["0", t("attemptsUnl")], ["1", "1"], ["2", "2"], ["3", "3"]].map(([v, l]) => `<option value="${v}"${String(f.attempts) === v ? " selected" : ""}>${esc(l)}</option>`).join("")}</select>
    ${qs}
    ${f.questions.length < 40 ? `<button type="button" class="btn ghost" data-adm="q-add" style="margin-top:0">${t("addQuestion")}</button>` : ""}
    ${A.err ? `<div class="warn" role="alert">${esc(A.err)}</div>` : ""}
    <button class="btn" type="submit"${A.busy ? " disabled" : ""}>${A.busy ? t("saving") : t("save")}</button>
    <button class="btn ghost" type="button" data-adm="cancel">${t("cancel")}</button></form>`;
}

const reqStatus = (s) => t(s === "pending" ? "pending" : s === "approved" ? "approved" : "rejected");
function reqTile(rq, canDecide) {
  const it = rq.item || {};
  const meta = [t(rq.kind === "event" ? "fhEvent" : "fhRes"), clubsLabel({ clubs: parseClubs(rq.clubs) }), it.date, it.time].filter(Boolean).join(" · ");
  return `<div class="lo" style="padding:14px;display:flex;flex-direction:column;gap:8px">
    <div style="display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap"><b dir="auto">${esc(it.title || "")}</b><span class="badge ${rq.status === "approved" ? "ok" : rq.status === "rejected" ? "no" : ""}">${reqStatus(rq.status)}</span></div>
    <span dir="auto" style="font-size:13px;color:var(--muted)">${esc(meta)}</span>
    ${canDecide ? `<span style="font-size:13px;color:var(--muted)">${t("by")}: ${esc(rq.byName)} (@${esc(rq.by)})</span>` : ""}
    ${rq.note ? `<div dir="auto" style="font-size:14px;white-space:pre-wrap;overflow-wrap:anywhere">${esc(rq.note)}</div>` : ""}
    ${canDecide && rq.status === "pending" ? `<div class="row-actions"><button class="mini primary" data-adm="decide" data-id="${esc(rq.id)}" data-ok="1">${t("approve")}</button><button class="mini danger" data-adm="decide" data-id="${esc(rq.id)}" data-ok="0">${t("reject")}</button></div>` : ""}</div>`;
}
function admRequests() {
  const list = S.adm.reqs;
  return list.map((r) => reqTile(r, true)).join("") || `<p class="note">${t("noRequests")}</p>`;
}

function admContent() {
  const A = S.adm;
  const evs = S.events.filter((e) => e.id && canManage(e)).sort((a, b) => b.date - a.date).slice(0, 40);
  const res = recentFirst(S.resources.filter((r) => r.id && canManage(r))).slice(0, 40);
  const qzs = S.quizzes.filter((q) => canManage(q)).slice(0, 40);
  const legacy = isSuper() && (S.events.some((e) => !e.id) || S.resources.some((r) => !r.id && !r.native));
  const btn = (act, kind, id, label, cls) => `<button class="mini${cls ? " " + cls : ""}" data-adm="${act}" data-kind="${kind}" data-id="${esc(id)}">${label}</button>`;
  const evRow = (e) => `<div class="card" style="flex-wrap:wrap"><div class="grow"><b dir="auto">${esc(e.title)}</b><span dir="auto">${esc([shortDate(e.date), e.time, clubsLabel(e)].filter(Boolean).join(" · "))}</span></div><div class="row-actions">${btn("edit", "event", e.id, t("edit"))}${btn("del", "event", e.id, t("del"), "danger")}</div></div>`;
  const resRow = (r) => `<div class="card" style="flex-wrap:wrap"><div class="grow"><b dir="auto">${esc(r.title)}</b><span dir="auto">${esc([t(TYPE_KEY[r.type] || "refs"), clubsLabel(r), shortDate(r.date)].filter(Boolean).join(" · "))}</span></div><div class="row-actions">${btn("edit", "resource", r.id, t("edit"))}${btn("del", "resource", r.id, t("del"), "danger")}</div></div>`;
  const qzRow = (q) => `<div class="card" style="flex-wrap:wrap"><div class="grow"><b dir="auto">${esc(q.title)}</b><span dir="auto">${esc([`${q.count} ${t("questionsWord")}`, clubsLabel(q)].join(" · "))}</span></div><div class="row-actions">${btn("qedit", "quiz", q.qid, t("edit"))}${btn("qres", "quiz", q.qid, t("results"))}${btn("del", "quiz", q.qid, t("del"), "danger")}</div></div>`;
  const shared = isSuper() ? "" : `<h2>${t("reqTitle")}</h2><p class="note" style="text-align:start;padding:0">${t("reqHint")}</p>
    <div class="grid"><button class="btn ghost" data-adm="add" data-kind="event" data-req="1" style="margin:0">${t("reqEvent")}</button><button class="btn ghost" data-adm="add" data-kind="resource" data-req="1" style="margin:0">${t("reqMat")}</button></div>
    ${A.reqs.length ? `<h2>${t("myRequests")}</h2>${A.reqs.map((r) => reqTile(r, false)).join("")}` : ""}`;
  return `${legacy ? `<div class="warn">${t("legacyNote")}</div>` : ""}
  <div class="adm-add"><button class="btn" data-adm="add" data-kind="event">${t("addEvent")}</button><button class="btn" data-adm="add" data-kind="resource">${t("addResource")}</button><button class="btn" data-adm="add" data-kind="quiz">${t("addQuiz")}</button></div>
  <h2>${t("evSection")}</h2>${evs.map(evRow).join("") || `<p class="note">${t("nothingYet")}</p>`}
  <h2>${t("resSection")}</h2>${res.map(resRow).join("") || `<p class="note">${t("nothingYet")}</p>`}
  <h2>${t("qSection")}</h2>${qzs.map(qzRow).join("") || `<p class="note">${t("nothingYet")}</p>`}
  ${shared}`;
}
function qresScreen() {
  const R = S.adm.qres;
  const rows = R.list.map((x) => { const d = new Date(x.when); return `<div class="card"><div class="grow"><b dir="auto">${esc(x.name)}</b><span dir="ltr">@${esc(x.username)}${!isNaN(d) ? " · " + esc(shortDate(d)) : ""}</span></div><span class="badge" dir="ltr">${esc(x.score)}</span></div>`; }).join("");
  return `<button class="btn ghost" data-adm="qres-close" style="margin:0">${t("back")}</button><h2 dir="auto">${esc(R.title)}</h2>${R.state === "loading" ? `<p class="note">${t("loadingRes")}</p>` : R.state === "error" ? `<div class="warn">${t("supportErr")}</div>` : rows || `<p class="note">${t("noAttempts")}</p>`}`;
}
function admMsgTile(m) {
  const d = new Date(m.when);
  const when = m.when && !isNaN(d) ? new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short" }).format(d) : "";
  const val = S.adm.drafts[m.id] ?? m.reply;
  return `<div class="lo" style="padding:14px;display:flex;flex-direction:column;gap:8px">
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b dir="auto" style="font-size:14px">${esc(m.name)}</b><span dir="ltr" style="font-size:12px;color:var(--muted)">@${esc(m.username)}</span>${m.club ? `<span class="badge">${esc(clubName(m.club))}</span>` : ""}<span style="font-size:12px;color:var(--muted)">${esc(when)}</span></div>
    <div dir="auto" style="white-space:pre-wrap;overflow-wrap:anywhere;font-size:14px">${esc(m.message)}</div>
    <textarea class="ta" data-ar="${esc(m.id)}" rows="3" maxlength="1000" placeholder="${esc(t("replyPh"))}" dir="auto">${esc(val)}</textarea>
    <div style="display:flex;gap:8px;align-items:center;justify-content:space-between"><span class="badge">${m.reply ? t("answered") : t("waiting")}</span><button class="mini primary" data-adm="reply" data-id="${esc(m.id)}">${m.reply ? t("updateReply") : t("sendReply")}</button></div></div>`;
}
function admInbox() {
  const I = S.adm.inbox;
  if ((I.state === "loading" || I.state === "idle") && !I.list.length) return `<p class="note">${t("loadingRes")}</p>`;
  if (I.state === "error") return `<div class="warn">${t("supportErr")}</div>`;
  const list = [...I.list].sort((a, b) => (!!a.reply - !!b.reply) || (a.when < b.when ? 1 : -1));
  return list.map(admMsgTile).join("") || `<p class="note">${t("noMsgs")}</p>`;
}
function admTeam() {
  const A = S.adm, U = A.users;
  if ((U.state === "loading" || U.state === "idle") && !U.list.length) return `<p class="note">${t("loadingRes")}</p>`;
  if (U.state === "error") return `<div class="warn">${t("supportErr")}</div>`;
  const q = S.q.trim().toLowerCase();
  const list = U.list.filter((u) => !q || u.username.includes(q) || u.name.toLowerCase().includes(q))
    .sort((a, b) => (!a.role - !b.role) || a.name.localeCompare(b.name)).slice(0, 60);
  const tile = (u) => {
    const e = A.roleEdit;
    if (e && e.username === u.username) {
      return `<div class="lo" style="padding:14px;display:flex;flex-direction:column;gap:10px"><b dir="auto">${esc(u.name)} <span dir="ltr" style="font-weight:400;color:var(--muted)">@${esc(u.username)}</span></b>
        <label class="chk"><input type="checkbox" data-arc="super"${e.super ? " checked" : ""}>${t("roleSuper")}</label>
        <div class="checks">${CLUB_LIST.map((c) => `<label class="chk"><input type="checkbox" data-arc="${esc(c.id)}"${e.clubs.includes(c.id) ? " checked" : ""}>${esc(t(c.id))}</label>`).join("")}</div>
        <p class="note" style="text-align:start;padding:0">${t("roleNote")}</p>
        <div class="row-actions"><button class="mini primary" data-adm="role-save">${t("save")}</button><button class="mini" data-adm="role-cancel">${t("cancel")}</button></div></div>`;
    }
    const r = parseRoleStr(u.role), isMe = u.username === S.user.username;
    return `<div class="card" style="flex-wrap:wrap"><div class="grow"><b dir="auto">${esc(u.name)}</b><span dir="ltr">@${esc(u.username)}</span></div>
      <span class="badge">${esc(r.super || r.clubs.length ? roleLabel(r) : t("student"))}</span>
      ${isMe ? "" : `<button class="mini" data-adm="role-edit" data-u="${esc(u.username)}">${t("changeRole")}</button>`}</div>`;
  };
  return `<input id="q" type="search" placeholder="${esc(t("searchUsers"))}" value="${esc(S.q)}" dir="auto">${list.map(tile).join("") || `<p class="note">${t("empty")}</p>`}`;
}
function adminScreen() {
  if (!isAdmin()) return `<p class="note">${t("noAccess")}</p>`;
  const A = S.adm;
  if (A.qres) return qresScreen();
  if (A.form) return adminForm();
  const secs = [["content", "adm_content"], ...(isSuper() ? [["requests", "adm_requests"]] : []), ["inbox", "adm_inbox"], ...(isSuper() ? [["team", "adm_team"]] : [])];
  const nm = S.adm.inbox.list.filter((m) => !m.reply).length;
  const count = (k) => (k === "inbox" ? nm : k === "requests" ? pendingReqs() : 0);
  const seg = `<div class="seg" role="group">${secs.map(([k, l]) => `<button data-adm="sec" data-v="${k}" class="${A.sec === k ? "on" : ""}">${t(l)}${count(k) ? ` (${count(k)})` : ""}</button>`).join("")}</div>`;
  const hero = `<div class="hero"><small>${t("admin")}</small><b dir="auto">${esc(roleLabel(S.user.role))}</b></div>`;
  const body = A.sec === "inbox" ? admInbox() : A.sec === "requests" && isSuper() ? admRequests() : A.sec === "team" && isSuper() ? admTeam() : admContent();
  return hero + seg + body;
}

// ---- quizzes taken inside the app ----
async function openQuiz(id) {
  S.qz = { id, title: "", state: "loading", questions: [], answers: [], attempts: 0, used: 0, err: "", result: null };
  S.tab = "quiz"; render();
  const Q = S.qz;
  try {
    const r = await api("quizGet", { token: S.user.token, id });
    if (S.qz !== Q) return;
    if (r.ok) {
      Object.assign(Q, { title: r.quiz.title, questions: r.quiz.questions, attempts: r.quiz.attempts, used: r.quiz.used, answers: r.quiz.questions.map(() => -1) });
      if (Q.attempts && Q.used >= Q.attempts) { Q.state = "error"; Q.err = t("err_attempts_done"); } else Q.state = "ready";
    } else if (r.error === "auth") { signOut(); return; }
    else { Q.state = "error"; Q.err = t("qzLoadErr"); }
  } catch { Q.state = "error"; Q.err = t("err_generic"); }
  render();
}
async function submitQuiz() {
  const Q = S.qz;
  if (!Q || Q.state !== "ready" || Q.answers.some((a) => a < 0)) return;
  Q.state = "submitting"; render(true);
  try {
    const r = await api("quizSubmit", { token: S.user.token, id: Q.id, answers: Q.answers });
    if (r.ok) { Q.result = r; Q.used += 1; Q.state = "result"; loadResults(); }
    else if (r.error === "auth") { signOut(); return; }
    else { Q.state = "error"; Q.err = admErr(r); }
  } catch { Q.state = "error"; Q.err = t("err_generic"); }
  render();
  document.querySelector("main")?.scrollTo?.(0, 0);
}
function quizResult() {
  const Q = S.qz, R = Q.result, pct = R.total ? Math.round((R.correct / R.total) * 100) : 0;
  const canRetry = !Q.attempts || Q.used < Q.attempts;
  const nf = new Intl.NumberFormat(locale());
  const items = Q.questions.map((q, i) => {
    const d = R.details[i] || {}, mine = Q.answers[i];
    return `<div class="lo" style="padding:14px;display:flex;flex-direction:column;gap:6px">
      <div style="display:flex;gap:8px;justify-content:space-between;align-items:flex-start"><b dir="auto" style="font-size:14px">${nf.format(i + 1)}. ${esc(q.q)}</b><span class="badge ${d.ok ? "ok" : "no"}">${d.ok ? t("qzRight") : t("qzWrong")}</span></div>
      <span dir="auto" style="font-size:13px;color:var(--muted)">${t("qzYour")}: ${esc(q.options[mine] ?? t("qzNoAnswer"))}</span>
      ${d.ok ? "" : `<span dir="auto" style="font-size:13px"><b>${t("qzCorrectAns")}:</b> ${esc(q.options[d.right] ?? "")}</span>`}
      ${d.explain ? `<span dir="auto" style="font-size:13px;color:var(--muted)">${esc(d.explain)}</span>` : ""}</div>`;
  }).join("");
  return `<div class="hero"><small>${t("qzScore")}</small><b dir="ltr">${nf.format(R.correct)} / ${nf.format(R.total)} (${nf.format(pct)}%)</b><span dir="auto">${esc(Q.title)}</span></div>
    ${items}
    ${canRetry ? `<button class="btn" data-qz="${esc(Q.id)}">${t("qzRetake")}</button>` : ""}
    <button class="btn ghost" data-go="quizzes" style="margin-top:0">${t("qzBack")}</button>`;
}
function quizScreen() {
  const Q = S.qz;
  const back = `<button class="btn ghost" data-go="quizzes" style="margin-top:0">${t("qzBack")}</button>`;
  if (!Q) return back;
  if (Q.state === "loading") return `<p class="note">${t("loadingRes")}</p>`;
  if (Q.state === "error") return `<div class="warn" role="alert">${esc(Q.err)}</div>${back}`;
  if (Q.state === "result") return quizResult();
  const nf = new Intl.NumberFormat(locale());
  const left = Q.attempts ? `${t("attemptsLeft")}: ${nf.format(Q.attempts - Q.used)}` : "";
  const items = Q.questions.map((q, i) => `<div class="lo" style="padding:14px;display:flex;flex-direction:column;gap:8px"><b dir="auto" style="font-size:15px">${nf.format(i + 1)}. ${esc(q.q)}</b>
    ${q.options.map((o, j) => `<label class="opt"><input type="radio" name="qz${i}" data-qza="${i}" value="${j}"${Q.answers[i] === j ? " checked" : ""}><span dir="auto">${esc(o)}</span></label>`).join("")}</div>`).join("");
  const ready = Q.answers.every((a) => a >= 0);
  return `<div class="hero"><small>${t("quizzes")}</small><b dir="auto">${esc(Q.title)}</b><span>${nf.format(Q.questions.length)} ${t("questionsWord")}${left ? " · " + esc(left) : ""}</span></div>
    ${items}
    <p class="note" id="qz-hint"${ready ? " hidden" : ""}>${t("qzAnswerAll")}</p>
    <button class="btn" id="qz-submit" data-qzs${ready && Q.state === "ready" ? "" : " disabled"}>${t("qzSubmit")}</button>${back}`;
}

// ---- events for admin and quiz screens ----
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-adm],[data-qz],[data-my],[data-qzs]");
  if (!el || !document.getElementById("app").contains(el)) return;
  const A = S.adm, d = el.dataset;
  if (d.qz) { openQuiz(d.qz); return; }
  if (d.my === "save") { saveMyClubs(); return; }
  if (el.hasAttribute("data-qzs")) { submitQuiz(); return; }
  const qi = +d.qi, oj = +d.oj;
  if (d.adm === "sec") { A.sec = d.v; S.q = ""; A.roleEdit = null; render(); if (d.v === "inbox" || d.v === "requests") loadAdminInbox(); if (d.v === "team") loadUsers(); }
  else if (d.adm === "add") admOpen(d.kind, null, d.req === "1");
  else if (d.adm === "edit") { const it = (d.kind === "event" ? S.events : S.resources).find((x) => x.id === d.id); if (it) admOpen(d.kind, it, false); }
  else if (d.adm === "qedit") admEditQuiz(d.id);
  else if (d.adm === "qres") { const it = S.quizzes.find((x) => x.qid === d.id); if (it) admQuizResults(it); }
  else if (d.adm === "qres-close") { A.qres = null; render(); }
  else if (d.adm === "del") admDelete(d.kind, d.id);
  else if (d.adm === "cancel") { A.form = null; A.err = ""; A.req = false; render(); }
  else if (d.adm === "reply") admReply(d.id);
  else if (d.adm === "decide") admDecide(d.id, d.ok === "1");
  else if (d.adm === "q-add") { A.form.questions.push(newQ()); render(true); }
  else if (d.adm === "q-del") { A.form.questions.splice(qi, 1); render(true); }
  else if (d.adm === "opt-add") { A.form.questions[qi].options.push(""); render(true); }
  else if (d.adm === "opt-del") { const q = A.form.questions[qi]; q.options.splice(oj, 1); if (q.correct === oj) q.correct = 0; else if (q.correct > oj) q.correct -= 1; render(true); }
  else if (d.adm === "role-edit") { const u = A.users.list.find((x) => x.username === d.u); if (u) { const r = parseRoleStr(u.role); A.roleEdit = { username: u.username, super: r.super, clubs: r.clubs.filter((c) => clubInfo(c)) }; render(true); } }
  else if (d.adm === "role-save") admSaveRole();
  else if (d.adm === "role-cancel") { A.roleEdit = null; render(true); }
});
document.addEventListener("input", (e) => {
  const el = e.target, A = S.adm, d = el.dataset || {};
  if (d.af && A.form) A.form[d.af] = el.value;
  else if (d.ar) A.drafts[d.ar] = el.value;
  else if (d.aq && A.form?.questions) {
    const q = A.form.questions[+d.qi];
    if (!q) return;
    if (d.aq === "q") q.q = el.value; else if (d.aq === "explain") q.explain = el.value;
    else if (d.aq === "opt") q.options[+d.oj] = el.value;
    else if (d.aq === "correct" && el.checked) q.correct = +el.value;
  }
});
document.addEventListener("change", (e) => {
  const el = e.target, A = S.adm, d = el.dataset || {};
  if (d.afc && A.form) {
    const c = d.afc, cur = A.form.clubs;
    if (el.checked) { A.form.clubs = c === "all" ? ["all"] : [...cur.filter((x) => x !== "all"), c]; if (c === "all" || cur.includes("all")) render(true); }
    else A.form.clubs = cur.filter((x) => x !== c);
  } else if (d.af === "type" && A.form) { A.form.type = el.value; render(true); }
  else if (el.hasAttribute?.("data-af-file")) admUpload(el.files && el.files[0]);
  else if (d.arc && A.roleEdit) {
    if (d.arc === "super") A.roleEdit.super = el.checked; else A.roleEdit.clubs = toggle(A.roleEdit.clubs, d.arc, el.checked);
  } else if (d.regc !== undefined) S.form.clubs = toggle(S.form.clubs || [], d.regc, el.checked);
  else if (d.myc !== undefined) S.myc = toggle(S.myc ?? (S.user?.clubs || []), d.myc, el.checked);
  else if (d.qza !== undefined && S.qz) {
    S.qz.answers[+d.qza] = +el.value;
    const ready = S.qz.answers.every((a) => a >= 0);
    const b = document.getElementById("qz-submit"); if (b) b.disabled = !ready;
    const h = document.getElementById("qz-hint"); if (h) h.hidden = ready;
  }
});
document.addEventListener("submit", (e) => { if (e.target.id === "adm-form") { e.preventDefault(); if (S.adm.kind === "quiz") admSaveQuiz(); else admSave(); } });

function navHtml() {
  if (gate()) return "";
  const items = [["home", "home"], ["library", "book"], ["events", "cal"], ...(CFG.API_URL ? [isAdmin() ? ["admin", "settings"] : ["support", "support"], ["account", "user"]] : [])];
  const dot = (on) => (on ? `<i aria-label="new" style="position:absolute;top:10px;inset-inline-start:calc(50% + 6px);width:10px;height:10px;border-radius:50%;background:#E5484D;border:2px solid #fff"></i>` : "");
  return `<nav>${items.map(([k, ic]) => `<button data-go="${k}" class="${S.tab === k || (k === "home" && CHILD.includes(S.tab)) ? "on" : ""}"${S.tab === k ? ' aria-current="page"' : ""}${k === "support" || k === "admin" ? ' style="position:relative"' : ""}>${icon(ic)}<span>${t(k)}</span>${dot(k === "support" && S.user && answeredCount() > Number(store.get("supSeen", "0")) && S.tab !== "support")}${dot(k === "admin" && unansweredAdm() > 0 && S.tab !== "admin")}</button>`).join("")}</nav>`;
}

// ---- shell ----
function render(keep) {
  const vis = visClubs();
  if (vis.length && !vis.some((c) => c.id === S.club)) { S.club = vis[0].id; store.set("club", S.club); }
  if (gate()) S.tab = "account";
  const prev = keep ? document.querySelector("main")?.scrollTop : 0;
  const root = document.documentElement;
  const ci = clubInfo(S.club);
  root.style.setProperty("--accent", ci.color); root.style.setProperty("--tint", ci.tint || "#F1EBFC");
  root.dataset.club = S.club; root.lang = S.lang; root.dir = S.lang === "ar" ? "rtl" : "ltr";
  document.querySelector('meta[name="theme-color"]').content = clubColor(S.club);
  const screens = { home, library, events: eventsScreen, quizzes: quizzesScreen, revision: revisionScreen, references: referencesScreen, joint: jointScreen, support: supportScreen, admin: adminScreen, quiz: quizScreen, account: accountScreen };
  const titles = { home: t("app"), library: t("library"), references: t("refsTitle"), events: t("events"), quizzes: t("quizzes"), revision: t("revisionTitle"), joint: t("jointSpace"), support: t("support"), admin: t("admin"), quiz: t("quizzes"), account: t("account") };
  const subs = { home: t("tagline"), library: t("losSub"), references: t("refsPageSub"), events: t("upcoming"), quizzes: t("quizzesSub"), revision: t("revisionSub"), joint: t("jointSub"), support: t("supportSub"), admin: t("adminSub"), quiz: "", account: t("accountSub") };
  const showSwitch = !["joint", "account", "support", "admin", "quiz"].includes(S.tab);
  const logo = ["joint", "account", "support", "admin", "quiz"].includes(S.tab) ? "" : (ci.logo || CFG.LOGOS?.[S.club]) ? `<img src="${esc(ci.logo || CFG.LOGOS[S.club])}" alt="">` : `<div class="glyph" aria-hidden="true" style="background:${ci.color}">${esc(ci.glyph || t(S.club).slice(0, 2))}</div>`;
  const back = CHILD.includes(S.tab) ? `<button class="icon-btn" data-go="home" aria-label="${t("back")}">${S.lang === "ar" ? "→" : "←"}</button>` : "";
  const app = document.getElementById("app");
  const fu = document.getElementById("f-user"), fn = document.getElementById("f-name");
  if (fu) S.form.username = fu.value;
  if (fn) S.form.name = fn.value;
  if (S.tab === "support" && S.support.state === "ok") store.set("supSeen", String(answeredCount()));
  const fm = document.getElementById("f-msg");
  if (fm) S.draft = fm.value;
  const keepFocusQ = document.activeElement?.id === "q";
  app.innerHTML = `<header><div class="top">${back}${logo}<div class="t"><div class="title">${titles[S.tab]}</div><div class="sub">${subs[S.tab]}</div></div>
    <button class="icon-btn" data-act="refresh" aria-label="${t("refresh")}">↻</button><button class="icon-btn" data-act="lang">${t("lang")}</button></div>
    ${showSwitch && vis.length > 1 ? `<div class="switch" role="group">${vis.map((c) => `<button data-club="${c.id}" class="${S.club === c.id ? "on" : ""}" aria-pressed="${S.club === c.id}"${S.club === c.id ? ` style="background:${c.color}"` : ""}>${t(c.id)}</button>`).join("")}</div>` : ""}</header>
  <main>${S.live ? "" : `<div class="warn">${t("offline")}</div>`}${screens[S.tab]()}</main>
  ${navHtml()}`;
  if (prev) document.querySelector("main").scrollTop = prev;
  document.querySelector(".switch button.on")?.scrollIntoView({ inline: "center", block: "nearest" });
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
  else if (el.dataset.go) { S.supOk = false; S.supErr = ""; S.tab = el.dataset.go; S.filter = el.dataset.filter || "all"; S.q = ""; }
  else if (el.dataset.act === "lang") { S.lang = S.lang === "ar" ? "en" : "ar"; store.set("lang", S.lang); }
  else if (el.dataset.act === "refresh") {
    toast(t("refreshing"), 0);
    Promise.allSettled([loadAll(), loadResults(), loadSupport(), refreshMe().then(loadAdminInbox)]).then(() => { render(true); toast(t("updated"), 2000); });
    return;
  }
  render();
  if (el.dataset.go === "quizzes") loadResults();
  if (el.dataset.go === "support") loadSupport();
  if (el.dataset.go === "admin") loadAdminInbox();
});
document.addEventListener("input", (e) => { if (e.target.id === "q") { S.q = e.target.value; render(true); } });
document.addEventListener("submit", (e) => {
  if (e.target.id === "acct-form") { e.preventDefault(); submitAccount(e.target); }
  if (e.target.id === "sup-form") { e.preventDefault(); submitSupport(e.target); }
});
document.addEventListener("visibilitychange", () => { if (!document.hidden) { loadAll(); if (S.tab === "quizzes") loadResults(); if (S.user) { loadSupport(); loadAdminInbox(); } } });

render();
loadAll();
if (S.user) { loadResults(); loadSupport(); refreshMe().then(loadAdminInbox); }
// check for team replies every minute while the app is open
setInterval(() => { if (!document.hidden && S.user && CFG.API_URL) { loadSupport(); loadAdminInbox(); } }, 60000);
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
