"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import type { Question } from "@/types/Question";
import GuidanceSession from "@/app/mockinterview/practice/[id]/components/GuidanceSession";
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

  const handleBack = () => {
    if (isView === 1) {
      setIsView(0);
    } else {
      router.back();
    }
  };
  return (
    <>
      <ViewPage></ViewPage>
      {/* <PraceticeSession question={question} setIsView={setIsView} /> */}
    </>
  );
}
