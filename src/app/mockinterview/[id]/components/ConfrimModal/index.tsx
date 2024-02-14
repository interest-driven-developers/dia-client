"use client";
import { Modal } from "@/app/components/Modal";
import { useRouter } from "next/navigation";
interface ConfirmModalProps {
  //   solveQuestion: () => void;
  closeModal: (data: boolean) => void;
  //   title: string;
}
export default function ConfirmModal({ closeModal }: ConfirmModalProps) {
  const router = useRouter();
  return (
    // <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
    //   <Modal.Header closeModal={closeModal} />
    //   <Modal.Body
    //     title="시험을 중단하시나요?"
    //     description="모든 진행 상황이 사라지며, 다시 시작할 수 없습니다."
    //   />
    //   <Modal.Button onClick={() => router.back()}>종료하기 ✋</Modal.Button>
    // </Modal>
  );
}
