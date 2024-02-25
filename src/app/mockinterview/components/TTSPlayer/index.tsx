"use client";
import { VoiceType } from "@/types/Voice";
import React, { useState, useRef, useEffect } from "react";
import useSpeechToText from "react-hook-speech-to-text";

interface TTSPlayerProps {
  isStart: boolean;
  setDuration: (duration: number) => void;
  handleStop?: (interimResult: string, elapsedTime: number) => void;
  voice: VoiceType;
  isEnd?: boolean;
}

export default function TTSPlayer({
  isStart,
  setDuration,
  handleStop,
  voice,
  isEnd,
}: TTSPlayerProps) {
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);
  const [time, setTime] = useState<number>(0);
  const [isAudio1Playing, setIsAudio1Playing] = useState<boolean>(false);

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

  // const playAudio1 = () => {
  //   if (audio1Ref.current) {
  //     const playPromise = audio1Ref.current.play();
  //     if (playPromise !== undefined) {
  //       playPromise
  //         .then((_) => {
  //           setIsAudio1Playing(true);
  //         })
  //         .catch((error) => {
  //           console.log("error", error);
  //         });
  //     }
  //   }
  // };

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
    if (isStart) {
      playAudio1();
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      stopSpeechToText();
      clearInterval(timer);
    };
  }, [isStart, voice]);

  useEffect(() => {
    if (handleStop && !isStart && !isEnd) {
      stopAudio();
      stopSpeechToText();
      handleStop(interimResult as any, time);
    }
    return () => {
      stopSpeechToText();
    };
  }, [isStart, handleStop]);
  // const handleAudio1Ended = () => {
  //   if (!isAudio1Playing) {
  //     return;
  //   }
  //   setIsAudio1Playing(false);
  //   playAudio2();
  //   // setTimeout(() => {
  //   //   startSpeechToText();
  //   // }, 1000);
  // };
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
