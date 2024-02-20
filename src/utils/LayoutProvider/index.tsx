"use client";

import Header from "@/app/components/Header";
import NavigationBar from "@/app/components/NavigationBar";
// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
export interface LayoutProviderProps {
  children: React.ReactNode;
  session: any;
}

export const LayoutProvider = ({ children, session }: LayoutProviderProps) => {
  const pathname = usePathname();
  const headerNotAllowedPath = ["/signIn/", "/mockinterview/"];
  const naviNotAllowedPath = ["/signIn/", "/mockinterview/", '/solve/problem/'];
  const headerIsNotAllowed = headerNotAllowedPath.some((path) =>
    pathname.startsWith(path)
  );
  const naviIsNotAllowed = naviNotAllowedPath.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <SessionProvider session={session}>
      {!headerIsNotAllowed && <Header session={session} />}
      {children}
      {!naviIsNotAllowed && <NavigationBar></NavigationBar>}
    </SessionProvider>
  );
};
