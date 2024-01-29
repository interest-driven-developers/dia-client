"use client";
import React, { useState, useEffect } from "react";
import { ResultType } from "react-hook-speech-to-text";
interface RecordingResultsProps {
  handleRestartRecording: () => void;
  id: number;
  transcripts: string;
}

export default function RecordingResults({
  transcripts,
  id,
  handleRestartRecording,
}: RecordingResultsProps) {
  const [script, setScript] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // 페이지 로딩 시, 로컬 스토리지에서 스크립트 불러오기
  useEffect(() => {
    const savedScript = localStorage.getItem(`script=${id}`);
    if (savedScript) {
      setScript(savedScript);
    }
    setIsLoading(false);
  }, [id]);
  const handleSaveScript = () => {};
  return (
    <div className="flex flex-col gap-y-3 mt-2">
      <h1 className="text-2xl sm:text-3xl font-bold  text-slate-700 dark:text-slate-100">
        결과 🤖
      </h1>
      <div className="flex flex-col gap-y-1 mt-2">
        <h1 className="text-lg sm:text-xl font-semibold  text-indigo-600 dark:text-indigo-600">
          작성한 스크립트
        </h1>
        <div className="w-full leading-1.5 p-4 bg-indigo-200 text-indigo-800 rounded-e-xl rounded-es-xl">
          <div className="whitespace-pre-wrap ">
            <p className="text-base font-bold">{script}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 mt-2">
        <h1 className="text-lg sm:text-xl font-semibold  text-purple-400 ml-auto">
          🗣️
        </h1>
        <div className="w-full leading-1.5 p-4 bg-purple-200 text-purple-800 rounded-s-xl rounded-ee-xl">
          <div className="whitespace-pre-wrap ">
            {transcripts ? (
              <p className="text-base font-bold">{transcripts}</p>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <p className="text-base font-bold text-gray-500">
                  음성이 녹음되지 않았어요.
                </p>
                <p className="text-base font-bold text-gray-500">
                  브라우저 설정에서{" "}
                  <span className="animate-pulse text-indigo-500">
                    마이크 접근을 허용
                  </span>{" "}
                  해주세요 😂
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-1 ml-auto">
          * 기본값은 가장{" "}
          <span className="text-purple-500 font-bold">최근의</span>{" "}
          히스토리입니다.
        </p>
      </div>
      <button
        className="fixed z-50 bottom-16 m-2 p-2 left-0 right-0 w-11/12 sm:w-1/2 mx-auto bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
        onClick={() => handleRestartRecording()}
      >
        다시 도전하기 🚀
      </button>
      <button className="fixed z-50 bottom-4 m-2 p-2 left-0 right-0 w-11/12 sm:w-1/2 mx-auto bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none">
        저장하기 💾(구현 중🛠️)
      </button>
    </div>
  );
}
