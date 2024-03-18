import EqualizerIcon from "@/app/ui/icons/EqualizerIcon";
import TTSPlayer from "../../../../components/TTSPlayer";
import ShrinkingIcon from "../ShrinkingIcon";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { useEffect, useState } from "react";
import type { Question } from "@/types/Question";
import type { PracticeResult } from "@/types/PracticeResult";
import type { VoiceType } from "@/types/Voice";
import { Modal } from "@/app/components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { savePractice } from "@/app/api/savePractice";
import type { Session } from "@/types/Session";
import RetryIcon from "@/app/ui/icons/RetryCircleIcon";

type Props = {
  questionList: Question[];
  setIsView: (isView: number) => void;
  setResultList: (resultList: PracticeResult[]) => void;
};

export default function MockPraceticeSession(props: Props) {
  const { data: session } = useSession();
  const typedSession = session as Session;
  const { questionList, setIsView, setResultList } = props;
  const [questionIdx, setQuestionIdx] = useState<number>(0);
  const [practiceResultList, setPracticeResultList] = useState<
    PracticeResult[]
  >([]);
  const [duration, setDuration] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isRestart, setIsRestart] = useState<boolean>(false);
  const handleStop = async (interimResult: string, time: number) => {
    if (
      questionIdx !== null &&
      questionIdx !== undefined &&
      questionIdx < questionList.length
    ) {
      // 결과 리스트 업데이트
      if (session) {
        await savePractice({
          practiceResult: {
            interviewQuestionPkValue: questionList[questionIdx]
              .pkValue as number,
            contentValue: interimResult as string,
            typeValue: "MULTI",
            elapsedTimeValue: time,
            filePathValue: null,
          },
          accessToken: typedSession.user.access_token,
        });
      } else {
        setPracticeResultList((prev: PracticeResult[]) => {
          return [
            ...prev,
            {
              interviewQuestionPkValue: questionList[questionIdx]
                .pkValue as number,
              contentValue: interimResult as string,
              typeValue: "MULTI",
              elapsedTimeValue: time,
              filePathValue: null,
            },
          ] as PracticeResult[];
        });
      }
    }
    if (questionIdx + 1 < questionList.length) {
      setQuestionIdx((prev) => prev + 1);
      setIsStart(true);
    } else {
      setIsModalOpen(true);
    }
  };
  const handleNext = () => {
    setIsStart(false);
    // if (questionIdx + 1 < questionList.length) {
    //   setQuestionIdx((prev) => prev + 1);
    // } else {
    //   setIsModalOpen(true);
    // }
  };
  const handleRetry = () => {
    setIsRestart(true);
    setIsRecording(false);
    setElapsedTime(0);
  };
  return (
    <section className="flex flex-col w-full h-full px-4">
      {isRecording && (
        <RetryIcon
          onClick={handleRetry}
          className="absolute right-4 hover:opacity-70 cursor-pointer mb-2"
        />
      )}
      <div className="flex px-[16px] py-[17px] bg-[#212121] rounded-[10px] justify-center mb-2.5">
        <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
          마이크 버튼을 눌러 답변을 종료할 수 있습니다
        </p>
      </div>
      <div className="flex rounded-[10px] justify-center mb-20">
        <Image
          src="/images/interviewer_sm.png"
          alt="면접관 이미지"
          width={320}
          height={270}
          className="w-full "
          priority={true}
        />
      </div>
      <div className="w-full relative ">
        <EqualizerIcon />
        <ShrinkingIcon
          timeInSeconds={90}
          onClick={() => handleNext()}
          isStart={isStart}
        />
      </div>
      {questionList && questionIdx !== null && questionIdx !== undefined && (
        <TTSPlayer
          isStart={isStart}
          voice={questionList[questionIdx].voices[0] as VoiceType}
          handleStop={handleStop}
          setDuration={setDuration}
          isEnd={isModalOpen}
          isRestart={isRestart}
          setIsRecording={setIsRecording}
        ></TTSPlayer>
      )}
      {/* 모달 섹션 */}
      <Modal modalPosition="center" isOpen={isModalOpen}>
        <Modal.Body
          title="수고하셨습니다👍🏻"
          description="작성된 스크립트와 녹음된 답변을 비교하러 가볼까요?"
          className="mb-[36px]"
          descClassName="px-5 text-[18px] font-semibold text-[#616161] leading-[28px] text-center"
        />
        <Link
          href={{
            pathname: `/result/practice/1`,
            query: !session ? (practiceResultList as any) : {},
          }}
        >
          <Modal.Button className="rounded-md w-[100px] px-[81px] py-[10px]">
            다음
          </Modal.Button>
        </Link>
      </Modal>
    </section>
  );
}
