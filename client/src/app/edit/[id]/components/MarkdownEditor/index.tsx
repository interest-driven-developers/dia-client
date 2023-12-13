"use client"
import { useState,useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
interface MarkdownEditorProps {
  id: string;
}

export default function MarkdownEditor({id}: MarkdownEditorProps) {
 const [script, setScript] = useState<string>(""); // 스크립트
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
 // 페이지 로딩 시, 로컬 스토리지에서 스크립트 불러오기
 useEffect(() => {
   const savedScript = localStorage.getItem(`script=${id}`);
   if (savedScript) {
     setScript(savedScript);
   }
   setIsLoading(false);
 }, [id]);

 const handleSaveScript = () => {
   // 스크립트 저장
   localStorage.setItem(`script=${id}`, script);
   // 해당 문제로 이동
   router.push(`/solve/${id}`);
 };
  // 텍스트 입력에 대한 변경 사항을 처리하는 이벤트 핸들러
  const handleChange = (newValue: string | undefined) => {
    setScript(newValue || ""); // newValue가 undefined일 경우 빈 문자열로 설정
  };

  return (
    <div className="container" data-color-mode="light">
      <MDEditor value={script} onChange={handleChange} /> {/* onChange 추가 */}
      {/* <MDEditor.Markdown
        source={value || ""}
        style={{ whiteSpace: "pre-wrap" }}
      /> */}
      <button
        className="mt-3 w-full bg-emerald-500 text-white py-2 px-4 rounded-xl shadow-md hover:bg-emerald-700 focus:outline-none"
        onClick={handleSaveScript}
      >
        수정하기
      </button>
    </div>
  );
}