"use client";
import { signIn } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
type Props = {
  onClick: () => void;
}
export default function LoginButton({ onClick }: Props) {
  return (
    <UserCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto my-auto text-primary hover:opacity-80" onClick={onClick}></UserCircleIcon>
    );
  }
  
