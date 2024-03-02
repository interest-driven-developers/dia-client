type Props = {
  className?: string;
  onClick?: () => void;
  isStart?: boolean;
};

export default function StartIcon(props: Props) {
  return (
    <svg
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        d="M9 6L-4.89399e-07 11.1962L-3.51373e-08 0.803847L9 6Z"
        fill={props.isStart ? "#591FD9" : "#E0E0E0"}
      />
    </svg>
  );
}
