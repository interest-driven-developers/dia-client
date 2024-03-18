"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import InterviewIntroIcon from "@/app/ui/icons/InterviewIntroIcon";
import Typed from "typed.js";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Header from "@/app/mockinterview/[id]/components/Header";
interface Props {
  setIsView: (view: number) => void;
}

export default function GuidanceSession({ setIsView }: Props) {
  const router = useRouter();
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);
  React.useEffect(() => {
    const options = {
      strings: [
        "안녕하세요.<br/>면접 시작 전 테스트에 필요한 설정을<br/>완료하시고, 아래의 시작하기 버튼 클릭 후<br/>질문이 나온 뒤 <span class='typedFont'>삐- 소리</span>가 나오면<br/>답변을 시작해주세요.",
      ],
      typeSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);
  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <Header handleBack={handleBack} title="모의연습" isSetting={true}/>
      <section className="flex flex-col px-4 w-full h-full">
        <InterviewIntroIcon
          className="mb-[30px] mt-[88px] ml-2"
          ringColor="#E2D7FF"
        ></InterviewIntroIcon>
        <div className={`flex relative justify-start mb-auto w-full px-4`}>
          <div
            className="absolute -top-4 left-6 w-0 h-0 
  border-l-[25px] border-l-transparent
  border-b-[50px] border-white
  border-r-[25px] border-r-transparent"
          />
          <div
            className={`rounded-lg px-5 py-5  w-full h-full bg-white z-10 `}
          >
            <span
              className="whitespace-nowrap text-[16px] leading-6 font-medium text-[#424242]"
              ref={el}
            />
          </div>
        </div>
        <Button onClick={() => setIsView(1)}>시작하기</Button>
      </section>
    </>
  );
}
