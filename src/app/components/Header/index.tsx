"use client";
import { useState } from "react";
import type { User } from "@/types/User";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import LoginButton from "./Components/LoginButton";
import Image from "next/image";
import ProfileToolbar from "./Components/ProfileToolbar";
import Link from "next/link";
import ToggleButton from "./Components/ToggleButton";
import ToggleMenu from "./Components/ToggleMenu";
import Logo from "@/app/ui/Logo";
import MobileMenu from "./Components/MobileMenu";
import DesktopMenu from "./Components/DesktopMenu";
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
    <header className="fixed z-40 bg-white w-full sm:mx-auto ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-1/2 2xl:w-1/2">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center ">
            <Logo
              className="w-[70px] h-10 cursor-pointer"
              onClick={handleLogoClick}
            ></Logo>
          </div>
          {/* 메뉴 */}
          <div className="ml-10 flex justify-items-end justify-self-end  space-x-4">
            <DesktopMenu />
            <MobileMenu onClick={handleMenuClick}></MobileMenu>
            {session && session.user ? (
              <>
                <Image
                  className="h-10 w-10 rounded-full sm:mt-2 cursor-pointer hover:opacity-80"
                  width={20}
                  height={20}
                  src={session.user?.image_url || "/images/default-profile.png"}
                  alt=""
                  onClick={() => setIsProfileToolbarOpen(!isProfileToolbarOpen)}
                />
                {/* <ProfileToolbar
                  isOpen={isProfileToolbarOpen}
                  user={session.user}
                  loginHandler={() => router.push("/signIn")}
                ></ProfileToolbar> */}
              </>
            ) : (
              <LoginButton
                onClick={() => setIsProfileToolbarOpen(!isProfileToolbarOpen)}
              ></LoginButton>
            )}
          </div>
          {/* <ToggleButton
            onClick={handleMenuClick}
            toggleState={animationClass}
          ></ToggleButton> */}
        </div>
        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <ToggleMenu
            isToggleMenuOpen={isMenuOpen}
            animationClass={animationClass}
            onClick={hideMenu}
          ></ToggleMenu>
        )}
        <ProfileToolbar
          isOpen={isProfileToolbarOpen}
          user={session?.user}
          // loginHandler={() =>
          //   router.push(`/signIn/${window.document.location.href}`)
          // }
        ></ProfileToolbar>
      </nav>
    </header>
  );
}
