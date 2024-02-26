"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import type { Question } from "@/types/Question";
import GuidanceSession from "@/app/mockinterview/practice/[id]/components/GuidanceSession";
// import PraceticeSession from "../PracticeSession";
import { Modal } from "@/app/components/Modal";
import dynamic from "next/dynamic";
const PraceticeSession = dynamic(() => import("../PracticeSession"), {
  ssr: false,
});
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
        return <PraceticeSession question={question} setIsView={setIsView} />;
      default:
        return <GuidanceSession setIsView={setIsView} />;
    }
  };
  return (
    <>
      <div className="flex px-4 items-center mb-[40px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6 text-[#212121] cursor-pointer rounded-md hover:opacity-50" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
          개별 모의연습
        </h1>
      </div>
      {/* <ViewPage></ViewPage> */}
      <PraceticeSession question={question} setIsView={setIsView} />
    </>
  );
}
