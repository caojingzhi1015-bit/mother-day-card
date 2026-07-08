const state = {
    name: "妈妈",
    themeColor: "#f7d8e5",
    buttonStart: "#ffb6c1",
    buttonEnd: "#dda0dd",
};

const BOUQUETS = [
    { flower: "粉色康乃馨", color: "#F7D8E5", message_zh: "💐 妈妈的碎碎念念，温暖了我的岁岁年年", message_en: "Mom's little words warm my whole life" },
    { flower: "香槟玫瑰", color: "#F3DDD2", message_zh: "🌹 你不用做完美妈妈，做你自己就很好", message_en: "You don't have to be a perfect mom, just be yourself" },
    { flower: "白色郁金香", color: "#F4EEF3", message_zh: "🌷 愿你永远有属于自己的快乐", message_en: "May you always have your own happiness" },
    { flower: "洋桔梗", color: "#E8DDF4", message_zh: "💜 从前你牵我走路，如今我挽你看夕阳", message_en: "Once you held my hand, now I hold yours" },
    { flower: "满天星", color: "#F7EAF3", message_zh: "✨ 爱没有方向，但你就是我的导航", message_en: "Love has no direction, but you are my compass" },
    { flower: "向日葵", color: "#F6E7BF", message_zh: "🌻 你是我永远的底气和退路", message_en: "You are always my strength and safe place" },
    { flower: "香水百合", color: "#F8EEF1", message_zh: "🌸 谢谢你允许我做一个普通的小孩", message_en: "Thank you for letting me be an ordinary kid" },
    { flower: "小雏菊", color: "#F5EFCB", message_zh: "🌼 不用羡慕别人，你的女儿也很棒", message_en: "Don't envy others, your daughter is great too" },
    { flower: "粉色玫瑰", color: "#F8D7E4", message_zh: "💕 全世界都催我长大，只有你疼我的小翅膀", message_en: "The whole world pushes me to grow up, only you protect my softness" },
    { flower: "绣球花", color: "#DDE7F6", message_zh: "🎀 平淡的日子，因为有你才闪闪发光", message_en: "Ordinary days shine because of you" },
    { flower: "铃兰", color: "#EAF3E8", message_zh: "🍃 小时候想跑远，现在只想回家陪你吃饭", message_en: "I used to want to run away, now I just want to eat with you" },
    { flower: "虞美人", color: "#F5D9DE", message_zh: "🌺 爱你这件事，不止母亲节这一天", message_en: "I love you more than just Mother's Day" },
    { flower: "芍药", color: "#F6D5E0", message_zh: "🌸 你先是你自己，然后才是我的妈妈", message_en: "You are yourself first, then my mom" },
    { flower: "风信子", color: "#DCE4F5", message_zh: "💙 踏遍山川湖海，走不出你的臂弯", message_en: "I've traveled the world, but never left your arms" },
    { flower: "栀子花", color: "#F7F2E6", message_zh: "🤍 我会努力成为你的铠甲", message_en: "I will try my best to protect you" },
    { flower: "茉莉花", color: "#EEF4EA", message_zh: "🌿 世间所有美好，都不及你在我身边", message_en: "Nothing in the world is better than having you by my side" },
    { flower: "海棠花", color: "#F5D8D1", message_zh: "🍎 愿时光慢一点，我陪你久一点", message_en: "May time slow down, so I can stay with you longer" },
    { flower: "桃花", color: "#F7D9DA", message_zh: "🍑 一辈子你围着我转，这次换我围着你转", message_en: "You spent your whole life around me, now it's my turn" },
    { flower: "紫罗兰", color: "#E6D9F2", message_zh: "💜 我们共享过同一个心跳", message_en: "We once shared the same heartbeat" },
    { flower: "勿忘我", color: "#DDE5F7", message_zh: "💐 不管我多大，永远是你的小宝贝", message_en: "No matter how old I am, I'm always your little girl" },
];

