import type { Metadata } from "next";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col h-full bg-[#B8A0FA] no-scrollbar overflow-y-auto sm:overflow-y-hidden">
      {children}
    </main>
  );
}
