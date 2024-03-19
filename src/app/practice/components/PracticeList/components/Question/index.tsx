import Link from "next/link";
import Tag from "./components/Tag";
interface QuestionProps {
  id: number;
  title: string;
  onClick?: () => void;
}

export default function Question({ id, title, onClick }: QuestionProps) {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col bg-primary-gray-50 rounded-[5px] px-5 py-4 gap-4 cursor-pointer hover:opacity-70 "
    >
      <div>
        <h1 className="text-[#FDDA23] text-[12px] sm:text-lg font-semibold leading-[14.4px]">
          실전연습
        </h1>
        <h2 className="text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-5 ">
          {title}
        </h2>
      </div>
      <p className="text-primary-gray-600 text-[12px] sm:text-lg font-semibold leading-[14.4px]">
        🛎️{" "}
        <span className="text-[#FDDA23]">
          {Math.floor(Math.random() * 2000) + 1}
        </span>
        번 도전하고 있습니다
      </p>
      <div className="absolute bottom-[10px] right-[10px] mt-2 bg-white rounded-[100px] px-[10px] py-[3px]">
        <p className="text-primary-gray-600  text-[10px] leading-[10px] font-medium">
          <span className="text-[#FDDA23] text-[8px] leading-[9.6px] mr-[1px]">
            평균 응답시간
          </span>{" "}
          --:--
        </p>
      </div>
    </div>
  );
}
