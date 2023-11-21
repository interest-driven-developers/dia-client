import React, { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
interface ScriptContentProps {
  id: number;
  title: string;
  description: string;
}

export default function ScriptContent({
  id,
  title,
  description,
}: ScriptContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [thisTitle, setTitle] = useState(title);
  const [thisDescription, setDescription] = useState(description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <li className="p-4 ">
      <div className="flex justify-between items-center">
        <Link href={`/solve/${id}`}>
          <h1 className="text-2xl font-sans cursor-pointer hover:text-gray-500 ">
            {title}
          </h1>
        </Link>
        <div className="relative rounded-lg hover:bg-gray-100">
          <EllipsisVerticalIcon className="w-5 h-5 "></EllipsisVerticalIcon>
        </div>
      </div>
      {/* <div className="mt-4">
        {isEditing ? (
          <textarea
            value={thisDescription}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-40 p-2 border rounded-md"
          />
        ) : (
          <p className="whitespace-pre-wrap">{thisDescription}</p>
        )}
        <button
          onClick={isEditing ? handleSaveClick : handleEditClick}
          className="mt-1 px-1 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none shadow-md justify-items-end"
        >
          {isEditing ? "저장" : "수정"}
        </button>
      </div> */}
    </li>
  );
}
