"use client";
import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Pagination from "./components/Pagination";
import Tag from "./components/Tag";
import CategoryButton from "./components/CategoryButton";
import type { Question as QuestionType } from "@/app/types/Question";
import { getTags } from "@/app/utils/getTags";
import { getQuestionList } from "@/app/api/getQuestionList";
interface QuestionListProps {
  questionList: QuestionType[];
  query: string;
}
export default function QuestionList({ questionList,query }: QuestionListProps) {
  const tags = getTags();
  const [currentTag, setCurrentTag] = useState(query);
  console.log(questionList);
  // const [currentQuestionList, setCurrentQuestionList] =
  //   useState<QuestionType[]>(questionList);

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await getQuestionList(currentTag);
  //     console.log("새로 가져오기", result);
  //     setCurrentQuestionList(result);
  //   }
  //   fetchData();
  // }, [currentTag, questionList]);
  // console.log(currentTag);
  return (
    <div>
      <div className="flex flex-row w-full mb-2.5">
        <CategoryButton selected={true}>개별연습</CategoryButton>
        <CategoryButton>실전연습</CategoryButton>
      </div>
      <div className="flex flex-row gap-2 overflow-x-auto w-full mb-9">
        {tags.map((tag, index) => (
          <Tag key={index} selected={currentTag}>
            {tag.name}
          </Tag>
        ))}
      </div>
      <section className="grid gap-3">
        {questionList.map((qusetion: QuestionType, index: number) => (
          <Question
            key={qusetion.pkValue}
            id={qusetion.pkValue}
            title={qusetion.korTitleValue}
            // description={qusetion.description || ""}
            // tags={qusetion.tags}
          />
        ))}
        {/* <Pagination contentNum={questionList.length}></Pagination> */}
      </section>
    </div>
  );
}
