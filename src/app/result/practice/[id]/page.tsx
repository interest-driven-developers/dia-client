// import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
import { getQuestionList } from "@/app/api/getQuestionList";
import PracticeResultMain from "./components/PracticeResultMain";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "@/types/Session";
import { Question } from "@/types/Question";
export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  // const data = await getQuestionDetails(params.id);
  return {
    title:"실전연습 결과",
    // description: data.description,
  };
};
export default async function Home({ params }: { params: { id: number } }) {
  // const session = await getServerSession(authOptions);
  // const result = await getQuestionList('backend');
    const session = await getServerSession(authOptions);
    const typedSession = session as Session;
    let questionList: Question[] = [];
    if (session) {
      if (!params) return;
      questionList = await getQuestionList(
        'backend',
        typedSession.user.access_token
      );
    } else {
      if (!params) return;
      questionList = await getQuestionList('backend');
    }
  const sliceQuestionList = questionList.slice(0, 2);
  return (
    <PracticeResultMain pkValue={params.id} questionList={sliceQuestionList} />
  );
}
