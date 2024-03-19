import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import QuestionListMain from "./components/QuestionListMain";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "@/types/Session";
import { Question } from "@/types/Question";
import { getQuestionList } from "@/app/api/getQuestionList";
export const revalidate = 0;

// export const dynamic = "auto";
// export const revalidate = 0;

const dummyPractice = {
  pkValue: 1,
  korTitleValue: "Java / Spring / Jpa",
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails({ id: params.id });
  return {
    title: data.data.korTitleValue,
    description: "개발자들이 실제로 경험한 면접 문제들을 풀어보세요!",
  };
};

export default async function Main({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions);
  const typedSession = session as Session;
  let result;
  let questionList: Question[] = [];
  if (session) {
    if (!params.id) return;
    questionList = await getQuestionList(
      'backend',
      typedSession.user.access_token
    );
  } else {
    if (!params.id) return;
    questionList = await getQuestionList("backend");
  }
  const sliceList = questionList.slice(0, 3);
  return (
    <main className="flex flex-col mx-auto px-4 sm:px-6 pt-20 pb-8 h-[100dvh] sm:max-h-[800px] sm:w-1/2 2xl:w-1/3 no-scrollbar overflow-y-hidden">
      <QuestionListMain practice={dummyPractice} questionList={sliceList} />
    </main>
  );
}
