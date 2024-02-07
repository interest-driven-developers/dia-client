type Props = {
  title: string;
  description?: string;
};

export const ModalBody = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <h1 className="text-[1.375rem] leading-[1.375rem]  sm:text-2xl font-bold text-primary text-center">
        {props.title}
      </h1>
      <div className="px-[4.375rem] sm:px-24 mb-7">
        {props.description && (
          <p className="text-[#616161] text-sm sm:text-lg font-semibold leading-[18px]">
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
};
