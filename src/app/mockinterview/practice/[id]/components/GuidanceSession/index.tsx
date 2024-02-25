"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

interface Props {
  setIsView: (view: number) => void;
}

export default function GuidanceSession({ setIsView }: Props) {
  return (
    <section className="flex flex-col px-4 w-full h-screen">
      <div className="flex w-full px-2 py-7 bg-[#212121] rounded-[10px] justify-center mb-4">
        <div className="whitespace-pre-wrap px-10 sm:px-16">
          <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
            버튼을 클릭하면 면접이 시작됩니다
            <br />
            차분한 마음으로 대기해주시고 <br /> 질문이 나온 후{" "}
            <span className="text-red-500">{`"삐"`}</span> 소리가 나오면 답변을
            시작해주세요.
          </p>
        </div>
      </div>
      <div className="flex w-full h-full rounded-[10px] justify-center mb-5">
        <Image
          src="/images/interviewer.png"
          alt="면접관 이미지"
          width={700}
          height={600}
          className="w-full object-contain"
          priority={true}
        />
      </div>
      <Button onClick={() => setIsView(1)}>시작하기</Button>
    </section>
  );
}
