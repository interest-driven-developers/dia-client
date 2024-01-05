"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PencilIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import ScriptDisplay from "../ScriptDisplay";

interface QuestionContainerProps {
  title: string;
  script: string;
  pk: number;
  session: any;
}
export default function QuestionContainer({
  title,
  script,
  pk: id,
  session,
}: QuestionContainerProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold  text-slate-700">{title}</h1>
        <div className="flex">
          <Link href={`/edit/${id}`}>
            <div
              className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
              // onClick={() => setIsEditing(true)}
            >
              <p className="text-sm font-sans text-gray-500">수정</p>
              {/* <PencilIcon className="w-5 h-5 text-indigo-500"></PencilIcon> */}
            </div>
          </Link>
        </div>
      </div>
      <p className="text-gray-500 text-xs -mt-4">
        스크립트를 작성 및 모의 면접을 진행해보세요🧐
      </p>
      <div className="border-t border-gray-300 "></div>
      <ScriptDisplay
        id={id}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      ></ScriptDisplay>
      {!session && (
        <p className="text-xs font-sans text-gray-500">
          *로그인 후 이용해주시면 스크립트가 영구히 저장됩니다 💾
        </p>
      )}
      <Link href={`/mockinterview/${id}`}>
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none">
          면접 진행 🔥
        </button>
      </Link>
    </>
  );
}
