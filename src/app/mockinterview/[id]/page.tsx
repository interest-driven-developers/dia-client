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
  const result = await getQuestionDetails({ id: params.id });
  return (
    <main className="flex flex-col mx-auto py-20 h-screen w-screen max-h-[750px] sm:w-1/4 bg-[#F9F5FF] 2xl:w-1/3 no-scrollbar overflow-y-hidden">
      {/* <main className="flex flex-col mx-auto py-20 h-full max-w-[450px] max-h-[1000px] overflow-y-hidden bg-[#E2D7FF] no-scrollbar"> */}
      <PracticeMain question={result.data}></PracticeMain>
    </main>
  );
}