const bouquetTemplates = {
    "粉色康乃馨": (color) => createClusterBouquetSvg(color, "carnation", { wrap: "#fbe7eb", ribbon: "#d98aa3", core: "#fff8f9", accent: "#f3c7d7", type: "carnation", flowerCount: 7 }),
    "香槟玫瑰": (color) => createClusterBouquetSvg(color, "champagne-rose", { wrap: "#f5eadf", ribbon: "#c99c8f", core: "#fff6f3", accent: "#efd6c7", type: "rose", flowerCount: 6 }),
    "白色郁金香": (color) => createClusterBouquetSvg(color, "white-tulip", { wrap: "#f3edf2", ribbon: "#bda9bf", core: "#fffdfd", accent: "#ece1ef", type: "tulip", flowerCount: 6 }),
    "洋桔梗": (color) => createClusterBouquetSvg(color, "eustoma", { wrap: "#ede7f8", ribbon: "#b69bd5", core: "#ffffff", accent: "#ddd2f0", type: "eustoma", flowerCount: 7 }),
    "满天星": (color) => createClusterBouquetSvg(color, "baby-breath", { wrap: "#f7edf4", ribbon: "#c7a7bb", core: "#ffffff", accent: "#eddbe8", type: "babybreath", flowerCount: 14 }),
    "向日葵": (color) => createClusterBouquetSvg(color, "sunflower", { wrap: "#f6eed8", ribbon: "#d4b06c", core: "#7a5620", accent: "#f2d685", type: "sunflower", flowerCount: 4 }),
    "香水百合": (color) => createClusterBouquetSvg(color, "perfume-lily", { wrap: "#f8eff1", ribbon: "#d7aab7", core: "#ffffff", accent: "#f3d9e1", type: "lily", flowerCount: 5 }),
    "小雏菊": (color) => createClusterBouquetSvg(color, "daisy", { wrap: "#f5f0d8", ribbon: "#d3bd79", core: "#f8d56e", accent: "#f3e7ab", type: "daisy", flowerCount: 7 }),
    "粉色玫瑰": (color) => createClusterBouquetSvg(color, "pink-rose", { wrap: "#f9e6ee", ribbon: "#d887a7", core: "#fff6fa", accent: "#f2bed4", type: "rose", flowerCount: 7 }),
    "绣球花": (color) => createClusterBouquetSvg(color, "hydrangea", { wrap: "#edf4fb", ribbon: "#9fb7db", core: "#ffffff", accent: "#d3def1", type: "hydrangea", flowerCount: 12 }),
    "铃兰": (color) => createClusterBouquetSvg(color, "lily-of-the-valley", { wrap: "#eef7ed", ribbon: "#9cc0a1", core: "#ffffff", accent: "#dcead8", type: "bells", flowerCount: 8 }),
    "虞美人": (color) => createClusterBouquetSvg(color, "poppy", { wrap: "#f6e3e7", ribbon: "#d89aa6", core: "#fff7f7", accent: "#efc5ce", type: "poppy", flowerCount: 6 }),
    "芍药": (color) => createClusterBouquetSvg(color, "peony", { wrap: "#f8e6eb", ribbon: "#d48da0", core: "#fff7f8", accent: "#f0bfd0", type: "peony", flowerCount: 8 }),
    "风信子": (color) => createClusterBouquetSvg(color, "hyacinth", { wrap: "#edf1fb", ribbon: "#99abd8", core: "#ffffff", accent: "#ced9f0", type: "hyacinth", flowerCount: 10 }),
    "栀子花": (color) => createClusterBouquetSvg(color, "gardenia", { wrap: "#f8f4e8", ribbon: "#d9c27c", core: "#ffffff", accent: "#efe6c8", type: "gardenia", flowerCount: 5 }),
    "茉莉花": (color) => createClusterBouquetSvg(color, "jasmine", { wrap: "#eff4ea", ribbon: "#aac295", core: "#ffffff", accent: "#dce8d4", type: "jasmine", flowerCount: 8 }),
    "海棠花": (color) => createClusterBouquetSvg(color, "begonia", { wrap: "#f7e5df", ribbon: "#d39b8f", core: "#fff6f2", accent: "#efc4b8", type: "begonia", flowerCount: 7 }),
    "桃花": (color) => createClusterBouquetSvg(color, "peach-blossom", { wrap: "#f9e5e7", ribbon: "#d89ba1", core: "#fff7f8", accent: "#efc5cb", type: "peach", flowerCount: 7 }),
    "紫罗兰": (color) => createClusterBouquetSvg(color, "violet", { wrap: "#eee6f7", ribbon: "#b196d2", core: "#ffffff", accent: "#d7c5ea", type: "violet", flowerCount: 8 }),
    "勿忘我": (color) => createClusterBouquetSvg(color, "forget-me-not", { wrap: "#edf2fb", ribbon: "#9eb3da", core: "#ffffff", accent: "#cedbf3", type: "forgetmenot", flowerCount: 10 }),
};

