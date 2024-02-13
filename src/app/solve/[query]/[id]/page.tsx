import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import QuestionContainer from "./components/QuestionContainer";
import { Metadata } from "next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails(params.id);
  return {
    title: data.data.korTitleValue,
    description: '개발자들이 실제로 경험한 면접 문제들을 풀어보세요!'
  };
};

export default async function Main({ params }: { params: { id: string } }) {
  const result = await getQuestionDetails(params.id);
  // const session = await getServerSession(authOptions);
  return (
    <main className="flex flex-col gap-4 mx-auto px-5 sm:px-6 py-20 sm:w-1/2">
      <QuestionContainer
        questionData={result.data}
        // session={session}
      ></QuestionContainer>
    </main>
  );
}
