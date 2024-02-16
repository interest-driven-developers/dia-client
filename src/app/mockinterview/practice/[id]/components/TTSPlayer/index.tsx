"use client";
import { VoiceType } from "@/types/Voice";
import React, { useState, useRef, useEffect } from "react";
import { start } from "repl";
import dynamic from "next/dynamic";
// const useSpeechToText = dynamic(() => import("react-hook-speech-to-text"), {
//   ssr: false,
// });
import useSpeechToText from "react-hook-speech-to-text";
import { Question } from "@/types/Question";

interface TTSPlayerProps {
  isStart: boolean;
  questionList: Question[];
  // startSpeechToText: () => void;
  setDuration: (duration: number) => void;
  handleStop?: (interimResult: string) => void;
  questionIdx: number;
  isStop?: boolean;
}

export default function TTSPlayer({
  isStart,
  questionList,
  questionIdx,
  // startSpeechToText,
  setDuration,
  isStop,
  handleStop,
}: TTSPlayerProps) {
  console.log("잘들어오나?", questionList);
  console.log("이번 문제는 ", questionIdx);
  // const [questionIdx, setQuestionIdx] = useState<number>(0);
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);
  if (typeof window !== "undefined") {
    
  }
  const {
    error,
    interimResult,
    setResults,
    results,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const playAudio1 = () => {
    if (audio1Ref.current) {
      audio1Ref.current.play();
    }
  };

  const playAudio2 = () => {
    if (audio2Ref.current) {
      audio2Ref.current.play();
    }
  };

  const stopAudio = () => {
    if (audio1Ref.current) {
      audio1Ref.current.pause();
    }
    if (audio2Ref.current) {
      audio2Ref.current.pause();
    }
  };

  useEffect(() => {
    if (isStart) {
      playAudio1();
    } else {
      stopAudio();
      stopSpeechToText();
    }
  }, [isStart, questionIdx, handleStop]);

  useEffect(() => {
    if (isStop && handleStop) {
      stopAudio();
      stopSpeechToText();
      handleStop(interimResult);
    }
  }, [isStop, handleStop, interimResult]);

  const handleAudio1Ended = () => {
    // 첫 번째 MP3 파일 재생이 끝나면 두 번째 MP3 파일 실행
    setTimeout(() => {
      playAudio2();
      startSpeechToText();
    }, 1000);
  };
  const handleLoadedMetadata = () => {
    if (audio1Ref.current) {
      const audioDuration = audio1Ref.current.duration;
      setDuration(audioDuration);
    }
  };

  if (error) return <p>Web Speech API is not available in this device 🤷‍</p>;

  return (
    <div>
      <audio
        ref={audio1Ref}
        src={questionList[questionIdx].voices[0].fileUrlValue}
        onEnded={handleAudio1Ended} //
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <audio ref={audio2Ref} src="/sounds/beep.mp3"></audio>
    </div>
  );
}
