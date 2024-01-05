import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Intro from "./components/Intro";
export default async function Home() {

  // let session = await getServerSession(authOptions);
  return (
    <main className="flex flex-col justify-center mx-auto items-center w-full gap-10 sm:w-2/3">
      <Intro />
    </main>
  );
}
