"use client";
import { useEffect, useState } from "react";
import ScriptSection from "@/app/components/ScriptSection";
import HistorySection from "@/app/components/HistorySection";
import { Question } from "@/app/components/Question";
import type { HistoryType } from "@/types/History";
import type { Question as QuestionType } from "@/types/Question";
import { useSession } from "next-auth/react";
import type { Session } from "@/types/Session";
type Props = {
  pkValue: number;
  latestHistory: HistoryType;
  question: QuestionType;
};

export default function ResultSession(props: Props) {
  const { pkValue, latestHistory, question } = props;
  const { data: session } = useSession();
  const typedSession = session as Session;

  return (
    <section className="flex flex-col gap-3 h-full px-4">
      <Question question={question}>
        <Question.SubTitle className="text-primary-600">개별연습</Question.SubTitle>
        <Question.Title>{question.korTitleValue}</Question.Title>
      </Question>
      <ScriptSection
        id={pkValue}
        className="flex-grow-3 h-[150px] sm:h-[200px]"
      ></ScriptSection>
      <HistorySection
        id={pkValue}
        history={latestHistory}
        className="flex-grow h-0"
        session={typedSession}
      ></HistorySection>
    </section>
  );
}
