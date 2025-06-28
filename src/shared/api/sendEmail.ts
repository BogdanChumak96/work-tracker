import { apiClient } from "../fetch";

export async function sendEmail(email: string) {
    try {
        const response = await apiClient.get('/auth/sendemail');
        // console.log('Ответ сервера:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Ошибка при отправке email:', error);
        throw error;
    }
}