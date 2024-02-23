"use client";
import { signIn } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
type Props = {
  onClick: () => void;
}
export default function LoginButton({ onClick }: Props) {
  return (
    <UserCircleIcon className="w-10 h-10 sm:mt-2 text-primary hover:opacity-80" onClick={onClick}></UserCircleIcon>
    );
  }
  
