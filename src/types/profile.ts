import { z } from 'zod'

export const ProfileSchema = z.object({
  id: z.string(),
  username: z.string(),
  name: z.string(),
  about: z.nullable(z.string()),
  logo: z.nullable(z.string()),
  email: z.string(),
  providers: z.array(z.string()),
  createdAt: z.string(),
})

export type Profile = z.infer<typeof ProfileSchema>
