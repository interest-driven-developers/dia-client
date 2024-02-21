"use client";
interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-center w-full px-[128px] py-[13px] bg-primary rounded-[5px]  items-center hover:opacity-90 whitespace-nowrap "
      onClick={() => props.onClick()}
    >
      <p className="text-white font-bold text-lg leading-[1.35rem] sm:text-xl">
        {props.children}
      </p>
    </button>
  );
}
