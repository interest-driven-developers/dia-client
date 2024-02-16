"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const PraceticeSession = dynamic(
  () => import("../PracticeSession"),
  { ssr: false }
);
import GuidanceSession from "../GuidanceSession";
import MockPracticeHeader from "../MockPracticeHeader";
import ResultSession from "../ResultSession";
import type { PracticeResult } from "@/types/PracticeResult";

interface Props {
  questionList: any;
}
export default function MockPracticeMain({ questionList }: Props) {
  const [isView, setIsView] = useState<number | null>(0); // 0: 안내 페이지, 1: 실전연습 중인 페이지 2: 결과 페이지
  const [resultList, setResultList] = useState<PracticeResult[]>([]);
  console.log(questionList)
  const ViewPage = () => {
    switch (isView) {
      case 0:
        return <GuidanceSession setIsView={setIsView} />;
      case 1:
        return (
          <PraceticeSession
            questionList={questionList}
            setIsView={setIsView}
            setResultList={setResultList}
          />
        );
      case 2:
        return <ResultSession resultList={resultList} />;
      default:
        return <GuidanceSession setIsView={setIsView} />;
    }
  };
  return (
    <main className="flex flex-col mx-auto py-20 h-full sm:w-1/2 overflow-y-auto bg-[#B8A0FA] no-scrollbar">
      <MockPracticeHeader isView={isView} />
      <ViewPage />
    </main>
  );
}
