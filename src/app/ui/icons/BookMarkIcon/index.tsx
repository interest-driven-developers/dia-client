type Props = {
  className?: string;
  onClick?: () => void;
};
export default function BookMarkIcon({ className, onClick }: Props) {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M10.2857 0H1.71429C0.771429 0 0.00857162 0.75 0.00857162 1.66667L0 15L6 12.5L12 15V1.66667C12 0.75 11.2286 0 10.2857 0Z"
        fill="#E0E0E0"
        className="group-hover:fill-primary-600"
      />
    </svg>
  );
}
