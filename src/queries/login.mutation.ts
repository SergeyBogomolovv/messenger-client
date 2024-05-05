'use client'
import $auth from '@/lib/http/auth'
import { LoginResponse, LoginResponseSchema } from '@/types/login-response'
import { Login } from '@/types/login-schema'
import { isAxiosError } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getProfile } from '@/actions/get-profile'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const useLoginMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (values: Login) => {
      try {
        const { data } = await $auth.post<LoginResponse>(`/auth/login`, values)
        return LoginResponseSchema.parse(data)
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message)
        }
      }
    },
    onSuccess: async (data) => {
      localStorage.setItem('accessToken', data!.accessToken!)
      try {
        const profile = await getProfile()
        await queryClient.setQueryData(['profile'], profile)
        router.push('/')
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message)
        }
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
