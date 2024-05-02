'use client'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'

const OAuth = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <Button size='lg' className='w-full'>
        <FcGoogle className='h-5 w-5 mr-2' />
        Продолжить через Google
      </Button>
    </div>
  )
}

export default OAuth
