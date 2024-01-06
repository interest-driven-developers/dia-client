// CustomSeparator.js
import { twMerge } from "tailwind-merge";
type CustomSeparatorProps = {
  className?: string;
};

const CustomSeparator = ({ className }: CustomSeparatorProps) => {
  return (
    <div className="relative">
      <div className="border-t border-gray-300"></div>
      <div
        className={twMerge("absolute left-0 top-0 h-full bg-primary", className)}
      ></div>
    </div>
  );
};

export default CustomSeparator;
