import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script"; // 1. 引入 Script 组件
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
               {/* 保持头部整洁，只放 meta 等必须的标签 */}
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Toaster/>

                {/* Google AdSense */}
                <Script 
                    id="google-adsense"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5164208756954652"
                    crossOrigin="anonymous"
                    strategy="afterInteractive" // 在页面可交互后加载
                />
                
                {/* Monetag 广告验证代码 */}
                <Script 
                    id="monetag-script"
                    src="https://quge5.com/88/tag.min.js" 
                    data-zone="276402" 
                    data-cfasync="false" 
                    strategy="afterInteractive"
                />
                
                {/* Adsterra 代码 1 */}
                <Script 
                    id="adsterra-script-1"
                    src="https://pl31194668.profitableratecpmnetwork.com/7d/28/18/7d28184925e32bd072536c7b057d3cfd.js"
                    strategy="afterInteractive"
                />
                
                {/* Adsterra 代码 2 */}
                <Script 
                    id="adsterra-script-2"
                    src="https://pl31194669.profitableratecpmnetwork.com/12/ac/09/12ac0952b5b3ec2bd625bd8391183e33.js"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
