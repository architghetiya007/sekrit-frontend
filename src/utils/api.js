import axios from "axios";

// Create an axios instance with default configurations
const apiClient = axios.create({
  baseURL: "https://demo3837507.mockable.io/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors for request/response (optional)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to headers
    }
    console.log("Request:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error.response || error.message);
  }
);

export default apiClient;
