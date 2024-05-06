import $api from '@/lib/http/api'

export const findByUserName = async (username: string) => {
  try {
    const { data } = await $api.get<boolean>(`/users/${username}`)
    return data
  } catch (error) {
    return false
  }
}
