// import QuestionList from "./components/QuestionList";
import { Metadata } from "next";
import ResultContainer from "./components/ResultContainer";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails(params.id);
  return {
    title: data.data.title,
    // description: data.description,
  };
};
export default async function Home({ params }: { params: { id: string } }) {
  const result = await getQuestionDetails(params.id);
  return (
    <main className="flex flex-col gap-4 mx-auto px-5 py-20 h-full sm:w-1/2 overflow-y-auto bg-white">
      <ResultContainer {...result.data}></ResultContainer>
    </main>
  );
}
