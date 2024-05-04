import Logo from '@/assets/logo'
import ProfileButton from '../profile-button'
import SideButton from './side-button'
import { BsChat } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { FaRegStar } from 'react-icons/fa'

const ToolBar = () => {
  return (
    <div className='h-full w-[100px] flex flex-col items-center justify-between py-5'>
      <div className='flex flex-col gap-4 items-center'>
        <Logo className='w-10 h-10 mb-10' />
        <SideButton
          path=''
          icon={<BsChat className='w-5 h-5' />}
          label='Чаты'
        />
        <SideButton
          path='contacts'
          icon={<FiUser className='w-5 h-5' />}
          label='Контакты'
        />
        <SideButton
          path='favorites'
          icon={<FaRegStar className='w-5 h-5' />}
          label='Избранное'
        />
      </div>
      <ProfileButton logoSrc='https://github.com/shadcn.png' />
    </div>
  )
}

export default ToolBar
