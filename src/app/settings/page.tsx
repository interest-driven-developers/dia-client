import { Metadata } from "next";
import Header from "@/app/mockinterview/[id]/components/Header";
import SettingSession from "./SettingSession";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: "설정",
  };
};
export default async function Home() {
  return <SettingSession />;
}
