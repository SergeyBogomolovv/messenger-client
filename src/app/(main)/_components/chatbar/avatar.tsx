import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface Props {
  logo?: string
  online?: boolean
  title: string
}

export default function UserAvatar({ logo, online, title }: Props) {
  return (
    <div className='relative'>
      <div
        className={cn(
          'w-3.5 h-3.5 bg-green-400 absolute top-0 rounded-full right-0 z-50 border-[3px] border-white',
          online && 'hidden',
        )}
      />
      <Avatar className='w-12 h-12 cursor-pointer'>
        <AvatarImage src={logo} />
        <AvatarFallback className='font-semibold'>
          {title[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
