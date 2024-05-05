import { z } from 'zod'

export const RegistrationSchema = z
  .object({
    name: z.string().min(3, { message: 'Минимум 3 символа' }),
    username: z.string().min(3, { message: 'Минимум 3 символа' }),
    email: z.string().email({ message: 'Введен некорректный email' }),
    password: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
    passwordRepeat: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: 'Пароли не совпадают',
    path: ['passwordRepeat'],
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: 'Пароли не совпадают',
    path: ['password'],
  })

export type Registration = z.infer<typeof RegistrationSchema>
