interface QuestionProps {
  title: string;
}

export default function Question({ title }: QuestionProps) {
  return (
    <div className="flex flex-col bg-[#FAFAFA] rounded-lg px-5 py-4 gap-5">
      <div>
        <h1 className="text-[#BDBDBD] text-[12px] sm:text-lg font-semibold leading-3">
          Question
        </h1>
        <h2 className="text-[#212121] text-[18px] mt-0.5 sm:text-2xl font-bold leading-5 ">
          {title}
        </h2>
      </div>
    </div>
  );
}
