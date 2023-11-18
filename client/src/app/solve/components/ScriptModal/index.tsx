"use client";
import React, { useState } from "react";
interface ScriptContentProps {
  handleSaveScript: () => void;
  closeScriptModal: () => void;
}
export default function ScriptModal({handleSaveScript, closeScriptModal}: ScriptContentProps) {
  const [scriptTitle, setScriptTitle] = useState("");
  const [scriptDescription, setScriptDescription] = useState("");
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute bg-white p-5 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-2">스크립트 작성</h1>
        <p className="mb-4 text-gray-500">새로운 스크립트를 작성해보세요.</p>
        <input
          type="text"
          placeholder="스크립트 타이틀"
          className="w-full p-2 mb-4 border rounded-md"
          value={scriptTitle}
          onChange={(e) => setScriptTitle(e.target.value)}
        />
        <textarea
          className="w-full h-48 p-2 border rounded-md resize-none mb-4"
          placeholder="스크립트를 작성하세요."
          value={scriptDescription}
          onChange={(e) => setScriptDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            onClick={handleSaveScript}
            className="px-4 py-2 mr-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            작성
          </button>
          <button
            onClick={closeScriptModal}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
