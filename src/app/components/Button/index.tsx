"use client";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
