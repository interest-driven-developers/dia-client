// "use client";
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import CustomSeparator from "@/app/ui/CustomSeparator";
export interface ScriptSectionProps {
  // isEditing: boolean;
  // setIsEditing: any;
  script: string;
  id: number;
}

const maxCharacterCount = 500;
export default function ScriptSection({
  // isEditing,
  // setIsEditing,
  id,
  script,
}: ScriptSectionProps) {
  const [prevScript, setPrevScript] = useState<string>(script); // 스크립트
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // 페이지 로딩 시, 로컬 스토리지에서 스크립트 불러오기
  useEffect(() => {
    const savedScript = localStorage.getItem(`script=${id}`);
    if (savedScript) {
      setPrevScript(savedScript);
    }
    setIsLoading(false);
  }, [id]);

  const handleSaveScript = () => {
    // 스크립트 저장
    localStorage.setItem(`script=${id}`, script);
    // 스크립트 리스트 업데이트
    setIsEditing(false);
  };
  return (
    <div className="relative px-5 py-6  bg-[#F8F3FF] text-indigo-800 rounded-[10px] h-[264px] mb-5">
      {/* <div className="p-3 w-full  bg-white rounded-md shadow-sm divide-y border border-indigo-500 "> */}
      {isLoading ? (
        <div className="w-full h-12 flex justify-center justify-items-center mt-2 r-8">
          <Spinner />
        </div>
      ) : isEditing ? (
        <>
          <textarea
            value={script}
            onChange={(e) => setPrevScript(e.target.value)}
            className="w-full h-40 p-2 rounded-md bg-[#F8F3FF] focus:ring-blue-500"
          />
          <div className="absolute bottom-4 left-4 flex items-center">
            <XCircleIcon
              onClick={() => setIsEditing(false)}
              className="w-5 h-5 text-red-500 cursor-pointer hover:opacity-50"
            ></XCircleIcon>
            <CheckCircleIcon
              onClick={() => handleSaveScript()}
              className="w-5 h-5 text-primary cursor-pointer hover:opacity-50"
            ></CheckCircleIcon>
          </div>
        </>
      ) : (
        <div className="whitespace-pre-wrap flex">
          {script ? (
            <p className="text-[16px] text-[#424242] leading-7 sm:text-lg font-normal">
              {script}
            </p>
          ) : (
            <p
              className="text-[16px] text-[#424242] leading-7 sm:text-lg font-normal"
              onClick={() => setIsEditing(true)}
            >
              스크립트가 작성되지 않았습니다. <br />
              지금 바로{" "}
              <span className="animate-pulse text-indigo-500">작성</span>
              해보세요✏️
            </p>
          )}
        </div>
      )}
      <div className="absolute bottom-4 right-4  mt-2">
        <p className="text-xs font-medium text-[#D1C4E9]">
          <span className="text-[#9575CD]">{script.length}</span>
          {`/${maxCharacterCount}`}
        </p>
      </div>
    </div>
  );
}
