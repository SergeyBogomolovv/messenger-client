import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GoPaperclip } from 'react-icons/go'
import { IoIosSend } from 'react-icons/io'

export default function ChatFooter() {
  return (
    <div className='flex px-10 py-6 justify-center items-center gap-4 border-t'>
      <Button variant={'outline'}>
        <GoPaperclip className='size-6' />
      </Button>
      <Input placeholder='Сообщение' />
      <Button variant={'primary'}>
        <IoIosSend className='size-6' />
      </Button>
    </div>
  )
}
