"use client";
import React, { useEffect, useState, useCallback } from "react";
import EqualizerIcon from "@/app/ui/icons/EqualizerIcon";
import { MicroIcon } from "@/app/ui/icons/MicroIcon";
import { TestVoicePlayer } from "@/app/settings/TestVoicePlayer";
import Image from "next/image";
import { MicroCircleIcon } from "@/app/ui/icons/MicroCircleIcon";
type Props = {
  // setAudioBlob: (blob: Blob) => void;
};
const Recorder: React.FC<Props> = (props: Props) => {
  // const { setAudioBlob } = props;
  const [stream, setStream] = useState<any>();
  const [media, setMedia] = useState<any>();
  const [onRec, setOnRec] = useState<boolean>(false);
  const [source, setSource] = useState<any>();
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
    type: string;
  } | null>(null);
  const onRecAudio = () => {
    console.log("녹음 시작");

    setOnRec(true);
    const audioContext = new (window.AudioContext || AudioContext)();

    function makeSound(stream: any) {
      const source = audioContext.createMediaStreamSource(stream);
      setSource(source);
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);
    });
  };

  const offRecAudio = () => {
    console.log("녹음 종료");
    media.ondataavailable = function (e: any) {
      const blob = new Blob([e.data], { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      setFileInfo({
        name: "recording.wav",
        size: blob.size,
        type: blob.type,
      });

      setAudioBlob(blob);
      setAudioUrl(url);
      setOnRec(false);
    };

    stream.getAudioTracks().forEach((track: any) => track.stop());
    media.stop();
    source.disconnect();
  };

  // const onSubmitAudioFile = useCallback(() => {
  //   if (audioUrl) {
  //     console.log(audioUrl); // 오디오 파일의 URL 출력
  //   }
  //   // File 생성자를 사용해 파일로 변환
  //   const sound = new File([audioUrl], "soundBlob.wav", {
  //     lastModified: new Date().getTime(),
  //     type: "audio/wav",
  //   });
  // }, [audioUrl]);

  useEffect(() => {
    return () => {
      if (media) {
        media.stop();
      }
      if (stream) {
        stream.getTracks().forEach((track: any) => track.stop());
      }
    };
  }, [stream]);

  return (
    <>
      <div className="flex flex-col px-9 py-8 w-full h-full max-h-[187px] bg-primary-100 rounded-[5px] relative mb-4">
        <h1 className="text-[16px] font-semibold leading-[19.2px] text-primary-500 text-center">
          녹음이 완료되면 아래에 녹음 파일이 생성됩니다
        </h1>
        <div className="absolute inset-0 flex justify-center items-center mt-[40px]">
          <div className="absolute flex mx-auto my-auto justify-center items-center rounded-full z-50  hover:opacity-75">
            <div
              className={`w-full h-full absolute ring-8 ring-primary-200 rounded-full ${
                onRec ? "animate-ping" : ""
              }`}
              onClick={onRec ? offRecAudio : onRecAudio}
            ></div>
            <MicroCircleIcon></MicroCircleIcon>
          </div>
        </div>
      </div>
      {audioUrl && (
        <>
          <audio controls src={audioUrl} className="mt-4 w-full">
            Your browser does not support the audio element.
          </audio>
          <a
            href={audioUrl}
            download="recording.wav"
            className="text-blue-500 underline mt-2 block"
          >
            Download Recording
          </a>
        </>
      )}
      {fileInfo && (
        <div className="mt-2">
          <h1>파일정보</h1>
          <p>
            <strong>File Name:</strong> {fileInfo.name}
          </p>
          <p>
            <strong>File Size:</strong> {(fileInfo.size / 1024).toFixed(2)} KB
          </p>
          <p>
            <strong>File Type:</strong> {fileInfo.type}
          </p>
        </div>
      )}
    </>
  );
};

export default Recorder;
