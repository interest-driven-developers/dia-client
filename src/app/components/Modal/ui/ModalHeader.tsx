import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  closeModal: () => void;
};
export const ModalHeader = ({ closeModal }: Props) => {
  return (
    <div className="flex justify-end -mt-8 mb-3">
      <XMarkIcon
        className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-700"
        onClick={closeModal}
      />
    </div>
  );
};
