"use client";
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
interface ScriptDisplayProps {
  isEditing: boolean;
  setIsEditing: any;
  id: number;
}
import Spinner from "@/app/components/Spinner";
export default function ScriptDisplay({
  isEditing,
  setIsEditing,
  id,
}: ScriptDisplayProps) {
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
    <>
      <p className="text-xs font-sans text-gray-500 -mb-1.5">스크립트</p>
      <div className="p-3 w-full mt-2 bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500 ">
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
              <p>{script}</p>
            ) : (
              <div
                onClick={() => setIsEditing(true)}
                className="flex h justify-center cursor-pointer hover:opacity-50"
              >
                <p className="text-gray-500">
                  스크립트가 작성되지 않았습니다. <br />
                  지금 바로{" "}
                  <span className="animate-pulse text-indigo-500">작성</span>
                  해보세요✏️
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
