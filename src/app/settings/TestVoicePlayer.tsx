import React, { useRef, useState, useEffect } from "react";
import StartIcon from "../ui/icons/StartIcon";
import PalseIcon from "../ui/icons/PalseIcon";
type Props = {
  className?: string;
  src: string;
};

export const TestVoicePlayer = (props: Props) => {
  const { className, src } = props;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isPalse, setIsPalse] = useState(false);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        const calculatedProgress = (currentTime / duration) * 100;
        setProgress(calculatedProgress);
        setAnimationFrameId(requestAnimationFrame(updateProgress));
      }
    };

    setAnimationFrameId(requestAnimationFrame(updateProgress));

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [src]);

  const playAudio = () => {
    if (!props.src) alert("오디오가 없습니다.");
    if (audioRef.current) {
      audioRef.current.play();
        setIsStart(true);
        setIsPalse(false);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
        setIsStart(false);
        setIsPalse(true);
    }
  };

  return (
    <div className="flex flex-col w-full bg-primary-gray-50 h-[100px] rounded-[5px] relative px-4 py-6 gap-4">
      {/* 프로그레스 바 */}
      <div className="relative">
        <div className="w-full h-1 bg-gray-300  overflow-hidden">
          <div
            className="absolute top- left-0 bg-primary-600 rounded-full"
            style={{
              width: `${progress}%`,
              height: "100%",
            }}
          ></div>
          <div
            className="absolute top-0.5 bg-primary-600 w-2.5 h-2.5 rounded-full -translate-x-2 -translate-y-1/2"
            style={{ left: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-row w-full  gap-2">
        <div className="bg-white p-3 flex justify-center items-center rounded-full">
          <StartIcon
            className="w-3 h-3"
            onClick={playAudio}
            isStart={isStart}
          ></StartIcon>
        </div>
        <div className="bg-white p-3 flex justify-center items-center rounded-full">
          <PalseIcon
            className="w-3 h-3 mx-auto my-auto"
            onClick={pauseAudio}
            isStart={isPalse}
          ></PalseIcon>
        </div>
      </div>
      <audio src={src} ref={audioRef}></audio>
    </div>
  );
};
