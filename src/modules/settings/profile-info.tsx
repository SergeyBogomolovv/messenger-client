'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { useProfileQuery } from '@/queries/profile.query'
import { format } from 'date-fns'

export default function ProfileInfo() {
  const { isFetching, data } = useProfileQuery()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Информация об аккаунте</CardTitle>
        <CardDescription>Ну тут что то щас напишу</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='font-semibold'>Почта</p>
          {isFetching ? (
            <Skeleton className='w-5/12 h-[12px] rounded-md' />
          ) : (
            <p className='text-muted-foreground text-sm font-mono'>
              {data?.email}
            </p>
          )}
        </div>
        <Separator />
        <div className='flex items-center justify-between'>
          <p className='font-semibold'>Зарегистрирован</p>
          {isFetching ? (
            <Skeleton className='w-5/12 h-[12px] rounded-md' />
          ) : (
            <p className='text-muted-foreground text-sm font-mono'>
              {format(data!.createdAt!, 'dd.MM.yyyy')}
            </p>
          )}
        </div>
        <Separator />
        <div className='flex items-center justify-between'>
          <p className='font-semibold'>Подключенные аккаунты</p>
          {isFetching ? (
            <Skeleton className='w-5/12 h-[12px] rounded-md' />
          ) : (
            <p className='text-muted-foreground text-sm font-mono'>
              {data?.provider
                .filter((prov) => prov !== 'Credentials')
                .join(' ')}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
