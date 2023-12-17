import MainContainer from "./components/MainContainer";
// import { getQuestionDetails } from "@/app/api/getQuestionDetails";
import { getPracticeDetails } from "@/app/api/getPracticeDetails";
export default async function Main({ params }: { params: { id: string } }) {
  const result = await getPracticeDetails(params.id);

  return (
    <main className="h-screen max-w-3xl mx-auto">
      <MainContainer {...result}></MainContainer>
    </main>
  );
}
