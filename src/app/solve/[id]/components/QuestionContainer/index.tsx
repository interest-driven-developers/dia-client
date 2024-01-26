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
import Tag from "@/app/solve/components/QuestionList/components/Question/components/Tag";
import SolvingTipsModal from "../SolvingTipsModal";
interface QuestionContainerProps {
  title: string;
  script: string;
  pk: number;
  session: any;
}

const dummyHistoryData = [
  {
    pk: "1",
    date: "2024-01-06 15:00",
    title: "string",
    description:
      "HTTP (Hypertext Transfer Protocol)는 웹 페이지와 데이터를 전송하는 데 사용되는 텍스트 기반 프로토콜입니다. ",
  },
  {
    pk: "2",
    date: "2024-01-06 12:37",

    title: "string",
    description:
      "HTTPS (HTTP Secure)는 HTTP의 암호화된 버전으로, 데이터를 안전하게 전송하기 위해 SSL/TLS를 사용합니다. ",
  },
  {
    pk: "3",
    date: "2024-01-05 15:23",
    description:
      "HTTP는 보안성이 부족하여 데이터가 중간에서 가로채질 수 있지만, HTTPS는 데이터 보안을 강화하여 중간 공격을 방지합니다. ",
  },
  {
    pk: "4",
    date: "2024-01-02 11:27",
    title: "string",
    description:
      "HTTP는 일반 텍스트로 통신하여 개인 정보를 노출시킬 수 있지만, HTTPS는 암호화된 통신으로 개인 정보 보호를 강화합니다. ",
  },
  {
    pk: "5",
    date: "2024-01-01 01:22",
    title: "string",
    description:
      "웹 브라우징에서 HTTP는 보안 경고가 발생할 수 있지만, HTTPS는 안전하고 믿을 수 있는 연결로 웹 사이트를 보호합니다. ",
  },
];
export default function QuestionContainer({
  title,
  script,
  pk: id,
  session,
}: QuestionContainerProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [historyData, setHistoryData] = useState<any>(dummyHistoryData);
  const [latestHistory, setLatestHistory] = useState<any>(
    dummyHistoryData[0].description
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const solveQuestion = () => {
    router.push(`/mockinterview/${id}`);
  };
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-100">
            {title}
          </h1>
          <p className="text-gray-500 text-xs -mt-4">
            <span className="text-indigo-500 font-bold">
              {"'" + Math.floor(Math.random() * 2000) + "'"}
            </span>
            명의 사용자가 도전하였습니다🔥
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex gap-3">
          <Tag>Easy</Tag>
          <Tag>Backend</Tag>
          <Tag>네카라쿠배</Tag>
        </div>
      </div>
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
      <LatestHistory text={latestHistory} />

      <HistorySection
        id={id}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        historyList={historyData}
        setIsHistory={setLatestHistory}
      ></HistorySection>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed z-50 bottom-4 m-2 p-2 left-0 right-0 w-11/12 sm:w-1/2 mx-auto bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
      >
        문제 풀기 🚀
      </button>
      <div
        className="mx-auto animate-bounceLeft flex text-indigo-500 hover:opacity-60 cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeftCircleIcon className="h-5 w-5  mr-1 mt-0.5 " />
        이전 페이지
      </div>
      {isModalOpen && (
        <SolvingTipsModal
          title={title}
          closeModal={setIsModalOpen}
          solveQuestion={solveQuestion}
        ></SolvingTipsModal>
      )}
    </>
  );
}
