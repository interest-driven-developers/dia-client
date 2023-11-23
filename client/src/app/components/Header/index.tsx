"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import SignUpBtn from "./components/SignupBtn/SignupBtn";
import LoginBtn from "./components/LoginBtn/LoginBtn";
import LogoutBtn from "./components/LogoutBtn/LogoutBtn";
import { useRouter, usePathname } from "next/navigation";
interface HeaderProps {
  session: any;
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogoClick = () => {
    if (pathname === "/") {
      location.reload(); // Reload the current page if already on the main page
    } else {
      router.push("/"); // Navigate to the main page if on a different page
    }
  };

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <a
              onClick={handleLogoClick}
              className="text-2xl font-bold custom-color cursor-pointer"
            >
              DIA
            </a>
          </div>

          {/* 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                onClick={handleLogoClick}
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                홈
              </a>
              <a
                href="/solve"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                모든 문제
              </a>
              <a
                href="/mockinterview"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                모의면접
              </a>
              <a
                href="/mockinterview"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                로그인
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
