import QuestionList from "./components/QuestionList";
import { getQuestionList } from "../api/getQuestionList";
import { Metadata } from "next";
export const dynamic = "force-dynamic";
export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: "모의 면접",
    description: "모의 면접을 통해 면접을 준비해보세요!",
  };
};

export default async function Home() {
  const questionList = await getQuestionList();
  return (
    <main className="h-screen  max-w-3xl mx-auto">
      <QuestionList questionList={questionList}></QuestionList>
    </main>
  );
}
