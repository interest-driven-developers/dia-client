"use client";
import { useEffect, useState } from "react";
import ScriptSection from "@/app/components/ScriptSection";
import HistorySection from "@/app/components/HistorySection";
import type { HistoryType } from "@/types/History";
import { useSession } from "next-auth/react";
import type { Session } from "@/types/Session";
type Props = {
  id: number;
  historyList: HistoryType[];
};
const dummyHistory = [
  {
    pkValue: 5,
    question: {
      pkValue: 1,
      korTitleValue: "HTTP와 HTTPS에 대해 설명해보세요",
      bookmark: false,
    },
    typeValue: "SINGLE",
    contentValue: "이건 두번쨰 대답",
    elapsedTimeValue: 80,
    fileUrlValue: null,
    createdTimeValue: "2024-02-16T15:05:56.758314",
  },
  {
    pkValue: 6,
    question: {
      pkValue: 1,
      korTitleValue: "HTTP와 HTTPS에 대해 설명해보세요",
      bookmark: false,
    },
    typeValue: "SINGLE",
    contentValue: "이건 첫번쨰 대답",
    elapsedTimeValue: 60,
    fileUrlValue: null,
    createdTimeValue: "2024-02-15T15:05:56.758314",
  },
  {
    pkValue: 6,
    question: {
      pkValue: 1,
      korTitleValue: "HTTP와 HTTPS에 대해 설명해보세요",
      bookmark: false,
    },
    typeValue: "SINGLE",
    contentValue: "이건 첫번쨰 대답",
    elapsedTimeValue: 60,
    fileUrlValue: null,
    createdTimeValue: "2024-02-15T15:05:56.758314",
  },
];
export default function HistorySession(props: Props) {
  const { historyList} = props;
  const { data: session } = useSession();
  const typedSession = session as Session;
  
  return (
    <div className="px-5">
      <ScriptSection id={props.id} className="h-[231px] sm:h-[300px] mb-3" />
      {historyList && historyList.length !== 0 && (
        <div className="flex flex-row max-w-full overflow-x-auto gap-3">
          {historyList.map((history: any) => (
            <HistorySection
              key={history.pkValue}
              id={history.pkValue}
              className="min-w-[223px]"
              history={history}
              session={typedSession}
            />
          ))}
        </div>
      )}
      {/* {dummyHistory && dummyHistory.length !== 0 && (
        <div className="flex flex-row max-w-full overflow-x-auto gap-3 no-scrollbar">
          {dummyHistory.map((history: any) => (
            <HistorySection
              key={history.pkValue}
              id={history.pkValue}
              className="min-w-[207px] sm:w-[500px] h-[364px] sm:h-[400px]"
              history={history}
              session={typedSession}
            />
          ))}
        </div>
      )} */}
    </div>
  );
}
