import { Separator } from '@/components/ui/separator'
import ChatBar from './_components/chatbar'
import SideBar from './_components/sidebar'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <main className='flex h-[100svh]'>
      <SideBar />
      <Separator orientation='vertical' />
      <ChatBar />
      <Separator orientation='vertical' />
      {children}
    </main>
  )
}

export default layout
