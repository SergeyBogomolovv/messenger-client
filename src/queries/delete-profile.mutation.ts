'use client'
import $api from '@/lib/http/api'
import {
  MessageResponse,
  MessageResponseSchema,
} from '@/types/message-response'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { isAxiosError } from 'axios'
import { toast } from 'sonner'

export const useDeleteProfileMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      try {
        const { data } = await $api.delete<MessageResponse>('/profile')
        return MessageResponseSchema.parse(data)
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message)
        }
      }
    },
    onSuccess: async (data) => {
      toast.success(data?.message)
      localStorage.removeItem('accessToken')
      await queryClient.setQueryData(['profile'], null)
      router.push('/registration')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
