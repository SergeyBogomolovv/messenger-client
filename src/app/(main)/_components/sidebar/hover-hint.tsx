import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

interface Props {
  children: React.ReactNode
  label: string
}

export default function HoverHint({ children, label }: Props) {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        className='w-fit py-1.5 px-2 text-sm text-white bg-black/60 border-0'
        side={'right'}
      >
        {label}
      </HoverCardContent>
    </HoverCard>
  )
}
