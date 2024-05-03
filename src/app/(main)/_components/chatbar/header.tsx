import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaUserPlus } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='flex justify-between items-center w-full'>
      <h2 className='text-3xl font-semibold tracking-width'>Чаты</h2>
      <div className='space-x-2'>
        <Button variant={'outline'}>
          <FaUserPlus className='w-5 h-5' />
        </Button>
        <Button variant={'outline'}>
          <AiOutlineUsergroupAdd className='w-5 h-5' />
        </Button>
      </div>
    </header>
  )
}
