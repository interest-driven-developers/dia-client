'use client'
import { XMarkIcon } from "@heroicons/react/20/solid";

interface HistoryModalProps {
  title: string;
  description: string;
  date: string;
  handleCloseHistoryModal : () => void;
}
export default function HistoryModal({
  title,
  description,
  date,
  handleCloseHistoryModal,
}: HistoryModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute bg-white p-5 rounded-lg shadow-lg w-300 h-00 mt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-sans">{title}</h1>
          <div className="cursor-pointer hover:opacity-50" onClick={()=> handleCloseHistoryModal()}>
            <XMarkIcon className="w-5 h-5 "/>
          </div>
        </div>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}
