"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  PencilIcon,
  MicrophoneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
const dummyData = {
  id: 1,
  title: "Solid 원칙에 대해 설명해보세요",
  description:
    "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
};
export default function Main({ params }: { params: { id: string } }) {
  const [description, setDescription] = useState<string>(dummyData.description);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleSaveScript = () => {
    // 스크립트 저장
    // 스크립트 모달 닫기
    // 스크립트 리스트 업데이트
    setIsEditing(false);
  }

  return (
    <main className="h-screen max-w-3xl mx-auto">
      <div className="mt-5 flex justify-between items-center">
        <h1 className="text-3xl font-sans text-black">{dummyData.title}</h1>
        <div className="flex">
          <Link href={`/mockinterview/${params.id}/mocktest`}>
            <div className="p-1 rounded-lg hover:bg-gray-100">
              <MicrophoneIcon className="w-5 h-5 text-red-500"></MicrophoneIcon>
            </div>
          </Link>
          <div
            className="p-1 rounded-lg hover:bg-gray-100"
            onClick={() => setIsEditing(true)}
          >
            <PencilIcon className="w-5 h-5 text-indigo-400"></PencilIcon>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          스크립트를 작성 및 모의 면접을 진행해보세요🧐
        </p>
      </div>
      <p className="text-xs font-sans text-gray-500 -mb-1.5">스크립트</p>
      <div className="p-3 w-full mt-2 bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500 ">
        {isEditing ? (
          <>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-40 p-2 border rounded-md"
            />
            <div className="flex p-1  justify-end ">
              <CheckCircleIcon
                onClick={() => handleSaveScript()}
                className="w-5 h-5 text-indigo-500 cursor-pointer hover:opacity-50"
              ></CheckCircleIcon>
            </div>
          </>
        ) : (
          <p className="whitespace-pre-wrap">
            {description ? (
              <p>{description}</p>
            ) : (
              <p>스크립트가 없습니다. 스크립트를 작성해주세요✏️</p>
            )}
          </p>
        )}
      </div>
      <Link href={`/mockinterview/${params.id}/mocktest`}>
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none">
          면접 진행 🔥
        </button>
      </Link>
    </main>
  );
}
