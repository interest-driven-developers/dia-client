"use client";
import { VoiceType } from "@/types/Voice";
import React, { useState, useRef, useEffect } from "react";
import useSpeechToText from "react-hook-speech-to-text";

interface TTSPlayerProps {
  isStart: boolean;
  setDuration: (duration: number) => void;
  handleStop?: (interimResult: string, elapsedTime: number) => void;
  voice: VoiceType;
}

export default function TTSPlayer({
  isStart,
  setDuration,
  handleStop,
  voice,
}: TTSPlayerProps) {
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);
  const [time, setTime] = useState<number>(0);
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
    let timer: any;
    if (isStart) {
      playAudio1();
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isStart && handleStop) {
      stopAudio();
      handleStop(interimResult as string, time);
      stopSpeechToText();
    }
    return () => {
      clearInterval(timer);
    }
  }, [isStart, handleStop]);

  // useEffect(() => {
  //   if (!isStart && handleStop) {
  //     stopAudio();
  //     stopSpeechToText();
  //     handleStop(interimResult as string);
  //   }
  // }, [isStart, handleStop, interimResult]);
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
        src={voice.fileUrlValue}
        onEnded={handleAudio1Ended} //
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <audio ref={audio2Ref} src="/sounds/beep.mp3"></audio>
    </div>
  );
}
