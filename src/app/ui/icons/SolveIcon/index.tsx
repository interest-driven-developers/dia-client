type SolveIconProps = {
  className?: string;
};

export default function SolveIcon(props: SolveIconProps) {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.75 17.7597C16.989 16.2389 22 18 22 18V1.08727C19.2381 -0.247365 14.781 -0.353288 11.75 0.769518V17.7597ZM10.25 0.769518C7.21902 -0.353289 2.76193 -0.247377 0 1.08726V18C4.28154 16.4953 8.56309 17.3333 10.25 17.7784V0.769518Z"
        fill="#E0E0E0"
        className="group-hover:fill-primary-600"
      />
    </svg>
  );
}
