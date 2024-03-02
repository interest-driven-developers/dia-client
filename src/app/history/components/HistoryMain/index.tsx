"use client";
import formatDateString from "@/utils/\bformatDateString";
import Question from "@/app/components/Question";
import { HistoryType } from "@/types/History";
import Link from "next/link";

type Props = {
  historyList: HistoryType[];
};
export const HistoryMain = ({ historyList }: Props) => {
  const historyByDate = {} as any;
  historyList.forEach((item) => {
    const date = formatDateString(item.createdTimeValue);
    if (!historyByDate[date]) {
      historyByDate[date] = [];
    }
    historyByDate[date].push(item);
  });
  const sortedDates = Object.keys(historyByDate).sort(
    (a: string, b: string) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <main className="flex flex-col gap-4 mx-auto px-5 sm:px-6 py-20 sm:w-1/2 ">
      <h1 className="text-lg font-bold ">나의 히스토리</h1>
      {sortedDates.map((date, index) => (
        <div key={date} className="relative">
          <div className="flex flex-row gap-[9px] mb-2 pl-4">
            <div className="bg-primary-600 h-[6px] w-[6px] rounded-full mt-1" />
            <h3 className="text-primary-600 text-xs font-medium">{date}</h3>
          </div>
          <div className="absolute top-3 left-4 ml-0.5 bg-[#E0E0E0] h-3 w-[1px]" />
          <div className="flex flex-col relative gap-3">
            {historyByDate[date].map((history: HistoryType) => (
              <Link
                href={`/history/${history.pkValue}`}
                key={history.pkValue}
                className="relative hover:opacity-70"
              >
                <Question question={history && history.question} />
                {index === historyByDate[date].length - 1 ? (
                  <div className="absolute -bottom-5 left-4 ml-0.5 bg-[#E0E0E0] h-5 w-[1px]" />
                ) : (
                  <div className="absolute -bottom-3 left-4 ml-0.5 bg-[#E0E0E0] h-3 w-[1px]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};
