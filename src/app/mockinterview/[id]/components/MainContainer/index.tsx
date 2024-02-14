"use client";
import React, { useState, useEffect } from "react";
import MockTest from "../MockTest";
import QuestionInfo from "../QuestionInfo";
import { VoiceType } from "@/app/types/Voice";
import ConfirmModal from "../ConfrimModal";
import Header from "../Header";
import CustomSeparator from "@/app/ui/CustomSeparator";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
interface MainContainerProps {
  question: any;
  voices: VoiceType[];
}
export default function MainContainer({
  question,
  voices,
}: MainContainerProps) {
  const router = useRouter();
  const [isView, setIsView] = useState<number | null>(null); // 0: 히스토리 보기, 1: 스크립트 보기
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(false);

  const ViewComponent = () => {
    switch (isView) {
      case 0:
        <QuestionInfo
          historyList={[]}
          pk={question.pk}
          setTestStart={setIsView}
        ></QuestionInfo>;
      case 1:
        return <MockTest pk={question.pk} voices={voices}></MockTest>;
      default:
        return <MockTest pk={question.pk} voices={voices}></MockTest>;
    }
  };
  return (
    <div>
      <div className="flex items-center mb-[47px]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="h-6 w-6 text-[#212121] cursor-pointer rounded-md hover:opacity-50" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
          실전연습
        </h1>
      </div>
      <ViewComponent></ViewComponent>
    </div>
  );
}
