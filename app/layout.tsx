import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenStock",
  description: "OpenStock is an open-source alternative to expensive market platforms...",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* 保持头部整洁 */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />

        {/* Google AdSense */}
        <Script 
          id="google-adsense" 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5164208756954652" 
          crossOrigin="anonymous" 
          strategy="afterInteractive" 
        />
        
        {/* Monetag */}
        <Script 
          id="monetag-script" 
          src="https://quge5.com/88/tag.min.js" 
          data-zone="276402" 
          data-cfasync="false" 
          strategy="afterInteractive" 
        />

        {/* 使用 Iframe 隔离 Adsterra 代码，防止其破坏 React DOM */}
        {/* 如果是横幅广告，可调整 width 和 height；如果是隐藏弹窗(Popunder)，可保留隐藏样式 */}
        <iframe 
            src="/adsterra.html" 
            title="ads"
            style={{ width: '100%', height: '60px', border: 'none', position: 'fixed', bottom: 0, zIndex: 50 }} 
        />
      </body>
    </html>
  );
}
