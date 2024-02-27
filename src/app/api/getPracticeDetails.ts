export const getPracticeDetails = async (id: string | null | undefined) => {

  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/practice/single?interviewQuestionPkValue=${id}`;
  // const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/practice/single?interviewQuestionPkValue=${id}`;

  const res = await fetch(
    apiUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data.data;
};
