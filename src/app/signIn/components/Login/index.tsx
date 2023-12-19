"use client";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";
interface LoginProps {
  providers: any;
}

function Login({ providers }: LoginProps) {
  return (
    <main className="flex h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-red-200  justify-center items-center p-12 sm:p-4 md:p-8">
      <div className="bg-white flex flex-col sm:flex-row justify-center items-center p-10 rounded-lg sm:p-12 gap-4 sm:gap-12">
        <div className="flex flex-col justify-center items-center m-20">
          <h1 className="text-xl custom-color sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            DIA
          </h1>
          <p className="text-base text-gray-500  sm:text-lg text-center mb-2 sm:mb-4">
            Developer Interview Assistant
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
            Login
          </h2>
          <p className="text-base text-gray-500 sm:text-lg mb-2 sm:mb-4">
            자체적인 회원가입은 정책상 아직 지원하지 않습니다 🛠️
          </p>
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  signIn(provider.id, { callbackUrl: "http://localhost:3000" })
                }
                className="bg-[#333] text-white flex items-center justify-center gap-2 px-4 sm:px-8 py-1 sm:py-2 rounded"
              >
                {/* 아이콘과 로그인 버튼 텍스트 */}
                {provider.name === "GitHub" && (
                  <>
                    <GithubIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    Login with GitHub
                  </>
                )}
                {/* {provider.name === "Google" && (
                  <>
                    <GoogleIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    Login with Google
                  </>
                )} */}
                {/* 추가적인 소셜 로그인 프로바이더들도 위와 같이 추가 */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Login;

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
