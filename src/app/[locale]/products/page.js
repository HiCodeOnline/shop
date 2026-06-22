"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CATEGORIES = [
  { id: "all", label: "products.categories.all" },
  { id: "cnc", label: "products.categories.cnc" },
  { id: "cutting", label: "products.categories.cutting" },
  { id: "forming", label: "products.categories.forming" },
  { id: "welding", label: "products.categories.welding" },
  { id: "molding", label: "products.categories.molding" },
];

const PRODUCTS = [
  { id: "cnc-machine", category: "cnc" },
  { id: "laser-cutter", category: "cutting" },
  { id: "press-machine", category: "forming" },
  { id: "welding-robot", category: "welding" },
  { id: "injection-molding", category: "molding" },
  { id: "lathe", category: "cnc" },
  { id: "grinding", category: "cnc" },
  { id: "edm", category: "cutting" },
];

export default function ProductsPage() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("products.title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
              }`}
            >
              {t(category.label)}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                  <img
                    src={`/products/${product.id}/main.jpg`}
                    alt={t(`product.${product.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20${product.id}%20machine%20in%20factory&image_size=landscape_16_9`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t(`product.${product.id}.name`)}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {t(`product.${product.id}.shortDesc`)}
                  </p>
                  <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium flex items-center">
                    {t("home.learnMore")}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t("products.categories.all")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}