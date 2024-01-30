"use client";
import React, { useState } from "react";
type SelctButtonsProps = {
  isView: number;
  setIsView: (isView: number) => void;
};
export default function SelectButtons(props: SelctButtonsProps) {
  let firstButtonStyle, secondButtonStyle;
  switch (props.isView) {
    case 0:
      firstButtonStyle =
        "bg-primary flex-grow px-1.5 py-2 rounded-[100px] text-white";
      break;
    case 1:
      secondButtonStyle =
        "bg-primary flex-grow px-1.5 py-2 rounded-[100px] text-white";
      break;
    default:
      firstButtonStyle =
        "bg-primary flex-grow px-1.5 py-2 rounded-[100px] text-white";
      break;
  }

  return (
    <div className="flex flex-row items-center gap-1 px-1.5 py-2 justify-center mx-auto bg-gray-100 rounded-[100px] w-[216px] h-[40px] mb-4">
      <button
        className={`flex-grow text-xs font-semibold text-center text-[#BDBDBD] ${firstButtonStyle}`}
        onClick={() => props.setIsView(0)}
      >
        현재 답변
      </button>
      <button
        className={`flex-grow text-xs font-semibold text-center text-[#BDBDBD] ${secondButtonStyle}`}
        onClick={() => props.setIsView(1)}
      >
        히스토리
      </button>
    </div>
  );
}
