import Link from "next/link";

type ToggleMenuProps = {
  isToggleMenuOpen: boolean;
  animationClass: string;
};

export default function ToggleMenu(props: ToggleMenuProps) {
  return (
    <div
      className={`absolute right-1 w-64 h-full bg-white shadow-lg p-6 block md:hidden ${props.animationClass}`}
    >
      <span className="items-center mb-5 text-3xl font-bold custom-color cursor-pointer">
        DIA
      </span>
      <nav className="grid gap-2">
        <Link
          className="flex w-full items-center py-2 text-lg font-semibold text-slate-600"
          href="/"
        >
          홈
        </Link>
        <Link
          className="flex w-full items-center py-2 text-lg font-semibold text-slate-600"
          href="/solve"
        >
          모든 문제
        </Link>
      </nav>
    </div>
  );
}
