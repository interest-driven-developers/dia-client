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
import Header from "@/app/mockinterview/[id]/components/Header";
import CheckOffIcon from "@/app/ui/icons/CheckOffIcon";
import CheckOnIcon from "@/app/ui/icons/CheckOnIcon";
type Props = {
  question: QuestionType;
  historyList: HistoryType[];
};

export default function HistoryResult({ question, historyList }: Props) {
  const { data: session } = useSession();
  const typedSession = session as Session;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <>
      <Header title="답변 히스토리" className="mb-5"></Header>
      <section className="flex flex-col gap-3 h-full px-4">
        {question && (
          <>
            <Question question={question}>
              <Question.SubTitle className="text-primary-600">
                개별연습
              </Question.SubTitle>
              <Question.Title>{question.korTitleValue}</Question.Title>
            </Question>
            <ScriptSection
              id={question.pkValue}
              className={historyList.length > 0 ? "h-2/5" : "h-full"}
              writeScript={false}
            ></ScriptSection>
            <div
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex flex-row pl-4 gap-1 items-center -mb-1 group cursor-pointer"
            >
              {isFavorite ? <CheckOnIcon /> : <CheckOffIcon></CheckOffIcon>}
              <h2 className="text-xs leading-[14.4px] text-primary-gray-600 font-semibold">
                즐겨찾기만
              </h2>
            </div>
            <div className="flex flex-row max-w-full h-full overflow-x-auto gap-3 no-scrollbar">
              {historyList.map((history, index) => (
                <HistorySection
                  key={index}
                  history={history}
                  session={typedSession}
                  className="min-w-[90%] sm:min-w-[50%]"
                ></HistorySection>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
