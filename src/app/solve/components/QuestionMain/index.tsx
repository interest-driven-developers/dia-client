"use client";
import React, { useState, useEffect } from "react";
import CategoryButton from "./components/CategoryButton";
import type { Question as QuestionType } from "@/types/Question";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ToolTips } from "../ToolTips";
import Question from "@/app/components/Question";
import { Session } from "@/types/Session";
import { TagBar } from "./components/TagBar";
interface Props {
  questionsData: QuestionType[];
  query: string;
}
export default function QuestionMain({ questionsData, query }: Props) {
  const { data: session, status } = useSession();
  const typedSession = session as Session;
  const [currentTag, setCurrentTag] = useState(query);
  const [firstCheck, setFirstCheck] = useState<boolean>(false);
  const [questionList, setQuestionList] =
    useState<QuestionType[]>(questionsData);

  useEffect(() => {
    if (!session) {
      handleFirstCheck();
    }
  }, [session]);
  const handleFirstCheck = async () => {
    // 로컬스트리지에서 처음 접속했는지에 대한 정보를 찾아본다
    const firstCheck = localStorage.getItem("firstCheck");
    if (firstCheck === null) {
      // 처음 접속했다면
      localStorage.setItem("firstCheck", "true");
      setFirstCheck(true);
    }
  };
  return (
    <main className="flex flex-col mx-auto w-full px-5 sm:px-6 py-16 sm:w-1/2 max-w-3xl no-scrollbar relative">
      <div className="sticky top-16 bg-white z-10">
        <div className="flex flex-row w-full mb-3 border-b-[1px] border-[#F5F5F5]">
          <Link href={`/solve/${currentTag}`} className="flex-1">
            <CategoryButton selected={true}>개별연습</CategoryButton>
          </Link>
          <Link href={`/practice/${currentTag}`} className="flex-1">
            <CategoryButton>실전연습</CategoryButton>
          </Link>
        </div>
        <TagBar currentTag={currentTag} session={typedSession} setQuestionList={setQuestionList}/>
      </div>
      <section className="grid gap-3 mb-3">
        {questionList.map((question: QuestionType, index: number) => (
          <Link
            href={`/solve/problem/${question.pkValue}`}
            key={question.pkValue}
          >
            <Question
              question={question}
              key={index}
              isDetail={true}
              session={typedSession}
            />
          </Link>
        ))}
      </section>
      {/* tooltip */}
      {firstCheck && !session && (
        <ToolTips onClick={() => setFirstCheck(false)} />
      )}
    </main>
  );
}
