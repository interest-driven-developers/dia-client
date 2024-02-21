type Props = {
  className?: string;
  onClick?: () => void;
};
export default function DeleteIcon(props: Props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <circle cx="16" cy="16" r="16" fill="white" />
      <path
        d="M14 5L13 6H8V8H9V23C9 23.5222 9.19133 24.0546 9.56836 24.4316C9.94539 24.8087 10.4778 25 11 25H21C21.5222 25 22.0546 24.8087 22.4316 24.4316C22.8087 24.0546 23 23.5222 23 23V8H24V6H19L18 5H14ZM11 8H21V23H11V8ZM13 10V21H15V10H13ZM17 10V21H19V10H17Z"
        fill="#591FD9"
      />
    </svg>
  );
}
