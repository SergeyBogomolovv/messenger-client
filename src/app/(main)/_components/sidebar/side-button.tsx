import { cn } from '@/lib/utils'
import { IconType } from 'react-icons/lib'
import HoverHint from './hover-hint'

interface Props {
  active?: boolean
  label: string
  Icon: IconType
}

export default function SideButton({ active, Icon, label }: Props) {
  return (
    <HoverHint label={label}>
      <button
        className={cn(
          'py-4 px-6 text-black hover:text-[#6C63FF] transition-colors duration-100 rounded-lg',
          active && 'text-[#6C63FF] bg-neutral-200',
        )}
      >
        <Icon className='w-5 h-5' />
      </button>
    </HoverHint>
  )
}
