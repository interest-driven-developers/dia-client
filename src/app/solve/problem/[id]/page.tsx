import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import QuestionMain from "./components/QuestionMain";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails(params.id);
  return {
    title: data.data.korTitleValue,
    description: "개발자들이 실제로 경험한 면접 문제들을 풀어보세요!",
  };
};

export default async function Main({ params }: { params: { id: number } }) {
  const result = await getQuestionDetails(params.id);
  return (
    <main className="flex flex-col mx-auto px-5 sm:px-6 py-20 h-full sm:w-1/2 no-scrollbar overflow-hidden ">
      <QuestionMain questionData={result.data}></QuestionMain>
    </main>
  );
}
