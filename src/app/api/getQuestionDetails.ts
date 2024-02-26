type Params = {
  id: number;
  accessToken?: string;
};
export const getQuestionDetails = async (params: Params) => {
  const { id, accessToken } = params;
  const headers = accessToken
    ? {
        "Content-Type": "application/json",
        authorization: accessToken,
      }
    : {
        "Content-Type": "application/json",
      };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/questions/${id}`,
    // `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/questions/${id}`,
    {
      method: "GET",
      headers: headers as HeadersInit,
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};
