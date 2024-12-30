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

export const riskData = () => {
  return apiClient.get("/v1/secrets/alerts/custom");
};

export const globalConfig = () => {
  return apiClient.get("/v1/global_config");
};

export const dataOfgraph = () => {
  return apiClient.get("/v1/secrets/alert_over_time");
};
