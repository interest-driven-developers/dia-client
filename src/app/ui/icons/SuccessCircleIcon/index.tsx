type Props = {
  className?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
};

export default function SuccessCircleIcon(props: Props) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.8" cx="30" cy="30" r="30" fill="#E2D7FF" />
      <circle cx="30" cy="30" r="24" fill="#591FD9" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.2925 23.8305C42.6814 24.2315 42.6665 24.8733 42.2593 25.2557L27.2635 39.3417C26.8721 39.7094 26.2602 39.7023 25.8774 39.3256L17.7243 31.3025C17.3262 30.9107 17.3262 30.2688 17.7243 29.877L19.835 27.8C20.2241 27.417 20.8486 27.417 21.2378 27.8L26.644 33.12L38.8296 21.6737C39.2275 21.2999 39.8518 21.3144 40.232 21.7064L42.2925 23.8305Z"
        fill="white"
      />
    </svg>
  );
}
