"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Script } from "@/types/Script";
import ScriptContent from "./components/ScriptContent";

export default function Home() {
  const [isScriptVisible, setScriptVisible] = useState(false);
  const [scriptText, setScriptText] = useState("");
  // const [scriptList, setScriptList] = useState<Script[]>([]); // [{id: 1, title: "스크립트 제목",description: "스크립트 내용"}
  const scriptList = [
    { id: 1, title: "스크립트 제목", description: "스크립트 내용" },
    { id: 2, title: "스크립트 제목", description: "스크립트 내용" },
  ];

  const toggleScriptVisibility = () => {
    setScriptVisible(!isScriptVisible);
  };

  const handleScriptInputChange = (event) => {
    setScriptText(event.target.value);
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-y-7 max-w-3xl mx-auto">
      {/* 리스트 처리된 문제(스크립트)들이 나열되어있고, 스크립트 수정 기능까지 추가해야함 */}
      {/*1. 로그인이 되어있지 않다면   */}
      <div className="h-screen flex flex-col items-center justify-center">
        {/* 스크립트 작성 버튼 */}
        <button
          className="fixed bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-indigo-700 focus:outline-none"
          onClick={toggleScriptVisibility}
        >
          {isScriptVisible ? "닫기" : "작성"}
        </button>

        {/* 스크립트 표시 */}
        {isScriptVisible && (
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">스크립트</h1>
            <textarea
              className="w-full h-48 p-2 border rounded-md resize-none"
              placeholder="스크립트를 작성하세요."
              value={scriptText}
              onChange={handleScriptInputChange}
            ></textarea>
          </div>
        )}
        {/* 스크립트 리스트 */}
        <div className="max-w-xl w-full">
          <ul className="bg-white rounded-md shadow-md">
            {scriptList.map((script, index) => (
              <li
                key={index}
                className={`border-b last:border-b-0 p-4 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >

              </li>
            ))}
          </ul>
        </div>
        <ScriptContent></ScriptContent>
      </div>
    </main>
  );
}
