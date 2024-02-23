// import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
import ResultMain from "./components/ResultMain";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getQuestionScript } from "@/app/api/getQuestionScript";
import type { PracticeResult } from "@/types/PracticeResult";
import { HistoryType } from "@/types/History";
import ResultMainGuest from "./components/ResultMainGuest";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  // const data = await getQuestionDetails(params.id);
  return {
    title: "연습 결과",
    // description: data.description,
  };
};
export default async function Home({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: HistoryType;
}) {
  const result = await getQuestionDetails(params.id);
  const isGuest = searchParams.contentValue ? true : false;
  return (
    <main className="flex flex-col mx-auto py-20  max-w-[500px] h-full sm:max-h-[1000px] overflow-y-hidden bg-white no-scrollbar">
      {isGuest ? (
        <ResultMainGuest question={result.data} resultData={searchParams} />
      ) : (
        <ResultMain pkValue={params.id} question={result.data}></ResultMain>
      )}
    </main>
  );
}
