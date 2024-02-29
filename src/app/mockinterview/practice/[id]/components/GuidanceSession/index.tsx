"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import InterviewIntroIcon from "@/app/ui/icons/InterviewIntroIcon";
import Typed from "typed.js";

interface Props {
  setIsView: (view: number) => void;
}

export default function GuidanceSession({ setIsView }: Props) {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);
  React.useEffect(() => {
    const options = {
      strings: [
        "안녕하세요. 차분한 마음으로 대기하시고, <br/>아래의 버튼 클릭 후 면접이 시작됩니다.<br/>질문이 나온 후 <span class='typedFont'>삐- 소리</span>가 나오면<br/>답변을 시작해주세요.",
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
  return (
    <section className="flex flex-col px-4 w-full h-full">
      <InterviewIntroIcon className="mb-[30px] mt-[88px]"></InterviewIntroIcon>
      <div className={`flex relative justify-start mb-60 w-full`}>
        <div
          className="absolute -top-4 left-3 w-0 h-0 
  border-l-[25px] border-l-transparent
  border-b-[50px] border-white
  border-r-[25px] border-r-transparent"
        />
        <div
          className={`rounded-lg px-[30px] py-5 max-w-xs  bg-white z-10 h-[130px] `}
        >
          <span
            className="whitespace-pre text-[16px] leading-6 font-medium text-[#616161]"
            ref={el}
          />
        </div>
      </div>
      <Button onClick={() => setIsView(1)}>시작하기</Button>
    </section>
  );
}
