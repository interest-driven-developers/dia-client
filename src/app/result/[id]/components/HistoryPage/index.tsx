"use client";
import { useEffect, useState } from "react";
import ScriptSection from "../ScriptSection";
import HistorySection from "../HistorySection";

type HistoryPageProps = {
  id: number;
  historyList: any;
};

export default function HistoryPage(props: HistoryPageProps) {
  return (
    <div className="mt-1.5">
      <h1 className="text-lg font-bold px-[22px] mb-2">나의 스크립트</h1>
      <ScriptSection id={props.id} />
      <h1 className="text-lg font-bold px-[22px] mb-2">실전 모의답변</h1>
      <div className="flex flex-row max-w-full overflow-x-auto gap-3">
        {props.historyList.length !== 0
          ? props.historyList
              .slice()
              .reverse()
              .map((history: any) => (
                <HistorySection
                  key={history.id}
                  id={history.id}
                  script={history.results}
                  className="min-w-[223px]"
                />
              ))
                  : <HistorySection key={1} id={1} script="" className="w-full"></HistorySection>}
      </div>
    </div>
  );
}
