"use client";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
export default function Button({onClick, className, children}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex justify-center w-full px-3 py-[13px] bg-primary-600 rounded-[5px] items-center hover:opacity-90 whitespace-nowrap text-white font-bold text-[16px] leading-[19.2px] sm:text-xl",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
