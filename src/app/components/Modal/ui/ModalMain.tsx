type Props = {
  children: React.ReactNode;
  animationClass: string;
  isOpen: boolean;
};

export const ModalMain = ({ ...props }: Props) => {
  if (!props.isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-end justify-center z-50   backdrop-brightness-50 ">
      <div
        className={`fixed bg-white px-6 py-14 rounded-t-[20px] shadow-lg sm:w-[680px] mx-auto mt-8 ${props.animationClass}`}
      >
        {props.children}
      </div>
    </div>
  );
};
