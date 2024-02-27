type Params = {
  practiceHistoryPkValue: number;
  accessToken: string;
};
export const deleteHistory = async (params: Params): Promise<void> => {
  const { practiceHistoryPkValue, accessToken } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/practice/histories/${practiceHistoryPkValue}`;
  // const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/practice/histories/${practiceHistoryPkValue}`;

  const requestOptions: RequestInit = {
    method: "DELETE",
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
