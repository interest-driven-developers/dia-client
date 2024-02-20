"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import type { Question } from "@/types/Question";
import GuidanceSession from "@/app/mockinterview/practice/[id]/components/GuidanceSession";
import PraceticeSession from "../PracticeSession";
import { Modal } from "@/app/components/Modal";
interface Props {
  question: Question;
}
export default function PracticeMain({ question }: Props) {
  const router = useRouter();
  const [isView, setIsView] = useState<number | null>(null); // 0: 히스토리 보기, 1: 스크립트 보기

  const ViewPage = () => {
    switch (isView) {
      case 0:
        return <GuidanceSession setIsView={setIsView} />;
      case 1:
        return (
          <PraceticeSession question={question} setIsView={setIsView} />
        );
      default:
        return <GuidanceSession setIsView={setIsView} />;
    }
  };
  return (
    <div>
      <div className="flex items-center mb-[47px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6 text-[#212121] cursor-pointer rounded-md hover:opacity-50" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
          실전연습
        </h1>
      </div>
      <ViewPage></ViewPage>

    </div>
  );
}
