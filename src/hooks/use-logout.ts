'use client'
import $auth from '@/lib/http/auth'
import { MessageResponse } from '@/types/message-response'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const useLogout = () => {
  const router = useRouter()
  return async () => {
    const { data } = await $auth.get<MessageResponse>('/auth/logout')
    toast.success(data.message)
    localStorage.removeItem('accessToken')
    router.push('/login')
  }
}
