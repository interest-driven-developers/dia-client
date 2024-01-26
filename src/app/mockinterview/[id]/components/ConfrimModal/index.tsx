"use client";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
interface ConfirmModalProps {
  //   solveQuestion: () => void;
  closeModal: (data: boolean) => void;
  //   title: string;
}
export default function ConfirmModal({ closeModal }: ConfirmModalProps) {
  const router = useRouter();
  return (
    <Modal closeModal={closeModal}>
      <>
        <h1 className="text-lg sm:text-2xl font-semibold text-slate-600">
          <span className="text-indigo-500 font-bold">
            시험을 중단하시나요?
          </span>
        </h1>
        <p className="text-gray-500 text-xs -mt-3 dark:text-slate-200">
          모든 진행 상황이 사라지며, 다시 시작할 수 없습니다.
        </p>
        <button
          onClick={() => router.back()}
          className="w-full px-4 py-2 bg-indigo-600 text-sm/relaxed font-bold text-white rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          종료하기 ✋
        </button>
      </>
    </Modal>
  );
}
