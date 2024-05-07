import { Separator } from '@/components/ui/separator'
import Toolbar from '@/modules/toolbar'

const layout = ({
  sidebar,
  main,
}: Readonly<{
  children: React.ReactNode
  main: React.ReactNode
  sidebar: React.ReactNode
}>) => {
  return (
    <main className='flex h-[100svh]'>
      <Toolbar />
      <Separator orientation='vertical' />
      {sidebar}
      <Separator orientation='vertical' />
      <div className='grow'>{main}</div>
    </main>
  )
}

export default layout
