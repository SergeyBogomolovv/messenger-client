import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-[100svh] flex flex-col gap-6 items-center justify-center'>
      <Image
        src={'./skating.svg'}
        alt='Search friends'
        width={500}
        height={500}
      />
      <p className='text-muted-foreground tracking-wide'>
        Выберите чат или найдите собеседников в поиске
      </p>
    </div>
  )
}
