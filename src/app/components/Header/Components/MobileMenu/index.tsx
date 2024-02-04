import HamburgerIcon from "@/app/ui/HamburgerIcon";
import SearchIcon from "@/app/ui/SeacrhIcon";
import Link from "next/link";

type MobileMenuProps = {
  isToggleMenuOpen?: boolean;
  animationClass?: string;
  onClick: () => void;
};

export default function MobileMenu(props: MobileMenuProps) {
  return (
    <div className="flex flex-row mr-2 md:hidden gap-2">
      <div
        className="cursor-pointer hover:opacity-70"
        onClick={() => alert("구현 중입니다")}
      >
        <SearchIcon />
      </div>
      <div
        className="cursor-pointer hover:opacity-70"
        onClick={() => props.onClick && props.onClick()}
      >
        <HamburgerIcon />
      </div>
    </div>
  );
}
