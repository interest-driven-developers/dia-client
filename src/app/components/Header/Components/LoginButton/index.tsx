"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div className="mt-4">
      <a
        onClick={() => signIn()}
        className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        로그인
      </a>
    </div>
  );
}
