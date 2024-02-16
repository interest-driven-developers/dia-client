type HomeIconProps = {
  className?: string;
};
export default function HomeIcon(props: HomeIconProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <g clipPath="url(#clip0_105_70)">
        <path
          d="M24 12V24H18.5V16V15H17.5H12.5H11.5V16V24H6V12L15 5.25L24 12Z"
          stroke="#E0E0E0"
          strokeWidth="2"
          className={`group-hover:stroke-primary ${props.className}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_70">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
