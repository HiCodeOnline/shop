const fs = require("fs");

const en = {"home": {"title": "To get started, edit the page.js file.", "description": "Looking for a starting point or more instructions? Head over to Templates or the Learning center.", "deploy": "Deploy Now", "documentation": "Documentation"}};
const zhCN = {"home": {"title": "要开始使用，请编辑 page.js 文件。", "description": "正在寻找起点或更多说明？前往模板或学习中心。", "deploy": "立即部署", "documentation": "文档"}};
const zhTW = {"home": {"title": "要開始使用，請編輯 page.js 檔案。", "description": "正在尋找起點或更多說明？前往模板或學習中心。", "deploy": "立即部署", "documentation": "文件"}};

fs.writeFileSync("src/messages/en.json", JSON.stringify(en, null, 2), "utf8");
fs.writeFileSync("src/messages/zh-CN.json", JSON.stringify(zhCN, null, 2), "utf8");
fs.writeFileSync("src/messages/zh-TW.json", JSON.stringify(zhTW, null, 2), "utf8");
console.log("JSON files updated");