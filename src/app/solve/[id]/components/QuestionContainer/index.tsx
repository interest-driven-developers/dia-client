"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PencilIcon,
  ArrowLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import ScriptContainer from "../ScriptSection";
import CustomSeparator from "@/app/ui/CustomSeparator";
import copyToClipboard from "@/app/utils/copyToClipBoard";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import HistorySection from "../HistorySection";
import LatestHistory from "../LatestHistory";
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
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-3xl font-bold  text-slate-700">
          {title}
        </h1>
      </div>
      <p className="text-gray-500 text-xs -mt-4">
        <span className="text-indigo-500 font-bold">
          {"'" + Math.floor(Math.random() * 2000) + "'"}
        </span>
        명의 사용자가 도전하였습니다🔥
      </p>
      <CustomSeparator className="w-10"></CustomSeparator>
      <div className="flex items-center justify-between">
        <div onClick={() => router.back()}>
          <ArrowLeftIcon className="h-6 w-6 text-indigo-600 cursor-pointer rounded-md hover:bg-gray-100" />
        </div>
        <div className="flex space-x-3">
          <HeartIcon
            onClick={() => alert("기능 구현 중에 있습니다")}
            className="h-6 w-6 text-indigo-600 cursor-pointer rounded-md hover:bg-gray-100"
          />
          <Link href={`/edit/${id}`}>
            <PencilIcon className="h-6 w-6 text-indigo-600 cursor-pointer rounded-md hover:bg-gray-100" />
          </Link>
          <ShareIcon
            onClick={copyToClipboard}
            className="h-6 w-6 text-indigo-600 cursor-pointer rounded-md hover:bg-gray-100"
          />
        </div>
      </div>
      <ScriptContainer
        id={id}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      {!session && (
        <p className="text-gray-500 text-xs -mt-3">
          * 로그인 후 이용해주시면{" "}
          <span className="text-indigo-500 font-bold">
            스크립트가 영구히 저장
          </span>
          됩니다 💾
        </p>
      )}
      <LatestHistory/>

      <HistorySection
        id={id}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      ></HistorySection>

      <Link href={`/mockinterview/${id}`}>
        <button className="fixed z-50 bottom-4 m-2 p-2 left-0 right-0 w-11/12 sm:w-1/2 mx-auto bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none">
          문제 풀기 🚀
        </button>
      </Link>
      <div
        className="mx-auto animate-bounceLeft flex text-indigo-500 hover:opacity-60 cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeftCircleIcon className="h-5 w-5  mr-1 mt-0.5 " />
        이전 페이지
      </div>
    </>
  );
}
