import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import QuestionMain from "./components/QuestionMain";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



export const revalidate = 0;
// export const dynamic = "auto";
// export const revalidate = 0;
export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails({ id: params.id });
  return {
    title: data.data.korTitleValue,
    description: "개발자들이 실제로 경험한 면접 문제들을 풀어보세요!",
  };
};

export default async function Main({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions);
  let result;
  if (session) {
    result = await getQuestionDetails({
      id: params.id,
      accessToken: session.user.access_token,
    });
  } else {
    result = await getQuestionDetails({ id: params.id });
  }
  return (
    <main className="flex flex-col mx-auto px-5 sm:px-6 py-20 h-[97vh] sm:max-h-[800px] sm:w-1/2 2xl:w-1/3 no-scrollbar overflow-y-hidden">
      <QuestionMain questionData={result.data}></QuestionMain>
    </main>
  );
}
