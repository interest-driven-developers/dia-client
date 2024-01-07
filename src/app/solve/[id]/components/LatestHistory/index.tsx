const dummyData =
  "HTTP (Hypertext Transfer Protocol)는 웹 페이지와 데이터를 전송하는 데 사용되는 텍스트 기반 프로토콜입니다. ";
export default function LatestHistory() {
  return (
    <div className="flex flex-col">
      <h1 className="text-md sm:text-xl font-bold text-slate-700 ml-auto">
         <span className="text-2xl">🗣️</span>
      </h1>
      <div className="w-full leading-1.5 p-4 bg-purple-100 text-purple-800 rounded-s-xl rounded-ee-xl">
        <div className="whitespace-pre-wrap ">
          {dummyData ? (
            <p className="text-base font-bold">{dummyData}</p>
          ) : (
            //   <Link href={`/edit/${id}`}>
            <div className="flex justify-center cursor-pointer hover:opacity-50">
              <p className="text-base font-bold text-gray-500">
                스크립트가 작성되지 않았습니다. <br />
                지금 바로{" "}
                <span className="animate-pulse text-indigo-500"></span>
                해보세요✏️
              </p>
            </div>
            //   </Link>
          )}
        </div>
      </div>
    </div>
  );
}
