type Props = {
  className?: string;
};

export default function CheckOnIcon(props: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <circle cx="8" cy="8" r="7" fill="#591FD9" />
      <path
        d="M5 7.77778L7.07946 10L9.2705 7.77778L11 6"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  );
}
