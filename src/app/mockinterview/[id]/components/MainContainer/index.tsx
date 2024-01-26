"use client";
import React, { useState, useEffect } from "react";
import MockTest from "../MockTest";
import QuestionInfo from "../QuestionInfo";
import { VoiceType } from "@/app/types/Voice";
import ConfirmModal from "../ConfrimModal";
import Header from "../Header";
import CustomSeparator from "@/app/ui/CustomSeparator";
interface MainContainerProps {
  question: any;
  voices: VoiceType[];
}
export default function MainContainer({
  question,
  voices,
}: MainContainerProps) {
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
      <Header setIsOpen={setIsConfirmModal}></Header>
      <h1 className="text-xl font-bold sm:text-2xl text-bold text-slate-800 dark:text-slate-100 mb-2">
        {question.title}
      </h1>
      {/* <p className="text-sm sm:text-md text-gray-500 dark:text-gray-500">
        신중하게 
      </p> */}
      <CustomSeparator className="w-20"></CustomSeparator>
      <ViewComponent></ViewComponent>
      {isConfirmModal && (
        <ConfirmModal closeModal={setIsConfirmModal}></ConfirmModal>
      )}
    </div>
  );
}
