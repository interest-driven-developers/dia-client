import EqualizerIcon from "@/app/ui/icons/EqualizerIcon";
import EqualizerTestIcon from "@/app/ui/icons/EqualizerIcon";
import TTSPlayer from "../TTSPlayer";
import ShrinkingIcon from "../ShrinkingIcon";
import useSpeechToText, { ResultType } from "react-hook-speech-to-text";
import { useEffect, useState } from "react";
import type { Question } from "@/types/Question";
import type { PracticeResult } from "@/types/PracticeResult";
import type { VoiceType } from "@/types/Voice";
type Props = {
  questionList: Question[];
  setIsView: (isView: number) => void;
  setResultList: (resultList: PracticeResult[]) => void;
};

export default function PraceticeSession(props: Props) {
  const { questionList, setIsView, setResultList } = props;
  const [questionIdx, setQuestionIdx] = useState<number>(0);
  const [practiceResult, setPracticeResult] = useState<PracticeResult[]>([]);
  const [duration, setDuration] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(true);
  const [isStop, setIsStop] = useState<boolean>(false);

  const handleStop = (interimResult: string) => {
    if (
      questionIdx !== null &&
      questionIdx !== undefined &&
      questionIdx < questionList.length
    ) {
      // 결과 리스트 업데이트
      setPracticeResult((prev: PracticeResult[]) => {
        return [
          ...prev,
          {
            interviewQuestionPkValue: questionList[questionIdx]
              .pkValue as number,
            contentValue: interimResult as string,
            typeValue: "MULTI",
            elapsedTimeValue: 60,
            filePathValue: null,
          },
        ] as PracticeResult[];
      });

      // 질문 인덱스 업데이트
      //   setQuestionIdx((prev) => prev + 1);

      // 멈춤 상태 업데이트
      setIsStop(false);
    }
  };
  console.log("지금까지 대답한 내용", practiceResult);
  console.log("여기서 확인한 문제번호는? ", questionIdx);
  const handleNext = () => {
    setIsStop(true);
    if (questionIdx + 1 < questionList.length) {
      setQuestionIdx((prev) => prev + 1);
    } else {
      setIsView(2);
    }
  };
  console.log("---------------리렌더링 됩니다.-----------------------------");

  return (
    <section className="w-full h-screen">
      <div className="w-full sm:w-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <EqualizerTestIcon />
      </div>
      <ShrinkingIcon
        timeInSeconds={duration + 2}
        onClick={() => handleNext()}
      />
      {questionList && questionIdx !== null && questionIdx !== undefined && (
        <TTSPlayer
          isStart={true}
          isStop={isStop}
          questionList={questionList}
          //   startSpeechToText={startSpeechToText}
          handleStop={handleStop}
          setDuration={setDuration}
          questionIdx={questionIdx}
        ></TTSPlayer>
      )}

      <div className="fixed bottom-10 left-0 right-0 flex px-2 py-[17px] mx-4 w-auto sm:w-2/5 sm:mx-auto bg-[#212121] rounded-[10px] justify-center ">
        <p className="text-[16px] leading-[22px] sm:text-lg font-medium text-center text-white">
          마이크 버튼을 눌러 답변을 완료해주세요.
        </p>
      </div>
    </section>
  );
}
