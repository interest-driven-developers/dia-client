"use client";
import React, { useState } from "react";
import isMobileDevice from "@/app/utils/isMobileDevice";
import { XMarkIcon } from "@heroicons/react/24/solid";
interface SolvingTipsModalProps {
  solveQuestion: () => void;
  closeModal: (data: boolean) => void;
  title: string;
}
export default function SolvingTipsModal({
  solveQuestion,
  closeModal,
  title,
}: SolvingTipsModalProps) {
  const isMobile = isMobileDevice();
  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 bg-opacity-70 backdrop-brightness-75">
      <div
        className={`fixed ${
          isMobile ? "bottom-0" : "top-1/2 -translate-y-1/2"
        } bg-white p-10 rounded-lg shadow-lg max-w-lg mx-auto mt-8`}
      >
        <XMarkIcon
          className="w-5 h-5 cursor-pointer absolute top-5 right-5 text-gray-500 hover:text-gray-700"
          onClick={() => closeModal(false)}
        />
        <div className="flex flex-col m-2 gap-6">
          <h1 className="text-lg sm:text-2xl font-semibold text-slate-600">
            <span className="text-indigo-500 font-bold">{title}</span> 를
            시작할까요?
          </h1>
          <p className="text-gray-500 text-xs -mt-3">
            문제의 <span>리얼한 TTS</span>가 제공되며 소요 시간은 평균
            1~2분입니다.
          </p>
          <button
            onClick={() => solveQuestion()}
            className="w-full px-4 py-2 bg-indigo-600 text-sm/relaxed font-bold text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            문제 풀기 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
