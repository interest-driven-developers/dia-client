type HomeIconProps = {
  className?: string;
};
export default function HomeIcon(props: HomeIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M20 7.14286L10 0L0 7.14286V20H7.5V11.4286H12.5V20H20V7.14286Z"
        fill="#E0E0E0"
        className="group-hover:fill-primary-600"
      />
    </svg>
  );
}
