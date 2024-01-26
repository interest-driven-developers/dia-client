"use client";
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import CustomSeparator from "@/app/ui/CustomSeparator";
import PointSpeechBubble from "@/app/ui/PointSpeechBubble";
export interface ScriptSectionProps {
  isEditing: boolean;
  setIsEditing: any;
  id: number;
}

export default function ScriptSection({
  isEditing,
  setIsEditing,
  id,
}: ScriptSectionProps) {
  const [script, setScript] = useState<string>(""); // 스크립트
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // 페이지 로딩 시, 로컬 스토리지에서 스크립트 불러오기
  useEffect(() => {
    const savedScript = localStorage.getItem(`script=${id}`);
    if (savedScript) {
      setScript(savedScript);
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
    <section className="flex flex-col gap-y-2">
      <h1 className="text-lg sm:text-2xl font-bold  text-slate-700 dark:text-slate-100">
        작성한 스크립트
      </h1>
      <CustomSeparator className="w-32"></CustomSeparator>
      <div className="w-full leading-1.5 p-4 bg-indigo-100 text-indigo-800 rounded-e-xl rounded-es-xl">
        {/* <div className="p-3 w-full  bg-white rounded-md shadow-sm divide-y border border-indigo-500 "> */}
        {isLoading ? (
          <div className="w-full h-12 flex justify-center justify-items-center mt-2 r-8">
            <Spinner />
          </div>
        ) : isEditing ? (
          <>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="w-full h-40 p-2 border rounded-md"
            />
            <div className="flex p-1 justify-end">
              <XCircleIcon
                onClick={() => setIsEditing(false)}
                className="w-5 h-5 text-red-500 cursor-pointer hover:opacity-50"
              ></XCircleIcon>
              <CheckCircleIcon
                onClick={() => handleSaveScript()}
                className="w-5 h-5 text-indigo-500 cursor-pointer hover:opacity-50"
              ></CheckCircleIcon>
            </div>
          </>
        ) : (
          <div className="whitespace-pre-wrap ">
            {script ? (
              <p className="text-base font-bold">{script}</p>
            ) : (
              <Link href={`/edit/${id}`}>
                <div className="flex justify-center cursor-pointer hover:opacity-50">
                  <p className="text-base font-bold text-gray-500">
                    스크립트가 작성되지 않았습니다. <br />
                    지금 바로{" "}
                    <span className="animate-pulse text-indigo-500">작성</span>
                    해보세요✏️
                  </p>
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
