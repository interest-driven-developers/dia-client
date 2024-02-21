"use client";
import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Spinner from "@/app/components/Spinner";
import EditIcon from "@/app/ui/icons/EditIcon";
import { useSession } from "next-auth/react";
import { getQuestionScript } from "@/app/api/getQuestionScript";
import { editQuestionScript } from "@/app/api/editQuestionScript";
import { saveQuestionScript } from "@/app/api/saveQuestionScript";
import { twMerge } from "tailwind-merge";
import type { Session } from "@/types/Session";
import type { Script } from "@/types/Script";
export interface Props {
  id: number;
  className?: string;
}

const maxCharacterCount = 500;

export default function ScriptSection({ id, className }: Props) {
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
        if (getScript) setScript(getScript);
      } else {
        const savedScriptString = localStorage.getItem(`script=${id}`);
        const savedScriptObj = savedScriptString
          ? JSON.parse(savedScriptString)
          : { contentValue: "" };
        setScript(savedScriptObj);

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
          contentValue: script?.contentValue as string,
          accessToken: typedSession?.user.access_token,
        });
      }
    } else {
      const savedScript = JSON.stringify(script);
      localStorage.setItem(`script=${id}`, savedScript);
    }
    setIsEditing(false);
    setPrevScript(script);
  };

  const handleSectionClick = () => {
    if (isEditing || script) return;
    setIsEditing(true);
  };
  return (
    <div
      className={twMerge(
        `flex flex-col relative bg-[#F8F3FF] rounded-[5px] w-full h-[438px]`,
        className
      )}
      onClick={handleSectionClick}
    >
      <div className="flex-1 overflow-y-auto px-4 py-3 no-scrollbar">
        {isLoading ? (
          <Spinner />
        ) : isEditing ? (
          <>
            <textarea
              value={script?.contentValue}
              placeholder="여기에 스크립트를 작성해주세요."
              onChange={(e) =>
                setScript(
                  (prevScript) =>
                    ({
                      ...prevScript,
                      contentValue: e.target.value,
                    } as Script)
                )
              }
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
          <div className="whitespace-pre-wrap flex w-full">
            {script && script.contentValue ? (
              <p className="text-[14px] text-[#424242] leading-[22px] sm:text-lg font-normal">
                {script.contentValue}
              </p>
            ) : (
              <p className="text-[14px] text-[#D1C4E9] leading-7 sm:text-lg font-normal">
                스크립트를 클릭 후 작성해주세요
              </p>
            )}
          </div>
        )}
      </div>

      {script && (
        <div className="absolute bottom-2 right-4 ">
          <p className="text-xs leading-7 font-medium text-[#D1C4E9]">
            <span className="text-[#9575CD]">{script.contentValue.length}</span>
            {` / ${maxCharacterCount}`}
          </p>
        </div>
      )}
      {!isEditing && (
        <div
          className="absolute bottom-[18px] left-6 mt-2 cursor-pointer hover:opacity-70"
          onClick={() => {
            setIsEditing(true);
            setPrevScript(script);
          }}
        >
          <EditIcon></EditIcon>
        </div>
      )}
    </div>
  );
}
