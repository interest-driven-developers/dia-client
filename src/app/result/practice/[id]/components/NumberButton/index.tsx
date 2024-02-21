interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function NumberButton(props: Props) {
  const { children, isSelected } = props;
  const selectStyle = "bg-primary text-white";
  const defaultStyle =
    "bg-white text-primary border border-primary hover:bg-primary hover:text-white cursor-pointer";
  const buttonStyle = isSelected ? selectStyle : defaultStyle;

  return (
    <div
      onClick={props.onClick}
      className={`flex flex-shrink-0 ${buttonStyle} px-1.5 py-1.5 rounded-[5px] w-[30px] h-[30px] items-center justify-center text-xs font-semibold`}
    >
      {children}
    </div>
  );
}
