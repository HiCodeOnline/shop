const fs = require("fs");

const config = `export default {
  locales: ["en", "zh-CN", "zh-TW"],
  defaultLocale: "en",
};
`;

fs.writeFileSync("next-intl.config.js", config, "utf8");
console.log("Config file written");