// import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
import ResultMain from "./components/ResultMain";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getQuestionScript } from "@/app/api/getQuestionScript";

export const dynamic = "force-dynamic";

// export function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }];
// }

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  // const data = await getQuestionDetails(params.id);
  return {
    title:"연습 결과",
    // description: data.description,
  };
};
export default async function Home({ params }: { params: { id: number } }) {
  // const session = await getServerSession(authOptions);
  // const result = await getQuestionScript(params.id, session?.user.access_token);
  // const test = await getQuestionDetails(params.id);
  // console.log('면접 결과',result,test);
  return (
    <main className="flex flex-col gap-4 mx-auto px-5 py-20 h-full sm:w-1/2 overflow-y-auto bg-white">
      <ResultMain pkValue={params.id} ></ResultMain>
    </main>
  );
}
