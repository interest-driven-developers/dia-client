"use client";
import OverlayClickHandler from "@/utils/OverlayClickHandler";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen?: any;
  animationClass?: string;
  isOverlayClickClose?: boolean;
  modalPosition?: "center" | "top" | "bottom";
};

export const ModalMain = (props: Props) => {
  const {
    children,
    isOverlayClickClose = false,
    isOpen,
    setIsOpen,
    animationClass,
    modalPosition = "bottom",
  } = props;
  const [mounted, setMounted] = useState<boolean>(false);

  const modalPositionClass = () => {
    switch (modalPosition) {
      case "center":
        return "pin-y items-center";
      case "top":
        return "pin-t items-start";
      case "bottom":
        return "pin-b items-end";
      default:
        return "";
    }
  };

  const modalStyleClass = () => {
        switch (modalPosition) {
          case "center":
            return "rounded-[20px] w-[320px] h-[356px] py-[106px]";
          case "top":
            return "pin-t items-start";
          case "bottom":
            return "pin-b items-end";
          default:
            return "";
        }
  }

  const modalPositionStyle = twMerge(
    `fixed pin inset-0 flex items-end justify-center z-50 overflow-hidden`,
    modalPositionClass()
  );
  const modalStyle = twMerge(
    `fixed bg-white px-6 py-14 rounded-t-[20px] shadow-lg  sm:w-[450px] mx-auto mt-8  ${animationClass}`,
    modalStyleClass()
  );
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (typeof window === "undefined") return <></>;

  if (!isOpen) return null;
  return mounted ? (
    createPortal(
      <div className={modalPositionStyle}>
        <div className="fixed inset-0 bg-[#424242] opacity-90"></div>
        <div className={modalStyle}>
          {isOverlayClickClose ? (
            <OverlayClickHandler onClick={() => setIsOpen(false)}>
              {children}
            </OverlayClickHandler>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>,
      document.getElementById("modal-root") as HTMLElement
    )
  ) : (
    <></>
  );
};
