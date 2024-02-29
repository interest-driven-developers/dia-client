"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
interface HeaderProps {
  handleBack?: any;
  title: string
}
export default function Header({ handleBack,title }: HeaderProps) {

  return (
    <header className="flex px-4 items-center mb-[40px]">
      <div onClick={handleBack}>
        <ChevronLeftIcon className="h-6 w-6 text-[#212121] cursor-pointer rounded-md hover:opacity-50" />
      </div>
      <h1 className="text-lg sm:text-xl font-bold text-center text-primary flex-grow mr-6">
        {title}
      </h1>
    </header>
  );
}
