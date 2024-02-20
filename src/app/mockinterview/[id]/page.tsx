import Header from "./components/Header";
import PracticeMain from "./components/PracticeMain";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getPracticeDetails } from "@/app/api/getPracticeDetails";
import { getQuestionList } from "@/app/api/getQuestionList";
import { Question } from "@/types/Question";

// export async function generateStaticParams() {
//   // const lists = await getPracticeDetails();
//   // const questionList = await getQuestionList();
//   // // console.log(questionList)
//   // return questionList.map((question: any) => {
//   //   return { id: question.pk.toString() };
//   // });

//   return [{ id: "1" }, { id: "2" }, { id: "3" }];
// }
export default async function Main({ params }: { params: { id: number } }) {
  const result = await getQuestionDetails(params.id);
  return (
    <main className="flex flex-col gap-4 mx-auto px-5 py-20 h-full sm:w-1/2 overflow-y-auto bg-[#B8A0FA] no-scrollbar">
      <PracticeMain question={result.data}></PracticeMain>
    </main>
  );
}
