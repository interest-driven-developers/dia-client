"use client";
import React, { useState, useEffect, use } from "react";
import RecordingResults from "../RecordingResults";
import InterViewGuidance from "../InterviewGuidance";
import { VoiceType } from "@/types/Voice";

interface MockTestProps {
  pk: number;
  voices: VoiceType[];
}
export default function MockTest({ pk, voices }: MockTestProps) {
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
