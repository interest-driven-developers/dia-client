"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MainContainer from "./components/MainContainer";
import { getPracticeDetails } from "@/app/api/getPracticeDetails";

export default function Main() {
  const params = useSearchParams();
  const id = params?.get("id");
  const [practiceDetails, setPracticeDetails] = useState<any>(null);
  useEffect(() => {
    getPracticeDetailsData();
  }, [id]);

  const getPracticeDetailsData = async () => {
    const result = await getPracticeDetails(id);
    setPracticeDetails(result);
  };

  return (
    <main className="h-screen max-w-3xl mx-auto flex flex-col justify-center items-center">
      <MainContainer {...practiceDetails} />
    </main>
  );
}