const form = document.getElementById("name-form");
const inputView = document.getElementById("input-view");
const cardView = document.getElementById("card-view");
const greetingTitle = document.getElementById("greeting-title");
const flowerName = document.getElementById("flower-name");
const flowerLanguageZh = document.getElementById("flower-language-zh");
const flowerLanguageEn = document.getElementById("flower-language-en");
const cardMessage = document.getElementById("card-message");
const bouquetIllustration = document.getElementById("bouquet-illustration");
const bouquetCard = document.getElementById("bouquet-card");
const refreshButton = document.getElementById("refresh-button");
const nameInput = document.getElementById("name-input");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = nameInput.value.trim();
    state.name = value || "妈妈";
    await loadCard(state.name, true);
});

refreshButton.addEventListener("click", async () => {
    await loadCard(state.name, false);
});

[form.querySelector("button"), refreshButton].forEach((button) => {
    button.addEventListener("pointerdown", () => button.classList.add("is-pressed"));
    button.addEventListener("pointerup", () => button.classList.remove("is-pressed"));
    button.addEventListener("pointerleave", () => button.classList.remove("is-pressed"));
});

async function loadCard(name, switchView) {
    const bouquet = BOUQUETS[Math.floor(Math.random() * BOUQUETS.length)];
    const data = {
        name: (name || "妈妈").slice(0, 10) + "小姐",
        flower: bouquet.flower,
        messageZh: bouquet.message_zh,
        messageEn: bouquet.message_en,
        color: bouquet.color,
    };
    updateTheme(data.color);
    renderCard(data);
    if (switchView) showCardView();
    pulseCard();
}

function showCardView() {
    inputView.classList.remove("view-active");
    inputView.setAttribute("aria-hidden", "true");
    cardView.classList.add("view-active");
    cardView.setAttribute("aria-hidden", "false");
}

function renderCard(data) {
    greetingTitle.textContent = `${data.name} 母亲节快乐`;
    flowerName.textContent = data.flower;
    flowerLanguageZh.textContent = data.messageZh;
    flowerLanguageEn.textContent = data.messageEn;
    cardMessage.textContent = data.messageZh;
    bouquetIllustration.innerHTML = bouquetTemplates[data.flower]
        ? bouquetTemplates[data.flower](data.color)
        : createFallbackSvg(data.color);
}

function pulseCard() {
    bouquetCard.classList.remove("card-animate");
    void bouquetCard.offsetWidth;
    bouquetCard.classList.add("card-animate");
}

function updateTheme(color) {
    state.themeColor = color;
    const deep = mixColor(color, "#8b4557", 0.18);
    const soft = mixColor(color, "#ffffff", 0.5);
    const start = mixColor(color, "#ffb6c1", 0.5);
    const end = mixColor(color, "#dda0dd", 0.5);
    document.documentElement.style.setProperty("--theme-color", color);
    document.documentElement.style.setProperty("--theme-color-deep", deep);
    document.documentElement.style.setProperty("--shadow-color", hexToRgba(deep, 0.22));
    document.documentElement.style.setProperty("--button-start", start);
    document.documentElement.style.setProperty("--button-end", end);
    document.documentElement.style.setProperty("--panel-bg", hexToRgba(soft, 0.76));
    document.documentElement.style.setProperty("--panel-border", hexToRgba(color, 0.55));
}

