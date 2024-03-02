"use client";
import { signIn } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import UserIcon from "@/app/ui/icons/UserIcon";
type Props = {
  onClick: () => void;
}
export default function LoginButton({ onClick }: Props) {
  return (
    <UserIcon
      className="w-6 h-6 sm:w-8 sm:h-8 mx-auto my-auto cursor-pointer  text-primary-600 hover:opacity-80"
      onClick={onClick}
    />
  );
  }
