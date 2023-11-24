import { cache } from "react";
export const getQuestionDetails = cache(async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/questions/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
});
