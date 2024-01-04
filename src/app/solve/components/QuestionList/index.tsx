"use client";
import React, { useState, useEffect } from "react";
// import { Question } from "@/types/Question";
import ScriptContent from "./components/Question";
import Spinner from "@/app/components/Spinner";
import CountUp from "react-countup";
import SearchBar from "./components/SearchBar";
import Tag from "./components/Question/components/Tag";
import Question from "./components/Question";
import Pagination from "./components/Pagination";
interface QuestionListProps {
  questionList: any;
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
    <main className="container flex flex-col gap-4 mx-auto px-4 md:px-6 py-8">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold text-slate-700">
          총
          <span className="custom-color ">
            {' "'}
            {
              <CountUp
                start={0}
                end={questionList.length}
                duration={5}
              ></CountUp>
            }
            {'" '}
          </span>
          개의 문제가 있습니다.
        </h1>
      </div>
      <SearchBar></SearchBar>

      <section className="grid gap-8">
        {questionList.map((qusetion: any, index: number) => (
          <Question
            key={index}
            id={qusetion.pk}
            title={qusetion.title}
            description={qusetion.description || ""}
            // tags={qusetion.tags}
          />
        ))}
      </section>
      <Pagination contentNum={questionList.length}></Pagination>
    </main>
  );
}
