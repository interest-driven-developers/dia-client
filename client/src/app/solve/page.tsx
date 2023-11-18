"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Script } from "@/types/Script";
import ScriptContent from "./components/ScriptContent";
import ScriptModal from "./components/ScriptModal";

export default function Home() {
  const [isScriptVisible, setScriptVisible] = useState(false);
  const [scriptText, setScriptText] = useState("");
  // const [scriptList, setScriptList] = useState<Script[]>([]); // [{id: 1, title: "스크립트 제목",description: "스크립트 내용"}
  const scriptList = [
    {
      id: 1,
      title: "Solid 원칙에 대해 설명해보세요",
      description:
        "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
    },
    {
      id: 2,
      title: "프로세스와 스레드의 차이에 대해 설명해 보세요.",
      description:
        "프로세스는 자원을 할당받는 작업의 단위이며, 스레드는 프로세스가 할당받은 자원을 이용하는 실행의 단위. 스레드는 자원을 공유한다는 점이 차이점이 있습니다.",
    },
    {
      id: 3,
      title: "Solid 원칙에 대해 설명해보세요",
      description:
        "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
    },
    {
      id: 4,
      title: "프로세스와 스레드의 차이에 대해 설명해 보세요.",
      description:
        "프로세스는 자원을 할당받는 작업의 단위이며, 스레드는 프로세스가 할당받은 자원을 이용하는 실행의 단위. 스레드는 자원을 공유한다는 점이 차이점이 있습니다.",
    },
  ];

  const toggleScriptVisibility = () => {
    setScriptVisible(!isScriptVisible);
  };

  const handleScriptInputChange = (event: any) => {
    setScriptText(event.target.value);
  };
  const handleSaveScript = () => {
    // 스크립트 저장
    // 스크립트 모달 닫기
    // 스크립트 리스트 업데이트
  };
  const closeScriptModal = () => {
    // 스크립트 모달 닫기
  };
  return (
    <main className="h-screen flex flex-col gap-2  max-w-3xl mx-auto">
      <h1 className="text-3xl font-sans mt-3">스크립트 리스트</h1>
      <p className="text-gray-500 text-sm">스크립트를 작성 및 수정해보세요!</p>
      {/* 리스트 처리된 문제(스크립트)들이 나열되어있고, 스크립트 수정 기능까지 추가해야함 */}
      {/*1. 로그인이 되어있지 않다면   */}
      {/* 스크립트 작성 버튼 */}
      <button
        className="fixed bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-indigo-700 focus:outline-none"
        onClick={toggleScriptVisibility}
      >
        {isScriptVisible ? "닫기" : "작성"}
      </button>
      {/* 스크립트 모달 */}
      {isScriptVisible && (
        <ScriptModal
          handleSaveScript={handleSaveScript}
          closeScriptModal={toggleScriptVisibility}
        />
      )}
      {/* 스크립트 리스트 */}
      <div className="w-full">
        <ul className="grid gap-5 rounded-md shadow-md ">
          {scriptList.map((script, index) => (
            <ScriptContent
              key={index}
              title={script.title}
              description={script.description}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
