"use client";
import BookMarkIcon from "@/app/ui/icons/BookMarkIcon";
import BookMarkFillIcon from "@/app/ui/icons/BookMarkFillIcon";
import { useEffect } from "react";
import { addBookmarkQuestion } from "@/app/api/addBookmarkQuestion";
import type { Question as QuestionType } from "@/types/Question";
import type { Session } from "@/types/Session";
import { useRouter } from "next/navigation";
import { deleteBookmarkQuestion } from "@/app/api/deleteBookmarkQuestion";
type Props = {
  question: QuestionType;
  isBookmarkOn?: boolean;
  session?: Session;
  isDetail?: boolean;
  subTitle?: string;
  children: React.ReactNode;
};

export const QuestionMain = ({
  question,
  isBookmarkOn = true,
  session,
  isDetail = false,
  subTitle,
  children,
}: Props) => {
  const router = useRouter();
  const handleAddBookmark = async (event: React.MouseEvent<SVGSVGElement>) => {
    if (!session) alert("로그인 후 이용하실 수 있습니다");
    await addBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    router.refresh();
  };
  const handleDeleteBookmark = async (e: React.MouseEvent<SVGSVGElement>) => {
    if (!session) alert("로그인 후 이용하실 수 있습니다");

    await deleteBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    router.refresh();
  };
  return (
    <div className="flex relative flex-col bg-primary-gray-50 rounded-[5px] px-4 py-[18px]">
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
      <div>{children}</div>
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
              --:--
            </p>
          </div>
        </>
      )}
    </div>
  );
};
