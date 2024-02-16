import { Metadata } from "next";
import MarkdownEditor from "./components/MarkdownEditor";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import CustomSeparator from "@/app/ui/CustomSeparator";
export const dynamic = "force-dynamic";
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const data = await getQuestionDetails(params.id);
  return {
    title: `(작성중)${data.data.title}`,
    // description: data.description,
  };
};

export default async function Main({ params }: { params: { id: string } }) {
  const data = await getQuestionDetails(params.id);
  return (
    <main className="flex flex-col gap-4 mx-auto px-4 sm:px-6 py-20 sm:py-3 h-full sm:w-1/2 overflow-y-auto">
      <h1 className="mt-3 text-2xl font-sans text-gray-600 font-semibold dark:text-slate-100">
        {data.data.title}
      </h1>
      <CustomSeparator className="w-10"></CustomSeparator>
      <div className="mt-3">
        <MarkdownEditor id={params.id}></MarkdownEditor>
      </div>
    </main>
  );
}
