"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Question from "../Question";
import BookMarkIcon from "@/app/ui/icons/BookMarkIcon";
import ScriptSection from "../ScriptSection";
import type { Question as QuestionType } from "@/app/types/Question";
import { Modal } from "@/app/components/Modal";
import Button from "@/app/components/Button";
import ShareIcon from "@/app/ui/icons/ShareIcon";
import { useSession } from "next-auth/react";
import copyToClipboard from "@/app/utils/copyToClipBoard";
interface QuestionContainerProps {
  questionData: QuestionType;
  session?: any;
}

const dummyHistoryData = [
  {
    pk: "1",
    date: "2024-01-06 15:00",
    title: "string",
    description:
      "HTTP (Hypertext Transfer Protocol)는 웹 페이지와 데이터를 전송하는 데 사용되는 텍스트 기반 프로토콜입니다. ",
  },
  {
    pk: "2",
    date: "2024-01-06 12:37",

    title: "string",
    description:
      "HTTPS (HTTP Secure)는 HTTP의 암호화된 버전으로, 데이터를 안전하게 전송하기 위해 SSL/TLS를 사용합니다. ",
  },
  {
    pk: "3",
    date: "2024-01-05 15:23",
    description:
      "HTTP는 보안성이 부족하여 데이터가 중간에서 가로채질 수 있지만, HTTPS는 데이터 보안을 강화하여 중간 공격을 방지합니다. ",
  },
  {
    pk: "4",
    date: "2024-01-02 11:27",
    title: "string",
    description:
      "HTTP는 일반 텍스트로 통신하여 개인 정보를 노출시킬 수 있지만, HTTPS는 암호화된 통신으로 개인 정보 보호를 강화합니다. ",
  },
  {
    pk: "5",
    date: "2024-01-01 01:22",
    title: "string",
    description:
      "웹 브라우징에서 HTTP는 보안 경고가 발생할 수 있지만, HTTPS는 안전하고 믿을 수 있는 연결로 웹 사이트를 보호합니다. ",
  },
];
export default function QuestionContainer({
  questionData,
  // session,
}: QuestionContainerProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [historyData, setHistoryData] = useState<any>(dummyHistoryData);
  const [latestHistory, setLatestHistory] = useState<any>(
    dummyHistoryData[0].description
  );
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
    <div>
      <div className="grid grid-cols-3 gap-1 mb-2">
        <div className="relative">
          <div className="w-full h-2 border-t-4 border-primary"></div>
        </div>
        <div className="relative">
          <div className="w-full h-2 border-t-4 border-[#D9D9D9]"></div>
        </div>
        <div className="relative">
          <div className="w-full h-2 border-t-4 border-[#D9D9D9]]"></div>
        </div>
      </div>
      <div className="flex items-center mb-[17px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer rounded-md hover:opacity-50" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
          문제풀기
        </h1>
      </div>
      <div className="flex flex-col gap-y-3 mb-[27px]">
        <div className="flex items-end justify-end">
          <div className="flex gap-2">
            <div className="mt-0.5" onClick={() => copyToClipboard()}>
              <ShareIcon/>
            </div>
            <div onClick={() => alert("기능 구현 중에 있습니다")}>
              <BookMarkIcon></BookMarkIcon>
            </div>
          </div>
        </div>
        <Question title={questionData.korTitleValue}></Question>
        <ScriptSection
          // isEditing={isEditing}
          id={questionData.pkValue}
          // setIsEditing={setIsEditing}
        ></ScriptSection>
      </div>
      <Button onClick={handleClick}>문제 풀기</Button>
      <Modal animationClass={animationClass} isOpen={isModalOpen}>
        <Modal.Header closeModal={hideMenu} />
        <Modal.Body
          title="모의 면접을 시작해볼까요?"
          description="문제의 리얼한 TTS가 제공되며 소요 시간은 평균 1~2분입니다."
        />
        <Modal.Button onClick={solveQuestion}>문제 풀기</Modal.Button>
      </Modal>
    </div>
  );
}
