"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/solid";
import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import CustomSeparator from "@/app/ui/CustomSeparator";
export interface HistorySectionProps {
  isEditing: boolean;
  setIsEditing: any;
  id: number;
  historyList: any;
  setIsHistory: (data : string) => void;
}

export default function HistorySection({
  isEditing,
  setIsEditing,
  id,
  historyList,
  setIsHistory,
}: HistorySectionProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <section className="flex flex-col gap-y-2">
      <h1 className="text-lg sm:text-2xl font-bold  text-slate-700 dark:text-slate-100">
        히스토리
      </h1>
      <CustomSeparator className="w-32"></CustomSeparator>
      <ul className="flex overflow-x-auto h-40 gap-x-2">
        {historyList.map((data: any) => (
          <li
            key={data.pk}
            className="flex-none w-1/2 sm:w-1/5 h-full p-4 bg-amber-100 rounded-e-xl rounded-es-xl"
          >
            <div className="w-full h-full flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-xs sm:text-sm font-bold text-amber-500">
                  {data.date}
                </h2>
                <MagnifyingGlassPlusIcon
                  onClick={() => setIsHistory(data.description)}
                  className="h-5 w-5 text-amber-600 cursor-pointer rounded-md hover:bg-gray-100"
                />
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
