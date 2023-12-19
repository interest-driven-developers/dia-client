"use client";
import { useState } from "react";
import type { User } from "@/types/User";
import { useRouter, usePathname } from "next/navigation";
import LoginButton from "./Components/LoginButton";
import Image from "next/image";
import ProfileToolbar from "./Components/ProfileToolbar";
import Link from "next/link";
interface HeaderProps {
  session: any;
}

export default function Header({ session }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isProfileToolbarOpen, setIsProfileToolbarOpen] = useState(false);
  const handleLogoClick = () => {
    if (pathname === "/") {
      location.reload(); // Reload the current page if already on the main page
    } else {
      router.push("/"); // Navigate to the main page if on a different page
    }
  };
  // console.log("세션헤더", session);

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex flex-shrink-0">
            <a
              onClick={handleLogoClick}
              className="text-3xl font-bold custom-color cursor-pointer"
            >
              DIA
            </a>
            <div className="h-7 ml-2 mt-1 items-self-center border-solid border-2 border-indigo-500 rounded-sm">
              <span className="p-0.5 text-sm text-gray-500">Beta</span>
            </div>
          </div>
          {/* 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex  space-x-4">
              <a
                onClick={handleLogoClick}
                className="text-gray-900 hover:text-indigo-600 px-3 py-5 rounded-md text-sm font-medium cursor-pointer"
              >
                홈
              </a>
              <Link
                href="/solve"
                className="text-gray-900 hover:text-indigo-600 px-3 py-5 rounded-md text-sm font-medium"
              >
                모든 문제
              </Link>
              {/* <a
                href="/mockinterview"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                모의면접
              </a> */}
              {session && session.user ? (
                <>
                  <div
                    className="mt-2 cursor-pointer hover:opacity-80"
                    onClick={() =>
                      setIsProfileToolbarOpen(!isProfileToolbarOpen)
                    }
                  >
                    <Image
                      className="h-10 w-10 rounded-full"
                      width={20}
                      height={20}
                      src={session.user.image}
                      alt=""
                    />
                  </div>
                  <ProfileToolbar
                    isOpen={isProfileToolbarOpen}
                    user={session.token.user}
                  ></ProfileToolbar>
                </>
              ) : (
                <LoginButton />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
