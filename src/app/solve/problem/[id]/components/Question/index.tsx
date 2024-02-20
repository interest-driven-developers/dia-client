import BookMarkIcon from "@/app/ui/icons/BookMarkIcon";
interface QuestionProps {
  title: string;
}

export default function Question({ title }: QuestionProps) {
  return (
    <div className="flex relative flex-col bg-[#FAFAFA] rounded-[5px] px-4 py-[18px]">
      <div
        className="absolute top-1 right-1 cursor-pointer group"
        onClick={() => alert("기능 구현 중에 있습니다")}
      >
        <BookMarkIcon ></BookMarkIcon>
      </div>
      <div>
        <h1 className="text-[#BDBDBD] text-[12px] sm:text-lg font-semibold leading-3">
          Question
        </h1>
        <h2 className="text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-[19.2px]">
          {title}
        </h2>
      </div>
    </div>
  );
}
