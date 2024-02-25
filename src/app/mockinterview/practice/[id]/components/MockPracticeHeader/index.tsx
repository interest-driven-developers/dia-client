"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
interface HeaderProps {
  isView: number | null;
}

export default function MockPracticeHeader({ isView }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="flex px-4 items-center mb-[30px]">
      {isView !== 2 ? (
        <>
          <div onClick={() => router.back()}>
            <ChevronLeftIcon className="h-6 w-6 text-[#212121] cursor-pointer rounded-md hover:opacity-50" />
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
            실전연습
          </h1>
        </>
      ) : (
        <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
          답변확인
        </h1>
      )}
    </header>
  );
}
