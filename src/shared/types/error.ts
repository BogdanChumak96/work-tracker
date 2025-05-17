/**
 * Базовый тип для ошибок API
 * @property message - Человекочитаемое сообщение об ошибке
 * @property statusCode - HTTP статус код (опционально)
 * @property code - Код ошибки для машинной обработки (опционально)
 * @property details - Дополнительные детали ошибки (опционально)
 */
export interface ApiError {
    message: string;
    status?: number;
    code?: string;
    details?: Record<string, unknown>;
  }
  
  /**
   * Тип для ошибок валидации
   * @extends ApiError
   * @property validation - Детали ошибок валидации
   */
  export interface ValidationError extends ApiError {
    validation: {
      field: string;
      message: string;
      rule?: string;
    }[];
  }