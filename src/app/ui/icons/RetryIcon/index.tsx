type Props = {
  className?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
};

export default function RetryIcon(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7096 4.68308L14.8944 7.05279L13.1056 7.94721L10.6989 3.13392L15.47 0.152002L16.53 1.848L14.8348 2.90749C18.977 4.12968 22 7.96181 22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 10.5512 2.55843 8.72987 3.52443 7.19071L5.21844 8.25389C4.44652 9.48381 4 10.9382 4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.66848 17.3064 5.46607 13.7096 4.68308Z"
        fill="#591FD9"
      />
    </svg>
  );
}
