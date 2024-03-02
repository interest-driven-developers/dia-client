import { Metadata } from "next";
import Header from "@/app/mockinterview/[id]/components/Header";
import SettingSession from "./SettingSession";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: "설정",
  };
};
export default async function Home() {
  return (
    <main className="flex flex-col mx-auto py-12 w-screen h-[94vh] sm:max-h-[800px] sm:w-1/4 2xl:w-1/3 no-scrollbar overflow-y-hidden">
      <SettingSession />
    </main>
  );
}
