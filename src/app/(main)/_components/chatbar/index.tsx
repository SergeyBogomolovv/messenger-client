import { ScrollArea } from '@/components/ui/scroll-area'
import Header from './header'
import Search from './search'
import Chat from './chat'
import { Separator } from '@/components/ui/separator'

const ChatBar = () => {
  return (
    <div className='h-full w-[350px] flex flex-col items-center pt-6 gap-6'>
      <div className='px-6 w-full space-y-6'>
        <Header />
        <Search />
      </div>
      <ScrollArea className='w-full'>
        <Chat
          time={new Date()}
          title='Сергей Богомолов'
          lastMsg='Привет, как дела?'
          newMessages={4}
          online
        />
        <Separator />

        <Chat
          time={new Date()}
          title='Настя Власова'
          lastMsg='Да хорошо, советую тебе умереть и всякое длинное сообщение'
        />
      </ScrollArea>
    </div>
  )
}

export default ChatBar
