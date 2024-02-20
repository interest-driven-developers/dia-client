import EqualizerIcon from "@/app/ui/icons/EqualizerIcon";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { useEffect, useState } from "react";
import type { Question } from "@/types/Question";
import type { PracticeResult } from "@/types/PracticeResult";
import type { VoiceType } from "@/types/Voice";
import ShrinkingIcon from "@/app/mockinterview/practice/[id]/components/ShrinkingIcon";
import { savePractice } from "@/app/api/savePractice";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import type { Session } from "@/types/Session";
import { Modal } from "@/app/components/Modal";
// const TTSPlayer = dynamic(
//   () => import("@/app/mockinterview/components/TTSPlayer"),
//   { ssr: false }
// );
import TTSPlayer from "@/app/mockinterview/components/TTSPlayer";
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

  const handleStop = async (interimResult: string, elapsedTime: number) => {
    setIsModalOpen(true);
    console.log('녹음 결과' , interimResult, elapsedTime)
    // 결과물이 있을때만 저장
    if (!interimResult) return;
    // if (session) {
    //   await savePractice({
    //     practiceResult: {
    //       interviewQuestionPkValue: question.pkValue as number,
    //       contentValue: interimResult as string,
    //       typeValue: "SINGLE",
    //       elapsedTimeValue: elapsedTime,
    //       filePathValue: null,
    //     },
    //     accessToken: typedSession.user.access_token,
    //   }).then(() => {
    //     setIsModalOpen(true);
    //   });
    // }
    // else {
    //   const practiceResult: PracticeResult = {
    //     interviewQuestionPkValue: question.pkValue as number,
    //     contentValue: interimResult as string,
    //     typeValue: "SINGLE",
    //     elapsedTimeValue: elapsedTime,
    //     filePathValue: null,
    //   }
    //   localStorage.setItem(`history=${question.pkValue}`, JSON.stringify(practiceResult));
    // }
    
  };

  return (
    <section className="w-full h-screen">
      <div className="w-full sm:w-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <EqualizerIcon />
      </div>
      <ShrinkingIcon timeInSeconds={90} onClick={() => setIsStart(false)} />
      {question && (
        <TTSPlayer
          isStart={isStart}
          handleStop={handleStop}
          setDuration={setDuration}
          voice={question.voices[0]}
        ></TTSPlayer>
      )}

      <div className="fixed bottom-10 left-0 right-0 flex px-2 py-[17px] mx-4 w-auto sm:w-2/5 sm:mx-auto bg-[#212121] rounded-[10px] justify-center ">
        <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
          마이크 버튼을 눌러 답변을 완료해주세요.
        </p>
      </div>
      {/* 모달 섹션 */}
      <Modal modalPosition="center" isOpen={isModalOpen}>
        <Modal.Body
          title="수고하셨습니다👍🏻"
          description="작성된 스크립트와 녹음된 답변을 비교하러 가볼까요?"
          className="mb-[36px]"
          descClassName="px-5 text-[18px] font-semibold text-[#616161] leading-[28px] text-center"
        />
        <Modal.Button
          onClick={() => router.push(`/result/${question.pkValue}`)}
          className="rounded-md w-[100px] px-[81px] py-[10px]"
        >
          다음
        </Modal.Button>
      </Modal>
    </section>
  );
}
