"use client";
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

const dummmyData = {
  id: 1,
  title: "Solid 원칙에 대해 설명해보세요",
  description:
    "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
};
export default function Main() {
  const [results, setResults] = useState<ResultType[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const {
    error,
    interimResult,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <main className="h-screen max-w-3xl mx-auto flex flex-col justify-center items-center">
      {/* <div className="mb-6">
        <Image
          src="/images/interviewer.jpeg"
          alt="면접관 이미지"
          width={600}
          height={500}
          className="rounded-md"
        />
      </div> */}

      {/* 안내문 */}
      {/* <p className="text-lg text-center mb-8 text-gray-500">
        버튼을 클릭하면 면접이 시작됩니다. <br />
        차분한 마음으로 대기해주시고, <br />
        {`"삐"`} 소리가 나오면 질문에 대한 답변을 시작해주세요.
      </p> */}

      {/* <div>
        <button
          className={`mt-3 w-full ${
            !isRecording
              ? "bg-red-500 hover:bg-red-700"
              : "bg-indigo-500 hover:bg-indigo-700"
          } text-white py-2 px-4 rounded-xl shadow-md focus:outline-none`}
          onClick={isRecording ? stopSpeechToText : startSpeechToText}
        >
          {!isRecording ? "녹음 종료 ✋" : "녹음 시작 🗣️"}
        </button>

        <div
          className={`flex justify-center mt-2${!isRecording ? "" : "hidden"}`}
        >
          <MicrophoneIcon
            className={"w-7 h-7 text-red-500 animate-flash"}
          ></MicrophoneIcon>
        </div>
        <ul>
          {results.map((result) => (
            <li key={result.timestamp}>{result.transcript}</li>
          ))}
          {interimResult && <li>{interimResult}</li>}
        </ul>
      </div> */}

      {/* 녹음 결과 섹션 */}
      <div className="w-full">
        <div className="grid grid-cols-4 p-4 gap-2">
          {/* 왼쪽 컬럼 */}
          <div className="col-span-2">
            <h2 className="text-xl font-sans mb-4">기존 스크립트</h2>
            <div className="p-4 h-64 overflow-y-auto w-full bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500">
              {/* 기존 스크립트 표시 */}
              <p>{dummmyData.description}</p>
            </div>
          </div>
          {/* 오른쪽 컬럼 */}
          <div className="col-span-2">
            <h2 className="text-xl font-sans mb-4">음성 인식 결과</h2>
            <p className="text-xs text-gray-500 -mt-4">
              * 음성인식의 정확도는 100%가 아닌점 참고해주세요{" "}
            </p>
            <div className="p-4 h-64 overflow-y-auto w-full bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500">
              {/* 음성 인식된 텍스트 표시 */}
              {/* <p>{transcript}</p> */}
            </div>
          </div>
        </div>
        {/* 하단 버튼 영역 */}
        <div className="mt-4 flex justify-end gap-2 mr-4">
          <button
            // onClick={handleRestartRecording}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          >
            다시 녹음 🗣️
          </button>
          <button
            // onClick={handleSaveScript}
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          >
            결과 저장 💾
          </button>
        </div>
      </div>
    </main>
  );
}
