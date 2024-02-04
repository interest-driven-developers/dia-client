"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div className="mt-4">
      <a
        onClick={() => signIn()}
        className="text-slate-700 hover:text-primary px-3 py-5 rounded-md text-sm font-semibold cursor-pointer"
      >
        로그인
      </a>
    </div>
  );
}
