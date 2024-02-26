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
}

export default function Question({
  question,
  isBookmarkOn = true,
  session,
}: QuestionProps) {
  const router = useRouter();

  const handleAddBookmark = async () => {
    await addBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    router.refresh();
  }
  const handleDeleteBookmark = async () => {
    await deleteBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    router.refresh();
  }
  return (
    <div className="flex relative flex-col bg-[#F9F5FF] rounded-[5px] px-4 py-[18px]">
      {isBookmarkOn && (
        <div className="absolute top-[9px] right-[9px] cursor-pointer group">
          {question.bookmark ? (
            <BookMarkFillIcon onClick={() => handleDeleteBookmark()}></BookMarkFillIcon>
          ) : (
            <BookMarkIcon onClick={() => handleAddBookmark()}></BookMarkIcon>
          )}
        </div>
      )}
      <div>
        <h1 className="text-[#C1ABF1] text-[12px] sm:text-lg font-semibold leading-3">
          Question
        </h1>
        <h2 className="text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-[19.2px]">
          {question.korTitleValue}
        </h2>
      </div>
    </div>
  );
}
