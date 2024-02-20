type Params = {
  scriptPkValue: number;
  contentValue: string;
  accessToken: string;
};
export const editQuestionScript = async (params: Params): Promise<void> => {
  const { scriptPkValue, contentValue, accessToken } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/scripts/${scriptPkValue}`;

  const requestOptions: RequestInit = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `${accessToken}`,
    },
    body: JSON.stringify({
      contentValue: contentValue,
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
