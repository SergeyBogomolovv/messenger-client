import { z } from 'zod'

export const MainInfoSchema = z.object({
  name: z.string().min(3, { message: 'Имя должно быть длиннее 3х символов' }),
  username: z
    .string()
    .min(3, { message: 'Отоброжаемое имя должно быть длиннее 3х символов' }),
  about: z.optional(z.string()),
  logo: typeof window === 'undefined' ? z.any() : z.instanceof(FileList),
})

export type MainInfo = z.infer<typeof MainInfoSchema>
