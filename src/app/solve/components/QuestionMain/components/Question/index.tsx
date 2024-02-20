import Link from "next/link";
import Tag from "./components/Tag";
interface QuestionProps {
  id: number;
  title: string;
}

export default function Question({ id, title }: QuestionProps) {
  return (
    <Link href={`/solve/problem/${id}`}>
      <div className="relative flex flex-col bg-[#FAFAFA] rounded-[5px] px-5 py-4 gap-4 cursor-pointer hover:opacity-70 ">
        <div>
          <h1 className="text-[#BDBDBD] text-[12px] sm:text-lg font-semibold leading-[14.4px]">
            Question
          </h1>
          <h2 className="text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-5 ">
            {title}
          </h2>
        </div>
        <p className="text-[#616161] text-[12px] sm:text-lg font-semibold leading-[14.4px]">
          🛎️{" "}
          <span className="text-primary">
            {Math.floor(Math.random() * 2000) + 1}
          </span>
          번 도전하고 있습니다
        </p>
        <div className="absolute bottom-[10px] right-[10px] mt-2 bg-[#EEEEEE] rounded-[100px] px-[10px] py-[3px]">
          <p className="text-[#616161] text-[10px] leading-[10px] font-medium">
            <span className="text-primary text-[8px] leading-[9.6px] mr-[1px]">평균 시간</span>{" "} 01:30
          </p>
        </div>
      </div>
    </Link>
  );
}
