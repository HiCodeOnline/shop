import Link from "next/link";
import enMessages from "@/messages/en.json";
import zhCNMessages from "@/messages/zh-CN.json";
import zhTWMessages from "@/messages/zh-TW.json";

const messagesMap = {
  en: enMessages,
  "zh-CN": zhCNMessages,
  "zh-TW": zhTWMessages,
};

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

export default function Footer({ lang }) {
  const t = messagesMap[lang] || messagesMap.en;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.site.name}</h3>
            <p className="text-gray-400">{t.site.tagline}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.nav.contact}</h3>
            <p className="text-gray-400">{t.footer.address}</p>
            <p className="text-gray-400">{t.footer.phone}</p>
            <p className="text-gray-400">{t.footer.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.nav.products}</h3>
            <ul className="space-y-2 text-gray-400">
              {PRODUCTS.map((productId) => (
                <li key={productId}>
                  <Link href={`/${lang}/products/${productId}`} className="hover:text-white transition-colors">
                    {t.product[productId]?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}