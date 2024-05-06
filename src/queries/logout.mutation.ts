'use client'
import $auth from '@/lib/http/auth'
import { MessageResponse } from '@/types/message-response'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { isAxiosError } from 'axios'

export const useLogoutMutation = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: async () => {
      return (await $auth.get<MessageResponse>('/auth/logout')).data
    },
    onSuccess: ({ message }) => {
      toast.success(message)
      localStorage.removeItem('accessToken')
      router.push('/login')
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    },
  })
}
