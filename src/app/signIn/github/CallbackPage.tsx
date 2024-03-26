"use client";
import { getAccesstoken } from "@/app/api/getAccesstoken";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
const CallBackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      const code = searchParams.get("code");
      console.log(code);
      if (code) {
        try {
          const resp = await getAccesstoken(code);
          console.log({ resp });
          const access_token = resp.accessTokenValue;
          localStorage.setItem("access_token", access_token);

          router.push("/");
        } catch (err) {}
      }
    })();
  }, [router]);

  return <div>Loading...</div>;
};

export default CallBackPage;
