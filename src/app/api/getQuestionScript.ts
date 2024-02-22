type Params = {
  id: number | null | undefined;
  accessToken: string | undefined;
};
export const getQuestionScript = async (
  id: number,
  accessToken: string
): Promise<any> => {
  if (!id) {
    throw new Error("id is required");
  }
  if (!accessToken) {
    return null;
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/scripts?questionPkValue=${id}`;
  const requestOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${accessToken}`,
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    if (data.status !== 200) {
      switch (response.status) {
        case 401:
          throw new Error("Unauthorized");
        case 403:
          throw new Error("Forbidden");
        case 404:
          return null;
        default:
          throw new Error(
            `Failed to fetch question script. Status: ${response.status}`
          );
      }
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching question script:", error);
    throw error; // Rethrow the error to be handled by the caller if necessary
  }
};
