"use client";
import React, { useState, useEffect } from "react";
import MockTest from "../MockTest";
import QuestionInfo from "../QuestionInfo";
import { VoiceType } from "@/app/types/Voice";
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
    <>
      <h1 className="text-3xl text-semibold font-sans mt-5 text-black">
        {question.title}
      </h1>
      <ViewComponent></ViewComponent>
    </>
  );
}
