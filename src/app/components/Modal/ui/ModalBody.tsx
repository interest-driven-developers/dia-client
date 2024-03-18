import { twMerge } from "tailwind-merge";
import InfoIcon from "@/app/ui/icons/InfoIcon";
import SuccessCircleIcon from "@/app/ui/icons/SuccessCircleIcon";
type Props = {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descClassName?: string;
  mainIcon?: "info" | "success" | "error" | "warning";
};

export const ModalBody = ({ ...props }: Props) => {
  const mainStyled = twMerge(
    `flex flex-col justify-center w-full h-full mx-auto`,
    props.className
  );
  const mainIcon = () => {
    switch (props.mainIcon) {
      case "info":
        return <InfoIcon />;
      case "success":
        return <SuccessCircleIcon />;
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      default:
        return null;
    }
  }
  return (
    <div className={mainStyled}>
      <h1 className="flex items-center justify-center mb-2.5 text-[22px]">
        {mainIcon()}
      </h1>
      <h1
        className={twMerge(
          "text-[1.375rem] leading-[1.375rem]  sm:text-2xl font-bold text-primary-600 text-center mb-4",
          props.titleClassName
        )}
      >
        {props.title}
      </h1>
      {props.description && (
        <div
          className={twMerge(
            "px-[4.375rem]  mb-7 text-primary-gray-900 text-sm sm:text-lg font-normal leading-[22px]",
            props.descClassName
          )}
        >
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
};
