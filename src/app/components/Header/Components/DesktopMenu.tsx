import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function DesktopMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogoClick = () => {
    if (pathname === "/") {
      location.reload(); // Reload the current page if already on the main page
    } else {
      router.push("/"); // Navigate to the main page if on a different page
    }
  };
  return (
    <div className="hidden md:block">
      <div className="flex">
        <Link
          href="/solve/backend"
          className="text-slate-700 hover:text-primary-600 px-3 py-5 rounded-md text-sm font-semibold"
        >
          문제 풀기
        </Link>
      </div>
    </div>
  );
}
