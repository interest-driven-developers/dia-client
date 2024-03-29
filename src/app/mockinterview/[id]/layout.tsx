import type { Metadata } from "next";
import Header from "./components/Header";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-[#F9F5FF] h-screen">
      {/* <Header/> */}
      {children}
    </div>
  );
}
