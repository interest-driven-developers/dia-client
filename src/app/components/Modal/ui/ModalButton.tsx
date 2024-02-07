type Props = {
    onClick: () => void;
    children: React.ReactNode;
};
export const ModalButton = ({ ...props }: Props) => {
  return (
    <button
      className="flex justify-center w-full px-[127px] py-[13px] bg-primary rounded-[100px]  items-center hover:opacity-90 whitespace-nowrap "
      onClick={() => props.onClick()}
    >
      <p className="text-white font-bold text-lg sm:text-xl">{props.children}</p>
    </button>
  );
};
