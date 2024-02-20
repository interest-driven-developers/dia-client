"use client";
import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="relative w-full">
      <input
        className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
        placeholder="풀고 싶은 문제 제목 검색"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText.length > 0 && (
        <span
          className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer hover:opacity-70"
          onClick={() => setSearchText("")}
        >
          <XCircleIcon className="h-4 w-4 text-indigo-400"></XCircleIcon>
        </span>
      )}

      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hover:opacity-70">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"></MagnifyingGlassIcon>
      </span>
    </div>
  );
}
