import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LANGS = ["en", "zh-CN", "zh-TW"];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const titles = {
    en: "Precision Machinery",
    "zh-CN": "精密机械",
    "zh-TW": "精密機械",
  };
  const descriptions = {
    en: "Professional machinery manufacturing solutions",
    "zh-CN": "专业机械制造解决方案",
    "zh-TW": "專業機械製造解決方案",
  };
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header lang={lang} />
        <main className="flex-1">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}