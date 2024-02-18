"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Tag from "@/app/solve/components/QuestionList/components/Question/components/Tag";
import ScriptCopyIcon from "@/app/ui/icons/ScriptCopyIcon";
import BookMarkIcon from "@/app/ui/icons/BookMarkIcon";
// import ScriptSection from "../ScriptSection";
import ScriptSection from "@/app/solve/problem/[id]/components/ScriptSection";
import HistorySection from "../HistorySection";
import SelctButtons from "../SelectButtons";
import SelectButtons from "../SelectButtons";
import HistoryPage from "../HistoryPage";
interface ResultContainerProps {
  korTitleValue: string;
  script: string;
  pkValue: number;
  session: any;
  contentValue: string;
}

export default function ResultContainer({
  contentValue,
  script,
  pkValue: id,
  session,
}: ResultContainerProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [historyData, setHistoryData] = useState<any>([]);
  const [isView, setIsView] = useState<number>(0); // 0: 현재 답변, 1: 히스토리
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");
  const [historyList, setHistoryList] = useState<any>([]);
  const lastHistory = historyList[historyList.length - 1]?.results || "";
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

  const ViewComponent = () => {
    switch (isView) {
      case 0:
        return (
          <>
            <ScriptSection id={id} className="h-[264px] mb-3"></ScriptSection>
            <HistorySection
              id={id}
              script={historyList[historyList.length - 1]?.results || ""}
            ></HistorySection>
          </>
        );
      case 1:
        return <HistoryPage id={id} historyList={historyList}></HistoryPage>;
      default:
        return (
          <>
            <ScriptSection id={id} className="h-[264px] mb-3"></ScriptSection>
            <HistorySection
              id={id}
              script={historyList[historyList.length - 1]?.results || ""}
            ></HistorySection>
          </>
        );
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem(`history=${id}`);
    console.log(storedData, "storedData");
    if (storedData) {
      // 데이터가 없을 경우 기본값으로 빈 배열 설정
      const historyArray = storedData ? JSON.parse(storedData) : [];
      const HistoryList = historyArray[id];
      setHistoryList(HistoryList);
    }
    //   setIsLoading(false);
  }, [id]);
  return (
    <div>
      {/* <div className="grid grid-cols-3 gap-1 mb-2">
        <div className="relative">
          <div className="w-full h-2 border-t-4 border-primary"></div>
        </div>
        <div className="relative">
          <div className="w-full h-2 border-t-4 border-[#D9D9D9]"></div>
        </div>
        <div className="relative">
          <div className="w-full h-2 border-t-4 border-[#D9D9D9]]"></div>
        </div>
      </div> */}
      <div className="flex items-center mb-[17px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer rounded-md hover:opacity-50" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
          답변비교
        </h1>
      </div>
      <SelectButtons isView={isView} setIsView={setIsView}></SelectButtons>
      <ViewComponent />
    </div>
  );
}
