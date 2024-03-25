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
import { getQuestionHistory } from "@/app/api/getQuestionHistory";
export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  // const data = await getQuestionDetails(params.id);
  return {
    title: "답변 히스토리",
    // description: data.description,
  };
};
const dummyResults = [
  {
    pkValue: 1,
    typeValue: "SINGLE",
    elapsedTimeValue: 30,
    contentValue: "첫번째 대답",
    createdTimeValue: "2021-10-10T00:00:00",
  },
  {
    pkValue: 2,
    typeValue: "SINGLE",
    elapsedTimeValue: 60,
    contentValue: "2번째 대답",
    createdTimeValue: "2021-10-10T00:00:00",
  },
];

const dummyQuestion = {
  pkValue: 1,
  korTitleValue: "테스트 질문",
};

export default async function Home({ params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions);
  const typedSession = session as Session;
  let result;
  let question;
  if (session) {
    question = await getQuestionDetails({
      id: params.id,
      accessToken: session.user.access_token,
    });
    result = await getQuestionHistory(
      params.id,
      typedSession?.user.access_token
    );
  } else {
    result = await getQuestionDetails({ id: params.id });
  }

  return (
    <main className="flex flex-col mx-auto py-20 h-[100dvh] max-w-[500px] max-h-[1000px] overflow-y-hidden bg-white no-scrollbar">
      {/* <HistoryResult
        question={dummyQuestion as Question}
        historyList={dummyResults as HistoryType[]}
      ></HistoryResult> */}
      <HistoryResult
        question={question as Question}
        historyList={result as HistoryType[]}
      ></HistoryResult>
    </main>
  );
}
