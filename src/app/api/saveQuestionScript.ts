type Params = {
  questionPkValue: number;
  contentValue: string;
  accessToken: string;
};
export const saveQuestionScript = async (params: Params): Promise<void> => {
  const { questionPkValue, contentValue, accessToken } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/scripts`;
  // const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/scripts`;

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `${accessToken}`,
    },
    body: JSON.stringify({
      questionPkValue,
      contentValue,
    }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`Failed to edit question. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error editing question:", error);
    throw error; // Rethrow the error to be handled by the caller if necessary
  }
};
