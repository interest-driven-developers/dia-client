interface LatestHistoryProps {
  text: string;
}
export default function LatestHistory({ text }: LatestHistoryProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-md sm:text-xl font-bold text-slate-700 ml-auto">
        <span className="text-2xl">🗣️</span>
      </h1>
      <div className="w-full leading-1.5 p-4 bg-purple-100 text-purple-800 rounded-s-xl rounded-ee-xl">
        <div className="whitespace-pre-wrap ">
          {text ? (
            <p className="text-base font-bold">{text}</p>
          ) : (
            <div className="flex flex-col justify-center items-center cursor-pointer hover:opacity-50">
              <p className="text-base font-bold text-gray-500">
                히스토리가 없네요🥲
              </p>
              <p className="text-base font-bold text-gray-500">
                지금 바로{" "}
                <span className="animate-pulse text-indigo-500">문제를</span>{" "}
                풀어보세요🔥
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-500 text-xs mt-1 ml-auto">
        * 기본값은 가장 <span className="text-purple-500 font-bold">최근의</span>{" "}
        히스토리입니다.
      </p>
    </div>
  );
}
