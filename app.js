/* ==========================================================================
   指數溫習站 — Learning interactions
   ========================================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "indices-station-progress-v1";
  const UNIT_IDS = ["basics", "laws", "negative", "notation"];

  const CATEGORIES = {
    basics: { label: "指數基礎", short: "基礎" },
    laws: { label: "指數定律", short: "定律" },
    negative: { label: "零與負指數", short: "負指數" },
    notation: { label: "科學記數法", short: "科學記數" }
  };

  const UNITS = [
    {
      id: "basics",
      num: "01",
      navTitle: "指數基礎",
      navSub: "定義與讀法",
      tag: "入門",
      time: "約 6 分鐘",
      title: "指數，係重複相乘嘅縮寫",
      summary: "與其逐個寫出嚟，我哋用一個細細嘅指數，記低同一個數乘咗幾多次。先分清楚底數、指數同冪，後面嘅定律就會易明好多。",
      concept: "<strong>a<sup>n</sup></strong> 表示 <strong>n 個 a 相乘</strong>。a 叫做<strong>底數</strong>，n 叫做<strong>指數</strong>，成個結果就係<strong>冪</strong>。例如 <span class=\"math-inline\">2<sup>4</sup></span> = 2 × 2 × 2 × 2 = 16。",
      formulas: [
        { label: "定義", math: "a<sup>n</sup> = a × a × … × a", note: "n 個 a 相乘" },
        { label: "一次方", math: "a<sup>1</sup> = a", note: "只有一個 a，唔使再乘" },
        { label: "讀法", math: "2<sup>4</sup> = 16", note: "「2 的 4 次方」等於 16" }
      ],
      example: {
        title: "由展開到答案",
        question: "計算 3<sup>4</sup> 的值。",
        steps: ["3<sup>4</sup> = 3 × 3 × 3 × 3", "= 9 × 3 × 3", "= 81"],
        note: "先將指數化成乘法，再逐組計，就唔會漏。"
      },
      pitfall: {
        wrong: "3<sup>4</sup> = 3 × 4 = 12",
        right: "3<sup>4</sup> = 3 × 3 × 3 × 3 = 81",
        note: "指數代表「乘幾多次」，唔係「乘以指數」。"
      },
      quickCheck: {
        question: "2<sup>5</sup> = ?",
        answer: "32",
        explain: "將 2 連乘五次：2 × 2 × 2 × 2 × 2 = 32。"
      }
    },
    {
      id: "laws",
      num: "02",
      navTitle: "指數定律",
      navSub: "化簡與運算",
      tag: "核心",
      time: "約 9 分鐘",
      title: "幾條定律，處理大部分化簡",
      summary: "只要底數相同，乘、除、次方都有固定規律。關鍵係先認清邊個係底數，再決定指數要相加、相減定相乘。",
      concept: "同底數嘅乘除，<strong>底數不變，指數按運算調整</strong>；遇到括號，就要將次方分派畀每個因數。唔同底數嘅項，唔可以直接合併。",
      formulas: [
        { label: "同底相乘", math: "a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>", note: "指數相加" },
        { label: "同底相除", math: "a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>", note: "a ≠ 0；指數相減" },
        { label: "冪的冪", math: "(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>", note: "指數相乘" },
        { label: "積的冪", math: "(ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup>", note: "每個因數都要次方" },
        { label: "商的冪", math: "(a ÷ b)<sup>n</sup> = a<sup>n</sup> ÷ b<sup>n</sup>", note: "b ≠ 0" }
      ],
      example: {
        title: "一題用齊兩條定律",
        question: "化簡 (2x<sup>2</sup>)<sup>3</sup> × x<sup>4</sup>。",
        steps: ["(2x<sup>2</sup>)<sup>3</sup> = 2<sup>3</sup> × (x<sup>2</sup>)<sup>3</sup> = 8x<sup>6</sup>", "8x<sup>6</sup> × x<sup>4</sup> = 8x<sup>6+4</sup>", "= 8x<sup>10</sup>"],
        note: "括號內嘅 2 同 x 都要三次方；跟住同底相乘，指數相加。"
      },
      pitfall: {
        wrong: "(x<sup>2</sup>)<sup>3</sup> = x<sup>5</sup>",
        right: "(x<sup>2</sup>)<sup>3</sup> = x<sup>2×3</sup> = x<sup>6</sup>",
        note: "冪的冪係將指數相乘，唔係相加。"
      },
      quickCheck: {
        question: "(a<sup>2</sup>b)<sup>3</sup> = ?",
        answer: "a<sup>6</sup>b<sup>3</sup>",
        explain: "(a²)³ = a⁶，而 b 都要三次方，所以結果係 a⁶b³。"
      }
    },
    {
      id: "negative",
      num: "03",
      navTitle: "零與負指數",
      navSub: "0 次方與倒數",
      tag: "易錯",
      time: "約 8 分鐘",
      title: "0 次方同負指數，其實有規律",
      summary: "0 次方唔係「冇晒」，負指數亦唔係「變負數」。由除法規律睇，就會明白點解 a⁰ = 1，同埋負指數點樣變成倒數。",
      concept: "<strong>a<sup>0</sup> = 1（a ≠ 0）</strong>。因為 a<sup>m</sup> ÷ a<sup>m</sup> = 1，同時用指數定律又會得到 a<sup>m−m</sup> = a<sup>0</sup>。<br>負指數就代表<strong>倒數</strong>：a<sup>−n</sup> = 1 ÷ a<sup>n</sup>。",
      formulas: [
        { label: "零指數", math: "a<sup>0</sup> = 1", note: "a ≠ 0" },
        { label: "負指數", math: "a<sup>−n</sup> = 1 ÷ a<sup>n</sup>", note: "a ≠ 0；取倒數" },
        { label: "分數負指數", math: "(a ÷ b)<sup>−n</sup> = (b ÷ a)<sup>n</sup>", note: "a、b ≠ 0；倒轉再變正" },
        { label: "規律", math: "2<sup>3</sup> → 2<sup>2</sup> → 2<sup>1</sup> → 2<sup>0</sup>", note: "每次 ÷2：8 → 4 → 2 → 1" }
      ],
      example: {
        title: "負指數先取倒數",
        question: "計算 (2 ÷ 3)<sup>−2</sup>。",
        steps: ["(2 ÷ 3)<sup>−2</sup> = (3 ÷ 2)<sup>2</sup>", "= 3<sup>2</sup> ÷ 2<sup>2</sup>", "= 9 ÷ 4"],
        note: "先將分數倒轉，再將指數變成正數，最後才計平方。"
      },
      pitfall: {
        wrong: "5<sup>−2</sup> = −25",
        right: "5<sup>−2</sup> = 1 ÷ 5<sup>2</sup> = 1/25",
        note: "負號係叫你去攞倒數，唔係將個答案變成負數。"
      },
      quickCheck: {
        question: "10<sup>−3</sup> = ?",
        answer: "0.001（即 1/1000）",
        explain: "10⁻³ = 1 ÷ 10³ = 1/1000 = 0.001。"
      }
    },
    {
      id: "notation",
      num: "04",
      navTitle: "科學記數法",
      navSub: "大數與小數",
      tag: "應用",
      time: "約 7 分鐘",
      title: "用 10 的次方，寫出極大與極小",
      summary: "科學記數法將一個數寫成 A × 10ⁿ，其中 A 要介乎 1 與 10 之間。咁就可以用同一個格式，處理好大或者好細嘅數。",
      concept: "標準形式：<strong>N = A × 10<sup>n</sup></strong>，其中 <strong>1 ≤ A &lt; 10</strong>，n 係整數。<br>大過 1 嘅數，n 通常係正數；細過 1 嘅數，n 通常係負數。",
      formulas: [
        { label: "標準形式", math: "A × 10<sup>n</sup>", note: "1 ≤ A &lt; 10；n 為整數" },
        { label: "大數", math: "6 800 000 = 6.8 × 10<sup>6</sup>", note: "小數點向左移 6 位" },
        { label: "小數", math: "0.000 42 = 4.2 × 10<sup>−4</sup>", note: "小數點向右移 4 位" },
        { label: "乘法", math: "(a × 10<sup>m</sup>)(b × 10<sup>n</sup>)", note: "係數相乘，10 的次方相加" }
      ],
      example: {
        title: "乘完再整理",
        question: "計算 (3 × 10<sup>4</sup>) × (2 × 10<sup>−6</sup>)。",
        steps: ["= (3 × 2) × 10<sup>4 + (−6)</sup>", "= 6 × 10<sup>−2</sup>", "= 0.06"],
        note: "係數 6 已經介乎 1 與 10，所以唔需要再調整。"
      },
      pitfall: {
        wrong: "34 × 10<sup>5</sup> 已經係科學記數法",
        right: "34 × 10<sup>5</sup> = 3.4 × 10<sup>6</sup>",
        note: "係數要介乎 1 與 10；34 太大，要再拆出一個 10。"
      },
      quickCheck: {
        question: "0.000 006 = ?",
        answer: "6 × 10<sup>−6</sup>",
        explain: "小數點向右移 6 位先到 6，所以 10 的指數係 −6。"
      }
    }
  ];

  const QUESTIONS = [
    /* 指數基礎 */
    { cat: "basics", prompt: "計算 <span class=\"math-block\">4<sup>3</sup></span> 的值。", options: ["12", "16", "64", "81"], answer: 2, explanation: "4³ = 4 × 4 × 4 = 64。" },
    { cat: "basics", prompt: "計算 <span class=\"math-block\">2<sup>5</sup></span> 的值。", options: ["10", "16", "25", "32"], answer: 3, explanation: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32。" },
    { cat: "basics", prompt: "計算 <span class=\"math-block\">5<sup>2</sup> + 5<sup>2</sup></span> 的值。", options: ["10²", "25", "50", "625"], answer: 2, explanation: "5² = 25，所以 25 + 25 = 50。加法唔可以將指數相加變成 10²。" },
    { cat: "basics", prompt: "計算 <span class=\"math-block\">2<sup>3</sup> + 2<sup>4</sup></span> 的值。", options: ["2⁷", "24", "32", "48"], answer: 1, explanation: "2³ = 8，2⁴ = 16，所以 8 + 16 = 24。只有「相乘」時才可以將指數相加。" },
    { cat: "basics", prompt: "計算 <span class=\"math-block\">10<sup>4</sup></span> 的值。", options: ["1 000", "10 000", "100 000", "40"], answer: 1, explanation: "10⁴ = 10 × 10 × 10 × 10 = 10 000。" },
    { cat: "basics", prompt: "在 <span class=\"math-block\">7<sup>5</sup></span> 中，邊個係底數？", options: ["5", "7", "12", "35"], answer: 1, explanation: "寫成 aⁿ 時，a 係底數，n 係指數。所以 7 係底數，5 係指數。" },
    { cat: "basics", prompt: "在 <span class=\"math-block\">7<sup>5</sup></span> 中，邊個係指數？", options: ["5", "7", "12", "35"], answer: 0, explanation: "右上角細細隻數字 5 就係指數，代表 7 要連乘五次。" },
    { cat: "basics", prompt: "用指數記法表示 <span class=\"math-block\">6 × 6 × 6 × 6</span>。", options: ["4⁶", "6⁴", "6 × 4", "24"], answer: 1, explanation: "底數 6 出現咗 4 次，所以寫成 6⁴。" },
    { cat: "basics", prompt: "計算 <span class=\"math-block\">(−2)<sup>3</sup></span> 的值。", options: ["6", "8", "−6", "−8"], answer: 3, explanation: "(−2)³ = (−2) × (−2) × (−2) = −8。負數的奇數次方仍然是負數。" },
    { cat: "basics", prompt: "計算 <span class=\"math-block\">2<sup>2</sup> × 3<sup>3</sup></span> 的值。", options: ["36", "72", "108", "216"], answer: 2, explanation: "2² = 4，3³ = 27，所以 4 × 27 = 108。" },

    /* 指數定律 */
    { cat: "laws", prompt: "化簡 <span class=\"math-block\">2<sup>3</sup> × 2<sup>4</sup></span>。", options: ["2⁷", "2¹²", "4⁷", "4¹²"], answer: 0, explanation: "同底相乘，底數不變、指數相加：2³ × 2⁴ = 2^(3+4) = 2⁷。" },
    { cat: "laws", prompt: "化簡 <span class=\"math-block\">x<sup>5</sup> ÷ x<sup>2</sup></span>（x ≠ 0）。", options: ["x³", "x⁷", "x²·⁵", "1"], answer: 0, explanation: "同底相除，指數相減：x⁵ ÷ x² = x^(5−2) = x³。" },
    { cat: "laws", prompt: "化簡 <span class=\"math-block\">(3<sup>2</sup>)<sup>4</sup></span>。", options: ["3⁶", "3⁸", "9⁶", "9⁸"], answer: 1, explanation: "冪的冪，指數相乘：2 × 4 = 8，所以係 3⁸。" },
    { cat: "laws", prompt: "化簡 <span class=\"math-block\">(2x<sup>3</sup>)<sup>4</sup></span>。", options: ["2x¹²", "8x¹²", "16x¹²", "16x⁷"], answer: 2, explanation: "積的冪：2⁴ = 16，而 (x³)⁴ = x¹²，所以係 16x¹²。" },
    { cat: "laws", prompt: "化簡 <span class=\"math-block\">a<sup>2</sup>b<sup>3</sup> × a<sup>4</sup>b</span>。", options: ["a⁶b³", "a⁸b³", "a⁶b⁴", "a⁸b⁴"], answer: 2, explanation: "a 的指數 2 + 4 = 6；b 的指數 3 + 1 = 4，所以係 a⁶b⁴。" },
    { cat: "laws", prompt: "化簡 <span class=\"math-block\">(a<sup>2</sup>b)<sup>3</sup></span>。", options: ["a⁵b³", "a⁶b³", "a⁶b", "a²b³"], answer: 1, explanation: "括號內每個因數都要三次方：(a²)³ = a⁶，b³ = b³，所以係 a⁶b³。" },
    { cat: "laws", prompt: "化簡 <span class=\"math-block\">(5x<sup>2</sup>)<sup>2</sup> ÷ x<sup>3</sup></span>（x ≠ 0）。", options: ["5x", "25x", "25x⁷", "10x"], answer: 1, explanation: "(5x²)² = 25x⁴，再除以 x³ 得 25x^(4−3) = 25x。" },
    { cat: "laws", prompt: "以下哪個與 <span class=\"math-block\">2<sup>10</sup> ÷ 2<sup>7</sup> × 2<sup>2</sup></span> 相等？", options: ["2⁵", "2⁹", "2¹⁵", "2¹⁹"], answer: 0, explanation: "由左至右處理同底乘除：10 − 7 + 2 = 5，所以結果係 2⁵。" },
    { cat: "laws", prompt: "以下哪個與 <span class=\"math-block\">2<sup>3</sup> × 5<sup>3</sup></span> 相等？", options: ["10³", "10⁶", "7³", "100"], answer: 0, explanation: "2³ × 5³ = (2 × 5)³ = 10³ = 1 000。" },
    { cat: "laws", prompt: "計算 <span class=\"math-block\">(2<sup>3</sup>)<sup>2</sup> ÷ 2<sup>4</sup></span>。", options: ["2", "4", "8", "16"], answer: 1, explanation: "(2³)² = 2⁶，再 ÷ 2⁴ = 2^(6−4) = 2² = 4。" },

    /* 零與負指數 */
    { cat: "negative", prompt: "計算 <span class=\"math-block\">7<sup>0</sup> + 7<sup>1</sup></span>。", options: ["1", "7", "8", "49"], answer: 2, explanation: "7⁰ = 1，7¹ = 7，所以 1 + 7 = 8。" },
    { cat: "negative", prompt: "計算 <span class=\"math-block\">3<sup>−2</sup></span>。", options: ["−9", "−6", "1/9", "9"], answer: 2, explanation: "3⁻² = 1 ÷ 3² = 1/9。負指數代表倒數，唔係負數。" },
    { cat: "negative", prompt: "計算 <span class=\"math-block\">(2/5)<sup>−2</sup></span>。", options: ["4/25", "25/4", "−4/25", "−25/4"], answer: 1, explanation: "先將分數倒轉：(2/5)⁻² = (5/2)² = 25/4。" },
    { cat: "negative", prompt: "計算 <span class=\"math-block\">10<sup>−3</sup></span>。", options: ["0.001", "0.01", "1 000", "−1 000"], answer: 0, explanation: "10⁻³ = 1 ÷ 10³ = 1/1000 = 0.001。" },
    { cat: "negative", prompt: "計算 <span class=\"math-block\">2<sup>5</sup> × 2<sup>−2</sup></span>。", options: ["2⁻¹⁰", "8", "2⁷", "1"], answer: 1, explanation: "同底相乘，指數相加：5 + (−2) = 3，所以 2³ = 8。" },
    { cat: "negative", prompt: "計算 <span class=\"math-block\">4<sup>0</sup> × 3<sup>−1</sup></span>。", options: ["1/3", "1/4", "3", "4/3"], answer: 0, explanation: "4⁰ = 1，3⁻¹ = 1/3，所以結果係 1/3。" },
    { cat: "negative", prompt: "計算 <span class=\"math-block\">2<sup>−4</sup> × 2<sup>4</sup></span>。", options: ["−1", "0", "1", "256"], answer: 2, explanation: "指數相加：−4 + 4 = 0，所以 2⁰ = 1。" },
    { cat: "negative", prompt: "若 x ≠ 0，計算 <span class=\"math-block\">(x<sup>4</sup>)<sup>0</sup></span>。", options: ["0", "1", "x", "x⁴"], answer: 1, explanation: "任何非零數的 0 次方都等於 1，所以 (x⁴)⁰ = 1。" },
    { cat: "negative", prompt: "計算 <span class=\"math-block\">10<sup>0</sup> − 10<sup>−1</sup></span>。", options: ["0", "0.9", "9", "−9"], answer: 1, explanation: "10⁰ = 1，10⁻¹ = 0.1，所以 1 − 0.1 = 0.9。" },
    { cat: "negative", prompt: "化簡 <span class=\"math-block\">a<sup>5</sup> × a<sup>−2</sup> ÷ a<sup>1</sup></span>（a ≠ 0）。", options: ["a²", "a³", "a⁴", "a⁸"], answer: 0, explanation: "指數依次相加、相減：5 + (−2) − 1 = 2，所以係 a²。" },

    /* 科學記數法 */
    { cat: "notation", prompt: "將 <span class=\"math-block\">3.6 × 10<sup>5</sup></span> 寫成普通數字。", options: ["3 600", "36 000", "360 000", "3 600 000"], answer: 2, explanation: "3.6 × 10⁵ 即 3.6 × 100 000 = 360 000。" },
    { cat: "notation", prompt: "用科學記數法表示 <span class=\"math-block\">0.000 72</span>。", options: ["7.2 × 10⁻⁴", "7.2 × 10⁴", "72 × 10⁻⁵", "0.72 × 10⁻³"], answer: 0, explanation: "小數點向右移 4 位得 7.2，所以係 7.2 × 10⁻⁴。注意係數要介乎 1 與 10。" },
    { cat: "notation", prompt: "以下哪一個是正確的科學記數法？", options: ["9.8 × 10⁶", "98 × 10⁵", "0.98 × 10⁷", "10 × 10⁵"], answer: 0, explanation: "科學記數法要求 1 ≤ A &lt; 10。只有 9.8 × 10⁶ 的係數符合條件。" },
    { cat: "notation", prompt: "計算 <span class=\"math-block\">(4 × 10<sup>3</sup>) × (2 × 10<sup>5</sup>)</span>。", options: ["6 × 10⁸", "8 × 10⁸", "8 × 10¹⁵", "8 × 10²"], answer: 1, explanation: "係數相乘：4 × 2 = 8；10 的次方相加：3 + 5 = 8，所以係 8 × 10⁸。" },
    { cat: "notation", prompt: "計算 <span class=\"math-block\">(6 × 10<sup>7</sup>) ÷ (2 × 10<sup>3</sup>)</span>。", options: ["3 × 10⁴", "3 × 10¹⁰", "4 × 10⁴", "12 × 10²¹"], answer: 0, explanation: "係數相除：6 ÷ 2 = 3；指數相減：7 − 3 = 4，所以係 3 × 10⁴。" },
    { cat: "notation", prompt: "用科學記數法表示 <span class=\"math-block\">0.000 006</span>。", options: ["6 × 10⁶", "6 × 10⁻⁶", "0.6 × 10⁻⁵", "60 × 10⁻⁷"], answer: 1, explanation: "小數點向右移 6 位得 6，所以指數係 −6：6 × 10⁻⁶。" },
    { cat: "notation", prompt: "將 <span class=\"math-block\">8 × 10<sup>−2</sup></span> 寫成普通數字。", options: ["0.008", "0.08", "0.8", "800"], answer: 1, explanation: "8 × 10⁻² = 8 ÷ 100 = 0.08。" },
    { cat: "notation", prompt: "用科學記數法表示 <span class=\"math-block\">10 000 000</span>。", options: ["1 × 10⁶", "1 × 10⁷", "10 × 10⁶", "1 × 10⁸"], answer: 1, explanation: "10 000 000 有 7 個 0，所以係 1 × 10⁷。" },
    { cat: "notation", prompt: "計算 <span class=\"math-block\">(3 × 10<sup>−2</sup>)<sup>2</sup></span>。", options: ["6 × 10⁻⁴", "9 × 10⁻⁴", "9 × 10⁻²", "3 × 10⁻⁴"], answer: 1, explanation: "(3 × 10⁻²)² = 3² × (10⁻²)² = 9 × 10⁻⁴。" },
    { cat: "notation", prompt: "將 <span class=\"math-block\">34 × 10<sup>5</sup></span> 寫成正確的科學記數法。", options: ["3.4 × 10⁵", "3.4 × 10⁶", "34 × 10⁵", "3.4 × 10⁴"], answer: 1, explanation: "34 × 10⁵ = 3.4 × 10 × 10⁵ = 3.4 × 10⁶。係數要介乎 1 與 10。" }
  ];

  const defaultState = () => ({
    completed: [],
    best: null,
    attempts: 0,
    totalCorrect: 0,
    answered: 0
  });

  let state = loadState();
  let activeUnitId = "basics";

  const quiz = {
    category: "all",
    total: 5,
    questions: [],
    index: 0,
    score: 0,
    selected: null,
    answers: [],
    finished: false
  };

  const els = {
    header: document.getElementById("siteHeader"),
    navToggle: document.getElementById("navToggle"),
    mainNav: document.getElementById("mainNav"),
    headerProgress: document.getElementById("headerProgress"),
    progressRing: document.getElementById("progressRing"),
    progressPercent: document.getElementById("progressPercent"),
    progressLabel: document.getElementById("progressLabel"),
    lessonCounter: document.getElementById("lessonCounter"),
    lessonTabs: document.getElementById("lessonTabs"),
    lessonPanel: document.getElementById("lessonPanel"),
    quizStage: document.getElementById("quizStage"),
    bestScore: document.getElementById("bestScore"),
    attemptsLabel: document.getElementById("attemptsLabel"),
    toast: document.getElementById("toast")
  };

  let toastTimer = null;

  /* ==========================================================================
     Progress storage
     ========================================================================== */

  function loadState() {
    const fresh = defaultState();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return fresh;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return fresh;

      const completed = Array.isArray(parsed.completed)
        ? [...new Set(parsed.completed.filter((id) => UNIT_IDS.includes(id)))]
        : [];

      let best = null;
      if (parsed.best && Number.isFinite(parsed.best.score) && Number.isFinite(parsed.best.total) && parsed.best.total > 0) {
        best = {
          score: Math.max(0, Math.min(parsed.best.total, Math.floor(parsed.best.score))),
          total: Math.floor(parsed.best.total),
          percent: Math.max(0, Math.min(100, Math.round((parsed.best.score / parsed.best.total) * 100)))
        };
      }

      return {
        completed,
        best,
        attempts: Number.isFinite(parsed.attempts) ? Math.max(0, Math.floor(parsed.attempts)) : 0,
        totalCorrect: Number.isFinite(parsed.totalCorrect) ? Math.max(0, Math.floor(parsed.totalCorrect)) : 0,
        answered: Number.isFinite(parsed.answered) ? Math.max(0, Math.floor(parsed.answered)) : 0
      };
    } catch (error) {
      return fresh;
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      /* Progress simply stays in memory if storage is unavailable. */
    }
  }

  function completedCount() {
    return state.completed.length;
  }

  function isUnitComplete(id) {
    return state.completed.includes(id);
  }

  function updateProgressUI() {
    const count = completedCount();
    const percent = Math.round((count / UNITS.length) * 100);

    if (els.headerProgress) els.headerProgress.textContent = `進度 ${count}/${UNITS.length}`;
    if (els.progressPercent) els.progressPercent.textContent = `${percent}%`;
    if (els.progressLabel) els.progressLabel.textContent = `${count} / ${UNITS.length} 個單元`;
    if (els.progressRing) {
      els.progressRing.style.setProperty("--progress", String(percent));
      els.progressRing.setAttribute("aria-label", `整體學習進度 ${percent}%`);
    }
    if (els.lessonCounter) els.lessonCounter.textContent = `${count} / ${UNITS.length}`;

    document.querySelectorAll("[data-status]").forEach((badge) => {
      const id = badge.getAttribute("data-status");
      const complete = isUnitComplete(id);
      badge.textContent = complete ? "已溫習" : "未開始";
      badge.classList.toggle("is-complete", complete);
    });

    renderBestScore();
  }

  function renderBestScore() {
    if (els.bestScore) {
      els.bestScore.textContent = state.best ? `${state.best.score} / ${state.best.total}` : "—";
    }
    if (els.attemptsLabel) {
      if (!state.attempts) {
        els.attemptsLabel.textContent = "仲未開始練習";
      } else {
        els.attemptsLabel.textContent = `${state.attempts} 次練習 · 累積答對 ${state.totalCorrect} 題`;
      }
    }
  }

  function showToast(message) {
    if (!els.toast) return;
    window.clearTimeout(toastTimer);
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => {
      els.toast.classList.remove("is-visible");
    }, 2400);
  }

  /* ==========================================================================
     Lesson rendering
     ========================================================================== */

  function getUnit(id) {
    return UNITS.find((unit) => unit.id === id) || UNITS[0];
  }

  function renderLessonTabs() {
    if (!els.lessonTabs) return;
    els.lessonTabs.innerHTML = UNITS.map((unit) => {
      const selected = unit.id === activeUnitId;
      const complete = isUnitComplete(unit.id);
      return `
        <button class="lesson-tab${complete ? " is-complete" : ""}"
          id="tab-${unit.id}"
          type="button"
          role="tab"
          aria-selected="${selected}"
          aria-controls="lessonPanel"
          tabindex="${selected ? "0" : "-1"}"
          data-unit="${unit.id}">
          <span class="lesson-tab-num">${unit.num}</span>
          <span class="lesson-tab-copy">
            <strong>${unit.navTitle}</strong>
            <small>${unit.navSub}</small>
          </span>
          <span class="lesson-tab-state" aria-hidden="true">${complete ? "✓" : ""}</span>
        </button>`;
    }).join("");
  }

  function renderLessonPanel(animate = false) {
    if (!els.lessonPanel) return;
    const unit = getUnit(activeUnitId);
    const complete = isUnitComplete(unit.id);
    const currentIndex = UNITS.findIndex((item) => item.id === unit.id);
    const nextUnit = UNITS[(currentIndex + 1) % UNITS.length];

    const formulaMarkup = unit.formulas.map((formula) => `
      <div class="formula-card">
        <span>${formula.label}</span>
        <div class="math">${formula.math}</div>
        <small>${formula.note}</small>
      </div>`).join("");

    els.lessonPanel.setAttribute("aria-labelledby", `tab-${unit.id}`);
    els.lessonPanel.innerHTML = `
      <div class="panel-topline">
        <div class="panel-meta">
          <span>${unit.num}</span>
          <span>${unit.tag} · ${unit.time}</span>
        </div>
        ${complete ? '<span class="panel-complete-chip">已溫習</span>' : ""}
      </div>
      <h3 class="panel-title" id="lessonTitle">${unit.title}</h3>
      <p class="panel-summary">${unit.summary}</p>

      <div class="concept-box">
        <span class="concept-label">CONCEPT / 概念</span>
        <p>${unit.concept}</p>
      </div>

      <div class="formula-list">${formulaMarkup}</div>

      <div class="worked">
        <div class="worked-head">
          <span class="worked-badge">例題</span>
          <h4>${unit.example.title}</h4>
        </div>
        <p class="worked-question">${unit.example.question}</p>
        <ol class="worked-steps">
          ${unit.example.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
        <p class="worked-note">${unit.example.note}</p>
      </div>

      <div class="pitfall">
        <span class="pitfall-icon" aria-hidden="true">!</span>
        <div class="pitfall-copy">
          <strong>易錯位</strong>
          <div class="pitfall-wrong"><span>✕</span><p>${unit.pitfall.wrong}</p></div>
          <div class="pitfall-right"><span>✓</span><p>${unit.pitfall.right}</p></div>
          <p class="pitfall-note">${unit.pitfall.note}</p>
        </div>
      </div>

      <div class="quick-check" data-quick-check>
        <div class="quick-check-question">
          <span>一分鐘自測 · 先自己計，再對答案</span>
          <strong>${unit.quickCheck.question}</strong>
        </div>
        <button type="button" data-reveal-check>顯示答案</button>
        <div class="quick-check-answer">
          答案：<strong>${unit.quickCheck.answer}</strong><br>
          ${unit.quickCheck.explain}
        </div>
      </div>

      <div class="panel-footer">
        <button type="button"
          class="mark-complete${complete ? " is-complete" : ""}"
          data-mark-complete="${unit.id}"
          aria-pressed="${complete}"
          title="${complete ? "再按一次可取消完成標記" : "將這個單元標記為已完成"}">
          <span class="check-icon" aria-hidden="true">${complete ? "✓" : ""}</span>
          ${complete ? "已標記完成" : "標記為已完成"}
        </button>
        <button type="button" class="next-unit" data-next-unit="${nextUnit.id}">
          ${currentIndex === UNITS.length - 1 ? "由頭重溫" : "下一個"}：${nextUnit.navTitle}
          <span aria-hidden="true">→</span>
        </button>
      </div>`;

    if (animate) {
      els.lessonPanel.classList.remove("panel-animate");
      void els.lessonPanel.offsetWidth;
      els.lessonPanel.classList.add("panel-animate");
    }
  }

  function selectUnit(id, options = {}) {
    if (!UNIT_IDS.includes(id)) return;
    activeUnitId = id;
    renderLessonTabs();
    renderLessonPanel(true);
    if (options.focusTab) {
      const tab = document.getElementById(`tab-${id}`);
      if (tab) tab.focus();
    }
  }

  function toggleUnitComplete(id) {
    if (!UNIT_IDS.includes(id)) return;
    const index = state.completed.indexOf(id);
    const wasComplete = index !== -1;
    if (wasComplete) {
      state.completed.splice(index, 1);
    } else {
      state.completed.push(id);
    }
    saveState();
    updateProgressUI();
    renderLessonTabs();
    renderLessonPanel(true);
    showToast(wasComplete ? "已取消完成標記" : "好嘢，又完成一個單元！");
  }

  if (els.lessonTabs) {
    els.lessonTabs.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-unit]");
      if (!tab) return;
      selectUnit(tab.getAttribute("data-unit"), { focusTab: true });
    });

    els.lessonTabs.addEventListener("keydown", (event) => {
      const currentTab = event.target.closest("[role='tab']");
      if (!currentTab) return;
      const currentIndex = UNITS.findIndex((unit) => unit.id === currentTab.getAttribute("data-unit"));
      let nextIndex = null;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (currentIndex + 1) % UNITS.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + UNITS.length) % UNITS.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = UNITS.length - 1;

      if (nextIndex !== null) {
        event.preventDefault();
        selectUnit(UNITS[nextIndex].id, { focusTab: true });
      }
    });
  }

  if (els.lessonPanel) {
    els.lessonPanel.addEventListener("click", (event) => {
      const revealButton = event.target.closest("[data-reveal-check]");
      if (revealButton) {
        const check = revealButton.closest("[data-quick-check]");
        if (check) {
          check.classList.add("is-revealed");
          revealButton.textContent = "答案已顯示";
          revealButton.disabled = true;
        }
        return;
      }

      const completeButton = event.target.closest("[data-mark-complete]");
      if (completeButton) {
        toggleUnitComplete(completeButton.getAttribute("data-mark-complete"));
        return;
      }

      const nextButton = event.target.closest("[data-next-unit]");
      if (nextButton) {
        selectUnit(nextButton.getAttribute("data-next-unit"));
        els.lessonPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  document.querySelectorAll(".map-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-unit");
      if (id) selectUnit(id);
    });
  });

  /* ==========================================================================
     Exponent lab
     ========================================================================== */

  let labBase = 2;
  let labExponent = 5;

  const lab = {
    expression: document.getElementById("labExpression"),
    value: document.getElementById("labValue"),
    expansion: document.getElementById("labExpansion"),
    sci: document.getElementById("labSci"),
    note: document.getElementById("labNote"),
    bars: document.getElementById("labBars"),
    range: document.getElementById("exponentRange"),
    rangeOutput: document.getElementById("rangeOutput"),
    baseButtons: document.getElementById("baseButtons")
  };

  function formatNumber(value) {
    return new Intl.NumberFormat("en-HK").format(value);
  }

  function formatCompact(value) {
    if (value >= 1000000) {
      const millions = value / 1000000;
      return `${Number.isInteger(millions) ? millions : millions.toFixed(1)}M`;
    }
    if (value >= 1000) {
      const thousands = value / 1000;
      return `${Number.isInteger(thousands) ? thousands : thousands.toFixed(1)}k`;
    }
    return String(value);
  }

  function scientificNotation(value) {
    if (value === 0) return "0";
    if (value === 1) return "1 × 10<sup>0</sup>";
    const exponent = Math.floor(Math.log10(value));
    let coefficient = value / Math.pow(10, exponent);
    coefficient = Math.round(coefficient * 10000) / 10000;
    if (Math.abs(coefficient - 10) < 0.00001) {
      coefficient = 1;
      return `1 × 10<sup>${exponent + 1}</sup>`;
    }
    const coefficientText = Number.isInteger(coefficient) ? String(coefficient) : String(coefficient);
    return `${coefficientText} × 10<sup>${exponent}</sup>`;
  }

  function renderLabBars() {
    if (!lab.bars) return;
    const values = Array.from({ length: 7 }, (_, n) => Math.pow(labBase, n));
    const maxLog = Math.log10(Math.pow(labBase, 6) + 1);

    if (lab.bars.children.length !== 7) {
      lab.bars.innerHTML = values.map((_, n) => `
        <div class="lab-bar-item" data-bar-n="${n}">
          <span class="lab-bar-value"></span>
          <div class="lab-bar"></div>
          <span class="lab-bar-n">${n}</span>
        </div>`).join("");
    }

    values.forEach((value, n) => {
      const item = lab.bars.querySelector(`[data-bar-n="${n}"]`);
      if (!item) return;
      const bar = item.querySelector(".lab-bar");
      const valueLabel = item.querySelector(".lab-bar-value");
      const height = 8 + (Math.log10(value + 1) / maxLog) * 66;
      if (bar) bar.style.height = `${height}%`;
      if (valueLabel) valueLabel.textContent = formatCompact(value);
      item.classList.toggle("is-active", n === labExponent);
    });
  }

  function updateLab() {
    if (!lab.expression || !lab.value) return;
    const value = Math.pow(labBase, labExponent);
    const terms = Array.from({ length: labExponent }, () => labBase);

    lab.expression.innerHTML = `${labBase}<sup>${labExponent}</sup>`;
    lab.value.textContent = formatNumber(value);
    lab.expansion.textContent = labExponent === 0
      ? "冇任何因數相乘，按定義結果為 1"
      : terms.join(" × ");
    if (lab.sci) lab.sci.innerHTML = scientificNotation(value);
    if (lab.rangeOutput) lab.rangeOutput.textContent = String(labExponent);
    if (lab.range) {
      lab.range.style.setProperty("--fill", `${(labExponent / 6) * 100}%`);
      lab.range.setAttribute("aria-valuetext", `指數 n 等於 ${labExponent}，${labBase} 的 ${labExponent} 次方等於 ${formatNumber(value)}`);
    }
    if (lab.note) {
      if (labExponent === 0) {
        lab.note.textContent = "任何非零底數的 0 次方，都定義為 1。";
      } else if (labExponent === 6) {
        lab.note.textContent = `已經拉到最大：${formatNumber(labBase)} 連續乘 6 次，得到 ${formatNumber(value)}。`;
      } else {
        lab.note.textContent = `每增加 1 個指數，數值就再乘一次 ${formatNumber(labBase)}。`;
      }
    }
    renderLabBars();
  }

  if (lab.baseButtons) {
    lab.baseButtons.addEventListener("click", (event) => {
      const button = event.target.closest("[data-base]");
      if (!button) return;
      labBase = Number(button.getAttribute("data-base"));
      lab.baseButtons.querySelectorAll("[data-base]").forEach((item) => {
        item.setAttribute("aria-pressed", String(Number(item.getAttribute("data-base")) === labBase));
      });
      updateLab();
    });
  }

  if (lab.range) {
    lab.range.addEventListener("input", () => {
      labExponent = Number(lab.range.value);
      updateLab();
    });
  }

  /* ==========================================================================
     Quiz
     ========================================================================== */

  function shuffle(items) {
    const array = [...items];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function categoryCount(category) {
    return category === "all" ? QUESTIONS.length : QUESTIONS.filter((question) => question.cat === category).length;
  }

  function renderQuizSetup() {
    if (!els.quizStage) return;
    const categoryButtons = [
      { key: "all", label: "全部混合" },
      ...Object.entries(CATEGORIES).map(([key, value]) => ({ key, label: value.label }))
    ].map((category) => `
      <button type="button"
        class="chip"
        data-quiz-category="${category.key}"
        aria-pressed="${quiz.category === category.key}">
        ${category.label}<span class="chip-count">${categoryCount(category.key)}</span>
      </button>`).join("");

    els.quizStage.innerHTML = `
      <div class="quiz-setup">
        <div class="quiz-setup-top">
          <span class="mono-label">QUIZ BUILDER</span>
          <span class="quiz-badge">即時解題</span>
        </div>
        <h3>自訂你嘅練習</h3>
        <p class="quiz-setup-intro">揀一個範圍，再決定做 5 題定 10 題。每題答完都會即刻解釋點解。</p>

        <fieldset class="quiz-fieldset">
          <legend>01 · 練習範圍</legend>
          <div class="chip-group">${categoryButtons}</div>
        </fieldset>

        <fieldset class="quiz-fieldset">
          <legend>02 · 題目數量</legend>
          <div class="chip-group">
            <button type="button" class="chip" data-quiz-total="5" aria-pressed="${quiz.total === 5}">5 題<span class="chip-count">約 4 分鐘</span></button>
            <button type="button" class="chip" data-quiz-total="10" aria-pressed="${quiz.total === 10}">10 題<span class="chip-count">約 8 分鐘</span></button>
          </div>
        </fieldset>

        <div class="quiz-tip">
          <span>答題小策略</span>
          <p>先寫低「用邊條定律」，再逐步化簡。遇到負指數就先取倒數；遇到科學記數法，就將係數同 10 的次方分開處理。</p>
        </div>

        <div class="quiz-start">
          <button type="button" class="btn btn-dark" data-start-quiz>
            開始練習<span class="btn-arrow" aria-hidden="true">→</span>
          </button>
          <p>題目會隨機抽出 · 唔設時限 · 可以隨時停低</p>
        </div>
      </div>`;
  }

  function startQuiz() {
    const pool = quiz.category === "all"
      ? QUESTIONS
      : QUESTIONS.filter((question) => question.cat === quiz.category);
    const amount = Math.min(quiz.total, pool.length);
    const selectedQuestions = shuffle(pool).slice(0, amount);

    quiz.questions = selectedQuestions;
    quiz.index = 0;
    quiz.score = 0;
    quiz.selected = null;
    quiz.answers = [];
    quiz.finished = false;

    renderQuestion();
    bringQuizIntoView();
  }

  function bringQuizIntoView() {
    if (!els.quizStage || !window.matchMedia("(max-width: 980px)").matches) return;
    window.requestAnimationFrame(() => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      const top = window.scrollY + els.quizStage.getBoundingClientRect().top - 96;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, top));
      root.style.scrollBehavior = previousBehavior;
    });
  }

  function renderQuestion() {
    if (!els.quizStage) return;
    const question = quiz.questions[quiz.index];
    if (!question) {
      finishQuiz();
      return;
    }

    const category = CATEGORIES[question.cat];
    const answered = quiz.selected !== null;
    const progressWidth = ((quiz.index + (answered ? 1 : 0)) / quiz.questions.length) * 100;
    const isCorrect = answered && quiz.selected === question.answer;

    const options = question.options.map((option, index) => {
      let stateClass = "";
      if (answered) {
        if (index === question.answer) stateClass = " is-correct";
        else if (index === quiz.selected) stateClass = " is-wrong";
        else stateClass = " is-muted";
      }
      return `
        <button type="button"
          class="option${stateClass}"
          data-option="${index}"
          ${answered ? "disabled" : ""}>
          <span class="option-key" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${option}</span>
        </button>`;
    }).join("");

    const feedback = answered ? `
      <div class="quiz-feedback${isCorrect ? "" : " is-wrong-feedback"}">
        <div class="feedback-title"><span aria-hidden="true">${isCorrect ? "✓" : "!"}</span>${isCorrect ? "答對，好嘢！" : "差少少，睇吓點解"}</div>
        <p class="feedback-explanation">${question.explanation}</p>
      </div>` : "";

    const nextLabel = quiz.index === quiz.questions.length - 1 ? "查看成績" : "下一題";

    els.quizStage.innerHTML = `
      <div class="quiz-live">
        <div class="quiz-live-top">
          <span>第 ${quiz.index + 1} / ${quiz.questions.length} 題</span>
          <span class="quiz-cat">${category.label}</span>
          <span class="quiz-score">${quiz.score} 分</span>
        </div>
        <div class="quiz-progress" aria-hidden="true"><span style="width:${progressWidth}%"></span></div>
        <h3 class="question-prompt">${question.prompt}</h3>
        <div class="quiz-options">${options}</div>
        ${feedback}
        <div class="quiz-actions">
          <span class="quiz-actions-note">${answered ? "解釋會保留，方便你核對思路。" : "揀一個答案，即刻知結果。"}</span>
          ${answered ? `<button type="button" class="btn btn-dark" data-next-question>${nextLabel}<span class="btn-arrow" aria-hidden="true">→</span></button>` : ""}
        </div>
      </div>`;
  }

  function selectAnswer(index) {
    if (quiz.selected !== null || quiz.finished) return;
    const question = quiz.questions[quiz.index];
    if (!question || !Number.isInteger(index)) return;

    quiz.selected = index;
    const isCorrect = index === question.answer;
    if (isCorrect) quiz.score += 1;
    quiz.answers.push({ question, selected: index, correct: isCorrect });
    renderQuestion();
  }

  function goToNextQuestion() {
    if (quiz.selected === null) return;
    if (quiz.index >= quiz.questions.length - 1) {
      finishQuiz();
      return;
    }
    quiz.index += 1;
    quiz.selected = null;
    renderQuestion();
  }

  function finishQuiz() {
    quiz.finished = true;
    const total = quiz.questions.length;
    const percent = Math.round((quiz.score / total) * 100);

    state.attempts += 1;
    state.totalCorrect += quiz.score;
    state.answered += total;

    const previousPercent = state.best ? state.best.percent : -1;
    if (!state.best || percent > previousPercent || (percent === previousPercent && quiz.score > state.best.score)) {
      state.best = { score: quiz.score, total, percent };
    }
    saveState();
    updateProgressUI();
    renderResult(percent);
    bringQuizIntoView();
  }

  function resultMessage(percent) {
    if (percent >= 90) {
      return { eyebrow: "EXCELLENT / 掌握得很好", title: "信心同概念都夠穩！", text: "你已經可以準確運用大部分指數定律。試下挑戰 10 題，或者返去實驗室玩更大嘅指數。" };
    }
    if (percent >= 70) {
      return { eyebrow: "GOOD WORK / 基礎穩陣", title: "差少少就全線掌握。", text: "整體方向正確，集中睇一次錯題嘅解釋，再重溫相關單元，下一次會更順。" };
    }
    if (percent >= 50) {
      return { eyebrow: "KEEP GOING / 開始成形", title: "概念開始成形，再練一次。", text: "建議先返互動課堂，重溫未掌握嘅單元，再做同一範圍。慢慢嚟，明白比快更重要。" };
    }
    return { eyebrow: "ONE STEP AT A TIME / 慢慢嚟", title: "唔緊要，先釐清概念。", text: "指數嘅規則要一層層建立。揀一個單元重溫，再返嚟做 5 題，你會見到分別。" };
  }

  function renderResult(percent) {
    if (!els.quizStage) return;
    const message = resultMessage(percent);
    const wrongCount = quiz.answers.filter((answer) => !answer.correct).length;
    const reviewRows = quiz.answers.map((entry) => {
      const correctOption = entry.question.options[entry.question.answer];
      const selectedOption = entry.question.options[entry.selected];
      return `
        <div class="review-row${entry.correct ? "" : " is-wrong"}">
          <span class="review-mark" aria-hidden="true">${entry.correct ? "✓" : "✕"}</span>
          <div>
            <div class="review-question">${entry.question.prompt}</div>
            <div class="review-answer">
              ${entry.correct ? "答對" : `你揀咗 ${selectedOption}`} · 正確答案：<b>${correctOption}</b>
            </div>
          </div>
        </div>`;
    }).join("");

    const categoryLabel = quiz.category === "all" ? "混合範圍" : CATEGORIES[quiz.category].label;

    els.quizStage.innerHTML = `
      <div class="quiz-result">
        <div class="result-top">
          <div class="result-ring" style="--score:${percent}" role="img" aria-label="得分 ${percent}%">
            <div class="result-ring-inner"><strong>${quiz.score}</strong><span>/ ${quiz.questions.length}</span></div>
          </div>
          <div class="result-copy">
            <span class="result-eyebrow">${message.eyebrow}</span>
            <h3>${message.title}</h3>
            <p>${message.text}</p>
          </div>
        </div>

        <div class="result-summary">
          <div><span>得分</span><strong>${percent}%</strong></div>
          <div><span>答對</span><strong>${quiz.score} / ${quiz.questions.length}</strong></div>
          <div><span>需要重溫</span><strong>${wrongCount} 題</strong></div>
          <div><span>範圍</span><strong>${categoryLabel}</strong></div>
        </div>

        <div class="review-head">
          <h4>答案回顧</h4>
          <span>${wrongCount ? "錯題已標示出嚟" : "全部答對，表現出色"}</span>
        </div>
        <div class="review-list">${reviewRows}</div>

        <div class="quiz-result-actions">
          <button type="button" class="btn btn-dark" data-restart-quiz>再練一次<span class="btn-arrow" aria-hidden="true">↻</span></button>
          <button type="button" class="btn btn-ghost" data-change-quiz>轉範圍 / 題量</button>
          <a class="btn btn-ghost" href="#lesson" data-review-lesson>返去互動課堂</a>
        </div>
      </div>`;
  }

  function updateQuizChoice(attribute, value) {
    if (!els.quizStage) return;
    const group = attribute === "data-quiz-category"
      ? "[data-quiz-category]"
      : "[data-quiz-total]";
    els.quizStage.querySelectorAll(group).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute(attribute) === String(value)));
    });
  }

  if (els.quizStage) {
    els.quizStage.addEventListener("click", (event) => {
      const categoryButton = event.target.closest("[data-quiz-category]");
      if (categoryButton) {
        quiz.category = categoryButton.getAttribute("data-quiz-category");
        updateQuizChoice("data-quiz-category", quiz.category);
        return;
      }

      const totalButton = event.target.closest("[data-quiz-total]");
      if (totalButton) {
        quiz.total = Number(totalButton.getAttribute("data-quiz-total"));
        updateQuizChoice("data-quiz-total", quiz.total);
        return;
      }

      if (event.target.closest("[data-start-quiz]")) {
        startQuiz();
        return;
      }

      const optionButton = event.target.closest("[data-option]");
      if (optionButton) {
        selectAnswer(Number(optionButton.getAttribute("data-option")));
        return;
      }

      if (event.target.closest("[data-next-question]")) {
        goToNextQuestion();
        return;
      }

      if (event.target.closest("[data-restart-quiz]")) {
        startQuiz();
        return;
      }

      if (event.target.closest("[data-change-quiz]")) {
        quiz.finished = false;
        renderQuizSetup();
        return;
      }

      const reviewLesson = event.target.closest("[data-review-lesson]");
      if (reviewLesson) {
        const firstUnfinished = UNITS.find((unit) => !isUnitComplete(unit.id));
        if (firstUnfinished) selectUnit(firstUnfinished.id);
      }
    });
  }

  /* ==========================================================================
     Navigation, print and reset
     ========================================================================== */

  function closeNav() {
    if (!els.header || !els.navToggle) return;
    els.header.classList.remove("nav-open");
    els.navToggle.setAttribute("aria-expanded", "false");
    els.navToggle.setAttribute("aria-label", "開啟選單");
  }

  if (els.navToggle && els.header) {
    els.navToggle.addEventListener("click", () => {
      const isOpen = els.header.classList.toggle("nav-open");
      els.navToggle.setAttribute("aria-expanded", String(isOpen));
      els.navToggle.setAttribute("aria-label", isOpen ? "關閉選單" : "開啟選單");
    });

    els.mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (event) => {
      if (!els.header.classList.contains("nav-open")) return;
      if (!els.header.contains(event.target)) closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
  }

  const navLinks = [...document.querySelectorAll(".main-nav .nav-link")];
  const navSections = ["map", "lesson", "lab", "practice", "formulas"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  let scrollTicking = false;

  function handleScroll() {
    if (els.header) {
      els.header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    const marker = window.scrollY + 150;
    let currentId = "";
    navSections.forEach((section) => {
      if (section.offsetTop <= marker) currentId = section.id;
    });

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("is-current", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });

    scrollTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(handleScroll);
    }
  }, { passive: true });

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  document.querySelectorAll("[data-reset-progress]").forEach((button) => {
    button.addEventListener("click", () => {
      const confirmed = window.confirm("確定要清除所有學習進度、最佳成績同練習紀錄嗎？此動作無法復原。");
      if (!confirmed) return;
      state = defaultState();
      saveState();
      objectAssign(quiz, {
        category: "all",
        total: 5,
        questions: [],
        index: 0,
        score: 0,
        selected: null,
        answers: [],
        finished: false
      });
      updateProgressUI();
      renderLessonTabs();
      renderLessonPanel(true);
      renderQuizSetup();
      showToast("學習進度已重設");
    });
  });

  function objectAssign(target, source) {
    Object.keys(source).forEach((key) => {
      target[key] = source[key];
    });
  }

  /* ==========================================================================
     Init
     ========================================================================== */

  updateProgressUI();
  renderLessonTabs();
  renderLessonPanel(false);
  renderQuizSetup();
  updateLab();
  handleScroll();

  // Keep the layout fresh if the browser restores this page from the back/forward cache.
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      updateProgressUI();
      renderLessonTabs();
      renderLessonPanel(false);
      renderQuizSetup();
    }
  });
})();
