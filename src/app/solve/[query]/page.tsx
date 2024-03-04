import { Question } from "@/types/Question";
import { getQuestionList } from "@/app/api/getQuestionList";
import QuestionMain from "../components/QuestionMain";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "@/types/Session";
export const revalidate = 0;
export const dynamic = "auto";
export const metadata: Metadata = {
  title: "모든 문제",
  description: "현직 개발자가 엄선한 모든 문제들을 확인해보세요!",
};

export default async function Home({ params }: { params: { query: string } }) {
  const session = await getServerSession(authOptions);
  const typedSession = session as Session;
  let questionList: Question[] = [];
  if (session) {
    questionList = await getQuestionList(
      params.query,
      typedSession.user.access_token
    );
  } else {
    questionList = await getQuestionList(params.query);
  }
  return (
    <QuestionMain
      questionsData={questionList}
      query={params.query}
    ></QuestionMain>
  );
}
