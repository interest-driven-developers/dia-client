type TagProps = {
  children?: React.ReactNode;
  selected?: boolean;
};
export default function Tag(props: TagProps) {
  const tagStyle = (() => {
    if (props.selected) {
      return "bg-primary text-white";
    } else {
      return "bg-white text-primary border border-[#7C4DFF] border-solid hover:bg-primary hover:text-white";
    }
  })();

  return (
    <div
      className={`flex items-center rounded-[5px] py-2 px-[19px]   ${tagStyle}`}
    >
      <p className="text-xs sm:text-lg text-center font-semibold whitespace-nowrap leading-3">
        {props.children}
      </p>
    </div>
  );
}
