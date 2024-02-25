// import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
import { getQuestionList } from "@/app/api/getQuestionList";
import PracticeResultMain from "./components/PracticeResultMain";
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
  const result = await getQuestionList('backend');
  const questionList = result.slice(0, 2);
  return <PracticeResultMain pkValue={params.id} questionList={questionList} />;
}
