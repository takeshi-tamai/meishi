/*
 * デジタル名刺のデータ
 * Claude Code が CLAUDE.md の手順に沿ってこのファイルを書き換えます。
 * 手で直す場合も、左側の項目名は変えないでください。
 * 値が "" の項目は名刺に表示されません。改行は \n で書きます。
 */
window.PROFILE = {
  __TEMPLATE__: false, // 作成が終わると false（true の間は「サンプル表示中」の注意が出ます）

  // 1) 基本情報（title 以外は必須）
  basic: {
    name: "玉井 毅",            // 姓と名の間に空白を1つ
    company: "Repro株式会社",
    address: "東京都渋谷区代々木1-36-4 全理連ビル4階",
    department: "Repro MA & Solutions Division Enterprise Sales Team",
    title: "",         // 役職（任意）
    email: "takeshi.tamai@repro.io",
    phone: "070-4302-4690"
  },

  // 2) 起動時（約1秒）のロゴ: "company"（会社ロゴ）または "app"（アプリロゴ）
  splash: { logo: "company" },

  // 3) ひとこと（任意）：名前の下に大きく出る1〜2文。空欄なら「名刺を受け取っていただき、ありがとうございます。」
  welcome: "",

  // 4) SNS（URLで保存。使わないものは ""）
  sns: {
    sansan: "https://ap.sansan.com/v/vc/ebsytazcxuwevpjemzi62en3sa/",
    instagram: "",
    facebook: "https://www.facebook.com/takeshi.tamai.3",
    x: "",
    linkedin: "",
    whatsapp: "",           // 例: "https://wa.me/819012345678"
    others: [
      // { label: "note", url: "https://note.com/xxxx" }
    ]
  },

  // 5) 自己紹介（300文字程度）：ひとことの下に表示
  intro: "",

  // 6) 付帯情報（すべて任意。空欄の項目は表示されません）
  extra: {
    age: "36",         // 数字だけなら「歳」を付けて表示
    birthday: "1990年10月29日",    // 例: "4月1日"
    hometown: "大阪",
    hobbies: "麻雀、お酒"
  },

  // 7) 写真（assets/ に置いたファイル。"" ならイニシャルを表示）
  photo: "assets/T02E021K5-U0A4PFAL4G4-003253206bb4-512.png",

  // 8) 背景色（#RRGGBB）。文字色は自動で読みやすい色になります
  theme: { background: "#1F3A5F" }
};
