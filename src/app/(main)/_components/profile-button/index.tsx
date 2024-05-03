'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
  logoSrc: string
}

export default function ProfileButton({ logoSrc }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='w-12 h-12 cursor-pointer'>
          <AvatarImage src={logoSrc} />
          <AvatarFallback>
            <FaUserCircle className='w-full h-full' />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' sideOffset={10}>
        <DropdownMenuLabel>Мой Профиль</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'/settings'}>Настройки</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Выйти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
