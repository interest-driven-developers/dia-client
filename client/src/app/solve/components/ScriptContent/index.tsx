import React, { useState } from "react";

interface ScriptContentProps {
  title: string;
  description: string;
}

export default function ScriptContent({
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
    <li className="bg-white rounded-lg p-4 border-solid border-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="mt-4">
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
      </div>
    </li>
  );
}
