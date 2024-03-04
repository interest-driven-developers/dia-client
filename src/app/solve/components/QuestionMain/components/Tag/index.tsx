"use Client";
import Link from "next/link";
import mapTagToPurpose from "@/utils/mapTagToPurpose";
type TagProps = {
  children?: React.ReactNode;
  selected: string;
};
export default function Tag(props: TagProps) {
  let categoryValues = "";
  switch (props.selected.toLowerCase()) {
    case "backend":
      categoryValues = "백엔드";
      break;
    case "frontend":
      categoryValues = "프론트엔드";
      break;
    case "ios":
      categoryValues = "IOS";
      break;
    case "aos":
      categoryValues = "AOS";
      break;
    default:
      categoryValues = "";
      break;
  }
  const tagStyle = (() => {
    if (categoryValues === props.children) {
      return "bg-white text-primary-600 border border-[#7C4DFF] border-solid";
    } else {
      return "bg-white text-[#E0E0E0] border border-[#E0E0E0] border-solid hover:border-[#7C4DFF] hover:text-primary-600";
    }
  })();

  return (
    <Link
      className={`flex items-center rounded-[5px] py-2 px-5 h-[30px]    ${tagStyle}`}
      // onClick={() => props.setCurrentTag && props.setCurrentTag(props.children as string)}
      href={`/solve/${mapTagToPurpose(props.children as string)}`}
    >
      <p className="text-[12px] leading-[14.4px]  text-center font-semibold whitespace-nowrap">
        {props.children}
      </p>
    </Link>
  );
}
