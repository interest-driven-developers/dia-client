import type { HistoryType } from "@/types/History";
type Params = {
  id: number | null | undefined;
  accessToken: string | undefined;
};
export const getQuestionHistory = async (
  id: number,
  accessToken: string
): Promise<HistoryType[] | null> => {
  if (!id) {
    throw new Error("id is required");
  }
  if (!accessToken) {
    return null;
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/practice/histories?questionPkValue=${id}`;
  // const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/practice/histories?questionPkValue=${id}`;
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
      throw new Error(
        `Failed to fetch question script. Status: ${response.status}`
      );
    }
    return data.data.scrollData;
  } catch (error) {
    console.error("Error fetching question script:", error);
    throw error; // Rethrow the error to be handled by the caller if necessary
  }
};
