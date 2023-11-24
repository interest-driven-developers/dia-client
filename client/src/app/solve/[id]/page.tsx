"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  PencilIcon,
  MicrophoneIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import ScriptDisplay from "./components/ScriptDisplay";
import Spinner from "@/app/components/Spinner";
const dummyData = {
  id: 1,
  title: "Solid 원칙에 대해 설명해보세요",
  description: "",
};
export default function Main({ params }: { params: { id: string } }) {
  const [description, setDescription] = useState<string>(dummyData.description);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // TODO : 로그인시 세션 저장
  let session = null;
  // TODO 로그인시 이전 로컬 스토리지 데이터 불러오기
  const handleSaveScript = () => {
    // 스크립트 저장
    localStorage.setItem(`${dummyData.id}script`, description);
    // 스크립트 리스트 업데이트
    setIsEditing(false);
  };

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
            className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <PencilIcon className="w-5 h-5 text-indigo-500"></PencilIcon>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          스크립트를 작성 및 모의 면접을 진행해보세요🧐
        </p>
      </div>
      <ScriptDisplay
        id={dummyData.id}
        description={description}
        isEditing={isEditing}
        setDescription={setDescription}
        setIsEditing={setIsEditing}
        handleSaveScript={handleSaveScript}
      ></ScriptDisplay>
      {!session && (
        <p className="text-sm font-sans text-gray-500">
          *로그인 후 이용해주시면 스크립트가 영구히 저장됩니다 💾
        </p>
      )}
      <Link href={`/mockinterview/${params.id}/mocktest`}>
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none">
          면접 진행 🔥
        </button>
      </Link>
    </main>
  );
}
