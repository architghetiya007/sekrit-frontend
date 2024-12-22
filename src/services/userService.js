import apiClient from "../utils/api";

// Fetch users
export const loginUser = () => {
  return apiClient.post("/login/email");
};
