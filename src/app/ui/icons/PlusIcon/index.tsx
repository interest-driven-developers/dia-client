type Props = {
  className?: string;
  onClick?: () => void;
};

export default function PlusIcon(props: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.25006 8.75L7.25006 13H8.75006L8.75006 8.75H13V7.25H8.75006L8.75006 3H7.25006L7.25006 7.25H3V8.75H7.25006Z"
        fill="#757575"
      />
    </svg>
  );
}
