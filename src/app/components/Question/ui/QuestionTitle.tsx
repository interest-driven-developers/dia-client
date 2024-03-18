import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const QuestionTitle = ({ children, className }: Props) => {
  return (
    <h1
      className={twMerge(
        "text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-[19.2px]",
        className
      )}
    >
      {children}
    </h1>
  );
};
