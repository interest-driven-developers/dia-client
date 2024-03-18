import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children: React.ReactNode;
};
export const QuestionSubTitle = ({
  children = "Question",
  className,
}: Props) => {
  return (
    <h1
      className={twMerge(
        "text-[12px] leading-[14.4px] sm:text-lg font-semibold",
        className
      )}
    >
      {children}
    </h1>
  );
};
