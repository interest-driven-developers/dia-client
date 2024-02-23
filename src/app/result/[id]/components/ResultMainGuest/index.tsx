"use client";
import SelectButtons from "../SelectButtons";
import HistorySession from "../HistorySession";
import type { Question as QuestionType } from "@/types/Question";
import ResultSession from "../ResultSession";
import type { PracticeResult } from "@/types/PracticeResult";
import { HistoryType } from "@/types/History";
import Recorder from "@/app/components/Recorder";

interface Props {
  question: QuestionType;
  resultData: HistoryType;
}

export default function ResultMainGuest({ question, resultData }: Props) {
  return (
    <ResultSession
      pkValue={question.pkValue}
      latestHistory={resultData as HistoryType}
      question={question}
    />
  );
}
