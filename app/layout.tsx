import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Toaster} from "@/components/ui/sonner";
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
  description: "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                {/* Google AdSense (注意：在 React 中 crossorigin 建议写成驼峰命名 crossOrigin，以避免控制台警告) */}
                <script 
                    async 
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5164208756954652"
                    crossOrigin="anonymous"
                ></script>
                
                {/* Monetag 广告验证代码 */}
                <script 
                    src="https://quge5.com/88/tag.min.js" 
                    data-zone="276402" 
                    data-cfasync="false" 
                    async
                ></script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Toaster/>
            </body>
        </html>
    );
}
