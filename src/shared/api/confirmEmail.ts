import { apiClient } from "../fetch";

export async function confirmEmail() {
    const response = await apiClient.post("auth/endregister");
    return response.data;
}