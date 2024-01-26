"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import TTSPlayer from "../TTSPlayer";
import { VoiceType } from "@/app/types/Voice";
interface InterViewGuidanceProps {
  handleView: (view: number) => void;
  handleResults: (results: string) => void;
  voices: VoiceType[];
}

export default function InterViewGuidance({
  handleView,
  handleResults,
  voices,
}: InterViewGuidanceProps) {
  //   const [results, setResults] = useState<ResultType[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const {
    error,
    interimResult,
    setResults,
    results,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  const handleStart = () => {
    setIsStart(!isStart);
  };
  const handleStop = () => {
    setTimeout(() => {
      stopSpeechToText();
      handleView(1);
      handleResults(interimResult!);
    }, 1000);
  };
  return (
    <div className="mt-5 ">
      <div className="flex mt-5 mb-6 justify-center justify-items-center justify-self-center">
        <Image
          src="/images/interviewer.jpeg"
          alt="면접관 이미지"
          width={600}
          height={500}
          className="rounded-md h-auto w-full"
          priority={true}
        />
      </div>

      {/* 안내문 */}
      <div className="w-full leading-1.5 p-4 bg-indigo-500  rounded-e-xl rounded-es-xl">
        <div className="whitespace-pre-wrap ">
          <p className="text-sm sm:text-lg text-center font-bold text-gray-500 dark:text-slate-100">
            버튼을 클릭하면 면접이 시작됩니다. <br />
            차분한 마음으로 대기해주시고, 면접관의 질문이 나온 후<br />
            <span className="text-red-500">{`"삐"`}</span> 소리가 나오면 질문에
            대한 답변을 시작해주세요.
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={isStart ? handleStop : handleStart}
          className={`fixed z-50 bottom-4 m-2 p-2 left-0 right-0 w-11/12 sm:w-1/2 mx-auto text-white font-bold py-2 px-4 rounded-lg shadow-md  focus:outline-none ${
            isStart
              ? "bg-red-500 hover:bg-red-700"
              : "bg-indigo-500 hover:bg-indigo-700"
          }`}
        >
          {isStart ? "끝내기 ✋" : "시작하기 🗣️"}
        </button>
        <div className={`flex justify-center mt-2 ${!isStart && "hidden"}`}>
          <MicrophoneIcon
            className={"w-7 h-7 text-red-500 animate-flash"}
          ></MicrophoneIcon>
        </div>
        <ul>
          {/* {results.map((result) => (
            <li key={result.timestamp}>{result.transcript}</li>
          ))}
          {interimResult && <li>{interimResult}</li>} */}
        </ul>
        {/* {isDone && <div>{interimResult && <li>{interimResult}</li>}</div>} */}
        <TTSPlayer
          isRecording={isStart}
          voices={voices}
          startSpeechToText={startSpeechToText}
        ></TTSPlayer>
      </div>
    </div>
  );
}
