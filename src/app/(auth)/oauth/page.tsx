import { Suspense } from 'react'
import OAuth from '@/modules/auth/oauth'

export default function Page() {
  return (
    <section className='flex h-full w-full items-center justify-center'>
      <Suspense>
        <OAuth />
      </Suspense>
    </section>
  )
}
