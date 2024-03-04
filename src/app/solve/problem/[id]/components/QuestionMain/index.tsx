"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import ChevronLeftIcon from "@/app/ui/icons/ChevronLeftIcon";
import Question from "../../../../../components/Question";
import ScriptSection from "@/app/components/ScriptSection";
import type { Question as QuestionType } from "@/types/Question";
import { Modal } from "@/app/components/Modal";
import Button from "@/app/components/Button";
import ShareIcon from "@/app/ui/icons/ShareIcon";
import { useSession } from "next-auth/react";
import copyToClipboard from "@/utils/copyToClipBoard";
import type { Session } from "@/types/Session";
interface Props {
  questionData: QuestionType;
  session?: any;
}

export default function QuestionMain({
  questionData,
}: // session,
Props) {
  const { data: session, status } = useSession();
  const typedSession = session as Session;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");
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
      <div className="flex items-center mb-[32px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-3 w-3 text-[#212121] cursor-pointer hover:opacity-50" />
        </div>
        <h1 className="text-lg leading-[21.6px] sm:text-xl font-bold text-center text-primary-600 flex-grow mr-2">
          스크립트 작성
        </h1>
        <div className="mr-1" onClick={() => copyToClipboard()}>
          <ShareIcon />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 mb-4 h-full">
        <Question
          question={questionData}
          session={typedSession}
          isBookmarkOn={typedSession ? true : false}
        ></Question>
        <ScriptSection
          id={questionData.pkValue}
          className="h-full"
          placeholder="모의연습 전 스크립트를 먼저 작성해보세요.이후 음성 답변과 스크립트를 비교할 수 있습니다."
        ></ScriptSection>
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
