import type { HistoryType } from "@/types/History";
type Params = {
  accessToken: string | undefined;
};
export const getUserHistorys = async (
  accessToken: string | undefined
): Promise<HistoryType[] | null> => {
  if (!accessToken) {
    return null;
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v0/interview/practice/histories`;
  // const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/practice/histories`;
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
