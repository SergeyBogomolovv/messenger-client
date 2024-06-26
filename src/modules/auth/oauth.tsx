'use client'
import { useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { PropagateLoader } from 'react-spinners'

export default function OAuth() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const searchParams = useSearchParams()
  if (searchParams.has('token') && typeof localStorage !== 'undefined') {
    localStorage.setItem('accessToken', searchParams.get('token')!)
    queryClient.invalidateQueries({ queryKey: ['profile'] }).then(() => {
      router.push('/')
    })
  }
  return <PropagateLoader />
}
