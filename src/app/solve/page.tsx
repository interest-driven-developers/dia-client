import { Question } from "@/types/Question";
import { getQuestionList } from "@/app/api/getQuestionList";
import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: "모든 문제",
    description: "현직 개발자가 엄선한 모든 문제들을 확인해보세요!",
  };
};

export default async function Home() {
  const questionList: Question[] = await getQuestionList();

  return (
    <main className="h-screen flex flex-col gap-2  max-w-3xl mx-auto">
      <QuestionList questionList={questionList}></QuestionList>
    </main>
  );
}
