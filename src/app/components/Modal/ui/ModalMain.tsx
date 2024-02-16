"use client";
import OverlayClickHandler from "@/utils/OverlayClickHandler";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
type Props = {
  children: React.ReactNode;
  animationClass: string;
  isOpen: boolean;
  setIsOpen: any;
};

export const ModalMain = ({ ...props }: Props) => {
  const [modalEl, setModalEl] = useState<HTMLElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (typeof window === "undefined") return <></>;

  if (!props.isOpen) return null;
  return mounted ? (
    createPortal(
      <div
        className={`fixed pin inset-0 flex items-end justify-center z-50 overflow-hidden`}
      >
        <div className="fixed inset-0 bg-[#424242] opacity-90"></div>
        <div
          className={`fixed bg-white px-6 py-14 rounded-t-[20px] shadow-lg sm:w-[680px] mx-auto mt-8 ${props.animationClass}`}
        >
          <OverlayClickHandler onClick={() => props.setIsOpen(false)}>
            {props.children}
          </OverlayClickHandler>
        </div>
      </div>,
      document.getElementById("modal-root") as HTMLElement
    )
  ) : (
    <></>
  );
};
