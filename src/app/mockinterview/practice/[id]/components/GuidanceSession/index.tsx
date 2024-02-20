"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  setIsView: (view: number) => void;
}

export default function GuidanceSession({ setIsView }: Props) {
  return (
    <section className="px-4">
      <div className="flex px-2 py-7 bg-[#212121] rounded-[10px] justify-center mb-4">
        <div className="whitespace-pre-wrap px-10 sm:px-16">
          <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
            버튼을 클릭하면 면접이 시작됩니다.
            <br />
            차분한 마음으로 대기해주시고 질문이 나온 후{" "}
            <span className="text-red-500">{`"삐"`}</span> 소리가 나오면 답변을
            시작해주세요.
          </p>
        </div>
      </div>
      <div className="flex rounded-[10px] justify-center mb-5">
        <Image
          src="/images/interviewer.png"
          alt="면접관 이미지"
          width={700}
          height={600}
          className="w-full object-contain"
          priority={true}
        />
      </div>
      <button
        onClick={() => setIsView(1)}
        className={`flex justify-center w-full px-[127px] py-[13px] rounded-[100px] whitespace-nowrap  items-center hover:opacity-90 bg-primary 
          `}
      >
        <p className="text-white font-bold text-lg sm:text-xl ">시작하기</p>
      </button>
    </section>
  );
}
