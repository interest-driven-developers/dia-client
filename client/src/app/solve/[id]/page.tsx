import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import QuestionContainer from "./components/QuestionContainer";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails(params.id);
  return {
    title: data.title,
    // description: data.description,
  };
};

export default async function Main({ params }: { params: { id: string } }) {
  const result = await getQuestionDetails(params.id);
  // TODO : 로그인시 세션 저장
  let session = null;
  // TODO 로그인시 이전 로컬 스토리지 데이터 불러오기

  return (
    <main className="h-screen max-w-3xl mx-auto">
      <QuestionContainer {...result} session={session}></QuestionContainer>
    </main>
  );
}
