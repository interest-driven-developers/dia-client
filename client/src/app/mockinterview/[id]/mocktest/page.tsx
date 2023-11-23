"use client";
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import RecordingResults from "./components/RecordingResults";
import InterViewGuidance from "./components/InterviewGuidance";

const dummmyData = {
  id: 1,
  title: "Solid 원칙에 대해 설명해보세요",
  description:
    "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
};
export default function Main() {
  const [isView, setIsView] = useState<number>(0);
  const [results, setResults] = useState<string>("");

  const ViewComponent = () => {
    switch (isView) {
      case 0:
        return (
          <InterViewGuidance
            handleView={handleView}
            handleResults={handleResults}
          ></InterViewGuidance>
        );

      case 1:
        return (
          <RecordingResults
            description={dummmyData.description}
            transcripts={results}
            handleRestartRecording={() => setIsView(0)}
          ></RecordingResults>
        );
      default:
        return (
          <InterViewGuidance
            handleView={handleView}
            handleResults={handleResults}
          ></InterViewGuidance>
        );
    }
  };
  const handleView = (view: number) => {
    setIsView(view);
  };
  const handleResults = (results: string) => {
    console.log(results);
    setResults(results);
  };
  return (
    <main className="h-screen max-w-3xl mx-auto flex flex-col justify-center items-center">
      <ViewComponent></ViewComponent>
    </main>
  );
}
