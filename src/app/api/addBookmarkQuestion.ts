
type Params = {
  pkValue :number
  accessToken: string;
};
export const addBookmarkQuestion = async (params: Params): Promise<void> => {
  const { pkValue, accessToken } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/questions/${pkValue}/bookmark`;
  // const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/questions/${pkValue}/bookmark`;

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `${accessToken}`,
    },
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
