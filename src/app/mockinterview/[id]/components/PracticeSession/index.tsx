import EqualizerIcon from "@/app/ui/icons/EqualizerIcon";
import { useEffect, useState, useCallback } from "react";
import type { Question } from "@/types/Question";
import type { PracticeResult } from "@/types/PracticeResult";
import type { HistoryType } from "@/types/History";
import ShrinkingIcon from "@/app/mockinterview/practice/[id]/components/ShrinkingIcon";
import { savePractice } from "@/app/api/savePractice";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import type { Session } from "@/types/Session";
import { Modal } from "@/app/components/Modal";
import TTSPlayer from "@/app/mockinterview/components/TTSPlayer";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Header from "../Header";
import { MicroIcon } from "@/app/ui/icons/MicroIcon";
import EqualizerLargeIcon from "@/app/ui/icons/EqualizerLargeIcon";
import convertToHourMinute from "@/utils/convertToHourMinute";

type Props = {
  question: Question;
  setIsView: (isView: number) => void;
};

export default function PraceticeSession(props: Props) {
  const { question, setIsView } = props;
  const router = useRouter();
  const { data: session } = useSession();
  const typedSession = session as Session;
  const [duration, setDuration] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(true);
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const [isEndModalOpen, setIsEndModalOpen] = useState<boolean>(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);
  const [practiceResult, setPracticeResult] = useState<HistoryType | undefined>(
    undefined
  );
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const handleStop = useCallback(
    (interimResult: string, time:number) => {
      if (isCancel) {
        setIsCancelModalOpen(true);
        return;
      }
      setIsEndModalOpen(true);
      // 결과물이 있을때만 저장
      if (!interimResult) return;
      if (session) {
        savePractice({
          practiceResult: {
            interviewQuestionPkValue: question.pkValue as number,
            contentValue: interimResult as string,
            typeValue: "SINGLE",
            elapsedTimeValue: time,
            filePathValue: null,
          },
          accessToken: typedSession.user.access_token,
        });
      } else {
        const practiceResult: HistoryType = {
          pkValue: question.pkValue as number,
          question: question,
          contentValue: interimResult as string,
          typeValue: "SINGLE",
          createdTimeValue: new Date().toISOString(),
          elapsedTimeValue: time,
          filePathValue: null,
        };
        setPracticeResult(practiceResult);
      }
    },
    [question, session, isCancel]
  );

  const handleBack = () => {
    setIsCancel(true);
    setIsStart(false);
  };
  useEffect(() => {
    let timer: any;
    if (isStart) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);
  return (
    <>
      <Header handleBack={handleBack} title="개별 모의연습" />
      <section className="flex flex-col w-full h-[96%]">
        <div className="flex flex-col px-4 gap-4">
          <div className="flex px-[16px] py-[17px] bg-primary-gray-900 rounded-[10px] justify-center">
            <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
              마이크 버튼을 눌러 답변을 종료할 수 있습니다
            </p>
          </div>
          <div className="flex rounded-[10px] justify-center mb-16">
            {window.innerHeight < 700 ? (
              <Image
                src="/images/interviewer_sm.png"
                alt="면접관 이미지"
                width={320}
                height={360}
                className="w-full h-full"
                priority={true}
              />
            ) : (
              <Image
                src="/images/interviewer.png"
                alt="면접관 이미지"
                width={320}
                height={360}
                className="w-full max-h-[360px]"
                priority={true}
              />
            )}
          </div>
        </div>

        <div className="w-full relative mt-auto text-center my-auto">
          <div className="absolute inset-0 flex justify-center items-center w-full">
            <EqualizerLargeIcon
              className={`z-40 ${isStart ? "animate-pulse" : ""}`}
            />
            <div
              className="absolute bg-primary-600 p-3 w-[60px] h-[60px] flex mx-auto my-auto justify-center items-center rounded-full z-50  hover:opacity-75"
              onClick={
                isStart ? () => setIsStart(false) : () => setIsStart(true)
              }
            >
              <div
                className={`w-full h-full absolute ring-8 ring-primary-200 rounded-full ${
                  isStart ? "animate-ping" : ""
                }`}
              ></div>
              <h1 className="text-center font-semibold text-primary-600 absolute mx-auto my-auto -top-8 mr-1">
                {convertToHourMinute(elapsedTime)}
              </h1>
              <MicroIcon className="w-[21px] h-[30px]" />
            </div>
          </div>
        </div>
        {question && (
          <TTSPlayer
            isStart={isStart}
            handleStop={handleStop}
            setDuration={setDuration}
            voice={question.voices[0]}
          ></TTSPlayer>
        )}
        {/* 저장 모달 섹션 */}
        <Modal modalPosition="center" isOpen={isEndModalOpen}>
          <Modal.Header closeModal={() => setIsEndModalOpen(false)} />
          <Modal.Body
            title="수고하셨습니다"
            description="작성된 스크립트와 녹음된 답변을 비교하러 가볼까요?"
            descClassName="px-5 text-[18px] font-semibold text-[#616161] leading-[28px] text-center"
            mainIcon="success"
          />
          <Link
            href={{
              pathname: `/result/${question.pkValue}`,
              query: !session ? (practiceResult as any) : {},
            }}
            className="w-full"
          >
            <Modal.Button className="rounded-md">다음</Modal.Button>
          </Link>
        </Modal>
        {/* 저장 모달 섹션 */}
        <Modal modalPosition="center" isOpen={isCancelModalOpen}>
          <Modal.Header closeModal={() => setIsCancelModalOpen(false)} />
          <Modal.Body
            title="종료하시겠습니까?"
            description="지금 연습을 종료하면 답변한 내용은 저장되지 않습니다 그래도 종료하시겠습니까?"
            descClassName="px-8 text-[18px] font-semibold text-[#616161] leading-[28px] text-center"
            mainIcon="info"
          />

          <Modal.Button className="rounded-md" onClick={() => setIsView(0)}>
            종료하기
          </Modal.Button>
        </Modal>
      </section>
    </>
  );
}
