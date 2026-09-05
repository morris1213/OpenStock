import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenStock",
  description: "OpenStock is an open-source alternative to expensive market platforms...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* 保持头部干净，不要放原生的 <script> 广告代码 */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />

        {/* 1. Google AdSense (保留 afterInteractive 以保证加载率) */}
        <Script 
          id="google-adsense" 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5164208756954652" 
          crossOrigin="anonymous" 
          strategy="afterInteractive" 
        />
        
        {/* 2. Monetag - In-Page Push (使用 lazyOnload 防止阻塞页面) */}
        <Script 
          id="monetag-script" 
          src="https://quge5.com/88/tag.min.js" 
          data-zone="276402" 
          data-cfasync="false" 
          strategy="lazyOnload" 
        />

        {/* 3. Adsterra - Social Bar 或 Popunder */}
        <Script 
          id="adsterra-socialbar-new"
          src="https://pl31195880.profitableratecpmnetwork.com/999712c8dcdc30bf7630095496b1ddb3/invoke.js" 
          strategy="lazyOnload" 
          data-cfasync="false" 
        />
        <div id="container-999712c8dcdc30bf7630095496b1ddb3"></div>
        
        {/* Adsterra Banner 配置 (必须将内联代码包裹在模板字符串中) */}
        <Script id="adsterra-banner-config" strategy="lazyOnload">
          {`
            var atOptions = {
              'key' : 'cc7d0f51992b19578d9960c786680910',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `}
        </Script>
        
        {/* Adsterra Banner 渲染脚本 */}
        <Script 
          id="adsterra-banner-invoke"
          src="https://www.highrevenueformat.com/cc7d0f51992b19578d9960c786680910/invoke.js" 
          strategy="lazyOnload" 
        />


      </body>
    </html>
  );
}
