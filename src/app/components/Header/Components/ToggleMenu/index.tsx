import { useState, useEffect } from "react";
import Link from "next/link";

type ToggleMenuProps = {
  isToggleMenuOpen: boolean;
  animationClass: string;
};

export default function ToggleMenu(props: ToggleMenuProps) {
  console.log('효과 변겨중~:',props.animationClass);
  // const [shouldRender, setShouldRender] = useState(props.isToggleMenuOpen);
  // const [animationClass, setAnimationClass] = useState("");
  // useEffect(() => {
  //   if (props.isToggleMenuOpen) {
  //     setShouldRender(true);
  //     setAnimationClass("animate-fadeInRight");
  //   } else {
  //     const timer = setTimeout(() => {
  //       setAnimationClass("animate-fadeOutRight");
  //       setShouldRender(false);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [props.isToggleMenuOpen]);

  // const menuAnimationClass = props.isToggleMenuOpen
  //   ? "animate-fadeInRight"
  //   : "animate-fadeOutRight";

  // if (!shouldRender) {
  //   return null;
  // }

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
