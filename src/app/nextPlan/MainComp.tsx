"use client";
import React, { useState, useEffect } from "react";
import Recorder from "./Recorder";

interface Props {}

export default function MainComp({}: Props) {
  const [isListening, setIsListening] = useState(false);
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const initRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "음성인식이 동작하지 않는 브라우저입니다. 크롬 브라우저를 사용해주세요!"
      );
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "ko-KR";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcriptSegment;
        }
      }
      setTranscripts((prevTranscripts) => [
        ...prevTranscripts,
        finalTranscript,
      ]);
    };

    recognition.onerror = (event) => {
      setErrorMessages((prevErrorMessages) => [
        ...prevErrorMessages,
        event.error,
      ]);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setRecognition(recognition);
  };

  useEffect(() => {
    initRecognition();
    return () => {
      setRecognition(null);
      recognition?.stop();
    };
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div className="flex flex-col mx-auto pt-20 pb-8 w-screen h-[100dvh] sm:max-h-[1000px] sm:w-1/4 2xl:w-1/3">
      <h1 className="flex text-center mx-auto">테스트 페이지</h1>
      <Recorder />
    </div>
  );
}
