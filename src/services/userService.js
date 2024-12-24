import apiClient from "../utils/api";

// Fetch users
export const loginUser = () => {
  return apiClient.post("/login/email");
};

export const coverage = () => {
  return apiClient.get("/v1/secrets/coverage");
};

export const tableData = () => {
  return apiClient.get("/v1/secrets/top_open_alerts_by_repository");
};
