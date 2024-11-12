import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

import { LayoutProvider } from "../utils/LayoutProvider";
import Footer from "./components/Footer";
import { getSession, logout } from "../authLib";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIA - Developer Interview Assistant",
  description: "개발자 면접 도우미 입니다.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicons/apple-touch-icon.png"
      /> */}
      {/* <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      /> */}
      <body className="font-Pretendard no-scrollbar">
        {/* <AuthSession> */}
        <LayoutProvider>{children}</LayoutProvider>
        {/* <Header session={session} /> */}
        {/* </AuthSession> */}
        {/* <Footer /> */}
        {/* createPortal to Modal */}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
