"use client";
import React, { useState, useEffect } from "react";

import Spinner from "@/app/components/Spinner";
import Link from "next/link";
interface QuestionListProps {
  questionList: any;
}
export default function QuestionList({ questionList }: QuestionListProps) {

  return (
    <>
      <h1 className="text-3xl font-sans mt-3 mb-3">문제 별 모의 면접</h1>
      <div className="mb-6">
        <p className="text-gray-500 text-sm -mt-3">
          총 {questionList.length}개의 문제가 있습니다.
        </p>
      </div>
      <div className="grid w-full mt-2 bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500">
        {questionList.map((question: any) => (
          <div key={question.pk} className="p-4 hover:opacity-70">
            <Link
              href={`/mockinterview/${question.pk}`}
              className="text-gray-500"
            >
              {`Q${question.pk}: ${question.title}`}{" "}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
