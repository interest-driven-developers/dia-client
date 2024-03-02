"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import type { User } from "@/types/User";
import Link from "next/link";
interface ProfileToolbarProps {
  isOpen: boolean;
  user?: User;
  // loginHandler: () => void;
}
export default function ProfileToolbar({ isOpen, user }: ProfileToolbarProps) {
  return (
    <div className={`flex relative transition-transform transform `}>
      {isOpen && (
        <div className="w-72 divide-y divide-gray-100 absolute top-1 right-2 bg-white border rounded-lg shadow-md ">
          <div className="grid gap-y-2 m-4">
            <h1 className="font-semibold text-sm">내 정보</h1>
            {user ? (
              <>
                <Image
                  className="mt-5 h-10 w-10 rounded-full justify-items-center items-center itmes-self-center"
                  width={30}
                  height={30}
                  src={user.image_url || "/default-user.png"}
                  alt="user Image"
                />
                <p className="font-semibold ">{user.nickname}</p>
              </>
            ) : (
              <p className="font-semibold text-primary-600">
                로그인이 필요합니다.
              </p>
            )}
          </div>

          <ul className="list-none divide-y divide-gray-100">
            <li className="p-1 text-sm font-medium px-4 py-2 cursor-pointer hover:bg-gray-200">
              프로필 편집(준비중)
            </li>
            {user ? (
              <li
                className="p-1 text-sm font-medium px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => signOut()}
              >
                로그아웃
              </li>
            ) : (
              <Link
                href={{
                  pathname: `/signIn`,
                  query: { prevPath: window.document.location.href },
                }}
              >
                <li className="p-1 text-sm font-medium px-4 py-2 cursor-pointer hover:bg-gray-200">
                  로그인
                </li>
              </Link>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
