import React, { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Tag from "./components/Tag";
interface QuestionProps {
  id: number;
  title: string;
  description: string;
}

export default function Question({ id, title, description }: QuestionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [thisTitle, setTitle] = useState(title);
  const [thisDescription, setDescription] = useState(description);

  return (
    <Link href={`/solve/${id}`}>
      <div className="flex flex-col bg-[#FAFAFA] rounded-lg px-5 py-4 gap-5 cursor-pointer hover:opacity-70 dark:bg-indigo-950 dark:border-indigo-800">
        <div>
          <h1 className="text-[#BDBDBD] text-[12px] sm:text-lg">Question</h1>
          <h2 className="text-[#212121] text-[18px] sm:text-2xl font-semibold dark:text-slate-100">
            {title}
          </h2>
        </div>
        <p className="text-[#616161] text-[12px] sm:text-lg mt-2">
          👥 <span className="text-[#651FFF]">{Math.floor(Math.random() * 2000) + 1}</span>명의 사용자가
          도전했습니다
        </p>
      </div>
    </Link>
  );
}
