"use client";
import { useEffect, useState } from "react";
import ScriptSection from "@/app/components/ScriptSection";
import HistorySection from "@/app/components/HistorySection";
import type { HistoryType } from "@/types/History";
type Props = {
  id: number;
  historyList: HistoryType[];
};

export default function HistorySession(props: Props) {
  return (
    <div className="mt-1.5">
      <h1 className="text-lg font-bold px-[22px] mb-2">나의 스크립트</h1>
      <ScriptSection id={props.id} className="h-[264px] mb-3" />
      <h1 className="text-lg font-bold px-[22px] mb-2">실전 모의답변</h1>
      <div className="flex flex-row max-w-full overflow-x-auto gap-3">
        {props.historyList.length !== 0 &&
          props.historyList.map((history: any) => (
            <HistorySection
              key={history.pkValue}
              id={history.pkValue}
              className="min-w-[223px]"
              history={history}
            />
          ))}
      </div>
    </div>
  );
}
