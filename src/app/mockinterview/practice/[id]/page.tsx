// import Header from "./components/Header";
import MockPracticeMain from "./components/MockPracticeMain";
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
export default async function Main({ params }: { params: { id: string } }) {
  // const result = await getPracticeDetails(params.id);
  const result = await getQuestionList("backend");
  const questionList = result.slice(0, 2);
  // 여기서 문제 리스트를 가져와서 result에 추가해야함
  return <MockPracticeMain questionList={questionList}></MockPracticeMain>;
}
