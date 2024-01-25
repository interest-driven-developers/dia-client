import MainContainer from "./components/MainContainer";
// import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getPracticeDetails } from "@/app/api/getPracticeDetails";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
export default async function Main({ params }: { params: { id: string } }) {
  // const result = await getPracticeDetails(params.id);

  return (
    <main className="flex flex-col gap-4 mx-auto px-4 sm:px-6 py-20 sm:py-5 h-full sm:w-1/2 overflow-y-auto">
      {/* <MainContainer {...result}></MainContainer> */}
    </main>
  );
}
