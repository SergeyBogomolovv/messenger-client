import Chat from '@/modules/sidebar/chat'
import Header from '@/modules/sidebar/header'
import Search from '@/modules/sidebar/search'

interface Test {
  title: string
  lastMsg: string
  newMessages?: number
  logo?: string
  time: Date
  online?: boolean
  active?: boolean
}

export default async function ChatBar() {
  const chats: Test[] = [
    {
      time: new Date(),
      title: 'Сергей Богомолов',
      lastMsg: 'Привет, как дела?',
      newMessages: 4,
      online: true,
      logo: 'https://github.com/shadcn.png',
    },
    {
      time: new Date(),
      title: 'Txmka',
      lastMsg:
        'Сегодня выиграл в шахматы у своего друга, теперь готовлюсь к турниру в конце месяца.',
      newMessages: 1,
    },
    {
      time: new Date(),
      title: 'Настюшкинс',
      lastMsg: 'Да хорошо, советую тебе умереть и всякое длинное сообщение.',
    },
    {
      time: new Date(),
      title: 'Максим Иванов',
      lastMsg: 'Да хорошо, советую тебе умереть и всякое длинное сообщение.',
    },
    {
      time: new Date(),
      title: 'Екатерина Смирнова',
      lastMsg:
        'Наконец-то начала работать над своим первым романом, надеюсь, что все получится!',
      online: true,
    },
    {
      time: new Date(),
      title: 'Дмитрий Кузнецов',
      lastMsg:
        'Гуляю по парку и наблюдаю за птицами, так отлично расслабляет после работы!',
    },
  ]
  return (
    <section className='h-full w-[350px] flex flex-col items-center pt-6 gap-6'>
      <div className='px-6 w-full space-y-6'>
        <Header title='Чаты' />
        <Search />
      </div>
      <div className='w-full divide-y overflow-y-auto'>
        {chats.map((chat) => (
          <Chat
            key={chat.title}
            time={chat.time}
            title={chat.title}
            lastMsg={chat.lastMsg}
            newMessages={chat.newMessages}
            online={chat.online}
            logo={chat.logo}
            active={chat.active}
          />
        ))}
      </div>
    </section>
  )
}
