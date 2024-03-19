interface Props {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function NumberButton(props: Props) {
  const { children, isSelected } = props;
  const selectStyle = "bg-white text-primary-600 border border-primary-600";
  const defaultStyle =
    "border border-primary-gray-300 text-primary-gray-300 hover:border-primary-600 hover:text-primary-600 cursor-pointer";
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
