'use client'
import { isAxiosError } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import $api from '@/lib/http/api'
import { Profile, ProfileSchema } from '@/types/profile'
import { MainInfo } from '@/types/main-info-schema'

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (values: MainInfo) => {
      try {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('username', values.username)
        values.about
          ? formData.append('about', values.about)
          : formData.append('about', '')
        if (values.logo) formData.append('logo', values.logo[0])
        const { data } = await $api.put<Profile>('/profile', formData)
        return ProfileSchema.parse(data)
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message)
        }
      }
    },
    onSuccess: async (data) => {
      queryClient.setQueryData(['profile'], data)
      toast.success('Информация обновлена')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
