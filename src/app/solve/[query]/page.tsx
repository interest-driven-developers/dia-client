import { Question } from "@/types/Question";
import { getQuestionList } from "@/app/api/getQuestionList";
import QuestionMain from "../components/QuestionMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "모든 문제",
  description: "현직 개발자가 엄선한 모든 문제들을 확인해보세요!",
};

export default async function Home({ params }: { params: { query: string } }) {
  const questionList: Question[] = await getQuestionList(params.query);
  return (
    <QuestionMain
      questionList={questionList}
      query={params.query}
    ></QuestionMain>
  );
}
