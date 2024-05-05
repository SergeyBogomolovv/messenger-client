import { getProfile } from '@/actions/get-profile'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const useProfileQuery = () => {
  const queryClient = useQueryClient()
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    placeholderData: () => {
      return queryClient.getQueryData(['profile'])
    },
  })
}
