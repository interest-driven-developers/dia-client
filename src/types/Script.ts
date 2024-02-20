import type { Question } from "./Question";
export interface Script {
  pkValue: number;
  ownerPkValue: number;
  question: Question;
  contentValue: string;
  createdTimeValue: string;
  lastModifiedTimeValue: string;
  lastReadTimeValue: string;
}
