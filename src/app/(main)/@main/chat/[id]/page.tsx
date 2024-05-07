import Image from 'next/image'

export default function Page() {
  return (
    <div className='flex flex-col gap-6 h-full items-center justify-center'>
      <Image
        src={'/nomessages.svg'}
        alt='no messages image'
        width={400}
        height={400}
      />
      <p className='text-muted-foreground tracking-wide'>
        Сообщений пока нет, отправьте сообщение чтобы начать беседу.
      </p>
    </div>
  )
}
