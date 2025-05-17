/**
 * Ответ сервера при обновлении токена
 * @property accessToken - Новый access token
 * @property refreshToken - Новый refresh token (опционально)
 * @property expiresIn - Время жизни токена в секундах (опционально)
 */
export interface RefreshTokenResponse {
    accessToken: string;
    refreshToken?: string;
    expiresIn?: number;
    tokenType?: string;
  }
  
  /**
   * Параметры для обновления токена
   */
  export interface RefreshTokenRequest {
    refreshToken?: string;
  }