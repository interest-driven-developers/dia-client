"use client";
import { useState, useEffect } from "react";
import type { User } from "@/types/User";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/ui/Logo";
import HomeIcon from "@/app/ui/icons/HomeIcon";
import SolveIcon from "@/app/ui/icons/SolveIcon";
import HistoryIcon from "@/app/ui/icons/HistoryIcon";
import HomeFillIcon from "@/app/ui/icons/HomeFillIcon";
import SolveFillIcon from "@/app/ui/icons/SolveFillIcon ";
import HistoryFillIcon from "@/app/ui/icons/HistoryFillIcon";
interface NavigationBarProps {
  // session: any;
}

export default function NavigationBar({}: NavigationBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState("home");
  useEffect(() => {
    const solvePathPattern = /^\/(solve|mockinterview|practice)(\/.*)?$/;
    const historyPathPattern = /^\/history(\/.*)?$/;

    if (pathname === "/") {
      setIsMenu("home");
    } else if (solvePathPattern.test(pathname)) {
      setIsMenu("solve");
    } else if (historyPathPattern.test(pathname)) {
      setIsMenu("history");
    } else {
      setIsMenu("");
    }
  }, [pathname]);

  const handleLogoClick = () => {
    setIsMenu("home");
    if (pathname === "/") {
      location.reload(); // Reload the current page if already on the main page
    } else {
      router.push("/"); // Navigate to the main page if on a different page
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white border-[#F5F5F5] h-[66px] flex justify-between md:hidden">
      <div
        className="flex flex-col items-center justify-center flex-grow cursor-pointer group"
        onClick={handleLogoClick}
      >
        {isMenu === "home" ? <HomeFillIcon /> : <HomeIcon />}
        <p
          className={`text-[#E0E0E0] group-hover:text-primary-600 group-focus:text-primary-600 text-[10px] font-semibold text-center mt-1 ${
            isMenu === "home" && "text-primary"
          }`}
        >
          홈
        </p>
      </div>
      <Link
        href="/solve/backend"
        className="flex flex-col items-center justify-center flex-grow cursor-pointer group"
      >
        {isMenu === "solve" ? <SolveFillIcon /> : <SolveIcon />}
        <p
          className={`text-[#E0E0E0] group-hover:text-primary-600 group-focus:text-primary-600 text-[10px] font-semibold text-center mt-1 ${
            isMenu === "solve" && "text-primary-600"
          }`}
        >
          문제풀기
        </p>
      </Link>
      <Link
        href="/history"
        className="flex flex-col items-center justify-center flex-grow cursor-pointer group"
      >
        {isMenu === "history" ? <HistoryFillIcon /> : <HistoryIcon />}
        <p
          className={`text-[#E0E0E0] group-hover:text-primary-600 group-focus:text-primary-600 text-[10px] font-semibold text-center mt-1 ${
            isMenu === "history" && "text-primary-600"
          }`}
        >
          히스토리
        </p>
      </Link>
    </div>
  );
}
