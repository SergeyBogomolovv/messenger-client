'use client'
import { cn } from '@/lib/utils'
import HoverHint from './hover-hint'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

interface Props {
  label: string
  path: string
  icon: React.ReactNode
}

export default function SideButton({ icon, label, path }: Props) {
  const sidebarSegment = useSelectedLayoutSegment('sidebar')
  return (
    <HoverHint label={label}>
      <Link
        href={`/${path}`}
        className={cn(
          'py-4 px-6 text-black hover:text-[#6C63FF] transition-colors duration-100 rounded-lg',
          (sidebarSegment ? sidebarSegment : '') === path &&
            'text-[#6C63FF] bg-neutral-200',
        )}
      >
        {icon}
      </Link>
    </HoverHint>
  )
}
