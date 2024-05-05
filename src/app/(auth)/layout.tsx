import Image from 'next/image'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='min-h-[100svh] grid lg:grid-cols-2 items-center'>
      <div className='flex flex-col gap-y-16 bg-[#6C63FF] h-full text-white items-center justify-center text-center p-6 md:p-10'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide'>
          Добро пожаловать в Messenger!
        </h1>
        <Image
          src={'/auth.svg'}
          alt='registration-image'
          className='mx-auto w-10/12 hidden lg:block'
          width={1000}
          height={1000}
        />
      </div>
      <div className='bg-neutral-100 h-full flex justify-center items-center'>
        {children}
      </div>
    </main>
  )
}

export default layout
