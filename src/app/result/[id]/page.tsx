// import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
import ResultMain from "./components/ResultMain";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getQuestionScript } from "@/app/api/getQuestionScript";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  // const data = await getQuestionDetails(params.id);
  return {
    title:"연습 결과",
    // description: data.description,
  };
};
export default async function Home({ params }: { params: { id: number } }) {
  // const session = await getServerSession(authOptions);
  // const result = await getQuestionScript(params.id, session?.user.access_token);
  const result = await getQuestionDetails(params.id);
  return (
    <main className="flex flex-col mx-auto py-20 h-full max-w-[500px] max-h-[1000px] overflow-y-hidden bg-white no-scrollbar">
      <ResultMain pkValue={params.id} question={result.data}></ResultMain>
    </main>
  );
}
