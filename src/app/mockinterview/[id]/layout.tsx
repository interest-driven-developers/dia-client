import type { Metadata } from "next";
import Header from "./components/Header";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col  bg-[#E2D7FF] h-screen">
      {/* <Header/> */}
      {children}
    </div>
  );
}
