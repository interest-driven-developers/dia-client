type Props = {
  className?: string;
  onClick?: () => void;
};
export default function InfoIcon({ className, onClick }: Props) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.8" cx="30" cy="30" r="30" fill="#E2D7FF" />
      <circle cx="30" cy="30" r="24" fill="#591FD9" />
      <rect x="27" y="17" width="6" height="16" rx="1" fill="white" />
      <rect x="27" y="37" width="6" height="6" rx="1" fill="white" />
    </svg>
  );
}
