import ChatFooter from '@/modules/chat/footer'
import ChatHeader from '@/modules/chat/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col h-[100svh]'>
      <ChatHeader />
      <div className='grow'>{children}</div>
      <ChatFooter />
    </section>
  )
}
