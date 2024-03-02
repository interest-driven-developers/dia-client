"use client";
import SettingIcon from "@/app/ui/icons/SettingIcon";
import ChevronLeftIcon from "@/app/ui/icons/ChevronLeftIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface HeaderProps {
  handleBack?: any;
  title: string;
  isSetting?: boolean;
}
export default function Header({
  handleBack,
  title,
  isSetting = false,
}: HeaderProps) {
  return (
    <header className="flex px-7 items-center mb-[40px]">
      <ChevronLeftIcon
        className="h-3 w-3 text-[#212121] cursor-pointer hover:opacity-50"
        onClick={handleBack}
      />
      <h1 className="text-lg sm:text-xl font-bold text-center text-primary-600 flex-grow">
        {title}
      </h1>
      {isSetting && (
        <Link href="/settings">
          <SettingIcon className="h-5 w-5 text-[#212121] cursor-pointer hover:opacity-50" />
        </Link>
      )}
    </header>
  );
}
