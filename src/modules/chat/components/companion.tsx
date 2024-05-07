import { cn } from '@/lib/utils'
import UserAvatar from '@/components/avatar'
import React from 'react'

export default function Companion({ online }: { online: boolean }) {
  return (
    <div className='flex items-start gap-x-2 overflow-clip'>
      <UserAvatar name={'Иван Иванов'} logo={''} online={online} />
      <div>
        <p className='font-semibold truncate'>Иван Иванов</p>
        <p
          className={cn(
            'text-sm text-muted-foreground truncate max-w-[200px]',
            online && 'text-main',
          )}
        >
          {online ? 'В сети' : '5 минут назад'}
        </p>
      </div>
    </div>
  )
}
