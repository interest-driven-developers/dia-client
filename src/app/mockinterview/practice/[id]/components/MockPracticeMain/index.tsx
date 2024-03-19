"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const MockPracticeSession = dynamic(() => import("../MockPracticeSession"), {
  ssr: false,
});
import GuidanceSession from "../GuidanceSession";
import MockPracticeHeader from "../MockPracticeHeader";
import ResultSession from "../ResultSession";
import type { PracticeResult } from "@/types/PracticeResult";
import type { Question } from "@/types/Question";

interface Props {
  questionList: Question[];
}
export default function MockPracticeMain({ questionList }: Props) {
  const [isView, setIsView] = useState<number | null>(0); // 0: 안내 페이지, 1: 실전연습 중인 페이지 2: 결과 페이지
  const [resultList, setResultList] = useState<PracticeResult[]>([]);
  const ViewPage = () => {
    switch (isView) {
      case 0:
        return <GuidanceSession setIsView={setIsView} theme="multi" />;
      case 1:
        return (
          <MockPracticeSession
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
    <main className="flex flex-col pt-20 pb-8 h-[100dvh] overflow-y-auto no-scrollbar w-full mx-auto sm:w-1/4 sm:h-[1000px]">
      {/* <MockPracticeHeader isView={isView} /> */}
      <ViewPage />
      {/* <MockPracticeSession
        questionList={questionList}
        setIsView={setIsView}
        setResultList={setResultList}
      /> */}
    </main>
  );
}
