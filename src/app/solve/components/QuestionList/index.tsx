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
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold  text-slate-700">
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
        <Pagination contentNum={questionList.length}></Pagination>
      </section>
    </>
  );
}
