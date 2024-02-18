import type { Metadata } from "next";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-[#B8A0FA] h-screen">
      {children}
    </div>
  );
}
