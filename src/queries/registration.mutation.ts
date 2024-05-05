'use client'
import $auth from '@/lib/http/auth'
import {
  MessageResponse,
  MessageResponseSchema,
} from '@/types/message-response'
import { Registration } from '@/types/registration-schema'
import { isAxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const useRegistrationMutation = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: async (values: Registration) => {
      try {
        const { data } = await $auth.post<MessageResponse>(
          `/auth/registration`,
          {
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password,
          },
        )
        const { message } = MessageResponseSchema.parse(data)
        return { message }
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message)
        }
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data?.message)
      router.push('/login')
    },
  })
}
