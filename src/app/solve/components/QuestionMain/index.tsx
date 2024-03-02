"use client";
import React, { useState, useEffect } from "react";
// import Question from "./components/Question";
import Pagination from "./components/Pagination";
import Tag from "./components/Tag";
import CategoryButton from "./components/CategoryButton";
import type { Question as QuestionType } from "@/types/Question";
import { getTags } from "@/utils/getTags";
import { getQuestionList } from "@/app/api/getQuestionList";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ToolTips } from "../ToolTips";
import Question from "@/app/components/Question";
import { Session } from "@/types/Session";
interface Props {
  questionList: QuestionType[];
  query: string;
}
export default function QuestionMain({ questionList, query }: Props) {
  const tags = getTags();
  const { data: session, status } = useSession();
  const typedSession = session as Session;
  const [currentTag, setCurrentTag] = useState(query);
  const [firstCheck, setFirstCheck] = useState<boolean>(false);

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
    <main className="flex flex-col mx-auto w-full px-5 sm:px-6 py-16 sm:w-1/2 no-scrollbar relative">
      <div className="sticky top-16 bg-white z-10">
        <div className="flex flex-row w-full mb-3 border-b-[1px] border-[#F5F5F5]">
          <Link href={`/solve/${currentTag}`} className="flex-1">
            <CategoryButton selected={true}>개별연습</CategoryButton>
          </Link>
          <Link href={`/practice/${currentTag}`} className="flex-1">
            <CategoryButton>실전연습</CategoryButton>
          </Link>
        </div>
        <div className="flex flex-row gap-1.5 overflow-x-auto w-full mb-3 no-scrollbar">
          {tags.map((tag, index) => (
            <Tag key={index} selected={currentTag}>
              {tag.name}
            </Tag>
          ))}
        </div>
      </div>
      <section className="grid gap-3 mb-3">
        {questionList.map((qusetion: QuestionType, index: number) => (
          <Question
            question={qusetion}
            key={index}
            isDetail={true}
            session={typedSession}
          />
        ))}
      </section>
      {/* tooltip */}
      {firstCheck && !session && (
        <ToolTips onClick={() => setFirstCheck(false)} />
      )}
    </main>
  );
}
