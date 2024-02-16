"use client";
import React, { useState, useEffect } from "react";
import VoiceIcon from "@/app/ui/icons/VoiceIcon";
export interface HistorySectionProps {
  id: number;
  script: string;
  className?: string;
}
const maxCharacterCount = 500;

export default function HistorySection({
  script,
  id,
  className,
}: HistorySectionProps) {
  return (
    <div
      className={`relative px-5 py-6  bg-[#B8A0FA] rounded-[10px] h-[264px] ${className}`}
    >
      <div className="whitespace-pre-wrap flex">
        {script ? (
          <p className="text-[16px] text-white leading-7 sm:text-lg font-medium">
            {script}
          </p>
        ) : (
          <p className="text-[16px] text-white leading-7 sm:text-lg font-medium">
            히스토리가 없습니다.
          </p>
        )}
      </div>

      <div className="absolute bottom-4 right-4  mt-2">
        <p className="text-xs font-medium text-[#D1C4E9]">
          <span className="text-white">{script ? script.length : 0}</span>
          {`/${maxCharacterCount}`}
        </p>
      </div>
      <div className="bg-primary opacity-10 w-[92px] h-[92px] flex items-center justify-center rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <VoiceIcon></VoiceIcon>
      </div>
    </div>
  );
}