function mixColor(a, b, amount) {
    const ar = parseInt(a.slice(1, 3), 16);
    const ag = parseInt(a.slice(3, 5), 16);
    const ab = parseInt(a.slice(5, 7), 16);
    const br = parseInt(b.slice(1, 3), 16);
    const bg = parseInt(b.slice(3, 5), 16);
    const bb = parseInt(b.slice(5, 7), 16);
    const r = Math.round(ar + (br - ar) * amount);
    const g = Math.round(ag + (bg - ag) * amount);
    const bl = Math.round(ab + (bb - ab) * amount);
    return `#${[r, g, bl].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function createFallbackSvg(color) {
    return `
        <svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="花束插画">
            <defs>
                <linearGradient id="stem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#8ac98a"/>
                    <stop offset="100%" stop-color="#5aa46d"/>
                </linearGradient>
                <linearGradient id="wrap" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${color}"/>
                    <stop offset="100%" stop-color="#ffffff"/>
                </linearGradient>
            </defs>
            <circle cx="130" cy="72" r="34" fill="${color}" opacity="0.92"/>
            <circle cx="104" cy="54" r="28" fill="${lighten(color, 0.08)}" opacity="0.84"/>
            <circle cx="156" cy="54" r="28" fill="${lighten(color, 0.12)}" opacity="0.84"/>
            <path d="M74 118 Q130 90 186 118 L172 152 Q130 142 88 152 Z" fill="url(#wrap)" opacity="0.95"/>
            <path d="M126 92 C118 118 110 138 102 160" stroke="url(#stem)" stroke-width="6" stroke-linecap="round" fill="none"/>
            <path d="M134 92 C140 118 148 138 156 160" stroke="url(#stem)" stroke-width="6" stroke-linecap="round" fill="none"/>
        </svg>`;
}

function createClusterBouquetSvg(color, name, config) {
    const petals = [color, lighten(color, 0.08), lighten(color, 0.16), config.accent || lighten(color, 0.12)];
    const flowers = Array.from({ length: config.flowerCount }, (_, index) => flowerMarkup(config.type, petals, config.core, index, config.flowerCount)).join("");
    return `
        <svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name} 花束插画">
            <defs>
                <linearGradient id="bg-${name}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${petals[0]}" stop-opacity="0.28"/>
                    <stop offset="100%" stop-color="${petals[2]}" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="stem-${name}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#89c58d"/>
                    <stop offset="100%" stop-color="#5f9f76"/>
                </linearGradient>
                <linearGradient id="wrap-${name}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${config.wrap}"/>
                    <stop offset="100%" stop-color="${lighten(config.wrap, 0.18)}"/>
                </linearGradient>
                <linearGradient id="ribbon-${name}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${config.ribbon}"/>
                    <stop offset="100%" stop-color="${lighten(config.ribbon, 0.12)}"/>
                </linearGradient>
                <filter id="shadow-${name}" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="rgba(122, 86, 102, 0.16)"/>
                </filter>
            </defs>
            <ellipse cx="130" cy="92" rx="94" ry="72" fill="url(#bg-${name})" opacity="0.74"/>
            <g filter="url(#shadow-${name})">
                <g transform="translate(0 2)">
                    ${createLeaves(name)}
                    ${createStems(name)}
                    <g transform="translate(130 78)">
                        ${flowers}
                    </g>
                </g>
                <path d="M72 117 Q130 92 188 117 L173 155 Q130 146 87 155 Z" fill="url(#wrap-${name})" opacity="0.98"/>
                <path d="M90 119 C108 124 118 139 124 155 L104 155 Z" fill="rgba(255,255,255,0.24)"/>
                <path d="M170 119 C152 124 142 139 136 155 L156 155 Z" fill="rgba(255,255,255,0.2)"/>
                <path d="M104 124 Q130 141 156 124" fill="none" stroke="url(#ribbon-${name})" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
                <circle cx="130" cy="130" r="8" fill="url(#ribbon-${name})" opacity="0.95"/>
                <path d="M122 130 L106 146" stroke="url(#ribbon-${name})" stroke-width="4" stroke-linecap="round"/>
                <path d="M138 130 L154 146" stroke="url(#ribbon-${name})" stroke-width="4" stroke-linecap="round"/>
            </g>
        </svg>`;
}

function createStems(name) {
    return `
        <path d="M126 93 C117 118 111 138 102 160" stroke="url(#stem-${name})" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M136 93 C142 119 149 139 156 160" stroke="url(#stem-${name})" stroke-width="5.5" stroke-linecap="round" fill="none"/>
        <path d="M116 96 C117 118 118 137 118 157" stroke="url(#stem-${name})" stroke-width="4.2" stroke-linecap="round" fill="none" opacity="0.86"/>
        <path d="M146 96 C145 118 144 137 142 157" stroke="url(#stem-${name})" stroke-width="4.2" stroke-linecap="round" fill="none" opacity="0.86"/>
        <path d="M106 126 C114 132 119 140 121 151" stroke="url(#stem-${name})" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8"/>
        <path d="M154 126 C147 132 142 140 139 151" stroke="url(#stem-${name})" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.8"/>`;
}

