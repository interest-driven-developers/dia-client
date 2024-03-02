type Props = {
  className?: string;
  onClick?: () => void;
  isStart?: boolean;
};

export default function PalseIcon(props: Props) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <rect
        width="3"
        height="10"
        fill={props.isStart ? "#591FD9" : "#E0E0E0"}
      />
      <rect
        x="7"
        width="3"
        height="10"
        fill={props.isStart ? "#591FD9" : "#E0E0E0"}
      />
    </svg>
  );
}
