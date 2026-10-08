// ===== بيانات عامة =====
const TEACHER = {
    name: "أحمد زين العابدين",
    nameEn: "Mr. Ahmed Zain Al-Abideen",
    grade: "الرياضيات - الصف السابع"
};

// تعريف الألعاب المتاحة
const GAME_DEFS = {
    mcq:     { title: "الاختيار من متعدد", sub: "15 سؤالًا لاختبار معلوماتك", icon: "fa-list-check", color: "from-blue-500 to-blue-600" },
    bubbles: { title: "الفقاعات المتساقطة", sub: "المس الفقاعة الصحيحة", icon: "fa-droplet", color: "from-cyan-500 to-cyan-600" },
    shoot:   { title: "التنشين المتحرك", sub: "صِد الهدف الصحيح المتحرك", icon: "fa-bullseye", color: "from-red-500 to-red-600" },
    tug:     { title: "شد الحبل", sub: "أجب صح واسحب الحبل لفريقك", icon: "fa-people-pulling", color: "from-amber-500 to-orange-600" },
    goal:    { title: "تسجيل الأهداف", sub: "اختر الزاوية الصحيحة وسجّل", icon: "fa-futbol", color: "from-emerald-500 to-green-700" },
    tf:      { title: "صح أم خطأ", sub: "حدد صحة العبارات", icon: "fa-check-double", color: "from-orange-500 to-orange-600" },
    match:   { title: "لعبة التوصيل", sub: "اربط بين العبارة وقيمتها", icon: "fa-link", color: "from-green-500 to-green-600" },
    millionaire: { title: "من سيربح المليون؟", sub: "اصعد سلم الجوائز حتى المليون", icon: "fa-trophy", color: "from-purple-600 to-indigo-700" },
    fill:    { title: "أكمل الفراغ", sub: "اختر ما يكمل العبارة", icon: "fa-puzzle-piece", color: "from-purple-500 to-purple-600" }
};

const LESSONS = {
    "1": {
        title: "كتابة المعادلات وحلها", order: "الدرس الأول", color: "from-blue-600 to-indigo-700", icon: "fa-equals",
        games: ["goal", "tug", "tf", "match", "bubbles", "shoot"],
        tips: [
            "لحل المعادلة نستخدم العملية العكسية: الطرح عكس الجمع، والقسمة عكس الضرب.",
            "$س + 4 = 11$ ⟵ نطرح 4 من الطرفين ⟵ $س = 7$",
            "$5س = 30$ ⟵ نقسم الطرفين على 5 ⟵ $س = 6$",
            "$س − 2 = 8$ ⟵ نضيف 2 إلى الطرفين ⟵ $س = 10$",
            "$2م + 3 = 13$ ⟵ $2م = 10$ ⟵ $م = 5$",
            "للتحقق: نعوض بقيمة المجهول فى المعادلة الأصلية، مثل: $2 × 5 + 3 = 13$ ✓"
        ]
    },
    "2": {
        title: "استنتاج واستخدام الصيغ", order: "الدرس الثانى", color: "from-teal-500 to-emerald-700", icon: "fa-square-root-variable",
        games: ["goal", "tug", "tf", "match", "bubbles", "shoot"],
        tips: [
            "الصيغة: قاعدة رياضية توضح العلاقة بين كميتين (متغيرين).",
            "مساحة المستطيل = الطول × العرض ، أى: $م = ل × ض$",
            "عندما $ل = 5$ سم ، $ض = 4$ سم فإن $م = 5 × 4 = 20$ سم²",
            "$م ح$ تعنى $م × ح$ ، و $3هـ$ تعنى $3 × هـ$",
            "ترتيب العمليات: (1) الأقواس (2) الأسس والجذور (3) الضرب والقسمة (4) الجمع والطرح.",
            "مثال: $س + 3ص$ عندما $س = 2$ ، $ص = 4$ ⟵ $2 + 3 × 4 = 14$"
        ]
    },
    "3": {
        title: "فك الأقواس", order: "الدرس الثالث", color: "from-orange-500 to-red-600", icon: "", iconText: "( )",
        games: ["goal", "tug", "tf", "match", "bubbles", "shoot"],
        tips: [
            "لفك الأقواس (الضرب خارج الأقواس) نضرب الحد الموجود خارج الأقواس فى كل حد بداخلها.",
            "$4(ع + 3)$ تعنى $4 × (ع + 3)$ ، لكننا نكتبها عادةً بدون علامة الضرب.",
            "$4(ع + 3) = 4 × ع + 4 × 3 = 4ع + 12$",
            "$2(س − 5) = 2 × س − 2 × 5 = 2س − 10$",
            "$3(2م + ح) = 3 × 2م + 3 × ح = 6م + 3ح$",
            "انتبه للإشارة: $6(2 − س) = 12 − 6س$"
        ]
    },
    "4": {
        title: "ترتيب الأعداد العشرية والكسور العشرية", order: "الدرس الرابع", color: "from-sky-500 to-indigo-600", icon: "fa-arrow-up-1-9",
        games: ["goal", "tug", "tf", "match", "millionaire", "shoot"],
        tips: [
            "لمقارنة عددين عشريين نقارن الأجزاء الصحيحة أولًا ، فإذا تساوت نقارن الأجزاء من عشرة ، ثم من مائة ، ثم من ألف.",
            "مثال: 9.4 أكبر من 9.09 لأن رقم الأجزاء من عشرة (4) أكبر من (0).",
            "عدد الأرقام بعد الفاصلة لا يحدد العدد الأكبر: 12.1 أكبر من 12.01",
            "تصاعديًا: من الأصغر إلى الأكبر ، تنازليًا: من الأكبر إلى الأصغر.",
            "لترتيب القياسات نحوّلها أولًا إلى نفس الوحدة.",
            "1 كغم = 1000 غم ، 1 طن = 1000 كغم ، 1 لتر = 1000 مل",
            "1 م = 100 سم ، 1 سم = 10 ملم ، 1 كم = 1000 م"
        ]
    }
};

// ===== تنسيق النصوص الرياضية =====
// $...$  => معادلة تُكتب من اليمين لليسار كما فى الكتاب
// {a/b}  => كسر رأسى (بسط فوق مقام)
// الأرقام تُعرض بالأرقام العربية (٠١٢٣٤٥٦٧٨٩)
function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fracify(s) {
    return s.replace(/\{([^{}\/]+)\/([^{}]+)\}/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
}
const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
function toAr(s) {
    return String(s).replace(/(\d)\.(\d)/g, "$1٫$2").replace(/[0-9]/g, d => AR_DIGITS[d]);
}
function fmt(raw) {
    let s = escapeHtml(raw);
    s = s.replace(/\$([^$]+)\$/g, (m, inner) => '<span class="eq">' + fracify(inner) + '</span>');
    return toAr(s);
}
