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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [practiceResult, setPracticeResult] = useState<HistoryType | undefined>(
    undefined
  );
  const handleStop = useCallback(
    (interimResult: string, elapsedTime: number) => {
      setIsModalOpen(true);
      // 결과물이 있을때만 저장
      if (!interimResult) return;
      if (session) {
        savePractice({
          practiceResult: {
            interviewQuestionPkValue: question.pkValue as number,
            contentValue: interimResult as string,
            typeValue: "SINGLE",
            elapsedTimeValue: elapsedTime,
            filePathValue: null,
          },
          accessToken: typedSession.user.access_token,
        });
      } else {
        const practiceResult: HistoryType = {
          contentValue: interimResult as string,
          typeValue: "SINGLE",
          createdTimeValue: new Date().toISOString(),
          elapsedTimeValue: elapsedTime,
          filePathValue: null,
        };
        setPracticeResult(practiceResult);
      }
    },
    [question, session]
  );
  return (
    <section className="w-full h-screen">
      <div className="flex px-[16px] py-[17px] m-5 bg-[#212121] rounded-[10px] justify-center">
        <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
          마이크 버튼을 눌러 답변을 종료할 수 있습니다
        </p>
      </div>
      <div className="flex rounded-[10px] justify-center mb-16 m-4">
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
        <ShrinkingIcon timeInSeconds={90} onClick={() => setIsStart(false)} />
      </div>
      {question && (
        <TTSPlayer
          isStart={isStart}
          handleStop={handleStop}
          setDuration={setDuration}
          voice={question.voices[0]}
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
            pathname: `/result/${question.pkValue}`,
            query: !session ? practiceResult as any : {},
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
