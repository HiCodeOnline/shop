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

export default async function AboutPage({ params }) {
  const { lang } = await params;
  const t = messagesMap[lang] || messagesMap.en;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.about.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t.about.mission}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t.about.missionText}
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t.about.vision}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.about.values}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num, index) => (
              <div key={num} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto ${
                  index === 0 ? "bg-blue-100 dark:bg-blue-900" :
                  index === 1 ? "bg-green-100 dark:bg-green-900" :
                  index === 2 ? "bg-purple-100 dark:bg-purple-900" :
                  "bg-orange-100 dark:bg-orange-900"
                }`}>
                  <svg className={`w-6 h-6 ${
                    index === 0 ? "text-blue-600 dark:text-blue-400" :
                    index === 1 ? "text-green-600 dark:text-green-400" :
                    index === 2 ? "text-purple-600 dark:text-purple-400" :
                    "text-orange-600 dark:text-orange-400"
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.about[`value${num}`]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Facilities */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.about.team}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t.about.teamText}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.about.facility}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t.about.facilityText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t.about.certifications}
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white dark:bg-gray-800 rounded-xl shadow-md px-8 py-6">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.about[`cert${num}`]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}