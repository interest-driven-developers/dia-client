type Props = {
  className?: string;
  onClick?: () => void;
};
export default function DeleteCircleIcon(props: Props) {
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
        d="M12.5 6L11.75 6.8H8V8.4H8.75V20.4C8.75 20.8178 8.8935 21.2437 9.17627 21.5453C9.45904 21.8469 9.85833 22 10.25 22H17.75C18.1417 22 18.541 21.8469 18.8237 21.5453C19.1065 21.2437 19.25 20.8178 19.25 20.4V8.4H20V6.8H16.25L15.5 6H12.5ZM10.25 8.4H17.75V20.4H10.25V8.4ZM11.75 10V18.8H13.25V10H11.75ZM14.75 10V18.8H16.25V10H14.75Z"
        fill="#591FD9"
      />
    </svg>
  );
}
