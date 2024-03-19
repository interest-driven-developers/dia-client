"use client";
import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Pagination from "./components/Pagination";
import Tag from "./components/Tag";
import CategoryButton from "./components/CategoryButton";
import type { Question as QuestionType } from "@/types/Question";
import { getTags } from "@/utils/getTags";
import { getQuestionList } from "@/app/api/getQuestionList";
import { useSession } from "next-auth/react";
import Link from "next/link";
interface Props {
  practiceList: any[];
  query: string;
  practiceClick: (id: number) => void;
}
export default function PracticeList({
  practiceList,
  query,
  practiceClick,
}: Props) {
  const tags = getTags();
  const { data: session, status } = useSession();
  const [currentTag, setCurrentTag] = useState(query);
  return (
    <section className="grid gap-3">
      {practiceList.map((question: QuestionType, index: number) => (
        <Link
          href={`/practice/problem/${question.pkValue}`}
          key={question.pkValue}
        >
          <Question
            key={question.pkValue}
            id={question.pkValue}
            title={question.korTitleValue}
            onClick={() => practiceClick(question.pkValue)}
            // description={qusetion.description || ""}
            // tags={qusetion.tags}
          />
        </Link>
      ))}
      {/* <Pagination contentNum={questionList.length}></Pagination> */}
    </section>
  );
}
