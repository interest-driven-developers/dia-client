"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
interface HeaderProps {
  session?: any;
  isOpen?: boolean;
  setIsOpen?: any;
}

export default function Header({ session, isOpen, setIsOpen }: HeaderProps) {
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
    <header className="fixed top-0 left-0 z-30  bg-white shadow-sm w-full dark:bg-slate-800">
      <nav className="mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-shrink-0">
            <div
              className="cursor-pointer hover:opacity-70"
              onClick={() => setIsOpen(true)}
            >
              <XMarkIcon className="h-7 w-7 text-indigo-400 rounded-3xl p-1 " />{" "}
            </div>
          </div>
          {/* 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex justify-items-end justify-self-end  space-x-4"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
