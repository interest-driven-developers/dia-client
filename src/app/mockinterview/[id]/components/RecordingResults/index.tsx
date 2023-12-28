"use client";
import { ResultType } from "react-hook-speech-to-text";
interface RecordingResultsProps {
  handleRestartRecording: () => void;
  // handleSaveScript: () => void;
  description: string;
  transcripts: string;
}

export default function RecordingResults({
  description,
  transcripts,
  handleRestartRecording,
}: RecordingResultsProps) {
  const handleSaveScript = () => {};
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 p-4 gap-2">
        <div className="col-span-2">
          <h2 className="text-xl font-sans mb-4">기존 스크립트</h2>
          <div className="p-4 h-64 overflow-y-auto w-full bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500">
            <p>{description}</p>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-sans mb-4">음성 인식 결과</h2>
          <p className="text-xs text-gray-500 -mt-4">
            * 음성인식의 정확도는 100%가 아닌점 참고해주세요{" "}
          </p>
          <div className="p-4 h-64 overflow-y-auto w-full bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-emerald-500">
            {<p> {transcripts}</p>}
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2 mr-4">
        <button
          onClick={handleRestartRecording}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          다시 녹음 🗣️
        </button>
        <button
          // onClick={handleSaveScript}
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          결과 저장 💾 (구현중)
        </button>
      </div>
    </div>
  );
}
