"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import ChevronLeftIcon from "@/app/ui/icons/ChevronLeftIcon";
import { Question } from "../../../../../components/Question";
import ScriptSection from "@/app/components/ScriptSection";
import type { Question as QuestionType } from "@/types/Question";
import { Modal } from "@/app/components/Modal";
import Button from "@/app/components/Button";
import ShareIcon from "@/app/ui/icons/ShareIcon";
import { useSession } from "next-auth/react";
import copyToClipboard from "@/utils/copyToClipBoard";
import type { Session } from "@/types/Session";
import HistorySection from "@/app/components/HistorySection";
import { getQuestionHistory } from "@/app/api/getQuestionHistory";
import type { HistoryType } from "@/types/History";
import PlusIcon from "@/app/ui/icons/PlusIcon";
import Link from "next/link";
interface Props {
  questionData: QuestionType;
  session?: any;
}
const dummyhistorys = [
  {
    pkValue: 1,
    typeValue: "SINGLE",
    elapsedTimeValue: 30,
    contentValue: "첫번째 대답",
    createdTimeValue: "2021-10-10T00:00:00",
  },
];

export default function QuestionMain({
  questionData,
}: // session,
Props) {
  const { data: session, status } = useSession();
  const typedSession = session as Session;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");

  const [isView, setIsView] = useState<number>(0); // 0: 현재 답변, 1: 히스토리
  const [historyList, setHistoryList] = useState<HistoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const getHistory = await getQuestionHistory(
          questionData.pkValue,
          typedSession?.user.access_token
        );
        if (getHistory) setHistoryList(getHistory);
      }
    };

    fetchData();
  }, [questionData, typedSession, session]);

  const solveQuestion = () => {
    router.push(`/mockinterview/${questionData.pkValue}`);
  };
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

  return (
    <section className="flex flex-col w-full h-full max-h-[1000px]">
      <div className="flex items-center mb-[32px] pl-2">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-3 w-3 text-[#212121] cursor-pointer hover:opacity-50" />
        </div>
        <h1 className="text-lg leading-[21.6px] sm:text-xl font-bold text-center text-primary-600 flex-grow mr-2">
          개별 문제 풀기
        </h1>
        <div className="mr-1" onClick={() => copyToClipboard()}>
          <ShareIcon />
        </div>
      </div>
      <div className="flex flex-col flex-grow gap-y-3 mb-4 h-3/5">
        <Question
          question={questionData}
          session={typedSession}
          isBookmarkOn={typedSession ? true : false}
        >
          <Question.SubTitle className="text-primary-600">
            개별연습
          </Question.SubTitle>
          <Question.Title>{questionData.korTitleValue}</Question.Title>
        </Question>
        <ScriptSection
          id={questionData.pkValue}
          className={historyList.length > 0 ? "h-2/5" : "h-full"}
          placeholder="모의연습 전 스크립트를 먼저 작성해보세요.이후 음성 답변과 스크립트를 비교할 수 있습니다."
        ></ScriptSection>

        <div className="flex flex-col h-3/5">
          <div className="flex flex-row mb-3 justify-between px-4">
            <h1 className="text-[16px] leading-[19px] font-bold text-primary-600 ">
              답변 히스토리
            </h1>
            <Link
              href={`/solve/problem/history/${questionData.pkValue}`}
              className="flex flex-row gap-1 text-[14px] leading-[16.71px] font-semibold text-primary-gray-600 pl-4 cursor-pointer hover:opacity-70"
            >
              모두 보기
              <PlusIcon className=""></PlusIcon>
            </Link>
          </div>
          {historyList.length > 0 ? (
            <div className="flex flex-row max-w-full h-full overflow-x-auto gap-3 no-scrollbar">
              {historyList.map((history, index) => (
                <HistorySection
                  key={index}
                  history={history}
                  session={typedSession}
                  className="min-w-[90%] sm:min-w-[50%]"
                ></HistorySection>
              ))}
            </div>
          ) : (
            <div className="flex flex-col px-5 py-3 rounded-[10px] h-full bg-primary-100">
              <div className="flex flex-row gap-1">
                <p className="text-[12px] text-primary-400 leading-[14px] font-semibold">
                  연습 기록이 아직 없습니다
                </p>
                <div className="flex justify-center items-center bg-white  rounded-[100px] px-[6px] py-[3px] cursor-pointer hover:opacity-70">
                  <p className="text-primary-gray-600 text-[8px] leading-[9.6px] font-semibold">
                    🎙️--:--
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Button onClick={handleClick}>모의연습 시작하기</Button>
      {/* 모달 섹션 */}
      <Modal
        animationClass={animationClass}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        isOverlayClickClose={true}
      >
        <Modal.Header closeModal={hideMenu} />
        <Modal.Body
          title="개별연습을 시작해볼까요?"
          description="문제의 리얼한 TTS가 제공되며 소요 시간은 평균 1~2분입니다."
        />
        <Modal.Button onClick={solveQuestion}>시작하기</Modal.Button>
      </Modal>
    </section>
  );
}
