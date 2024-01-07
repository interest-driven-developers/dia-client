type TagProps = {
  children?: React.ReactNode;
};
export default function Tag(props: TagProps) {
  const tagColor = (() => {
    switch (props.children?.toString().toUpperCase().trim().replace(" ", "")) {
      case "EASY":
        return "bg-green-300 text-green-800";
      case "MEDIUM":
        return "bg-yellow-300 text-yellow-800";
      case "HARD":
        return "bg-red-300 text-red-800";
      case "BACKEND":
        return "bg-purple-300 text-purple-800 ";
      case "FRONTNED":
        return "bg-pink-300 text-pink-800";
      case "기타":
        return "bg-gray-300 text-gray-800";
      default:
        return "bg-gray-300 text-gray-500";
    }
  })();

  return (
    <span
      className={`inline-block text-xs px-2 rounded-full uppercase font-semibold tracking-wide ${tagColor}`}
    >
      {props.children}
    </span>
  );
}
