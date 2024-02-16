"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import TTSPlayer from "../TTSPlayer";
import { VoiceType } from "@/types/Voice";
import EqualizerIcon from "@/app/ui/icons/EqualizerIcon";
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

  if (error) return <p>Web Speech API is not available in this device 🤷‍</p>;
  const handleStart = () => {
    setIsStart(!isStart);
  };
  const handleStop = () => {
    setTimeout(() => {
      stopSpeechToText();
      handleResults(interimResult!);
    }, 1000);
  };

  return (
    <div className="">
      {isStart ? (
        <div className="animate-pulse flex w-full max-w-screen-xl mx-auto p-0 mt-[220px]  mb-[210px] justify-center items-center">
          <EqualizerIcon></EqualizerIcon>
        </div>
      ) : (
        <>
          <div className="flex px-2 py-7 bg-[#212121] rounded-[10px] justify-center mb-[22px]">
            <div className="whitespace-pre-wrap px-10 sm:px-16">
              <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
                버튼을 클릭하면 면접이 시작됩니다.
                <br />
                차분한 마음으로 대기해주시고 질문이 나온 후{" "}
                <span className="text-red-500">{`"삐"`}</span> 소리가 나오면
                답변을 시작해주세요.
              </p>
            </div>
          </div>
          <div className="flex rounded-[10px] justify-center mb-[46px]">
            <Image
              src="/images/interviewer.png"
              alt="면접관 이미지"
              width={700}
              height={600}
              className="h-auto w-full object-contain"
              priority={true}
            />
          </div>
        </>
      )}

      <div>
        <button
          onClick={isStart ? handleStop : handleStart}
          className={`flex justify-center w-full px-[127px] py-[13px] rounded-[100px]  items-center hover:opacity-90 ${
            isStart ? "bg-[#9E9E9E] " : "bg-primary "
          }`}
        >
          <p className="text-white font-bold text-lg sm:text-xl">
            {isStart ? "답변완료" : "시작하기"}
          </p>
        </button>
        <TTSPlayer
          isRecording={isStart}
          voices={voices}
          startSpeechToText={startSpeechToText}
        ></TTSPlayer>
      </div>
    </div>
  );
}
