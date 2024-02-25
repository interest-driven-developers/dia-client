import type { Question } from "./Question";

export interface HistoryType {
  pkValue: number;
  question: Question
  typeValue: "MULTI" | "SINGLE";
  elapsedTimeValue: number;
  contentValue: string;
  filePathValue: string | null;
  createdTimeValue : string;
}