function createLeaves(name) {
    return `
        <path d="M104 112 C91 110 82 121 86 134 C99 133 106 125 104 112 Z" fill="#a9d4a8" opacity="0.82"/>
        <path d="M156 109 C170 108 179 119 175 132 C162 131 155 123 156 109 Z" fill="#a9d4a8" opacity="0.82"/>
        <path d="M120 102 C108 96 96 104 96 117 C108 118 118 113 120 102 Z" fill="#b7ddb6" opacity="0.72"/>
        <path d="M140 101 C152 95 164 103 164 116 C152 117 142 112 140 101 Z" fill="#b7ddb6" opacity="0.72"/>`;
}

function flowerMarkup(type, petals, core, index, total) {
    const angle = (index / total) * Math.PI * 2;
    const radius = total > 10 ? 34 : total > 7 ? 31 : 27;
    const x = Math.cos(angle) * (radius + (index % 2 ? 6 : 0));
    const y = Math.sin(angle) * (radius + (index % 3 ? 3 : 0)) - 28;
    const scale = 0.82 + (index % 4) * 0.06;
    const fill = petals[index % petals.length];

    if (type === "rose") return roseMarkup(x, y, scale, fill, core);
    if (type === "tulip") return tulipMarkup(x, y, scale, fill, core);
    if (type === "eustoma") return eustomaMarkup(x, y, scale, fill, core);
    if (type === "babybreath") return babyBreathMarkup(x, y, scale, fill, core, index);
    if (type === "sunflower") return sunflowerMarkup(x, y, scale, fill, core);
    if (type === "lily") return lilyMarkup(x, y, scale, fill, core);
    if (type === "daisy") return daisyMarkup(x, y, scale, fill, core);
    if (type === "hydrangea") return hydrangeaMarkup(x, y, scale, fill, core);
    if (type === "bells") return bellMarkup(x, y, scale, fill, core);
    if (type === "poppy") return poppyMarkup(x, y, scale, fill, core);
    if (type === "peony") return peonyMarkup(x, y, scale, fill, core);
    if (type === "hyacinth") return hyacinthMarkup(x, y, scale, fill, core, index);
    if (type === "gardenia") return gardeniaMarkup(x, y, scale, fill, core);
    if (type === "jasmine") return jasmineMarkup(x, y, scale, fill, core);
    if (type === "begonia") return begoniaMarkup(x, y, scale, fill, core);
    if (type === "peach") return peachMarkup(x, y, scale, fill, core);
    if (type === "violet") return violetMarkup(x, y, scale, fill, core);
    if (type === "forgetmenot") return forgetMeNotMarkup(x, y, scale, fill, core);
    return carnationMarkup(x, y, scale, fill, core);
}

