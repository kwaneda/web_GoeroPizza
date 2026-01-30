import type { Metadata } from "next";
import { Black_Han_Sans } from "next/font/google";
import SmoothScroll from "@/components/ui/smooth-scroll";
import "./globals.css";

const blackHanSans = Black_Han_Sans({
  weight: "400",
  variable: "--font-black-han-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "괴로피자 - 저자본 고매출의 기적",
  description: "오직 포장/배달로만 1억 달성. 저자본 고매출 피자 창업의 정답, 괴로피자.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${blackHanSans.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
