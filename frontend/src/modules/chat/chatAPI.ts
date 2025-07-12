import apiClient from "../../lib/apiClient";

export const askQuestion = async (question: string) => {
  const response = await apiClient.post("/files/chat", { query: [question] });
  return response.data;
};
