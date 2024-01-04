import Link from "next/link";
export default function ToggleMenu() {
  // TODO: 유저 정보 추가
  return (
    <div className="absolute right-1 w-64 h-full bg-white shadow-lg p-6 block md:hidden animate-fadeInRight">
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
