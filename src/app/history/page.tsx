
import { Metadata } from "next";
import { HistoryMain } from "./components/HistoryMain";
import { getUserHistorys } from "../api/getUserHistorys";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HistoryType } from "@/types/History";

export const metadata: Metadata = {
  title: "나의 히스토리",
  description: "나의 지난 히스토리를 확인해보세요!",
};

export default async function Home() {
  const session = await getServerSession(authOptions);
  let result;
  if (session) {
    result = await getUserHistorys(session!.user!.access_token);
  }
  return <HistoryMain historyList={result as HistoryType[]}></HistoryMain>;
}
