"use client";
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import CustomSeparator from "@/app/ui/CustomSeparator";
export interface HistorySectionProps {
  isEditing: boolean;
  setIsEditing: any;
  id: number;
}

const dummyData = [
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
export default function HistorySection({
  isEditing,
  setIsEditing,
  id,
}: HistorySectionProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <section className="flex flex-col gap-y-2">
      <h1 className="text-lg sm:text-2xl font-bold  text-slate-700">
        히스토리
      </h1>
      <CustomSeparator className="w-32"></CustomSeparator>
      {/* <div className=" "> */}
      <ul className="flex overflow-x-auto h-40 gap-x-2">
        {dummyData.map((data) => (
          <li
            key={data.pk}
            className="flex-none w-1/2 sm:w-1/5 h-full p-4 bg-amber-100  rounded-e-xl rounded-es-xl"
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex flex-row justify-between">
                <h2 className="text-xs sm:text-sm font-bold text-amber-500">
                  {data.date}
                </h2>
              </div>
              <p className="text-xs text-amber-800 font-bold ">
                {data.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </section>
  );
}
