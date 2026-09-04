import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 全局加载 Monetag 脚本 */}
      <Script
        src="https://quge5.com/88/tag.min.js"
        data-zone="276402"
        data-cfasync="false"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
