import { twMerge } from "tailwind-merge";
type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};
export const ModalButton = ({ ...props }: Props) => {
  const Styled = twMerge(
    `flex justify-center py-[13px] w-full bg-primary-600 rounded-[5px] mx-auto hover:opacity-90 whitespace-nowrap text-white font-bold text-lg sm:text-xl`,
    props.className
  );
  return (
    <button
      className={Styled}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
    >
      {props.children}
    </button>
  );
};
