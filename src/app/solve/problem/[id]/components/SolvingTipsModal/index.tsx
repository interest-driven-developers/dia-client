"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
interface SolvingTipsModalProps {
  solveQuestion: () => void;
  closeModal: () => void;
  animationClass: string;
}
export default function SolvingTipsModal({
  solveQuestion,
  closeModal,
  animationClass,
}: SolvingTipsModalProps) {
  return (
    <div className="fixed inset-0 flex items-end justify-center z-50  bg-[##616161] backdrop-brightness-75 ">
      <div
        className={`fixed bg-white px-9 py-14 rounded-t-[20px] shadow-lg sm:w-[680px] mx-auto mt-8 ${animationClass}`}
      >
        <XMarkIcon
          className="w-6 h-6 cursor-pointer absolute top-5 right-5 text-gray-500 hover:text-gray-700"
          onClick={() => closeModal()}
        />
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-xl sm:text-2xl font-bold text-primary text-center">
            모의 면접을 시작해볼까요?
          </h1>
          <div className="px-14 sm:px-24 mb-7">
            <p className="text-[#616161] text-sm sm:text-lg font-semibold leading-4">
              문제의 리얼한 TTS가 제공되며 소요 시간은 평균 1~2분입니다.
            </p>
          </div>
        </div>
        <button
          className="flex justify-center w-full px-[127px] py-[13px] bg-primary rounded-[100px]  items-center hover:opacity-90 whitespace-nowrap"
          onClick={() => solveQuestion()}
        >
          <p className="text-white font-bold text-lg sm:text-xl">문제 풀기</p>
        </button>
      </div>
    </div>
  );
}
