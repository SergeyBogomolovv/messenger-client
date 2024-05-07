import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FiUserPlus } from 'react-icons/fi'
import { Button } from '@/components/ui/button'

interface Props {
  title: string
}

export default function Header({ title }: Props) {
  return (
    <header className='flex justify-between items-center w-full'>
      <h2 className='text-3xl font-semibold tracking-width'>{title}</h2>
      <div className='space-x-2'>
        <Button variant={'outline'}>
          <FiUserPlus className='w-5 h-5' />
        </Button>
        <Button variant={'outline'}>
          <AiOutlineUsergroupAdd className='w-5 h-5' />
        </Button>
      </div>
    </header>
  )
}
