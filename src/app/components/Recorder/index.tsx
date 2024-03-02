'use client'
import React, { useEffect, useState, useCallback } from "react";
import EqualizerIcon from "@/app/ui/icons/EqualizerIcon";
import { MicroIcon } from "@/app/ui/icons/MicroIcon";
import { TestVoicePlayer } from "@/app/settings/TestVoicePlayer";
type Props = {
  setAudioBlob: (blob: Blob) => void;
};
const Recorder: React.FC<Props> = (props: Props) => {
  const { setAudioBlob } = props;
  const [stream, setStream] = useState<any>();
  const [media, setMedia] = useState<any>();
  const [onRec, setOnRec] = useState<boolean>(true);
  const [source, setSource] = useState<any>();
  const [analyser, setAnalyser] = useState<any>();
  const [audioUrl, setAudioUrl] = useState<any>();

  const onRecAudio = () => {
    // 음원 정보를 담은 노드를 생성하거나 음원을 실행 또는 디코딩
    const audioContext = new (window.AudioContext || AudioContext)();
    // Javascript를 통해 음원의 진행상태에 직접 접근한다.
    const analyser = audioContext.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream: any) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여 줌
      const source = audioContext.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
    }

    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e: any) {
        // 1분(60초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 60) {
          stream.getAudioTracks().forEach((track: any) => track.stop());
          mediaRecorder.stop();
          // 메서드가 호출된 노드 연결 해제
          analyser.disconnect();
          audioContext.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e: any) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e: any) {
      setAudioBlob(e.data);
      // setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach((track: any) => track.stop());

    // 미디어 캡쳐 중지
    media.stop();
    // 메서드가 호출된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
    // 저장하기
  };
  // const onSubmitAudioFile = useCallback(() => {
  //   if (audioUrl) {
  //     console.log(URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
  //   }
  //   // File 생성자를 사용해 파일로 변환
  //   const sound = new File([audioUrl], 'soundBlob', {
  //     lastModified: new Date().getTime(),
  //     type: 'audio',
  //   });
  //   console.log(sound); // File 정보 출력
  // }, [audioUrl]);
  // const startRecording = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //     setMediaStream(stream);
  //     const mediaRecorder = new MediaRecorder(stream);
  //     //  setAudioChunks([]); // 새로운 녹음 세션 시작 시 초기화
  //     mediaRecorder.ondataavailable = (e) => {
  //       if (e.data.size > 0) {
  //         setAudioChunks((chunks) => [...chunks, e.data]);
  //       }
  //     };
  //     mediaRecorder.start();
  //     setIsRecording(true);
  //   } catch (error) {
  //     console.error("Error accessing microphone:", error);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col px-9 py-[27px] w-full h-full max-h-[180px] bg-primary-100 rounded-[5px] relative mb-4">
        <h1 className="text-[16px] font-semibold leading-[19.2px] text-primary-400 text-center">
          다이아는 개발자 모의면접 플랫폼입니다
        </h1>
        <div className="absolute inset-0 flex justify-center items-center mt-3">
          <div className="bg-primary-600 p-3 w-14 h-14 flex justify-center items-center rounded-full z-50 relative hover:opacity-75">
            <div
              className={`w-full h-full absolute ring-8 ring-primary-200 rounded-full ${
                !onRec ? "animate-ping" : ""
              }`}
              onClick={onRec ? onRecAudio : offRecAudio}
            ></div>
            <MicroIcon className="w-[17px] h-[24px]" />
          </div>
          <EqualizerIcon className="w-full h-full absolute inset-0 animate-pulse z-40" />
        </div>
      </div>
    </>
  );
};

export default Recorder;
