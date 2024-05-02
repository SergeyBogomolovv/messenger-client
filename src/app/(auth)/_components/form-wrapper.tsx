import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import BackButton from './back-button'
import OAuth from './oauth'

interface Props {
  title: string
  description: string
  children: React.ReactNode
  backButtonHref: string
  backButtonLabel: string
}

const AuthFormWrapper = ({
  title,
  children,
  description,
  backButtonHref,
  backButtonLabel,
}: Props) => {
  return (
    <div className='mx-auto w-[700px]'>
      <CardHeader className='text-center flex flex-col gap-4'>
        <CardTitle className='text-5xl font-extrabold tracking-wide'>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className='flex flex-col gap-2'>
        <OAuth />
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </div>
  )
}

export default AuthFormWrapper
