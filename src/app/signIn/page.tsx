import { getProviders } from "next-auth/react";
import LoginMain from "./components/LoginMain";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: "회원 가입",
    description: "회원가입을 통해 더 많은 기능을 이용하세요!",
  };
};
export default async function Home({
  searchParams,
}: {
  searchParams: { prevPath: string };
}) {
  return <LoginMain prevPath={searchParams.prevPath as string} />;
}
