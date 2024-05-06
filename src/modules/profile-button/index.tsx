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
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { useProfileQuery } from '@/queries/profile.query'
import { useLogoutMutation } from '@/queries/logout.mutation'

export default function ProfileButton() {
  const { data, isFetching } = useProfileQuery()
  const { mutate: logout } = useLogoutMutation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isFetching} asChild>
        {isFetching ? (
          <Skeleton className='w-12 h-12 rounded-full' />
        ) : (
          <Avatar className='w-12 h-12 cursor-pointer'>
            <AvatarImage
              src={data?.logo || ''}
              className='aspect-square object-cover'
            />
            <AvatarFallback className='font-semibold'>
              {data?.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' sideOffset={10}>
        <DropdownMenuLabel>{data?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'/settings'}>Настройки</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout()}>Выйти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
