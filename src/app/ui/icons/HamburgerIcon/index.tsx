type Props = {
  className?: string;
};
export default function HamburgerIcon(props: Props) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2H0V0H16V2ZM16 8H0V6H16V8ZM0 14H16V12H0V14Z"
        fill="#757575"
      />
    </svg>
  );
}
