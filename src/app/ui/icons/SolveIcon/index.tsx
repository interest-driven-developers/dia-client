type SolveIconProps = {
  className?: string;
};

export default function SolveIcon(props: SolveIconProps) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_105_79)">
        <path
          d="M9.375 6.66333C11.0642 6.66333 12.7081 6.9413 14 7.46046V23.3846C13.376 23.2329 12.5585 23.0675 11.6047 22.9519C9.72925 22.7245 7.28959 22.6855 4.75 23.3531V7.46046C6.04195 6.9413 7.68576 6.66333 9.375 6.66333ZM20.625 6.66334C22.3142 6.66334 23.958 6.94131 25.25 7.46047V23.3846C24.626 23.233 23.8085 23.0675 22.8547 22.9519C20.9792 22.7245 18.5396 22.6855 16 23.3531V7.46046C17.2919 6.9413 18.9358 6.66333 20.625 6.66334Z"
          stroke="#E0E0E0"
          strokeWidth="2"
          className={`group-hover:stroke-primary ${props.className}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_79">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
