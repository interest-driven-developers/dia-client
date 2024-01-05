import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

type PaginationProps = {
  pageNum?: number;
  contentNum: number;
};

export default function Pagination(props: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  const totalPages = Math.ceil(props.contentNum / 7); // 7개의 컨텐츠가 있는 페이지 수 계산
  const pageButtons = [];

  // 현재 페이지 주변에 표시할 페이지 번호 개수
  const displayPageCount = 5;

  // 현재 페이지 주변의 페이지 번호 범위 계산
  const startPage = Math.max(1, currentPage - Math.floor(displayPageCount / 2));
  const endPage = Math.min(totalPages, startPage + displayPageCount - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <Link
        key={i}
        className={`h-6 w-6 flex items-center justify-center  text-slate-900 hover:text-slate-500 ${
          currentPage === i
            ? "decoration-indigo-500 decoration-2 underline font-bold"
            : ""
        }`}
        href="#"
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Link>
    );
  }

  return (
    <div className="flex  items-center justify-center gap-x-4">
      <Link className="cursor-pointer hover:opacity-70" href="#">
        <ChevronDoubleLeftIcon className="h-5 w-5 text-indigo-400 rounded-3xl p-1 bg-gray-100"></ChevronDoubleLeftIcon>
      </Link>
      <Link className="cursor-pointer hover:opacity-70" href="#">
        <ChevronLeftIcon className="h-7 w-7 text-indigo-400 rounded-3xl p-1 bg-gray-100"></ChevronLeftIcon>
      </Link>
      <div className="flex rounded-lg p-0.5 bg-gray-100 gap-1">
        {pageButtons}
      </div>
      <Link className="cursor-pointer hover:opacity-70" href="#">
        <ChevronRightIcon className="h-7 w-7 text-indigo-400 rounded-3xl p-1 bg-gray-100"></ChevronRightIcon>
      </Link>
      <Link className="cursor-pointer hover:opacity-70" href="#">
        <ChevronDoubleRightIcon className="h-5 w-5 text-indigo-400 rounded-3xl p-1 bg-gray-100"></ChevronDoubleRightIcon>
      </Link>
    </div>
  );
}
