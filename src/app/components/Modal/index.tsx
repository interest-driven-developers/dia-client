"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
interface ModalProps {
  children?: React.ReactNode;
  closeModal: (data: boolean) => void;
}
export default function Modal({ children, closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 bg-opacity-70 backdrop-brightness-75">
      <div
        className={`fixed rounded-lg top-1/2 -translate-y-1/2 bg-white p-10 shadow-lg w-max-xl sm:max-w-lg mx-auto mt-8 dark:bg-slate-800`}
      >
        {/* <div
        className={`fixed ${
          isMobile ? "bottom-0 rounded-t-lg" : "top-1/2 -translate-y-1/2"
        } bg-white p-10 rounded-lg shadow-lg w-full sm:max-w-lg mx-auto mt-8 dark:bg-slate-800`}
      > */}
        <XMarkIcon
          className="w-5 h-5 cursor-pointer absolute top-5 right-5 text-gray-500 hover:text-gray-700"
          onClick={() => closeModal(false)}
        />
        <div className="flex flex-col m-2 gap-6">{children}</div>
      </div>
    </div>
  );
}