function petalCircle(cx, cy, r, fill, opacity, extra = "") {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}" ${extra}/>`;
}

function carnationMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petalCircle(0, -18, 16, fill, 0.95)}
        ${petalCircle(14, -6, 16, lighten(fill, 0.08), 0.92)}
        ${petalCircle(-14, -6, 16, lighten(fill, 0.05), 0.92)}
        ${petalCircle(0, 6, 17, lighten(fill, 0.12), 0.94)}
        ${petalCircle(0, -4, 12, core, 0.92)}
        <path d="M-18 -12 Q0 -26 18 -12" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2" stroke-linecap="round"/>
    </g>`;
}

function roseMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        <path d="M0 -24 C15 -24 24 -12 18 0 C24 10 14 23 0 20 C-12 24 -24 12 -20 0 C-24 -12 -14 -24 0 -24 Z" fill="${fill}" opacity="0.98"/>
        <path d="M0 -18 C8 -18 14 -10 11 -2 C15 5 8 14 0 12 C-8 15 -16 7 -14 -2 C-16 -10 -8 -18 0 -18 Z" fill="${lighten(fill, 0.12)}" opacity="0.95"/>
        <path d="M0 -13 C4 -13 8 -9 7 -3 C9 2 5 7 0 6 C-5 7 -10 2 -9 -3 C-10 -9 -4 -13 0 -13 Z" fill="${core}" opacity="0.92"/>
    </g>`;
}

function tulipMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        <path d="M-12 -12 C-10 -24 10 -24 12 -12 C18 -6 15 10 0 18 C-15 10 -18 -6 -12 -12 Z" fill="${fill}"/>
        <path d="M-8 -10 C-5 -18 5 -18 8 -10 C11 -3 10 8 0 14 C-10 8 -11 -3 -8 -10 Z" fill="${lighten(fill, 0.12)}" opacity="0.9"/>
        <path d="M0 -6 C2 -2 3 5 0 10 C-3 5 -2 -2 0 -6 Z" fill="${core}" opacity="0.85"/>
    </g>`;
}

function eustomaMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        <path d="M0 -22 C10 -20 18 -10 17 0 C16 12 7 20 0 21 C-7 20 -16 12 -17 0 C-18 -10 -10 -20 0 -22 Z" fill="${fill}" opacity="0.94"/>
        <path d="M-14 -4 C-5 -14 5 -14 14 -4 C10 8 4 15 0 15 C-4 15 -10 8 -14 -4 Z" fill="${lighten(fill, 0.12)}" opacity="0.92"/>
        <circle cx="0" cy="1" r="5" fill="${core}" opacity="0.94"/>
    </g>`;
}

function babyBreathMarkup(x, y, scale, fill, core, index) {
    const offset = index % 2 ? 4 : -4;
    return `<g transform="translate(${130 + x + offset} ${y}) scale(${scale})">
        <path d="M0 -18 C-2 -10 -2 4 0 14 C2 4 2 -10 0 -18 Z" fill="rgba(89,127,92,0.34)"/>
        ${petalCircle(0, -12, 5.5, fill, 0.94)}
        ${petalCircle(-5, -7, 4.5, lighten(fill, 0.08), 0.92)}
        ${petalCircle(5, -7, 4.5, lighten(fill, 0.12), 0.92)}
        ${petalCircle(0, -3, 3.8, core, 0.96)}
    </g>`;
}

