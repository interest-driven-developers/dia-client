import { Metadata } from "next";
import MainComp from "./MainComp";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: "테스트 페이지",
    description: "",
  };
};
export default async function Home({}: {}) {
  return <MainComp />;
}
