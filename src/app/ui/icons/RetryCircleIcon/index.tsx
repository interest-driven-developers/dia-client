type Props = {
  className?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
};

export default function RetryCircleIcon(props: Props) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <circle cx="14" cy="14" r="14" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3677 8.64951L16.3155 10.5582L14.8845 11.2786L12.9591 7.40176L16.776 5L17.624 6.36603L16.2678 7.21939C19.5816 8.20379 22 11.2903 22 14.9456C22 19.3939 18.4183 23 14 23C9.58172 23 6 19.3939 6 14.9456C6 13.376 6.44675 11.909 7.21955 10.6693L8.57475 11.5256C7.95722 12.5162 7.6 13.6877 7.6 14.9456C7.6 18.5043 10.4654 21.3891 14 21.3891C17.5346 21.3891 20.4 18.5043 20.4 14.9456C20.4 11.8595 18.2451 9.28017 15.3677 8.64951Z"
        fill="#591FD9"
      />
    </svg>
  );
}
