"use client";

import Header from "@/app/components/Header";
// Use usePathname for catching route name.
import { usePathname } from "next/navigation";

export interface LayoutProviderProps {
  children: React.ReactNode;
  session: any;
}

export const LayoutProvider = ({ children, session }: LayoutProviderProps) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/signIn/" && <Header session={session} />}
      {children}
    </>
  );
};
