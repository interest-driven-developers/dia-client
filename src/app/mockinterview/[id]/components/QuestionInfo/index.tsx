"use client";
import React, { useState, useEffect } from "react";
import HistoryList from "../../../components/HistoryList";
import { PencilIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import ScriptDisplay from "@/app/solve/[id]/components/ScriptContainer";
interface QuestionInfoProps {
  historyList: any;
  pk: number;
  setTestStart: (id: number) => void;
}
export default function QuestionInfo({
  historyList,
  pk,
  setTestStart,
}: QuestionInfoProps) {
  const [isCategory, setIsCategory] = useState(0); // 0: 히스토리 보기, 1: 스크립트 보기
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const CategoryComponent = () => {
    switch (isCategory) {
      case 0:
        return <HistoryList></HistoryList>;
      case 1:
        return (
          <ScriptDisplay
            id={pk}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          ></ScriptDisplay>
        );
      default:
        return <HistoryList></HistoryList>;
    }
  };
  return (
    <>
      <div className=" mt-5 mb-5 flex space-x-4">
        <span
          onClick={() => setIsCategory(0)}
          className={`text-md cursor-pointer hover:underline decoration-wavy decoration-indigo-500 ${
            isCategory === 0 && "underline"
          }`}
        >
          히스토리
        </span>
        <span
          onClick={() => setIsCategory(1)}
          className={`text-md cursor-pointer hover:underline decoration-wavy decoration-indigo-500 ${
            isCategory === 1 && "underline"
          }`}
        >
          스크립트 보기
        </span>
        {isCategory === 1 && (
          <div className="justify-end justify-items-end justify-self-end">
            <div
              className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <PencilIcon className="w-5 h-5 text-indigo-500"></PencilIcon>
            </div>
          </div>
        )}
      </div>
      <CategoryComponent></CategoryComponent>

      <button
        className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none"
        onClick={() => {
          setTestStart(1);
        }}
      >
        면접 진행 🔥
      </button>
    </>
  );
}
