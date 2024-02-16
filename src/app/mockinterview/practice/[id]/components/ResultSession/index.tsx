"use client";
import React, { useState, useEffect } from "react";
import type { PracticeResult } from "@/types/PracticeResult";
interface Props {
  resultList: PracticeResult[];
}

export default function ResultSession({ resultList }: Props) {
  return <section className="">결과 페이지 입니다.</section>;
}
