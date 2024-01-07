"use client";
import { VoiceType } from "@/app/types/Voice";
import React, { useState, useRef, useEffect } from "react";
import { start } from "repl";

interface TTSPlayerProps {
  isRecording: boolean;
  voices: VoiceType[];
  startSpeechToText: () => void;
}

export default function TTSPlayer({
  isRecording,
  voices,
  startSpeechToText,
}: TTSPlayerProps) {
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);

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
    if (isRecording) {
      playAudio1();
    } else {
      stopAudio();
    }
  }, [isRecording]);
  const handleAudio1Ended = () => {
    // 첫 번째 MP3 파일 재생이 끝나면 두 번째 MP3 파일 실행
    setTimeout(() => {
      playAudio2();
      startSpeechToText();
    }, 1000);
  };

  return (
    <div>
      <audio
        ref={audio1Ref}
        src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${
          !(voices === undefined) && voices[0].filePath
        }`}
        onEnded={handleAudio1Ended} // 첫 번째 MP3 파일 재생 종료 이벤트 처리
      ></audio>
      <audio ref={audio2Ref} src="/sounds/beep.mp3"></audio>
    </div>
  );
}
