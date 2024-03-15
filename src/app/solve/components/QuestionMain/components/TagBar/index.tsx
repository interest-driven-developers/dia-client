"use client";
import { useState, useEffect } from "react";
import { getTags } from "@/utils/getTags";
import BookMarkIcon from "@/app/ui/icons/BookMarkIcon";
import Tag from "./Tag";
import { Session } from "@/types/Session";
import { Question } from "@/types/Question";
import { getBookmarkList } from "@/app/api/getBookmarkList";
import { getQuestionList } from "@/app/api/getQuestionList";
import BookMarkFillIcon from "@/app/ui/icons/BookMarkFillIcon";
import { useRouter } from "next/navigation";
type Props = {
  currentTag: string;
  session?: Session;
  setQuestionList: (questionList: Question[]) => void;
};

export const TagBar = ({ currentTag, session, setQuestionList }: Props) => {
  const tags = getTags();
  const router = useRouter();
  const [bookmarkOn, setBookmarkOn] = useState<boolean>(false);
  useEffect(() => {
    const fetchQuestionList = async () => {
      if (!bookmarkOn) {
        const questionList = await getQuestionList(
          currentTag,
          session?.user.access_token as string
        ); // 여기서 적절한 함수를 호출하여 원래 리스트를 가져와야 합니다.
        setQuestionList(questionList);
      }
    };

    fetchQuestionList();
  }, [bookmarkOn, currentTag, setQuestionList]);
  const handleBookmark = async () => {
    if (bookmarkOn) {
      // setBookmarkOn(false);
      router.refresh();
    } else {
      const questionList = await getBookmarkList(
        currentTag,
        session?.user.access_token as string
      );
      setQuestionList(questionList);
    }
    setBookmarkOn(!bookmarkOn);
  };
  return (
    <div className="flex  w-full mb-3  relative">
      {session && (
        <div className="flex absolute rounded-md -right-[1px]  -top-[1px]  z-10 p-[1px] backdrop-blur-2xl  bg-opacity-60 mx-auto hover:opacity-80">
          {/* <div className="group flex items-center rounded-[5px] py-[7px] px-[9px] w-[30px] h-[30px]  bg-white text-[#E0E0E0] border border-[#E0E0E0] border-solid hover:border-[#7C4DFF] hover:text-primary-600 "> */}
          {bookmarkOn ? (
            <div
              onClick={handleBookmark}
              className="group flex items-center justify-center rounded-[5px] w-[30px] h-[30px]  bg-white text-primary-600 border border-primary-600 border-solid cursor-pointer  "
            >
              <BookMarkFillIcon />
            </div>
          ) : (
            <div
              onClick={handleBookmark}
              className="group flex items-center justify-center rounded-[5px] w-[30px] h-[30px]  bg-white text-[#E0E0E0] border border-[#E0E0E0] border-solid hover:border-[#7C4DFF] hover:text-primary-600 cursor-pointer"
            >
              <BookMarkIcon></BookMarkIcon>
            </div>
          )}
          {/* </div> */}
        </div>
      )}
      <div className="flex flex-row gap-1.5 z-10 w-full mr-8 overflow-x-auto no-scrollbar">
        {tags.map((tag, index) => (
          <Tag key={index} selected={currentTag}>
            {tag.name}
          </Tag>
        ))}

      </div>
    </div>
  );
};
