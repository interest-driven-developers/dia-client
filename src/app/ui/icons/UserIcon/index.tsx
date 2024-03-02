type Props = {
  className?: string;
  onClick?: () => void;
};

export default function UserIcon(props: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 4C11.66 4 13 5.34 13 7C13 8.66 11.66 10 10 10C8.34 10 7 8.66 7 7C7 5.34 8.34 4 10 4ZM10 18.2C7.72233 18.2 5.68537 17.1375 4.36555 15.4815C4.11356 15.1653 3.9742 14.7501 4.13028 14.3771C4.83357 12.6965 8.20777 11.5 10 11.5C11.7833 11.5 15.1647 12.6965 15.8695 14.3772C16.0258 14.75 15.8864 15.1653 15.6344 15.4815C14.3146 17.1375 12.2777 18.2 10 18.2Z"
        fill="#757575"
        className="group-hover:fill-primary-600"
      />
    </svg>
  );
}
