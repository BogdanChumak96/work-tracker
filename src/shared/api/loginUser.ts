import { apiClient } from "../fetch"

export async function loginUser(email: string, password: string) {
    try {
        const response = await apiClient.post<{ accessToken: string }>("/auth/login", { email, password });

        localStorage.setItem("accessToken", response.data.accessToken);
        return response.data;
    } catch (error) {
        throw error;
    }
}