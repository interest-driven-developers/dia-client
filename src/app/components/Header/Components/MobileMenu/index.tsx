import HamburgerIcon from "@/app/ui/icons/HamburgerIcon";
import SearchIcon from "@/app/ui/icons/SeacrhIcon";
import Link from "next/link";

type MobileMenuProps = {
  isToggleMenuOpen?: boolean;
  animationClass?: string;
  onClick: () => void;
};

export default function MobileMenu(props: MobileMenuProps) {
  return (
    <div className="flex flex-row md:hidden gap-2 items-center">
      {/* <div
        className="cursor-pointer hover:opacity-70"
        onClick={() => alert("구현 중입니다")}
      >
        <SearchIcon className="h-5 w-5" />
      </div> */}
      <div
        className="cursor-pointer hover:opacity-70"
        onClick={() => props.onClick && props.onClick()}
      >
        <HamburgerIcon className="h-5 w-5" />
      </div>
    </div>
  );
}
