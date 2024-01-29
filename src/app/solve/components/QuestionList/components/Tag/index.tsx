type TagProps = {
  children?: React.ReactNode;
  selected?: boolean;
};
export default function Tag(props: TagProps) {
  const tagStyle = (() => {
    if (props.selected) {
      return "bg-[#651FFF] text-white";
    } else {
      return "bg-white text-[#651FFF] border border-[#7C4DFF] border-solid";
    }
  })();

  return (
    <div
      className={`flex items-center rounded-[100px] py-1.5 px-[19px]  ${tagStyle}`}
    >
      <p className="text-[12px] sm:text-lg text-center font-semibold whitespace-nowrap leading-3">
        {props.children}
      </p>
    </div>
  );
}
