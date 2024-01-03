import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4"></div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>DIA</span>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link
            className="hover:underline"
            href="https://github.com/interest-driven-developers"
          >
            Github
          </Link>
        </div>
        <div className="mb-8 flex text-sm text-gray-500 dark:text-gray-400 ">
          <p>Beta Version</p>
        </div>
      </div>
    </footer>
  );
}
