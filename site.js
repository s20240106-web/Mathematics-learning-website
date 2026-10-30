/* ==========================================================================
   Exponent Station — bilingual product website
   ========================================================================== */

(() => {
  "use strict";

  const LANG_KEY = "exponent-site-language";

  const I18N = {
    zh: {
      metaTitle: "指數溫習站｜中一至中三互動數學學習平台",
      metaDescription: "指數溫習站是一個為中一至中三學生設計的互動數學平台，涵蓋指數定律、零與負指數及科學記數法，配合指數實驗室、40 題即時練習與學習進度。由 3A 陳穎霖設計及開發。",
      skip: "跳至主要內容",
      announcementLeft: "學生原創學習產品 · 香港",
      announcementRight: "適合中一至中三 · 免費使用",
      brandHome: "指數溫習站首頁",
      brandName: "指數溫習站",
      brandSub: "EXPONENT STATION",
      mainNavLabel: "主要導覽",
      mobileNavLabel: "流動選單",
      langLabel: "選擇語言",
      menuOpen: "開啟選單",
      menuClose: "關閉選單",
      navApproach: "理念",
      navFeatures: "功能",
      navCurriculum: "課程",
      navShowcase: "示範",
      navAuthor: "作者",
      navFaq: "常見問題",
      headerCta: "開啟平台",
      heroEyebrow: "中一至中三 · 指數與科學記數法",
      heroTitle1: "讓指數，",
      heroTitle2: "真正入腦。",
      heroLead: "由定義、定律到科學記數法：四個單元、互動實驗室與 40 題即時練習，將抽象規則變成看得見的推理。",
      ctaStart: "免費開始學習",
      ctaExplore: "探索產品",
      heroAuthorLabel: "設計及開發",
      heroAuthorRole: "3A 班 · 香港",
      heroStatUnits: "學習單元",
      heroStatQuestions: "練習題",
      heroStatSignup: "註冊",
      heroStatSignupValue: "零",
      browserLabel: "互動學習平台",
      heroImageAlt: "指數溫習站學習平台首頁，展示指數增長圖表與學習進度",
      floatProgress: "學習進度",
      floatProgressSub: "自動儲存",
      floatFormula: "同底相乘",
      heroSticker: "學生原創",
      heroFootnote: "無需下載 · 無需註冊 · 即開即用",
      scrollHint: "向下探索",
      whyKicker: "理念",
      whySide: "不是再多一個題庫，而是一個讓規則變得可見、可試、可記住的學習空間。",
      whyTitle1: "背完公式，",
      whyTitle2: "唔等於明白。",
      whyLead: "指數最難的地方，往往不是計算，而是分辨幾時相加、幾時相乘，以及為甚麼 a⁰ 會等於 1。指數溫習站把每一步拆開，讓學生先看見規律，再建立信心。",
      whyQuote: "先理解，後練習。",
      whyQuoteSub: "這是整個產品的設計起點。",
      principle1Title: "看得見的數學",
      principle1Body: "拖動指數，看着 2⁵ 由 1 增長到 32。抽象規則變成可以觀察的變化。",
      principle2Title: "有次序的課程",
      principle2Body: "由底數與指數開始，逐層走到定律、負指數與科學記數法，不跳步。",
      principle3Title: "有回饋的練習",
      principle3Body: "每一題都有解釋與答案回顧，讓學生知道自己為甚麼錯，而不只是錯了幾題。",
      featuresKicker: "產品功能",
      featuresTitle1: "一個平台，",
      featuresTitle2: "完整的學習循環。",
      featuresLead: "由第一條定義，到最後一次自我檢查，所有工具都放在同一個地方。",
      feature1Tag: "結構化課堂",
      feature1Title: "四站式學習路徑",
      feature1Body: "每個單元都有概念拆解、公式、例題、常見錯誤與一分鐘自測，讓學生按自己的節奏完成。",
      feature2Tag: "互動實驗室",
      feature2Title: "指數實驗室",
      feature2Body: "自由選擇底數與指數，即時觀察展開式、數值、科學記數法與增長圖表。",
      feature2Caption: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
      feature3Tag: "智能練習",
      feature3Title: "40 題即時練習",
      feature3Body: "自選範圍與題量，每題即時批改並附完整解釋；完成後有成績與錯題回顧。",
      feature4Tag: "學習進度",
      feature4Title: "進度會自己記住",
      feature4Body: "單元完成度、最佳成績與累積答對題數自動儲存在瀏覽器，下次回來即可繼續。",
      feature5Tag: "列印友好",
      feature5Title: "公式表，一按即印",
      feature5Body: "整理齊全的指數速查表，適合列印貼在書桌前，或儲存成 PDF 溫習。",
      feature6Tag: "響應式設計",
      feature6Title: "由手機到課室投影",
      feature6Body: "同一個平台，在手機、平板與桌面都保持清晰。無論自學、課堂示範或家長伴讀，都可以即開即用。",
      feature6Bullet1: "手機自學",
      feature6Bullet2: "課堂投影",
      feature6Bullet3: "家長伴讀",
      featureUnit1: "指數基礎",
      featureUnit2: "指數定律",
      featureUnit3: "零與負指數",
      featureUnit4: "科學記數法",
      featureTime1: "6 分鐘",
      featureTime2: "9 分鐘",
      featureTime3: "8 分鐘",
      featureTime4: "7 分鐘",
      miniQuizLabel: "題目 01 / 10",
      miniQuizHint: "同底相乘，指數相加。",
      phoneCaption: "指數增長",
      curriculumKicker: "課程範圍",
      curriculumTitle1: "四個單元，",
      curriculumTitle2: "一條清晰的指數路徑。",
      curriculumLead: "對應香港初中數學課程中的指數與科學記數法單元。點擊任何單元，直接跳到學習平台開始。",
      unit1Title: "指數基礎",
      unit1Tag: "入門",
      unit1Desc: "分清楚底數、指數與冪，理解重複相乘的意義。",
      unit2Title: "指數定律",
      unit2Tag: "核心",
      unit2Desc: "同底相乘、同底相除、冪的冪，以及積與商的次方。",
      unit3Title: "零與負指數",
      unit3Tag: "易錯",
      unit3Desc: "用規律解釋 a⁰ = 1，理解負指數就是倒數。",
      unit4Title: "科學記數法",
      unit4Tag: "應用",
      unit4Desc: "以 A × 10ⁿ 表示極大與極小的數，並進行乘除運算。",
      curriculumNote: "每個單元約 6–9 分鐘，附例題、易錯位與自測。",
      showcaseKicker: "產品示範",
      showcaseTitle1: "真實畫面，",
      showcaseTitle2: "即開即用。",
      showcaseLead: "以下畫面直接來自學習平台。揀一個環節，看看學生如何由理解走到練習。",
      demoTabsLabel: "產品示範",
      tabLesson: "互動課堂",
      tabLab: "指數實驗室",
      tabPractice: "練習站",
      demoCaptionLesson: "互動課堂：每個單元由概念、公式、例題到易錯位，逐格拆解。",
      demoCaptionLab: "指數實驗室：拖動指數，即時看見數值、展開式與圖表一起變化。",
      demoCaptionPractice: "練習站：自選範圍與題量，每題附解釋，完成後回顧錯題。",
      demoAltLesson: "指數溫習站互動課堂畫面",
      demoAltLab: "指數溫習站指數實驗室畫面",
      demoAltPractice: "指數溫習站練習站畫面",
      showcaseNote: "示範為真實產品截圖 · 所有功能均可免費使用",
      showcaseCta: "開啟完整學習平台",
      howKicker: "如何使用",
      howTitle1: "三個步驟，",
      howTitle2: "建立真正的理解。",
      howLead: "不需要老師在旁設定，也不需要建立帳戶。打開網站，就可以開始。",
      step1Tag: "STEP 01",
      step1Title: "揀一個單元",
      step1Body: "由最需要鞏固的概念開始。四個單元可以按任何次序重溫。",
      step2Tag: "STEP 02",
      step2Title: "拉一拉，看見規律",
      step2Body: "在指數實驗室改變底數與指數，將抽象公式變成眼前變化的數字。",
      step3Tag: "STEP 03",
      step3Title: "練習，然後修正",
      step3Body: "用即時練習檢查理解。每題都有解釋，錯題會保留在成績回顧中。",
      authorKicker: "作者",
      authorKickerSide: "一個學生，將一個學習難題變成產品。",
      authorClassBadge: "3A 班",
      authorPortraitNote: "設計 · 內容 · 程式",
      authorRole: "設計、內容及開發",
      authorClass: "3A 班 · 香港",
      authorQuote: "「我發現自己溫指數時，最難不是計數，而是記住幾時加、幾時乘。所以我把每個規則做成可以看、可以試、可以即刻檢查的工具。」",
      authorBio: "陳穎霖是香港中學生，喜歡將艱深的數學概念拆成簡單、可操作的學習體驗。指數溫習站由構思、內容、設計到程式碼，全部由自己一手完成。",
      authorLink: "在 GitHub 查看專案",
      faqKicker: "常見問題",
      faqTitle: "還有問題？",
      faqLead: "關於這個學習平台，你可能想知的事。",
      faq1Q: "這個平台收費嗎？",
      faq1A: "完全免費。指數溫習站是一個學生原創的學習項目，沒有訂閱、付款或隱藏收費。",
      faq2Q: "需要註冊帳戶嗎？",
      faq2A: "不需要。打開網站就可以使用；學習進度會自動儲存在你的瀏覽器。",
      faq3Q: "適合哪個年級？",
      faq3A: "主要為中一至中三學生而設，對應香港初中數學課程的指數與科學記數法單元。",
      faq4Q: "學習內容有英文版嗎？",
      faq4A: "學習平台的課程與題目以繁體中文編寫，配合香港初中課堂；這個產品介紹網站則提供繁體中文及英文版本。",
      faq5Q: "我的學習進度會去哪裡？",
      faq5A: "進度只儲存在你的瀏覽器 localStorage，不會上傳到伺服器。更換裝置或清除瀏覽器資料後，進度會重新開始。",
      faq6Q: "是誰開發的？",
      faq6A: "指數溫習站由 3A 陳穎霖設計及開發，涵蓋內容、視覺設計與前端程式。",
      finalKicker: "READY WHEN YOU ARE",
      finalTitle1: "下一次溫習，",
      finalTitle2: "由一個「我明喇」開始。",
      finalBody: "四個單元、一個實驗室、40 題練習。免費、免註冊，現在就可以開始。",
      finalCta: "進入學習平台",
      finalMeta: "免費 · 無需註冊 · 進度自動儲存",
      footerTagline: "為中一至中三而設的互動指數學習平台。由學生設計，為學生而做。",
      footerCredit: "設計及開發",
      footerExplore: "探索",
      footerProject: "專案",
      footerApp: "學習平台",
      footerGithub: "GitHub 專案",
      footerLanguage: "語言",
      footerCopyright: "© 2026 指數溫習站 · 由 3A 陳穎霖製作",
      footerBackTop: "返回頂部 ↑"
    },
    en: {
      metaTitle: "Exponent Station | Interactive Maths for Junior Secondary",
      metaDescription: "An interactive maths platform for S1–S3 students covering index laws, zero and negative indices, and scientific notation — with a live exponent lab, 40 explained questions and progress tracking. Designed and built by Chan Wing Lam, 3A.",
      skip: "Skip to main content",
      announcementLeft: "STUDENT-BUILT LEARNING PRODUCT · HONG KONG",
      announcementRight: "FOR S1–S3 · FREE TO USE",
      brandHome: "Exponent Station home",
      brandName: "Exponent Station",
      brandSub: "指數溫習站",
      mainNavLabel: "Main navigation",
      mobileNavLabel: "Mobile navigation",
      langLabel: "Choose language",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navApproach: "Approach",
      navFeatures: "Features",
      navCurriculum: "Curriculum",
      navShowcase: "Showcase",
      navAuthor: "Author",
      navFaq: "FAQ",
      headerCta: "Launch app",
      heroEyebrow: "S1–S3 · INDICES & SCIENTIFIC NOTATION",
      heroTitle1: "Make exponents",
      heroTitle2: "click.",
      heroLead: "From definitions and laws to scientific notation: four focused units, an interactive lab and 40 explained questions that turn abstract rules into visible reasoning.",
      ctaStart: "Start learning free",
      ctaExplore: "Explore the product",
      heroAuthorLabel: "Designed & developed by",
      heroAuthorRole: "Class 3A · Hong Kong",
      heroStatUnits: "Learning units",
      heroStatQuestions: "Questions",
      heroStatSignup: "Sign-up",
      heroStatSignupValue: "0",
      browserLabel: "INTERACTIVE LEARNING PLATFORM",
      heroImageAlt: "Exponent Station home screen with the exponent growth chart and learning progress",
      floatProgress: "Progress",
      floatProgressSub: "Saved automatically",
      floatFormula: "SAME BASE",
      heroSticker: "STUDENT-BUILT",
      heroFootnote: "NO DOWNLOADS · NO SIGN-UP · READY TO USE",
      scrollHint: "Scroll to explore",
      whyKicker: "Approach",
      whySide: "Not another question bank — a learning space where rules become visible, testable and memorable.",
      whyTitle1: "Memorising the rule",
      whyTitle2: "isn't understanding.",
      whyLead: "The hardest part of indices usually isn't the arithmetic. It's knowing when to add, when to multiply, and why a⁰ equals 1. Exponent Station breaks every step down so students can see the pattern before building confidence.",
      whyQuote: "Understand first. Practise second.",
      whyQuoteSub: "That principle shaped the whole product.",
      principle1Title: "Maths you can see",
      principle1Body: "Drag the index and watch 2⁵ grow from 1 to 32. Abstract rules become changes you can observe.",
      principle2Title: "A sequence that sticks",
      principle2Body: "Start with bases and indices, then move carefully through the laws, negative indices and scientific notation.",
      principle3Title: "Feedback, not just marks",
      principle3Body: "Every question includes an explanation and answer review, so students learn why they went wrong — not just how many they missed.",
      featuresKicker: "Features",
      featuresTitle1: "One platform.",
      featuresTitle2: "A complete learning loop.",
      featuresLead: "From the first definition to the final self-check, every tool lives in one place.",
      feature1Tag: "STRUCTURED LESSONS",
      feature1Title: "A four-stop learning path",
      feature1Body: "Every unit combines concept breakdowns, formulas, worked examples, common mistakes and a one-minute self-check.",
      feature2Tag: "INTERACTIVE LAB",
      feature2Title: "The exponent lab",
      feature2Body: "Choose any base and exponent, then watch the expansion, value, scientific notation and growth chart update together.",
      feature2Caption: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
      feature3Tag: "SMART PRACTICE",
      feature3Title: "40 explained questions",
      feature3Body: "Choose a topic and question count. Every answer gets instant feedback and a full explanation, with a review at the end.",
      feature4Tag: "PROGRESS",
      feature4Title: "Progress that remembers",
      feature4Body: "Completed units, best scores and total correct answers are saved in your browser, ready for your next visit.",
      feature5Tag: "PRINT READY",
      feature5Title: "A formula sheet, one click away",
      feature5Body: "A complete index formula sheet, ready to print for your desk or save as a PDF for revision.",
      feature6Tag: "RESPONSIVE",
      feature6Title: "From phone to classroom projector",
      feature6Body: "The same platform stays clear on phones, tablets and desktops. Use it for solo revision, a class demo or supported study at home.",
      feature6Bullet1: "Solo revision",
      feature6Bullet2: "Classroom demo",
      feature6Bullet3: "Parent-supported study",
      featureUnit1: "Foundations",
      featureUnit2: "Index laws",
      featureUnit3: "Zero & negative",
      featureUnit4: "Scientific notation",
      featureTime1: "6 min",
      featureTime2: "9 min",
      featureTime3: "8 min",
      featureTime4: "7 min",
      miniQuizLabel: "QUESTION 01 / 10",
      miniQuizHint: "Same base: add the indices.",
      phoneCaption: "Exponential growth",
      curriculumKicker: "Curriculum",
      curriculumTitle1: "Four units.",
      curriculumTitle2: "One clear path through indices.",
      curriculumLead: "Mapped to the indices and scientific notation topics in the Hong Kong junior secondary mathematics curriculum. Open any unit to start learning.",
      unit1Title: "Foundations of indices",
      unit1Tag: "INTRO",
      unit1Desc: "Tell bases, indices and powers apart, and understand repeated multiplication.",
      unit2Title: "Laws of indices",
      unit2Tag: "CORE",
      unit2Desc: "Multiplication and division with the same base, powers of powers, and powers of products and quotients.",
      unit3Title: "Zero & negative indices",
      unit3Tag: "TRICKY",
      unit3Desc: "See why a⁰ = 1, and understand a negative index as a reciprocal.",
      unit4Title: "Scientific notation",
      unit4Tag: "APPLIED",
      unit4Desc: "Write very large and very small numbers as A × 10ⁿ, then multiply and divide them.",
      curriculumNote: "Each unit takes about 6–9 minutes, with worked examples, common traps and a self-check.",
      showcaseKicker: "Showcase",
      showcaseTitle1: "Real screens.",
      showcaseTitle2: "Ready to use.",
      showcaseLead: "These screens come directly from the learning platform. Pick a moment to see how a student moves from understanding to practice.",
      demoTabsLabel: "Product showcase",
      tabLesson: "Interactive lesson",
      tabLab: "Exponent lab",
      tabPractice: "Practice",
      demoCaptionLesson: "Interactive lesson: each unit breaks the concept, formulas, worked examples and common mistakes into clear steps.",
      demoCaptionLab: "Exponent lab: drag the index and watch the value, expansion and chart move together.",
      demoCaptionPractice: "Practice: choose a topic and question count, get a full explanation for every answer, then review your mistakes.",
      demoAltLesson: "Exponent Station interactive lesson screen",
      demoAltLab: "Exponent Station interactive exponent lab screen",
      demoAltPractice: "Exponent Station practice screen",
      showcaseNote: "SCREENSHOTS FROM THE LIVE PRODUCT · EVERY FEATURE IS FREE TO USE",
      showcaseCta: "Open the full learning platform",
      howKicker: "How it works",
      howTitle1: "Three steps.",
      howTitle2: "Understanding that sticks.",
      howLead: "No teacher setup and no account required. Open the site and begin.",
      step1Tag: "STEP 01",
      step1Title: "Choose a unit",
      step1Body: "Start with the concept that needs the most attention. The four units can be revisited in any order.",
      step2Tag: "STEP 02",
      step2Title: "Drag. See the pattern.",
      step2Body: "Change the base and index in the exponent lab, turning an abstract formula into numbers that move in front of you.",
      step3Tag: "STEP 03",
      step3Title: "Practise. Then correct.",
      step3Body: "Check your understanding with instant practice. Every question is explained, and mistakes stay in your score review.",
      authorKicker: "The maker",
      authorKickerSide: "One student. One learning problem. One product.",
      authorClassBadge: "CLASS 3A",
      authorPortraitNote: "DESIGN · CONTENT · CODE",
      authorRole: "Design, content & development",
      authorClass: "Class 3A · Hong Kong",
      authorQuote: "\u201cWhen I revised indices, the hardest part wasn't the arithmetic. It was remembering when to add and when to multiply. So I turned each rule into something you can see, test and check immediately.\u201d",
      authorBio: "Chan Wing Lam is a secondary student in Hong Kong who enjoys turning difficult maths ideas into simple, hands-on learning experiences. Exponent Station was conceived, written, designed and coded entirely by the student.",
      authorLink: "View the project on GitHub",
      faqKicker: "FAQ",
      faqTitle: "Questions, answered.",
      faqLead: "A few things you might want to know about the learning platform.",
      faq1Q: "Is the platform free?",
      faq1A: "Completely free. Exponent Station is a student-built learning project with no subscription, payment or hidden cost.",
      faq2Q: "Do I need an account?",
      faq2A: "No. Open the website and start learning. Your progress is saved automatically in your browser.",
      faq3Q: "Which year group is it for?",
      faq3A: "It is designed primarily for S1–S3 students, covering the indices and scientific notation topics in the Hong Kong junior secondary mathematics curriculum.",
      faq4Q: "Is the learning content available in English?",
      faq4A: "The lessons and questions inside the learning app are written in Traditional Chinese for Hong Kong classrooms. This product website is available in both Traditional Chinese and English.",
      faq5Q: "Where is my learning progress stored?",
      faq5A: "Progress is stored only in your browser's localStorage and is not uploaded to a server. Changing devices or clearing browser data will start your progress again.",
      faq6Q: "Who built it?",
      faq6A: "Exponent Station was designed and built by 3A 陳穎霖 (Chan Wing Lam), including the content, visual design and front-end code.",
      finalKicker: "READY WHEN YOU ARE",
      finalTitle1: "Make the next revision session",
      finalTitle2: "start with an \u201cI get it.\u201d",
      finalBody: "Four units, one lab and 40 questions. Free, no sign-up, ready whenever you are.",
      finalCta: "Enter the learning platform",
      finalMeta: "FREE · NO SIGN-UP · PROGRESS SAVED AUTOMATICALLY",
      footerTagline: "An interactive indices platform for S1–S3. Designed by a student, for students.",
      footerCredit: "Designed & developed by",
      footerExplore: "Explore",
      footerProject: "Project",
      footerApp: "Learning platform",
      footerGithub: "GitHub project",
      footerLanguage: "Language",
      footerCopyright: "© 2026 Exponent Station · Made by 3A 陳穎霖",
      footerBackTop: "Back to top ↑"
    }
  };

  const DEMOS = {
    lesson: {
      src: "assets/app-lesson.png",
      mobile: "assets/app-lesson-mobile.png",
      caption: "demoCaptionLesson",
      alt: "demoAltLesson"
    },
    lab: {
      src: "assets/app-lab.png",
      mobile: "assets/app-lab-mobile.png",
      caption: "demoCaptionLab",
      alt: "demoAltLab"
    },
    practice: {
      src: "assets/app-practice.png",
      mobile: "assets/app-practice-mobile.png",
      caption: "demoCaptionPractice",
      alt: "demoAltPractice"
    }
  };

  const header = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const demoImage = document.getElementById("demoImage");
  const demoCaption = document.getElementById("demoCaption");
  const demoPanel = document.getElementById("demoPanel");
  const demoTabs = [...document.querySelectorAll(".demo-tab")];
  const langButtons = [...document.querySelectorAll(".lang-btn[data-lang]")];
  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogLocaleAlternate = document.querySelector('meta[property="og:locale:alternate"]');

  let currentLang = "zh";
  let activeDemo = "lesson";
  let menuOpen = false;
  let scrollFrame = null;

  function getInitialLanguage() {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "zh" || param === "en") return param;

    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (error) {
      /* Storage can be unavailable in private browsing. */
    }

    return (navigator.language || "zh").toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function applyLanguage(lang, options = {}) {
    if (!I18N[lang]) return;
    currentLang = lang;
    const copy = I18N[lang];
    document.documentElement.lang = lang === "zh" ? "zh-Hant-HK" : "en";
    document.body.dataset.lang = lang;

    document.title = copy.metaTitle;
    if (metaDescription) metaDescription.setAttribute("content", copy.metaDescription);
    if (ogTitle) ogTitle.setAttribute("content", copy.metaTitle);
    if (ogDescription) ogDescription.setAttribute("content", copy.metaDescription);
    if (ogLocale) ogLocale.setAttribute("content", lang === "zh" ? "zh_HK" : "en_GB");
    if (ogLocaleAlternate) ogLocaleAlternate.setAttribute("content", lang === "zh" ? "en_GB" : "zh_HK");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (copy[key] !== undefined) element.textContent = copy[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria");
      if (copy[key] !== undefined) element.setAttribute("aria-label", copy[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.getAttribute("data-i18n-alt");
      if (copy[key] !== undefined) element.setAttribute("alt", copy[key]);
    });

    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === lang));
    });

    updateMenuLabel();
    updateDemoCopy();

    if (options.persist !== false) {
      try {
        window.localStorage.setItem(LANG_KEY, lang);
      } catch (error) {
        /* The language still changes for this page view. */
      }
    }

    if (options.updateUrl !== false) {
      try {
        const url = new URL(window.location.href);
        if (lang === "zh") url.searchParams.delete("lang");
        else url.searchParams.set("lang", lang);
        window.history.replaceState(null, "", url);
      } catch (error) {
        /* Some local file previews disallow history updates. */
      }
    }
  }

  function updateMenuLabel() {
    if (!menuBtn) return;
    const copy = I18N[currentLang];
    menuBtn.setAttribute("aria-label", menuOpen ? copy.menuClose : copy.menuOpen);
  }

  function setLanguage(lang) {
    applyLanguage(lang, { persist: true, updateUrl: true });
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  /* ==========================================================================
     Showcase tabs
     ========================================================================== */

  function updateDemoCopy() {
    if (!demoImage || !demoCaption) return;
    const demo = DEMOS[activeDemo];
    if (!demo) return;
    const copy = I18N[currentLang];
    demoImage.setAttribute("alt", copy[demo.alt]);
    demoCaption.setAttribute("data-i18n", demo.caption);
    demoCaption.textContent = copy[demo.caption];
  }

  function setDemo(name, focusTab = false) {
    if (!DEMOS[name]) return;
    activeDemo = name;
    const demo = DEMOS[name];
    if (demoImage) {
      demoImage.src = window.matchMedia("(max-width: 720px)").matches ? demo.mobile : demo.src;
      demoImage.setAttribute("data-i18n-alt", demo.alt);
      demoImage.setAttribute("alt", I18N[currentLang][demo.alt]);
    }
    if (demoCaption) {
      demoCaption.setAttribute("data-i18n", demo.caption);
      demoCaption.textContent = I18N[currentLang][demo.caption];
    }
    demoTabs.forEach((tab) => {
      const selected = tab.getAttribute("data-demo") === name;
      tab.setAttribute("aria-selected", String(selected));
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      if (selected && focusTab) tab.focus();
    });
    if (demoPanel) {
      demoPanel.setAttribute("aria-labelledby", `tab-${name}`);
    }
  }

  demoTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setDemo(tab.getAttribute("data-demo")));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = null;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % demoTabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + demoTabs.length) % demoTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = demoTabs.length - 1;
      if (nextIndex !== null) {
        event.preventDefault();
        setDemo(demoTabs[nextIndex].getAttribute("data-demo"), true);
      }
    });
  });

  /* ==========================================================================
     Mobile navigation
     ========================================================================== */

  function setMenu(open) {
    if (!header || !menuBtn) return;
    menuOpen = open;
    header.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    updateMenuLabel();
    document.body.classList.toggle("menu-locked", open && window.innerWidth <= 980);
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => setMenu(!menuOpen));
  }

  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });
  }

  document.addEventListener("click", (event) => {
    if (!menuOpen || !header) return;
    if (!header.contains(event.target)) setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
      setMenu(false);
      if (menuBtn) menuBtn.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && menuOpen) setMenu(false);
    updateActiveNav();
    const demo = DEMOS[activeDemo];
    if (demo && demoImage) {
      const preferred = window.matchMedia("(max-width: 720px)").matches ? demo.mobile : demo.src;
      if (!demoImage.src.endsWith(preferred.split("/").pop())) demoImage.src = preferred;
    }
  });

  /* ==========================================================================
     Header + navigation state
     ========================================================================== */

  const sectionIds = ["why", "features", "curriculum", "showcase", "author", "faq"];

  function updateActiveNav() {
    const marker = 150;
    let current = "";

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      const bounds = section.getBoundingClientRect();
      if (bounds.top <= marker && bounds.bottom > marker) current = id;
    });

    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 10);
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      updateActiveNav();
      scrollFrame = null;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  /* ==========================================================================
     Init
     ========================================================================== */

  applyLanguage(getInitialLanguage(), { persist: true, updateUrl: false });
  setDemo(activeDemo);
  onScroll();
})();
