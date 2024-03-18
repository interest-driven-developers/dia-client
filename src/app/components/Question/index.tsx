"use client";
import { QuestionSubTitle } from "./ui/QuestionSubTitle";
import { QuestionMain } from "./ui/QuestionMain";
import { QuestionTitle } from "./ui/QuestionTitle";

export const Question = Object.assign(QuestionMain, {
  SubTitle: QuestionSubTitle,
  Title: QuestionTitle,
});
