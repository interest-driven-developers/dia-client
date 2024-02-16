import { Question } from "@/types/Question";
import { getQuestionList } from "@/app/api/getQuestionList";
import QuestionList from "../components/PracticeList";
import { Metadata } from "next";
import { PracticeMain } from "../components/PracticeMain";

export const metadata: Metadata = {
  title: "실전 연습",
  description: "현직 개발자가 엄선한 문제 세트를 확인해보세요!",
};
const dummyList = [
  {
    pkValue: 1,
    korTitleValue: "실전 모의고사 30분",
  },
  {
    pkValue: 2,
    korTitleValue: "실전 모의고사 60분",
  },
  {
    pkValue: 3,
    korTitleValue: "실전 모의고사 90분",
  },
  {
    pkValue: 4,
    korTitleValue: "실전 모의고사 120분",
  },
];
export default async function Home({ params }: { params: { query: string } }) {
  return <PracticeMain practiceList={dummyList} query={params.query}></PracticeMain>;
}
