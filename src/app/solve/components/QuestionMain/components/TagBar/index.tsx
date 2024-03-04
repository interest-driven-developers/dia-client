import { getTags } from "@/utils/getTags";
import BookMarkIcon from "@/app/ui/icons/BookMarkIcon";
import Tag from "../Tag";
type Props = {
  currentTag: string;
};

export const TagBar = ({ currentTag }: Props) => {
  const tags = getTags();
  return (
    <div className="flex  w-full mb-3  relative">
      <div className="flex absolute rounded-md -right-[1px]  -top-[1px]  z-10 p-[1px] backdrop-blur-2xl  bg-opacity-60 mx-auto">
        <div className="group flex items-center rounded-[5px] py-[7px] px-[9px] w-[30px] h-[30px]  bg-white text-[#E0E0E0] border border-[#E0E0E0] border-solid hover:border-[#7C4DFF] hover:text-primary-600 ">
          <BookMarkIcon></BookMarkIcon>
        </div>
      </div>
      <div className="flex flex-row gap-1.5 z-10 w-full mr-8 overflow-x-auto no-scrollbar">
        {tags.map((tag, index) => (
          <Tag key={index} selected={currentTag}>
            {tag.name}
          </Tag>
        ))}
      </div>
    </div>
  );
};
