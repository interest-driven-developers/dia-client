"use client";
import React, { useState, useEffect, use } from "react";
import RecordingResults from "../RecordingResults";
import { VoiceType } from "@/app/types/Voice";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { RouteKind } from "next/dist/server/future/route-kind";
const InterViewGuidance = dynamic(() => import("../InterviewGuidance"), {
  ssr: false,
});

interface MockTestProps {
  pk: number;
  voices: VoiceType[];
}
export default function MockTest({ pk, voices }: MockTestProps) {
  const router = useRouter();
  const [isView, setIsView] = useState<number>(0);
  const [results, setResults] = useState<string>("");
  const ViewComponent = () => {
    switch (isView) {
      case 0:
        return (
          <InterViewGuidance
            handleView={handleView}
            handleResults={handleResults}
            voices={voices}
          ></InterViewGuidance>
          // <RecordingResults
          //   id={pk}
          //   transcripts={results}
          //   handleRestartRecording={() => setIsView(0)}
          // ></RecordingResults>
        );

      case 1:
        return (
          <RecordingResults
            id={pk}
            transcripts={results}
            handleRestartRecording={() => setIsView(0)}
          ></RecordingResults>
        );
      default:
        return (
          <InterViewGuidance
            handleView={handleView}
            handleResults={handleResults}
            voices={voices}
          ></InterViewGuidance>
        );
    }
  };
  const handleView = (view: number) => {
    setIsView(view);
  };
  const handleResults = async (results: string) => {
    await handleSaveHistory(pk, results);
    router.push(`/result/${pk}`);
  };

  const handleSaveHistory = async (problemId: number, results: string) => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedData = localStorage.getItem(`history=${pk}`);

    // 데이터가 없을 경우 빈 객체로 초기화
    const history = storedData ? JSON.parse(storedData) : {};

    // 해당 문제에 대한 히스토리 배열 가져오기 또는 없으면 빈 배열 생성
    const problemHistory = history[problemId] || [];

    // 새로운 히스토리 항목 생성
    const newHistoryItem = { pk, results };

    // 히스토리 배열에 새로운 항목 추가
    problemHistory.push(newHistoryItem);

    // 해당 문제의 히스토리 업데이트
    history[problemId] = problemHistory;

    // 로컬 스토리지에 업데이트된 히스토리를 저장
    localStorage.setItem(`history=${pk}`, JSON.stringify(history));
  };

  return (
    <>
      <ViewComponent />
    </>
  );
}
