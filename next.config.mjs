/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // 开发模式移除，构建时通过 generateStaticParams 静态生成页面
};

export default nextConfig;
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
