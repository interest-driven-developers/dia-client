import { twMerge } from "tailwind-merge";
type Props = {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descClassName?: string;
};

export const ModalBody = ({ ...props }: Props) => {
  const mainStyled = twMerge(
    `flex flex-col gap-6 justify-center`,
    props.className
  );
  return (
    <div className={mainStyled}>
      <h1
        className={twMerge(
          "text-[1.375rem] leading-[1.375rem]  sm:text-2xl font-bold text-primary text-center",
          props.titleClassName
        )}
      >
        {props.title}
      </h1>
      {props.description && (
        <div className={twMerge("px-[4.375rem] sm:px-24 mb-7 text-[#616161] text-sm sm:text-lg font-semibold leading-[18px]",props.descClassName)}>
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
};
