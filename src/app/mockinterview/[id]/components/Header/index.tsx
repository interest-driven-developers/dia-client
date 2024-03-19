"use client";
import SettingIcon from "@/app/ui/icons/SettingIcon";
import ChevronLeftIcon from "@/app/ui/icons/ChevronLeftIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
interface HeaderProps {
  handleBack?: any;
  title: string;
  isSetting?: boolean;
  className?: string;
}
export default function Header({
  handleBack,
  title,
  isSetting = false,
  className,
  
}: HeaderProps) {
  const router = useRouter();
  return (
    <header className={twMerge("flex px-7 items-center mb-[40px]", className)}>
      <ChevronLeftIcon
        className="h-3 w-3 text-[#212121] cursor-pointer hover:opacity-50"
        onClick={handleBack ? handleBack : () => router.back()}
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
