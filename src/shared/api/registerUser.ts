import { apiClient } from "../fetch";

export async function registerUser(name: string, email: string, password: string) {
    try {
        const response = await apiClient.post("/auth/register", { name, email, password }); //TODO CHANGE NAME TO FIRST AND LAST NAME
        return response.data;
    } catch (error) {
        throw error;
    }
}