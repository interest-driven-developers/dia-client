type Params = {
  id: number | null | undefined;
  accessToken: string | undefined;
};
export const getQuestionScript = async (
  id: number,
  accessToken: string
): Promise<any> => {
  console.log("되는가?", id, accessToken);
  if (!id) {
    throw new Error("id is required");
  }

  if (!accessToken) {
    const savedScript = localStorage.getItem(`script=${id}`);
    if (savedScript) {
      return savedScript;
    }
  }
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/scripts?questionPk=${id}`;
  const requestOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": `${accessToken}`,
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

    console.log("스크립트 가져오기", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching question script:", error);
    throw error; // Rethrow the error to be handled by the caller if necessary
  }
};
