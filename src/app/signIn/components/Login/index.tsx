"use client";
import React, { useEffect, useState } from "react";
import {
  signIn,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import GithubIcon from "@/app/ui/GithubIcon";

interface LoginProps {
  providers: Record<string, ClientSafeProvider>;
}

export default function Login() {
  const [providers, setProviders] = useState<ClientSafeProvider | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      // console.log(res);
      setProviders(res as any);
    })();
  }, []);
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
          {providers &&
            Object.values(providers).map((provider: any) => (
              <div key={provider.name}>
                <button
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: process.env.NEXTAUTH_URL,
                    })
                  }
                  className="bg-[#333] text-white flex items-center justify-center gap-2 px-4 sm:px-8 py-1 sm:py-2 rounded"
                >
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
                </button>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
