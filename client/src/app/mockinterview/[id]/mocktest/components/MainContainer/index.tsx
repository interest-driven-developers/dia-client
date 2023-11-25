"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import RecordingResults from "../RecordingResults";
import InterViewGuidance from "../InterviewGuidance";
import { Question } from "@/types/Question";
import { VoiceType } from "@/types/Voice";
interface MainContainerProps {
  question: Question;
  voices: VoiceType[];
}
export default function MainContainer({
  question,
  voices,
}: MainContainerProps) {
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
        );

      case 1:
        return (
          <RecordingResults
            description={"dd"}
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
  const handleResults = (results: string) => {
    setResults(results);
  };

  return (
    <>
      <ViewComponent />
    </>
  );
}
