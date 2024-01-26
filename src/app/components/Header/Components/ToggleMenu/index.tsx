import Link from "next/link";

type ToggleMenuProps = {
  isToggleMenuOpen: boolean;
  animationClass: string;
  onClick: () => void;
};

export default function ToggleMenu(props: ToggleMenuProps) {
  return (
    <div
      className={`absolute right-1 w-2/3 h-96 z-50 bg-slate-100 shadow-lg rounded-md p-6 block md:hidden dark:bg-slate-800 ${props.animationClass}`}
    >
      <span className="items-center mb-5 text-3xl font-bold custom-color cursor-pointer">
        DIA
      </span>
      <nav className="grid gap-2">
        <Link
          className="flex w-full items-center py-2 text-lg font-semibold text-slate-600 dark:text-slate-100"
          href="/"
          onClick={props.onClick}
        >
          홈
        </Link>
        <Link
          className="flex w-full items-center py-2 text-lg font-semibold text-slate-600 dark:text-slate-100"
          href="/solve"
          onClick={props.onClick}
        >
          모든 문제
        </Link>
      </nav>
    </div>
  );
}
