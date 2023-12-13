"use client";
import React, { useState, useEffect } from "react";
import { Question } from "@/types/Question";
import ScriptContent from "../ScriptContent";
import Spinner from "@/app/components/Spinner";
interface QuestionListProps {
  questionList: Question[];
}
export default function QuestionList({ questionList }: QuestionListProps) {
  // const handleScriptInputChange = (event: any) => {
  //   setScriptText(event.target.value);
  // };
  // const handleSaveScript = () => {
  //   // 스크립트 저장
  //   // 스크립트 모달 닫기
  //   // 스크립트 리스트 업데이트
  // };
  // const closeScriptModal = () => {
  //   // 스크립트 모달 닫기
  // };
  return (
    <>
      <h1 className="text-2xl font-sans font-semibold mt-3">
        총 {questionList.length}개의 문제가 있습니다.
      </h1>
      <p className="-mt-2 font-sans text-gray-500 text-xs">
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
          {!questionList && (
            <div className="w-full h-12 flex justify-center justify-items-center mt-2 r-8">
              <Spinner />
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
