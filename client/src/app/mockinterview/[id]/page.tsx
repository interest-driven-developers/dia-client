import MainContainer from "./components/MainContainer";
import { getQuestionDetails } from "@/app/api/getQuestionDetails";

export default async function Main({ params }: { params: { id: string } }) {
  const result = await getQuestionDetails(params.id);

  return (
    <main className="h-screen max-w-3xl mx-auto">
      <MainContainer {...result}></MainContainer>
    </main>
  );
}
