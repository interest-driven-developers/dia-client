"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function Main() {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    // 마이크 녹음 시작 로직을 여기에 추가
    setIsRecording(true);
  };

  const stopRecording = () => {
    // 마이크 녹음 중지 로직을 여기에 추가
    setIsRecording(false);
  };

  return (
    <main className="h-screen max-w-3xl mx-auto flex flex-col justify-center items-center">
      <div className="mb-6">
        <Image
          src="/images/interviewer.jpeg" 
          alt="면접관 이미지"
          width={600}
          height={500}
          className="rounded-md"
        />
      </div>

      {/* 안내문 */}
      <p className="text-lg text-center mb-8 text-gray-500">
        버튼을 클릭하면 면접이 시작됩니다. <br />
        차분한 마음으로 대기해주시고, <br />
        {`"삐"`} 소리가 나오면 질문에 대한 답변을 시작해주세요.
      </p>

      {/* 듣기 버튼 */}
      {!isRecording ? (
        <button
          onClick={startRecording}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          녹음 시작
        </button>
      ) : (
        // 면접 녹음 중일 때 다시 하기 버튼
        <button
          onClick={stopRecording}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
        >
          다시 하기
        </button>
      )}
    </main>
  );
}
