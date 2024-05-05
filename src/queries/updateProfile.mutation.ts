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
        const { data } = await $api.put<Profile>('/profile', {
          name: values.name,
          about: values.about,
          username: values.username,
        })
        return ProfileSchema.parse(data)
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(error.response?.data.message)
        }
      }
    },
    onMutate: async (variables) => {
      if (variables.logo[0]) {
        const formData = new FormData()
        formData.append('logo', variables.logo[0])
        try {
          const { data } = await $api.put<Profile>('/profile/logo', formData)
          return ProfileSchema.parse(data)
        } catch (error) {
          if (isAxiosError(error)) {
            throw new Error(error.response?.data.message)
          }
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
