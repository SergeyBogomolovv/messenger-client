import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const OAuth = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <Button size='lg' className='w-full' asChild>
        <Link href={`http://localhost:5174/auth/login/google`}>
          <FcGoogle className='h-5 w-5 mr-2' />
          Продолжить через Google
        </Link>
      </Button>
    </div>
  )
}

export default OAuth
