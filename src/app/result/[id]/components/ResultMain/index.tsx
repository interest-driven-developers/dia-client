"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import HistorySection from "@/app/components/HistorySection";
import SelectButtons from "../SelectButtons";
import HistorySession from "../HistorySession";
import ScriptSection from "@/app/components/ScriptSection"
import type { HistoryType } from "@/types/History";
import { useSession } from "next-auth/react";
import type { Session } from "@/types/Session";
import { getQuestionHistory } from "@/app/api/getQuestionHistory";



interface ResultContainerProps {
  pkValue: number;
  // korTitleValue: string;
  // script: string;
  // session: any;
  // contentValue: string;
}

export default function ResultMain({
  pkValue: id,
  // contentValue,
  // script,
  // session,
}: ResultContainerProps) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const typedSession = session as Session;
  const [isView, setIsView] = useState<number>(0); // 0: 현재 답변, 1: 히스토리
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");
  const [historyList, setHistoryList] = useState<HistoryType[]>([]);
  const lastHistory = historyList[historyList.length - 1] || "";
  const hideMenu = async () => {
    setAnimationClass("animate-fadeOutDown");
    await new Promise((r) => setTimeout(r, 600));
    setIsModalOpen(false);
  };
  const handleClick = () => {
    if (isModalOpen) {
      hideMenu();
    } else {
      setAnimationClass("animate-fadeInUp");
      setIsModalOpen(true);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const getHistory = await getQuestionHistory(
          id,
          typedSession?.user.access_token
        );
        if (getHistory) setHistoryList(getHistory);
      } else {
        const getHistory = localStorage.getItem(`history=${id}`);
        if (getHistory) {
          // 데이터가 없을 경우 기본값으로 빈 배열 설정
          const historyArray = getHistory ? JSON.parse(getHistory) : [];
          const HistoryList = historyArray[id];
          setHistoryList(HistoryList);
        }
      }
    };

    fetchData();
  }, [id, typedSession, session]);


    const ViewComponent = () => {
      switch (isView) {
        case 0:
          return (
            <>
              <ScriptSection id={id} className="h-[264px] mb-3"></ScriptSection>
              <HistorySection id={id} history={lastHistory}></HistorySection>
            </>
          );
        case 1:
          return <HistorySession id={id} historyList={historyList}/>;
        default:
          return (
            <>
              <ScriptSection id={id} className="h-[264px] mb-3"></ScriptSection>
              <HistorySection id={id} history={lastHistory}></HistorySection>
            </>
          );
      }
    };
  return (
    <div>
      {/* <div className="flex items-center mb-[17px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer rounded-md hover:opacity-50" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
          답변비교
        </h1>
      </div> */}
      <SelectButtons isView={isView} setIsView={setIsView}></SelectButtons>
      <ViewComponent />
    </div>
  );
}
