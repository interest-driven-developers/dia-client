"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Question } from "@/types/Question";
import ScriptContent from "./components/ScriptContent";
import ScriptModal from "./components/ScriptModal";
import Spinner from "../components/Spinner";
//
export default function Home() {
  const [isScriptVisible, setScriptVisible] = useState(false);
  const [scriptText, setScriptText] = useState("");
  const [questionList, setQuestionList] = useState<Question[]>([]); // [{pk: 1, title: "스크립트 제목",description: "스크립트 내용"}
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    // TODO : 로그인시 세션 저장
    // let session = null;
    // TODO 로그인시 이전 로컬 스토리지 데이터 불러오기
    getQuestionList();
  }, []);

  const getQuestionList = async () => {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/questions`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setQuestionList(data.content);
    }
    setIsLoading(false);
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
      <h1 className="text-3xl font-sans mt-3">
        총 {questionList.length}개의 문제가 있습니다.
      </h1>
      <p className="-mt-2 font-sans text-gray-500 text-sm">
        문제에 해당하는 스크립트를 작성 및 수정해보세요!
      </p>
      {/* 리스트 처리된 문제(스크립트)들이 나열되어있고, 스크립트 수정 기능까지 추가해야함 */}
      {/*1. 로그인이 되어있지 않다면   */}
      {/* 스크립트 작성 버튼 */}
      {/* <button
        className="fixed bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-indigo-700 focus:outline-none"
        onClick={toggleScriptVisibility}
      >
        {isScriptVisible ? "닫기" : "작성"}
      </button> */}
      {/* 스크립트 모달 */}
      {/* {isScriptVisible && (
        <ScriptModal
          handleSaveScript={handleSaveScript}
          closeScriptModal={toggleScriptVisibility}
        />
      )} */}
      {/* 스크립트 리스트 */}
      <div className="w-full">
        <ul className="grid w-full mt-2 bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500 ">
          {questionList.map((qusetion, index) => (
            <ScriptContent
              key={index}
              id={qusetion.pk}
              title={qusetion.title}
              description={qusetion.description || ""}
            />
          ))}
          {isLoading && (
            <div className="w-full h-12 flex justify-center justify-items-center mt-2 r-8">
              <Spinner />
            </div>
          )}
        </ul>
      </div>
    </main>
  );
}
