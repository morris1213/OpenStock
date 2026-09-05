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
        {/* 注意：如果你在后台申请了新的 Social Bar 代码，请把这里的 src 替换成新的 */}
        <Script 
          id="adsterra-socialbar-1"
          src="https://pl31194668.profitableratecpmnetwork.com/7d/28/18/7d28184925e32bd072536c7b057d3cfd.js"
          strategy="lazyOnload"
        />

        <Script 
          id="adsterra-socialbar-2"
          src="https://pl31194669.profitableratecpmnetwork.com/12/ac/09/12ac0952b5b3ec2bd625bd8391183e33.js"
          strategy="lazyOnload"
        />

      </body>
    </html>
  );
}
