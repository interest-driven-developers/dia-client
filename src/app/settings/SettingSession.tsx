
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import InterviewIntroIcon from "@/app/ui/icons/InterviewIntroIcon";
import Typed from "typed.js";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Header from "@/app/mockinterview/[id]/components/Header";
interface Props {
}

export default function SettingSession({ }: Props) {
  const router = useRouter();

  return (
    <>
      <Header handleBack={() => router.back()} title="설정"  />
          <section className="flex flex-col px-4 w-full h-full">
              <h1 className="text-lg">
                  음량 테스트
              </h1>
      </section>
    </>
  );
}
