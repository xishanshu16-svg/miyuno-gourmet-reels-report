import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "みゆのぐるめ｜青森グルメ｜リール詳細分析",
  description: "@miyuno_gourmet の直近2か月・再生数TOP10を、実映像、フック、勝因、反証、改善台本まで分解したInstagramリール分析レポート",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
