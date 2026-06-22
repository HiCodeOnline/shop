import ProductsClient from "./ProductsClient";
import enMessages from "@/messages/en.json";
import zhCNMessages from "@/messages/zh-CN.json";
import zhTWMessages from "@/messages/zh-TW.json";

const messagesMap = {
  en: enMessages,
  "zh-CN": zhCNMessages,
  "zh-TW": zhTWMessages,
};

const LANGS = ["en", "zh-CN", "zh-TW"];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function ProductsPage({ params }) {
  const { lang } = await params;
  const messages = messagesMap[lang] || messagesMap.en;

  return <ProductsClient lang={lang} messages={messages} />;
}