// import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
import ResultContainer from "./components/ResultContainer";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getQuestionScript } from "@/app/api/getQuestionScript";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  // const data = await getQuestionDetails(params.id);
  return {
    title:"연습 결과",
    // description: data.description,
  };
};
export default async function Home({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const result = await getQuestionScript(params.id, session?.user.access_token);
  return (
    <main className="flex flex-col gap-4 mx-auto px-5 py-20 h-full sm:w-1/2 overflow-y-auto bg-white">
      <ResultContainer {...result}></ResultContainer>
    </main>
  );
}
