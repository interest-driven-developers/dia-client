import type { HistoryType } from "@/types/History";
type Params = {
  practiceHistoryPkValue : number | null | undefined;
  accessToken: string | undefined;
};
export const getSingleHistory = async(params :Params
): Promise<HistoryType | null> => {
  const { practiceHistoryPkValue, accessToken } = params;
  if (!accessToken) {
    return null;
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/practice/histories/${practiceHistoryPkValue}`;
  // const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/practice/histories/${practiceHistoryPkValue}`;
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
    return data.data;
  } catch (error) {
    console.error("Error fetching question script:", error);
    throw error; // Rethrow the error to be handled by the caller if necessary
  }
};