function sunflowerMarkup(x, y, scale, fill, core) {
    const petals = Array.from({ length: 12 }, (_, i) => {
        const angle = i * 30;
        return `<ellipse cx="0" cy="-19" rx="5.6" ry="12.8" fill="${i % 2 ? fill : lighten(fill, 0.08)}" opacity="0.95" transform="rotate(${angle})"/>`;
    }).join("");
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petals}
        <circle cx="0" cy="0" r="12" fill="${core}" opacity="0.95"/>
        <circle cx="0" cy="0" r="7" fill="rgba(122,86,32,0.85)"/>
    </g>`;
}

function lilyMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        <path d="M0 -24 C8 -16 14 -7 14 2 C14 14 6 20 0 22 C-6 20 -14 14 -14 2 C-14 -7 -8 -16 0 -24 Z" fill="${fill}"/>
        <path d="M-13 -6 C-10 -14 -4 -18 0 -20 C0 -8 -3 6 -12 15 Z" fill="${lighten(fill, 0.12)}" opacity="0.88"/>
        <path d="M13 -6 C10 -14 4 -18 0 -20 C0 -8 3 6 12 15 Z" fill="${lighten(fill, 0.16)}" opacity="0.88"/>
        <circle cx="0" cy="1" r="4" fill="${core}" opacity="0.9"/>
    </g>`;
}

function daisyMarkup(x, y, scale, fill, core) {
    const petals = Array.from({ length: 8 }, (_, i) => {
        const angle = i * 45;
        return `<ellipse cx="0" cy="-17" rx="5.5" ry="11.5" fill="${i % 2 ? fill : lighten(fill, 0.06)}" opacity="0.95" transform="rotate(${angle})"/>`;
    }).join("");
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petals}
        <circle cx="0" cy="0" r="10" fill="${core}" opacity="0.95"/>
        <circle cx="0" cy="0" r="4" fill="rgba(222,174,74,0.8)"/>
    </g>`;
}

function hydrangeaMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petalCircle(-10, -16, 8, fill, 0.92)}
        ${petalCircle(0, -20, 8, lighten(fill, 0.1), 0.92)}
        ${petalCircle(10, -16, 8, fill, 0.9)}
        ${petalCircle(-14, -4, 8, lighten(fill, 0.14), 0.88)}
        ${petalCircle(-4, -8, 8, core, 0.92)}
        ${petalCircle(10, -4, 8, lighten(fill, 0.08), 0.9)}
        ${petalCircle(-8, 8, 8, fill, 0.88)}
        ${petalCircle(4, 10, 8, lighten(fill, 0.12), 0.9)}
        ${petalCircle(14, 6, 8, fill, 0.86)}
        ${petalCircle(0, 2, 10, core, 0.94)}
    </g>`;
}

function bellMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        <path d="M0 -22 C8 -14 12 -6 12 3 C12 10 7 17 0 20 C-7 17 -12 10 -12 3 C-12 -6 -8 -14 0 -22 Z" fill="${fill}"/>
        <path d="M0 -18 C4 -12 7 -6 7 1 C7 7 4 12 0 14 C-4 12 -7 7 -7 1 C-7 -6 -4 -12 0 -18 Z" fill="${lighten(fill, 0.12)}" opacity="0.92"/>
        <circle cx="0" cy="3" r="2.5" fill="${core}" opacity="0.95"/>
    </g>`;
}

function poppyMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petalCircle(-9, -10, 11, fill, 0.92)}
        ${petalCircle(9, -10, 11, lighten(fill, 0.1), 0.92)}
        ${petalCircle(-8, 4, 11, lighten(fill, 0.06), 0.9)}
        ${petalCircle(8, 4, 11, lighten(fill, 0.14), 0.9)}
        <circle cx="0" cy="-2" r="6" fill="${core}" opacity="0.94"/>
    </g>`;
}

function peonyMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petalCircle(0, -16, 14, fill, 0.88)}
        ${petalCircle(12, -8, 13, lighten(fill, 0.08), 0.9)}
        ${petalCircle(-12, -8, 13, lighten(fill, 0.05), 0.9)}
        ${petalCircle(10, 8, 12, fill, 0.86)}
        ${petalCircle(-10, 8, 12, lighten(fill, 0.12), 0.88)}
        ${petalCircle(0, 0, 10, core, 0.92)}
    </g>`;
}

function hyacinthMarkup(x, y, scale, fill, core, index) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petalCircle(0, -18, 6, fill, 0.94)}
        ${petalCircle(-6, -10, 5.5, lighten(fill, 0.06), 0.92)}
        ${petalCircle(6, -10, 5.5, lighten(fill, 0.12), 0.92)}
        ${petalCircle(-4, -2, 5.5, fill, 0.9)}
        ${petalCircle(4, -2, 5.5, lighten(fill, 0.08), 0.9)}
        ${petalCircle(0, 6, 6, core, 0.9)}
    </g>`;
}

function gardeniaMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        <path d="M0 -22 C9 -22 16 -15 16 -6 C16 2 10 8 0 13 C-10 8 -16 2 -16 -6 C-16 -15 -9 -22 0 -22 Z" fill="${fill}"/>
        <path d="M0 -16 C6 -16 11 -11 11 -4 C11 2 7 6 0 10 C-7 6 -11 2 -11 -4 C-11 -11 -6 -16 0 -16 Z" fill="${lighten(fill, 0.14)}" opacity="0.9"/>
        <circle cx="0" cy="-2" r="5" fill="${core}" opacity="0.96"/>
    </g>`;
}

function jasmineMarkup(x, y, scale, fill, core) {
    const petals = Array.from({ length: 5 }, (_, i) => `<ellipse cx="0" cy="-12" rx="5" ry="10" fill="${i % 2 ? fill : lighten(fill, 0.08)}" opacity="0.94" transform="rotate(${i * 72})"/>`).join("");
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petals}
        <circle cx="0" cy="0" r="4.2" fill="${core}" opacity="0.95"/>
    </g>`;
}

function begoniaMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petalCircle(-9, -9, 10, fill, 0.92)}
        ${petalCircle(9, -9, 10, lighten(fill, 0.1), 0.92)}
        ${petalCircle(-7, 6, 9.5, lighten(fill, 0.05), 0.9)}
        ${petalCircle(7, 6, 9.5, lighten(fill, 0.14), 0.9)}
        <circle cx="0" cy="-1" r="4.5" fill="${core}" opacity="0.94"/>
    </g>`;
}

function peachMarkup(x, y, scale, fill, core) {
    const petals = Array.from({ length: 5 }, (_, i) => `<circle cx="${Math.cos((i / 5) * Math.PI * 2) * 9}" cy="${Math.sin((i / 5) * Math.PI * 2) * 9 - 2}" r="8.5" fill="${i % 2 ? fill : lighten(fill, 0.1)}" opacity="0.92"/>`).join("");
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petals}
        <circle cx="0" cy="-1" r="4" fill="${core}" opacity="0.95"/>
    </g>`;
}

function violetMarkup(x, y, scale, fill, core) {
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petalCircle(0, -14, 8, fill, 0.94)}
        ${petalCircle(-8, -5, 8, lighten(fill, 0.08), 0.92)}
        ${petalCircle(8, -5, 8, lighten(fill, 0.12), 0.92)}
        ${petalCircle(-5, 7, 8, fill, 0.9)}
        ${petalCircle(5, 7, 8, lighten(fill, 0.14), 0.9)}
        <circle cx="0" cy="0" r="4.5" fill="${core}" opacity="0.95"/>
    </g>`;
}

function forgetMeNotMarkup(x, y, scale, fill, core) {
    const petals = Array.from({ length: 5 }, (_, i) => `<ellipse cx="0" cy="-10" rx="4.4" ry="8.6" fill="${i % 2 ? fill : lighten(fill, 0.08)}" opacity="0.94" transform="rotate(${i * 72})"/>`).join("");
    return `<g transform="translate(${130 + x} ${y}) scale(${scale})">
        ${petals}
        <circle cx="0" cy="0" r="3.8" fill="${core}" opacity="0.95"/>
    </g>`;
}

function lighten(hex, amount) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const mix = (value) => Math.round(value + (255 - value) * amount);
    return `#${[mix(r), mix(g), mix(b)].map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}
