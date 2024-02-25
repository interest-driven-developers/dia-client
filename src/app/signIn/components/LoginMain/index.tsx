"use client";
import React, { useEffect, useState } from "react";
import {
  signIn,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import GithubIcon from "@/app/ui/icons/GithubIcon";
import Logo from "@/app/ui/Logo";
import { useRouter } from "next/navigation";

interface LoginProps {
  providers?: Record<string, ClientSafeProvider>;
  prevPath: string;
}

export default function LoginMain({prevPath}:LoginProps) {
  const [providers, setProviders] = useState<ClientSafeProvider | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res as any);
    })();
  }, []);
  return (
    <main className="flex h-screen w-full bg-gradient-to-r from-purple-300 via-pink-200 to-red-200  justify-center items-center no-scrollbar overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-center items-center px-10 py-24 rounded-lg gap-4">
        <div className="flex flex-col justify-center items-center m-20">
          {/* <h1 className="text-xl custom-color sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            DIA
          </h1> */}
          <Logo className="w-[150px]" />
          <p className="text-base text-[#616161] sm:text-lg text-center mb-2 sm:mb-4 whitespace-nowrap">
            Developer Interview Assistant
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs text-[#616161] sm:text-md mb-2 sm:mb-4">
            자체적인 회원가입은 정책상 지원하지 않습니다 🛠️
          </p>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <div key={provider.name}>
                <button
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: prevPath,
                    })
                  }
                  className="bg-[#333] text-white flex items-center justify-center gap-2 px-4 sm:px-8 py-1 sm:py-2 rounded hover:opacity-90"
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
