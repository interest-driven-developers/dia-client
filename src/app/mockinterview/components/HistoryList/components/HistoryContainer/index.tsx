import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
interface HistoryContainerProps {
  id: number;
  title: string;
  description: string;
  date: string;
  handleHistoryModal: (id: number) => void;
}

export default function HistoryContainer({
  id,
  title,
  description,
  date,
  handleHistoryModal,
}: HistoryContainerProps) {
  return (
    <div className="max-w-3xl p-4 ">
      <div className="flex justify-between">
        <h2 className="text-xl font-sans mb-2">{title}</h2>
        <div
          className="cursor-pointer hover:opacity-50"
          onClick={() => handleHistoryModal(id)}
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-black"></MagnifyingGlassIcon>
        </div>
      </div>
      <p className="font-sans -mt-3 text-xs text-gray-500">{date}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
