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
      <div className="border rounded-lg p-4 cursor-pointer hover:opacity-70 dark:bg-indigo-950 dark:border-indigo-800">
        <h2 className="text-xl font-semibold dark:text-slate-100">{title}</h2>
        <p className="text-slate-500 mt-2">
          {Math.floor(Math.random() * 2000) + 1}명의 사용자가 도전한
          문제입니다🔥
        </p>
        <div className="flex gap-2 mt-4">
          <Tag>Medium</Tag>
          <Tag>Backend</Tag>
        </div>
      </div>
    </Link>
  );
}
