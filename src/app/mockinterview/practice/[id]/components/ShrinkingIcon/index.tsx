import { useState, useEffect } from "react";
import { MicroIcon } from "@/app/ui/icons/MicroIcon";
import { ProgressRing } from "../ProgressRing";
type Props = {
  timeInSeconds: number;
  onClick: () => void;
  isStart: boolean;
};

const ShrinkingIcon = ({ timeInSeconds, onClick,isStart }: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
      <ProgressRing radius={71} stroke={10} progress={timeInSeconds} isStart={isStart} />
      <div
        onClick={onClick}
        className={`bg-[#F8F3FF] rounded-full w-[92px] h-[92px] p-[20px] flex justify-center items-center cursor-pointer group-hover:opacity-70`}
      >
        <MicroIcon />
      </div>
    </div>
  );
};
export default ShrinkingIcon;
