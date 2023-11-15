import React, { useState } from "react";
export default function ScriptContent() {
  
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        {/* <h1 className="text-2xl font-semibold">{title}</h1> */}
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            저장
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            수정
          </button>
        )}
      </div>
      <div className="mt-4">
        {isEditing ? (
          <textarea
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            className="w-full h-40 p-2 border rounded-md"
          />
        ) : (
          <p className="whitespace-pre-wrap">description</p>
        )}
      </div>
    </div>
  );
}
