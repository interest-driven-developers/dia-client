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
            <a href="#" className="text-2xl font-bold custom-color">
              DIA
            </a>
          </div>

          {/* 메뉴 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                홈
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                문제풀기
              </a>
              {/* 추가 메뉴 항목을 원하는 만큼 반복해서 추가할 수 있습니다. */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
