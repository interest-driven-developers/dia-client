"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import type { User } from "@/types/User";
interface ProfileToolbarProps {
  isOpen: boolean;
  user: User;
}
export default function ProfileToolbar({ isOpen, user }: ProfileToolbarProps) {
  return (
    <div
      className={`relative transition-transform transform ${
        isOpen
          ? "translate-y-0 opacity-100 duration-500"
          : "translate-y-full opacity-0 duration-500"
      } ease-in-out`}
    >
      {isOpen && (
        <div className="w-72 divide-y divide-gray-100 absolute top-16 right-2 bg-white border rounded-lg shadow-md ">
          <div className="grid gap-y-2 m-4">
            <h1 className="font-semibold text-sm">내 정보</h1>
            <Image
              className="mt-5 h-10 w-10 rounded-full justify-items-center items-center itmes-self-center"
              width={30}
              height={30}
              src={user.image_url || "/default-user.png"}
              alt="user Image"
            />
            <p className="font-semibold ">{user.nickname}</p>
          </div>

          <ul className="list-none divide-y divide-gray-100">
            <li className="p-1 text-sm font-medium px-4 py-2 cursor-pointer hover:bg-gray-200">
              프로필 편집(준비중)
            </li>
            <li
              className="p-1 text-sm font-medium px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => signOut()}
            >
              로그아웃
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
