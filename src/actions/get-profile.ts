import $api from '@/lib/http/api'
import { Profile, ProfileSchema } from '@/types/profile'

export const getProfile = async () => {
  const { data } = await $api.get<Profile>('/profile')
  return ProfileSchema.parse(data)
}
