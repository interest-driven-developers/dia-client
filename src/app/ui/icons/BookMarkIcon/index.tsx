type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
};
export default function BookMarkIcon({ className, onClick }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_362_1271)">
        <path
          d="M17 4H7C5.9 4 5.01 4.85 5.01 5.88889L5 21L12 18.1667L19 21V5.88889C19 4.85 18.1 4 17 4Z"
          fill="#E0E0E0"
          className="group-hover:fill-primary-600"
        />
      </g>
      <defs>
        <clipPath id="clip0_362_1271">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
