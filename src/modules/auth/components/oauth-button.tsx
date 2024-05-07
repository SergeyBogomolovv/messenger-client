import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const OAuthButton = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <Button size='lg' className='w-full' asChild>
        <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login/google`}>
          <FcGoogle className='h-5 w-5 mr-2' />
          Продолжить через Google
        </Link>
      </Button>
    </div>
  )
}

export default OAuthButton
