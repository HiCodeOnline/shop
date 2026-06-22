"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";

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

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const t = useTranslations();

  if (!PRODUCTS.includes(slug)) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Product not found</h1>
          <Link href="/products" className="mt-4 text-blue-600 dark:text-blue-400">
            {t("products.backToProducts")}
          </Link>
        </div>
      </div>
    );
  }

  const productPrefix = `product.${slug}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-8 hover:underline"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("products.backToProducts")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src={`/products/${slug}/main.jpg`}
                alt={t(`${productPrefix}.name`)}
                className="w-full aspect-video object-cover"
                onError={(e) => {
                  e.target.src = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20${slug}%20machine%20in%20factory&image_size=landscape_16_9`;
                }}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                  <img
                    src={`/products/${slug}/detail-${i}.jpg`}
                    alt={`${t(`${productPrefix}.name`)} detail ${i}`}
                    className="w-full aspect-square object-cover"
                    onError={(e) => {
                      e.target.src = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20${slug}%20machine%20detail%20view&image_size=square`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t(`${productPrefix}.name`)}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {t(`${productPrefix}.description`)}
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("products.specs")}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(t.raw(`${productPrefix}.specs`))
                  .filter(([key]) => !key.endsWith("Value"))
                  .map(([key, label]) => (
                    <div key={key} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t(`${productPrefix}.specs.${key}Value`)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("products.features")}
              </h2>
              <ul className="space-y-2">
                {t.raw(`${productPrefix}.features`).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("products.applications")}
              </h2>
              <ul className="space-y-2">
                {t.raw(`${productPrefix}.applications`).map((application, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/contact?product=${slug}`}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              {t("products.requestQuote")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}