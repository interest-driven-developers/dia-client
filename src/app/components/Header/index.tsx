"use client";
import { useState } from "react";
import type { User } from "@/app/types/User";
import { useRouter, usePathname } from "next/navigation";
import LoginButton from "./Components/LoginButton";
import Image from "next/image";
import ProfileToolbar from "./Components/ProfileToolbar";
import Link from "next/link";
import ToggleButton from "./Components/ToggleButton";
import ToggleMenu from "./Components/ToggleMenu";
import Logo from "@/app/ui/Logo";
import MobileMenu from "./Components/MobileMenu";
interface HeaderProps {
  session: any;
}

export default function Header({ session }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isProfileToolbarOpen, setIsProfileToolbarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const handleLogoClick = () => {
    if (pathname === "/") {
      location.reload(); // Reload the current page if already on the main page
    } else {
      router.push("/"); // Navigate to the main page if on a different page
    }
  };
  const handleMenuClick = () => {
    if (isMenuOpen) {
      hideMenu();
    } else {
      setAnimationClass("animate-fadeInRight");
      setIsMenuOpen(true);
    }
  };

  const hideMenu = async () => {
    setAnimationClass("animate-fadeOutRight");
    await new Promise((r) => setTimeout(r, 600));
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed z-40 bg-white   w-screen sm:mx-auto ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-1/2">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center ">
            <div className=" cursor-pointer" onClick={handleLogoClick}>
              <Logo
              // className="text-3xl font-bold custom-color cursor-pointer"
              ></Logo>
            </div>
            {/* <Image
              className="h-10 w-10 rounded-full"
              width={100}
              height={100}
              src="/images/logo.png"
              alt=""
            /> */}
            {/* <div className="h-6 ml-2 mt-2 items-self-center border-indigo-500 border rounded-sm">
              <h1 className="p-0.5 text-xs/relaxed text-bold font-light text-slate-400">
                Beta
              </h1>
            </div> */}
          </div>
          {/* 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex justify-items-end justify-self-end  space-x-4">
              <a
                onClick={handleLogoClick}
                className="text-slate-700 hover:text-primary px-3 py-5 rounded-md text-sm font-semibold cursor-pointer"
              >
                홈
              </a>
              <Link
                href="/solve"
                className="text-slate-700 hover:text-indigo-600 px-3 py-5 rounded-md text-sm font-semibold"
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
                      src={session.user?.image || "/images/default-profile.png"}
                      alt=""
                    />
                  </div>
                  <ProfileToolbar
                    isOpen={isProfileToolbarOpen}
                    user={session.user}
                  ></ProfileToolbar>
                </>
              ) : (
                <LoginButton></LoginButton>
              )}
            </div>
          </div>
          {/* <ToggleButton
            onClick={handleMenuClick}
            toggleState={animationClass}
          ></ToggleButton> */}
          <MobileMenu onClick={handleMenuClick}></MobileMenu>
        </div>
        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <ToggleMenu
            isToggleMenuOpen={isMenuOpen}
            animationClass={animationClass}
            onClick={hideMenu}
          ></ToggleMenu>
        )}
      </nav>
    </header>
  );
}
