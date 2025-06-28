import * as yup from 'yup';
export const registerSchema = yup.object({
    email: yup.string().email('Некорректный email').required('Email обязателен'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязателен'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли должны совпадать')
      .required('Подтвердите пароль'),
  });