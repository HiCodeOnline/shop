"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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

const ASPECT_RATIOS = [
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
];

const PRODUCT_IMAGES = [
  "industrial CNC machining center machine in factory, professional photography",
  "industrial laser cutting machine for metal fabrication, professional photography",
  "industrial hydraulic press machine, professional photography",
  "industrial welding robot arm in factory, professional photography",
  "industrial injection molding machine, professional photography",
  "industrial CNC lathe turning machine, professional photography",
  "industrial surface grinding machine, professional photography",
  "industrial EDM wire cutting machine, professional photography",
];

const IMAGE_SIZES = [
  "landscape_4_3",
  "square",
  "portrait_4_3",
  "landscape_4_3",
  "square",
  "portrait_4_3",
  "landscape_4_3",
  "square",
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t("home.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Products Masonry Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {t("home.featuredProducts")}
            </h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
            {PRODUCTS.map((productId, index) => {
              const aspect = ASPECT_RATIOS[index % ASPECT_RATIOS.length];
              const imagePrompt = PRODUCT_IMAGES[index % PRODUCT_IMAGES.length];
              const imageSize = IMAGE_SIZES[index % IMAGE_SIZES.length];
              return (
                <Link
                  key={productId}
                  href={`/products/${productId}`}
                  className="group mb-6 break-inside-avoid block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className={`relative ${aspect} overflow-hidden bg-gray-100 dark:bg-gray-700`}>
                    <img
                      src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(imagePrompt)}&image_size=${imageSize}`}
                      alt={t(`product.${productId}.name`)}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t("home.learnMore")} →
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {t(`product.${productId}.name`)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {t(`product.${productId}.shortDesc`)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}