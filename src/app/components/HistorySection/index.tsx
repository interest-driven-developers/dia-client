"use client";
import React, { useState, useEffect } from "react";
import type { HistoryType } from "@/types/History";
import { twMerge } from "tailwind-merge";
import Spinner from "../Spinner";
import DeleteIcon from "@/app/ui/icons/DeleteIcon";
import { deleteHistory } from "@/app/api/deleteHistory";
import type { Session } from "@/types/Session";
import formatDateString from "@/utils/formatDateString";
import convertToHourMinute from "@/utils/convertToHourMinute";
import DeleteCircleIcon from "@/app/ui/icons/DeleteCircleIcon";

export interface HistorySectionProps {
  id?: number;
  className?: string;
  history: HistoryType;
  session: Session;
  theme?: "single" | "multi";
}

export default function HistorySection({
  id,
  className,
  history,
  session,
  theme = "single",
}: HistorySectionProps) {
  const handleDelete = async () => {
    if (session) {
      try {
        await deleteHistory({
          practiceHistoryPkValue: history.pkValue as number,
          accessToken: session?.user.access_token,
        });
      } catch (e) {
        console.error("Delete operation failed", e);
      }
    }
  };
  return (
    <div
      className={twMerge(
        `flex flex-col relative px-5 py-3 rounded-[10px] h-full ${
          theme === "single" ? "bg-primary-100" : "bg-[#FFFEE5]"
        }`,
        className
      )}
    >
      <div className="flex flex-row gap-1">
        <p
          className={`text-xs leading-[14.4px] font-semibold  ${
            theme === "single" ? "text-primary-600" : "text-[#FDDA23]"
          }`}
        >
          {history ? formatDateString(history.createdTimeValue) : ""}
        </p>
        {history ? (
          <div className="flex justify-center items-center bg-white  rounded-[100px] px-[6px] py-[3px] cursor-pointer hover:opacity-70">
            <p className="text-primary-gray-600 text-[8px] leading-[9.6px] font-semibold">
              ⏱️{" " + convertToHourMinute(history.elapsedTimeValue)}
            </p>
          </div>
        ) : null}
      </div>
      <div className="whitespace-pre-wrap flex overflow-y-auto no-scrollbar my-3">
        {history ? (
          <p className="text-[14px] text-[#424242] leading-[22px] sm:text-lg font-medium">
            {history.contentValue}
          </p>
        ) : (
          <p className="text-[14px] text-[#D1C4E9] leading-[22px] sm:text-lg font-medium">
            히스토리가 없습니다.
          </p>
        )}
      </div>
      {/* TODO: 추후 로그인후 저장 버튼이나 자동으로 저장되는 기능을 구현해야함 */}
      {session ? (
        <DeleteCircleIcon
          className="absolute bottom-2 left-3 hover:opacity-70"
          onClick={handleDelete}
        ></DeleteCircleIcon>
      ) : null}
    </div>
  );
}
