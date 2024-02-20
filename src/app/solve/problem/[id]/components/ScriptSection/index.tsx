"use client";
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import CustomSeparator from "@/app/ui/CustomSeparator";
import EditIcon from "@/app/ui/icons/EditIcon";
import { useSession } from "next-auth/react";
import { getQuestionScript } from "@/app/api/getQuestionScript";
import { editQuestionScript } from "@/app/api/editQuestionScript";
import { saveQuestionScript } from "@/app/api/saveQuestionScript";
import { twMerge } from "tailwind-merge";
import type { Session } from "@/types/Session";
import type { Script } from "@/types/Script";
export interface ScriptSectionProps {
  // isEditing: boolean;
  // setIsEditing: any;
  id: number;
  className?: string;
}

const maxCharacterCount = 500;

export default function ScriptSection({
  // isEditing,
  // setIsEditing,÷
  id,
  className,
}: ScriptSectionProps) {
  const Styled = twMerge(
    `relative px-5 py-6  bg-[#F8F3FF] rounded-[10px] h-[438px]`,
    className
  );

  const { data: session, status } = useSession();
  const typedSession = session as Session;
  const [script, setScript] = useState<Script | undefined>(undefined);
  const [prevScript, setPrevScript] = useState<Script | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const getScript = await getQuestionScript(
          id,
          typedSession?.user.access_token
        );
        if (getScript) setScript(getScript.contentValue);
      } else {
        const savedScript = localStorage.getItem(`script=${id}`) ;
        if (savedScript) {
          setScript(savedScript);
        }
      }
    };

    fetchData();
    setIsLoading(false);
  }, [id, typedSession, session]);

  const handleSaveScript = async () => {
    if (session && session.user) {
      if (prevScript) {
        await editQuestionScript({
          scriptPkValue: id,
          contentValue: script?.contentValue as string,
          accessToken: typedSession?.user.access_token,
        });
      } else {
        await saveQuestionScript({
          questionPkValue: id,
          contentValue: script as string,
          accessToken: typedSession?.user.access_token,
        });
      }
    } else {
      localStorage.setItem(`script=${id}`, script as string);
    }
    setIsEditing(false);
    setPrevScript(script as string);
  };

  return (
    <div className={Styled}>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center justify-items-center mt-24 r-8">
          <Spinner />
        </div>
      ) : isEditing ? (
        <>
          <textarea
            value={script}
            placeholder="여기에 스크립트를 작성해주세요."
            onChange={(e) => setScript(e.target.value)}
            className="w-full h-40 p-2 rounded-md bg-[#F8F3FF] focus:ring-blue-500"
          />
          <div className="absolute bottom-4 left-4 flex items-center">
            <XCircleIcon
              onClick={() => {
                setIsEditing(false);
                setScript(prevScript);
              }}
              className="w-5 h-5 text-red-500 cursor-pointer hover:opacity-50"
            ></XCircleIcon>
            <CheckCircleIcon
              onClick={() => handleSaveScript()}
              className="w-5 h-5 text-primary cursor-pointer hover:opacity-50"
            ></CheckCircleIcon>
          </div>
        </>
      ) : (
        <div className="whitespace-pre-wrap flex">
          {script ? (
            <p className="text-[16px] text-[#424242] leading-7 sm:text-lg font-normal">
              {script}
            </p>
          ) : (
            <p className="text-[16px] text-gray-500 leading-7 sm:text-lg font-normal">
              스크립트가 작성되지 않았습니다. <br />
              지금 바로 작성 해보세요 !
            </p>
          )}
        </div>
      )}
      {script && (
        <div className="absolute bottom-4 right-4 mt-2">
          <p className="text-xs font-medium text-[#D1C4E9]">
            <span className="text-[#9575CD]">{script.length}</span>
            {`/${maxCharacterCount}`}
          </p>
        </div>
      )}
      {!isEditing && (
        <div
          className="absolute bottom-[18px] left-6 mt-2 cursor-pointer hover:opacity-70"
          onClick={() => {
            setIsEditing(true);
            setPrevScript(script as string);
          }}
        >
          <EditIcon></EditIcon>
        </div>
      )}
    </div>
  );
}
