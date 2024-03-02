type Props = {
  onClick: () => void;
};
export const ToolTips = ({onClick} : Props) => {
  return (
    <>
      <div className="absolute top-[60px] sm:top-[66px] right-[6px] sm:right-7 bg-[#212121] z-50 rounded-[100px] px-4 py-3 ">
        <div
          className="absolute -top-2 right-3 w-0 h-0 -z-10 
  border-l-[10px] border-l-transparent
  border-b-[15px] border-[#212121]
  border-r-[10px] border-r-transparent"
        />
        <p className="text-xs text-white font-semibold">
          로그인 후 이용시 히스토리 탭 사용이 가능합니다
        </p>
      </div>
      <div className="fixed  flex z-40 overflow-hidden inset-0 ">
        <div
          className="fixed inset-0  bg-gray-100 opacity-90 h-full"
          onClick={onClick}
        ></div>
      </div>
    </>
  );
};
