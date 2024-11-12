import { Metadata } from "next";
import { HistoryMain } from "./components/HistoryMain";
import { getUserHistorys } from "../api/getUserHistorys";
import { HistoryType } from "@/types/History";
import { getSession } from "../../authLib";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "나의 히스토리",
  description: "나의 지난 히스토리를 확인해보세요!",
};

export default async function Home() {
  const session = await getSession();
  const headersList = headers();
  let result;
  if (session) {
    result = await getUserHistorys(session.accessToken, {
      "user-agent": headersList.get("user-agent") as string,
    });
  }
  else {
    redirect("/signIn");
  }

  return <HistoryMain historyList={result as HistoryType[]}></HistoryMain>;
}
