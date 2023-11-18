import React from "react";

interface HistoryContainerProps {
  title: string;
  description: string;
  date: string;
}

export default function HistoryContainer({
  title,
  description,
  date,
}: HistoryContainerProps) {
  return (
    <div className="max-w-3xl p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-sans mb-2">{title}</h2>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
}
