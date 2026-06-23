import ProductDetailClient from "./ProductDetailClient";
import enMessages from "@/messages/en.json";
import zhCNMessages from "@/messages/zh-CN.json";
import zhTWMessages from "@/messages/zh-TW.json";

const PRODUCTS = [
  "cnc-machine",
  "laser-cutter",
  "press-machine",
  "welding-robot",
  "injection-molding",
  "lathe",
  "grinding",
  "edm",
];

const LANGS = ["en", "zh-CN", "zh-TW"];

const messagesMap = {
  en: enMessages,
  "zh-CN": zhCNMessages,
  "zh-TW": zhTWMessages,
};

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    PRODUCTS.map((slug) => ({ lang, slug }))
  );
}

export default async function ProductDetailPage({ params }) {
  const { lang, slug } = await params;
  const t = messagesMap[lang] || messagesMap.en;

  const product = t.product[slug];
  const productsGlobal = t.products;

  return (
    <ProductDetailClient
      lang={lang}
      product={product}
      productsGlobal={productsGlobal}
      slug={slug}
    />
  );
}