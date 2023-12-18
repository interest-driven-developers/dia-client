import React, { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
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
    <li className={twMerge("p-5", "p-3")}>
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
    </li>
  );
}
