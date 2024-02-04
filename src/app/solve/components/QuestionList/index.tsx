"use client";
import React, { useState, useEffect } from "react";
// import { Question } from "@/types/Question";
import ScriptContent from "./components/Question";
import Spinner from "@/app/components/Spinner";
import CountUp from "react-countup";
import SearchBar from "./components/SearchBar";
import Question from "./components/Question";
import Pagination from "./components/Pagination";
import Tag from "./components/Tag";
import CategoryButton from "./components/CategoryButton";
interface QuestionListProps {
  questionList: any;
}
export default function QuestionList({ questionList }: QuestionListProps) {
  const [currentTag, setCurrentTag] = useState("백엔드");
  return (
    <div>
      <div className="flex flex-row w-full mb-2.5">
        <CategoryButton selected={true}>개별연습</CategoryButton>
        <CategoryButton>실전연습</CategoryButton>
      </div>
      <div className="flex flex-row gap-2 overflow-x-auto w-full mb-9">
        <Tag selected={true}>백엔드</Tag>
        <Tag>프론트엔드</Tag>
        <Tag>IOS</Tag>
        <Tag>AOS</Tag>
      </div>
      <section className="grid gap-3">
        {questionList.map((qusetion: any, index: number) => (
          <Question
            key={index}
            id={qusetion.pk}
            title={qusetion.title}
            description={qusetion.description || ""}
            // tags={qusetion.tags}
          />
        ))}
        {/* <Pagination contentNum={questionList.length}></Pagination> */}
      </section>
    </div>
  );
}
