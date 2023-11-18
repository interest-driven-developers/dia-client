import MagnifyingGlassPlus from "@/ui/icons/MagnifyingGlassPlus";
import React from "react";

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
          <MagnifyingGlassPlus></MagnifyingGlassPlus>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
}
