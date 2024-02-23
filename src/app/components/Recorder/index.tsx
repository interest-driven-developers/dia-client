import React, { useEffect, useState } from "react";
type Props = {
    isStart: boolean;
};
const AudioRecorder: React.FC<Props> = (props: Props) => {
  const { isStart } = props;
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMediaStream(stream);
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setAudioChunks((chunks) => [...chunks, e.data]);
        }
      };
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
    }
    setIsRecording(false);
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    setAudioBlob(audioBlob);
  };

  useEffect(() => {
    if (isStart) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isStart]);

  return <></>;
};

export default AudioRecorder;
