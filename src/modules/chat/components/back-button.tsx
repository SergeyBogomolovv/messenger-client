'use client'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack } from 'react-icons/io'

export default function BackButton() {
  const router = useRouter()
  return (
    <button className='md:hidden' onClick={() => router.back()}>
      <IoIosArrowBack className='size-5' />
    </button>
  )
}
