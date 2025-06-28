import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_PUBLIC_API_URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post<{ accessToken: string }>(`${API_BASE_URL}/auth/refresh`);
        localStorage.setItem("accessToken", refreshResponse.data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;