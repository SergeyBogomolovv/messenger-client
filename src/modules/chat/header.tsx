import BackButton from './components/back-button'
import Companion from './components/companion'
import ChatOptions from './components/options'

export default function ChatHeader() {
  return (
    <div className='flex justify-between px-10 py-4 bg-white border-b'>
      <div className='flex items-center gap-3'>
        <BackButton />
        <Companion online />
      </div>
      <ChatOptions />
    </div>
  )
}
