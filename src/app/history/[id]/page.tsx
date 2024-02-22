// import QuestionList from "./components/QuestionList";
import { useEffect } from "react";
import { Metadata } from "next";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getQuestionScript } from "@/app/api/getQuestionScript";
import { getSingleHistory } from "@/app/api/getSingleHistory";
import { Session } from "@/types/Session";
import HistoryResult from "./components/HistoryResult";
import { Question } from "@/types/Question";
import { HistoryType } from "@/types/History";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  // const data = await getQuestionDetails(params.id);
  return {
    title: "연습 결과",
    // description: data.description,
  };
};

export default async function Home({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions);
  let result;
  if (!session) {
    redirect("/signIn");
  }
  if (session) {
    result = await getSingleHistory({
      practiceHistoryPkValue: params.id,
      accessToken: session!.user!.access_token,
    });
  }

  return (
    <main className="flex flex-col mx-auto py-20 h-full max-w-[500px] max-h-[1000px] overflow-y-hidden bg-white no-scrollbar">
      <HistoryResult question={result?.question as Question} history={result as HistoryType}  ></HistoryResult>
    </main>
  );
}
