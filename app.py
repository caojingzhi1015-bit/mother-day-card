from flask import Flask, jsonify, render_template, request
from random import choice

app = Flask(__name__)

BOUQUETS = [
    {
        "flower": "粉色康乃馨",
        "color": "#F7D8E5",
        "message_zh": "💐 妈妈的碎碎念念，温暖了我的岁岁年年",
        "message_en": "Mom's little words warm my whole life",
    },
    {
        "flower": "香槟玫瑰",
        "color": "#F3DDD2",
        "message_zh": "🌹 你不用做完美妈妈，做你自己就很好",
        "message_en": "You don't have to be a perfect mom, just be yourself",
    },
    {
        "flower": "白色郁金香",
        "color": "#F4EEF3",
        "message_zh": "🌷 愿你永远有属于自己的快乐",
        "message_en": "May you always have your own happiness",
    },
    {
        "flower": "洋桔梗",
        "color": "#E8DDF4",
        "message_zh": "💜 从前你牵我走路，如今我挽你看夕阳",
        "message_en": "Once you held my hand, now I hold yours",
    },
    {
        "flower": "满天星",
        "color": "#F7EAF3",
        "message_zh": "✨ 爱没有方向，但你就是我的导航",
        "message_en": "Love has no direction, but you are my compass",
    },
    {
        "flower": "向日葵",
        "color": "#F6E7BF",
        "message_zh": "🌻 你是我永远的底气和退路",
        "message_en": "You are always my strength and safe place",
    },
    {
        "flower": "香水百合",
        "color": "#F8EEF1",
        "message_zh": "🌸 谢谢你允许我做一个普通的小孩",
        "message_en": "Thank you for letting me be an ordinary kid",
    },
    {
        "flower": "小雏菊",
        "color": "#F5EFCB",
        "message_zh": "🌼 不用羡慕别人，你的女儿也很棒",
        "message_en": "Don't envy others, your daughter is great too",
    },
    {
        "flower": "粉色玫瑰",
        "color": "#F8D7E4",
        "message_zh": "💕 全世界都催我长大，只有你疼我的小翅膀",
        "message_en": "The whole world pushes me to grow up, only you protect my softness",
    },
    {
        "flower": "绣球花",
        "color": "#DDE7F6",
        "message_zh": "🎀 平淡的日子，因为有你才闪闪发光",
        "message_en": "Ordinary days shine because of you",
    },
    {
        "flower": "铃兰",
        "color": "#EAF3E8",
        "message_zh": "🍃 小时候想跑远，现在只想回家陪你吃饭",
        "message_en": "I used to want to run away, now I just want to eat with you",
    },
    {
        "flower": "虞美人",
        "color": "#F5D9DE",
        "message_zh": "🌺 爱你这件事，不止母亲节这一天",
        "message_en": "I love you more than just Mother's Day",
    },
    {
        "flower": "芍药",
        "color": "#F6D5E0",
        "message_zh": "🌸 你先是你自己，然后才是我的妈妈",
        "message_en": "You are yourself first, then my mom",
    },
    {
        "flower": "风信子",
        "color": "#DCE4F5",
        "message_zh": "💙 踏遍山川湖海，走不出你的臂弯",
        "message_en": "I've traveled the world, but never left your arms",
    },
    {
        "flower": "栀子花",
        "color": "#F7F2E6",
        "message_zh": "🤍 我会努力成为你的铠甲",
        "message_en": "I will try my best to protect you",
    },
    {
        "flower": "茉莉花",
        "color": "#EEF4EA",
        "message_zh": "🌿 世间所有美好，都不及你在我身边",
        "message_en": "Nothing in the world is better than having you by my side",
    },
    {
        "flower": "海棠花",
        "color": "#F5D8D1",
        "message_zh": "🍎 愿时光慢一点，我陪你久一点",
        "message_en": "May time slow down, so I can stay with you longer",
    },
    {
        "flower": "桃花",
        "color": "#F7D9DA",
        "message_zh": "🍑 一辈子你围着我转，这次换我围着你转",
        "message_en": "You spent your whole life around me, now it's my turn",
    },
    {
        "flower": "紫罗兰",
        "color": "#E6D9F2",
        "message_zh": "💜 我们共享过同一个心跳",
        "message_en": "We once shared the same heartbeat",
    },
    {
        "flower": "勿忘我",
        "color": "#DDE5F7",
        "message_zh": "💐 不管我多大，永远是你的小宝贝",
        "message_en": "No matter how old I am, I'm always your little girl",
    },
]


@app.route("/")
def index():
    return render_template("index.html")


@app.post("/api/generate-card")
def generate_card():
    payload = request.get_json(silent=True) or {}
    raw_name = str(payload.get("name", "")).strip()
    safe_name = raw_name[:10] or "妈妈"
    display_name = f"{safe_name}小姐"
    bouquet = choice(BOUQUETS)

    return jsonify(
        {
            "name": display_name,
            "flower": bouquet["flower"],
            "message": bouquet["message_zh"],
            "messageZh": bouquet["message_zh"],
            "messageEn": bouquet["message_en"],
            "color": bouquet["color"],
        }
    )
   import os
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
