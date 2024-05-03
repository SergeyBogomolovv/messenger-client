import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import UserAvatar from './avatar'

interface Props {
  title: string
  lastMsg: string
  newMessages?: number
  logo?: string
  time: Date
  online?: boolean
  active?: boolean
}

const Chat = ({
  time,
  title,
  lastMsg,
  newMessages,
  logo,
  online,
  active,
}: Props) => {
  const lastMessageTime = format(time, 'kk:mm')

  return (
    <div
      className={cn(
        'flex justify-between px-6 py-3 hover:bg-neutral-200 cursor-pointer group',
        active && 'bg-[#6C63FF]/25',
      )}
    >
      <div className='flex items-start gap-x-2'>
        <UserAvatar title={title} logo={logo} online={online} />
        <div>
          <p
            className={cn(
              'font-semibold truncate',
              newMessages && 'text-[#6C63FF]',
            )}
          >
            {title}
          </p>
          <p className='text-sm text-muted-foreground max-w-[190px] truncate'>
            {lastMsg}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-end'>
        <button className='group-hover:block hidden hover:text-[#6C63FF] py-2'>
          <HiOutlineDotsHorizontal className='w-6 h-6' />
        </button>
        <p
          className={cn(
            'text-xs group-hover:hidden',
            newMessages && 'text-[#6C63FF]',
          )}
        >
          {lastMessageTime}
        </p>
        <p
          className={cn(
            'rounded-full group-hover:hidden text-white text-xs hidden bg-[#6C63FF] w-5 h-5',
            newMessages && 'flex justify-center items-center',
          )}
        >
          {newMessages}
        </p>
      </div>
    </div>
  )
}

export default Chat
