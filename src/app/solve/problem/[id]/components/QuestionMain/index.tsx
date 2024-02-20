"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Question from "../Question";
import ScriptSection from "@/app/components/ScriptSection";
import type { Question as QuestionType } from "@/types/Question";
import { Modal } from "@/app/components/Modal";
import Button from "@/app/components/Button";
import ShareIcon from "@/app/ui/icons/ShareIcon";
import { useSession } from "next-auth/react";
import copyToClipboard from "@/utils/copyToClipBoard";
interface Props {
  questionData: QuestionType;
  session?: any;
}

export default function QuestionMain({
  questionData,
}: // session,
Props) {
  const { data: session, status } = useSession();
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
    <>
      <div className="flex items-center mb-[34px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer rounded-md hover:opacity-50" />
        </div>
        <h1 className="text-lg leading-[21.6px] sm:text-xl font-bold text-center text-primary flex-grow mr-2">
          스크립트 작성
        </h1>
        <div className="mr-1" onClick={() => copyToClipboard()}>
          <ShareIcon />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 mb-5">
        <Question title={questionData.korTitleValue}></Question>
        <ScriptSection
          id={questionData.pkValue}
          className="h-[474px]"
        ></ScriptSection>
      </div>
      <Button onClick={handleClick}>개별 모의연습</Button>
      {/* 모달 섹션 */}
      <Modal
        animationClass={animationClass}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        isOverlayClickClose={true}
      >
        <Modal.Header closeModal={hideMenu} />
        <Modal.Body
          title="모의 면접을 시작해볼까요?"
          description="문제의 리얼한 TTS가 제공되며 소요 시간은 평균 1~2분입니다."
        />
        <Modal.Button onClick={solveQuestion}>문제 풀기</Modal.Button>
      </Modal>
    </>
  );
}
