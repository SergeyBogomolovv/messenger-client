import { Button } from '@/components/ui/button'
import { SlOptions } from 'react-icons/sl'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FaUserCircle } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { MdBlock } from 'react-icons/md'

export default function ChatOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'}>
          <SlOptions className='size-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Действия</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FaUserCircle className='size-5 mr-2' />
          Профиль
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FaStar className='size-5 mr-2' />В избранные
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MdBlock className='size-5 mr-2' />
          Заблокировать
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
