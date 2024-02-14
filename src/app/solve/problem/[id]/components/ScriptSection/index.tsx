"use client";
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import CustomSeparator from "@/app/ui/CustomSeparator";
import EditIcon from "@/app/ui/icons/EditIcon";
import { useSession } from "next-auth/react";
import { getQuestionScript } from "@/app/api/getQuestionScript";
export interface ScriptSectionProps {
  // isEditing: boolean;
  // setIsEditing: any;
  id: number;
}

export default function ScriptSection({
  // isEditing,
  // setIsEditing,÷
  id,
}: ScriptSectionProps) {
  const { data: session, status } = useSession();
  // console.log('세션 체크',session);
  const [script, setScript] = useState<string>(""); // 스크립트
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const maxCharacterCount = 500;
  // 페이지 로딩 시, 로컬 스토리지에서 스크립트 불러오기
  useEffect(() => {
    const fetchData = async () => {
      //@ts-ignore
      // const getScript = await getQuestionScript(id, session?.accessToken);
    };

    fetchData();
    setIsLoading(false);
  }, [id]);

  const handleSaveScript = () => {
    // 스크립트 저장
    if (session && session.user) {
      // console.log('test')
    }
    localStorage.setItem(`script=${id}`, script);
    // 스크립트 리스트 업데이트
    setIsEditing(false);
  };

  return (
    <div className="relative px-5 py-6  bg-[#F8F3FF] rounded-[10px] h-[438px]">
      {isLoading ? (
        <div className="w-full h-12 flex justify-center justify-items-center mt-2 r-8">
          <Spinner />
        </div>
      ) : isEditing ? (
        <>
          <textarea
            value={script}
            placeholder="여기에 스크립트를 작성해주세요."
            onChange={(e) => setScript(e.target.value)}
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
            <p className="text-[16px] text-gray-500 leading-7 sm:text-lg font-normal">
              스크립트가 작성되지 않았습니다. <br />
              지금 바로 작성 해보세요 !
            </p>
          )}
        </div>
      )}
      <div className="absolute bottom-4 right-4 mt-2">
        <p className="text-xs font-medium text-[#D1C4E9]">
          <span className="text-[#9575CD]">{script.length}</span>
          {`/${maxCharacterCount}`}
        </p>
      </div>
      {!isEditing && (
        <div
          className="absolute bottom-[18px] left-6 mt-2 cursor-pointer hover:opacity-70"
          onClick={() => setIsEditing(true)}
        >
          <EditIcon></EditIcon>
        </div>
      )}
    </div>
  );
}
