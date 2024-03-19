"use client";
import { PracticeHeader } from "../PracticeHeader";
import PracticeList from "../PracticeList";
import { Modal } from "@/app/components/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
type Props = {
  practiceList: any[];
  query: string;
};

export const PracticeMain = (props: Props) => {
  const router = useRouter();
  const [practicePk, setPracticePk] = useState<number>(0);
  const solvePractice = () => {
    router.push(`/mockinterview/practice/${practicePk}`);
  };

  const handleClick = (id: number) => {
      setPracticePk(id);
  };
  return (
    <main className="flex flex-col gap-4 mx-auto px-4 sm:px-6 py-16 sm:w-1/2 ">
      <PracticeHeader query={props.query}></PracticeHeader>
      <PracticeList
        practiceList={props.practiceList}
        query={props.query}
        practiceClick={handleClick}
      ></PracticeList>
    </main>
  );
};
