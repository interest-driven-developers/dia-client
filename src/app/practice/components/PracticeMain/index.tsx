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
  //   const { data: session, status } = useSession();
  const router = useRouter();
  const [practicePk, setPracticePk] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");
  const solvePractice = () => {
    router.push(`/mockinterview/practice/${practicePk}`);
  };
  const hideMenu = async () => {
    setAnimationClass("animate-fadeOutDown");
    await new Promise((r) => setTimeout(r, 600));
    setIsModalOpen(false);
  };
  const handleClick = (id: number) => {
    if (isModalOpen) {
      hideMenu();
    } else {
      setAnimationClass("animate-fadeInUp");
      setIsModalOpen(true);
      setPracticePk(id);
    }
  };
  return (
    <main className="flex flex-col gap-4 mx-auto px-5 sm:px-6 py-16 sm:w-1/2 ">
      <PracticeHeader query={props.query}></PracticeHeader>
      <PracticeList
        practiceList={props.practiceList}
        query={props.query}
        practiceClick={handleClick}
      ></PracticeList>
      <Modal
        animationClass={animationClass}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        <Modal.Header closeModal={hideMenu} />
        <Modal.Body
          title="실전 면접을 시작해볼까요?"
          description="문제의 리얼한 TTS가 제공되며 문제는 랜덤하게 주어집니다"
        />
        <Modal.Button onClick={solvePractice}>문제 풀기</Modal.Button>
      </Modal>
    </main>
  );
};
