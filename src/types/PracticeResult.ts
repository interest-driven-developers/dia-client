export type PracticeResult = {
  interviewQuestionPkValue: number;
  contentValue: string;
  typeValue: "SINGLE" | "MULTI";
  elapsedTimeValue: number;
  filePathValue?: string | null;
};
