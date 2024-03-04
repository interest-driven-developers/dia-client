"use client";
import BookMarkIcon from "@/app/ui/icons/BookMarkIcon";
import BookMarkFillIcon from "@/app/ui/icons/BookMarkFillIcon";
import { useEffect } from "react";
import { addBookmarkQuestion } from "@/app/api/addBookmarkQuestion";
import type { Question as QuestionType } from "@/types/Question";
import type { Session } from "@/types/Session";
import { useRouter } from "next/navigation";
import { deleteBookmarkQuestion } from "@/app/api/deleteBookmarkQuestion";
interface QuestionProps {
  question: QuestionType;
  isBookmarkOn?: boolean;
  session?: Session;
  isDetail?: boolean;
}

export default function Question({
  question,
  isBookmarkOn = true,
  session,
  isDetail = false,
}: QuestionProps) {
  const router = useRouter();
  const handleAddBookmark = async (event: React.MouseEvent<SVGSVGElement>) => {
    await addBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    router.refresh();
    // window.location.reload();
  };
  const handleDeleteBookmark = async (e: React.MouseEvent<SVGSVGElement>) => {
    await deleteBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    router.refresh();
    // window.location.reload();
  };
  return (
    <div className="flex relative flex-col bg-[#F9F5FF] rounded-[5px] px-4 py-[18px]">
      {isBookmarkOn && (
        <>
          {question.bookmark ? (
            <BookMarkFillIcon
              onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                e.preventDefault();
                handleDeleteBookmark(e);
              }}
              className="absolute top-[2px] right-[2px] cursor-pointer group"
            ></BookMarkFillIcon>
          ) : (
            <BookMarkIcon
              onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                e.preventDefault();
                handleAddBookmark(e);
              }}
              className="absolute top-[2px] right-[2px] cursor-pointer group"
            ></BookMarkIcon>
          )}
        </>
      )}
      <div>
        <h1 className="text-[#C1ABF1] text-[12px] sm:text-lg font-semibold leading-3">
          Question
        </h1>
        <h2 className="text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-[19.2px]">
          {question.korTitleValue}
        </h2>
      </div>
      {isDetail && (
        <>
          <p className="text-[#757575] text-[12px] sm:text-lg font-semibold leading-[14.4px] mt-4">
            🛎️{" "}
            <span className="text-primary-600">
              {Math.floor(Math.random() * 2000) + 1}
            </span>
            번 도전하고 있습니다
          </p>
          <div className="absolute bottom-[18px] right-[16px] mt-2 bg-white rounded-[100px] px-[10px] py-[3px]">
            <p className="text-[#757575] text-[10px] leading-[10px] font-semibold">
              <span className="text-primary-600 text-[8px] leading-[9.6px] mr-[1px]">
                평균 응답시간
              </span>{" "}
              05:00
            </p>
          </div>
        </>
      )}
    </div>
  );
}
