import type { Metadata } from "next";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col h-full bg-[#FFFEE5] no-scrollbar overflow-y-auto sm:overflow-y-hidden">
      {children}
    </main>
  );
}
