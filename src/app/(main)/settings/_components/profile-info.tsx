import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'

export default function ProfileInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Информация об аккаунте</CardTitle>
        <CardDescription>Ну тут что то щас напишу</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='font-semibold'>Почта</p>
          <p className='text-muted-foreground text-sm font-mono'>
            geraxfn@gmail.com
          </p>
        </div>
        <Separator />
        <div className='flex items-center justify-between'>
          <p className='font-semibold'>Зарегистрирован</p>
          <p className='text-muted-foreground text-sm font-mono'>
            {format(new Date(), 'dd.MM.yyyy')}
          </p>
        </div>
        <Separator />
        <div className='flex items-center justify-between'>
          <p className='font-semibold'>Подключенные аккаунты</p>
          <p className='text-muted-foreground text-sm font-mono'>Google</p>
        </div>
      </CardContent>
    </Card>
  )
}
