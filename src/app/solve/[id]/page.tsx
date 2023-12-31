import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import QuestionContainer from "./components/QuestionContainer";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails(params.id);
  return {
    title: data.data.title,
    // description: data.description,
  };
};

export default async function Main({ params }: { params: { id: string } }) {
  const result = await getQuestionDetails(params.id);
  // TODO : 로그인시 세션 저장
  let session = null;
  // TODO 로그인시 이전 로컬 스토리지 데이터 불러오기
  return (
    // <main className="container h-screen flex flex-col gap-4 mx-auto px-4 sm:px-6 py-8 w-full sm:w-1/2">
    <main className="flex flex-col gap-4 mx-auto px-4 sm:px-6 py-20 sm:py-5 h-full sm:w-1/2 overflow-y-auto">
      <QuestionContainer {...result.data} session={session}></QuestionContainer>
    </main>
  );
}
