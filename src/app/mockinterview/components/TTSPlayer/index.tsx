"use client";
import { VoiceType } from "@/types/Voice";
import React, { useState, useRef, useEffect } from "react";
import useSpeechToText from "react-hook-speech-to-text";

interface TTSPlayerProps {
  isStart: boolean;
  setDuration: (duration: number) => void;
  handleStop?: (interimResult: string, time: number) => void;
  voice: VoiceType;
  isEnd?: boolean;
  setIsRecording?: (isRecording: boolean) => void;
  isRestart: boolean;
}

export default function TTSPlayer({
  isStart,
  setDuration,
  handleStop,
  voice,
  isEnd,
  setIsRecording,
  isRestart,
}: TTSPlayerProps) {
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);
  const [isAudio1Playing, setIsAudio1Playing] = useState<boolean>(false);
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
      // audio1Ref.current!.pause(); // 재생 전에 일단 중지
      audio2Ref.current.play();
    }
  };

  const stopAudio = () => {
    if (audio1Ref.current) {
      audio1Ref.current.pause();
      // setIsAudio1Playing(false);
    }
    if (audio2Ref.current) {
      audio2Ref.current.pause();
    }
  };

  useEffect(() => {
    let timer: any;
    // 초기상태 초기화
    setResults([]);
    stopAudio();
    stopSpeechToText();
    if (isStart) {
      setTimeout(() => {
        playAudio1();
      }, 1000);
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
      stopSpeechToText();
    };
  }, [isStart, voice, isRestart]);

  useEffect(() => {
    if (handleStop && !isStart && !isEnd) {
      stopAudio();
      stopSpeechToText();
      let resultString = "";
      if (results.length > 0) {
        results.forEach((result: any) => {
          resultString = resultString + " " + result.transcript;
        });
      }
      if (resultString) {
        handleStop(resultString, time);
        return;
      }
      handleStop(interimResult as any, time);
    }
    return () => {
      stopSpeechToText();
    };
  }, [isStart, handleStop]);

  const handleAudio1Ended = () => {
    setTimeout(() => {
      playAudio2();
    }, 1000);
  };
  const handleLoadedMetadata = () => {
    if (audio1Ref.current) {
      const audioDuration = audio1Ref.current.duration;
      setDuration(audioDuration);
    }
  };
  const handleAudio2Ended = () => {
    stopAudio();
    setIsRecording && setIsRecording(true);
    startSpeechToText();
  };
  if (error) return <p>Web Speech API is not available in this device 🤷‍</p>;
  return (
    <div>
      {voice && (
        <audio
          ref={audio1Ref}
          src={voice.fileUrlValue}
          onEnded={handleAudio1Ended} //
          onLoadedMetadata={handleLoadedMetadata}
          preload="true"
        ></audio>
      )}
      <audio
        ref={audio2Ref}
        onEnded={handleAudio2Ended}
        src="/sounds/beep.mp3"
      ></audio>
    </div>
  );
}
