import { Separator } from '@/components/ui/separator'
import Toolbar from '@/modules/toolbar'

const layout = ({
  sidebar,
  chat,
}: Readonly<{
  children: React.ReactNode
  chat: React.ReactNode
  sidebar: React.ReactNode
}>) => {
  return (
    <main className='flex h-[100svh]'>
      <Toolbar />
      <Separator orientation='vertical' />
      {sidebar}
      <Separator orientation='vertical' />
      <div className='grow'>{chat}</div>
    </main>
  )
}

export default layout
