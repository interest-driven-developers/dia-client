"use client";
import React, { useEffect, useState } from "react";
import ResultSession from "@/app/result/[id]/components/ResultSession";
import { Question } from "@/app/components/Question";
import { Question as QuestionType } from "@/types/Question";
import { HistoryType } from "@/types/History";
import { useSession } from "next-auth/react";
import type { Session } from "@/types/Session";
import ScriptSection from "@/app/components/ScriptSection";
import HistorySection from "@/app/components/HistorySection";
import { getQuestionHistory } from "@/app/api/getQuestionHistory";
type Props = {
  question: QuestionType;
  history: HistoryType;
};

export default function HistoryResult({ question, history }: Props) {
  const { data: session } = useSession();
  const typedSession = session as Session;
  return (
    <section className="flex flex-col gap-3 h-full px-4">
      {question && (
        <>
          <Question question={question}>
            <Question.SubTitle className="text-primary-600">개별연습</Question.SubTitle>
            <Question.Title>{question.korTitleValue}</Question.Title>
          </Question>
          <ScriptSection
            id={question.pkValue}
            className="flex-grow-3 h-[150px] sm:h-[200px]"
          ></ScriptSection>
        </>
      )}
      {history && (
        <HistorySection
          id={history.pkValue}
          history={history as HistoryType}
          className="flex-grow h-0"
          session={typedSession}
        ></HistorySection>
      )}
    </section>
  );
}
