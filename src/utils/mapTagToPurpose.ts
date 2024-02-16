export default function mapTagToPurpose(tag: string) {
  switch (tag.toLowerCase()) {
    case "프론트엔드":
      return "frontend";
    case "백엔드":
      return "backend";
    case "ios":
      return "ios";
    case "aos":
      return "aos";
    default:
      return tag;
  }
}
