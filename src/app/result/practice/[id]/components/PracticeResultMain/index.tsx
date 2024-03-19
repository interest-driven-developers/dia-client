"use client";
import React, { useState, useEffect } from "react";
import SelectButtons from "../SelectButtons";
import HistorySession from "../HistorySession";
import { useSession } from "next-auth/react";
import { getQuestionHistory } from "@/app/api/getQuestionHistory";
import type { HistoryType } from "@/types/History";
import type { Session } from "@/types/Session";
import type { Question as QuestionType } from "@/types/Question";
import ResultSession from "../ResultSession";
import NumberButton from "../NumberButton";
import { Question } from "@/app/components/Question";
import ScriptSection from "@/app/components/ScriptSection";
import HistorySection from "@/app/components/HistorySection";
import Header from "@/app/mockinterview/[id]/components/Header";
import { useRouter } from "next/navigation";

interface Props {
  pkValue: number;
  questionList: QuestionType[];
}

export default function PracticeResultMain({ pkValue, questionList }: Props) {
  const router = useRouter();
  const [questionIdx, setQuestionIdx] = useState(1);
  const [History, setHistory] = useState<HistoryType | null>(null);
  const { data: session, status } = useSession();
  const typedSession = session as Session;

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const getHistory = await getQuestionHistory(
          questionList[questionIdx - 1].pkValue,
          typedSession?.user.access_token
        );
        if (getHistory) setHistory(getHistory[0]);
      }
    };

    fetchData();
  }, [questionIdx, session, typedSession?.user.access_token]); // 의존성 배열 수정
  return (
    <main className="flex flex-col mx-auto pt-20 pb-8 h-[100dvh] max-w-[500px] max-h-[1000px] overflow-y-hidden bg-white no-scrollbar">
      <Header
        title="답변확인"
        className="mb-5"
        handleBack={() => router.push(`/mockinterview/practice/${pkValue}`)}
      />
      <section className="flex flex-col px-5">
        <div className="flex gap-[6px] flex-row w-full overflow-x-auto no-scrollbar mb-4">
          {questionList.map((question, index) => (
            <NumberButton
              key={question.pkValue}
              isSelected={questionIdx === index + 1}
              onClick={() => setQuestionIdx(index + 1)} // 숫자 버튼 클릭 시 questionIdx 변경
            >
              {index + 1}
            </NumberButton>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Question
            question={questionList[questionIdx - 1]}
            isBookmarkOn={session ? true : false}
          >
            <Question.SubTitle className="text-[#FDDA23]">
              Question
            </Question.SubTitle>
            <Question.Title>
              {questionList[questionIdx - 1].korTitleValue}
            </Question.Title>
          </Question>
          <ScriptSection
            id={questionList[questionIdx - 1].pkValue}
            className="h-[151px] sm:h-[250px]"
          />
          <HistorySection
            id={pkValue}
            history={History as HistoryType}
            session={typedSession}
            className="h-[369px]"
            theme="multi"
          />
        </div>
      </section>
    </main>
  );
}
