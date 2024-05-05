'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MainInfo, MainInfoSchema } from '@/types/main-info-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useProfileQuery } from '@/queries/profile.query'

export default function MainInfoComponent() {
  const { isFetching, data } = useProfileQuery()
  const [imageUrl, setImageUrl] = useState('')
  const form = useForm<MainInfo>({
    resolver: zodResolver(MainInfoSchema),
  })

  useEffect(() => {
    if (!isFetching && data) {
      form.setValue('name', data.name)
      form.setValue('about', data.about ? data.about : '')
      form.setValue('username', data.username)
      setImageUrl(data.logo ? data.logo : '')
    }
  }, [isFetching])

  function onSubmit(values: MainInfo) {
    console.log(values)
  }

  const fileRef = form.register('logo')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Профиль</CardTitle>
        <CardDescription>
          Ваша информация о профиле, доступная всем пользователям.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className='space-y-6'>
            <div className='flex flex-col lg:flex-row gap-6'>
              <div>
                <Avatar
                  onClick={() => {
                    document.getElementById('logoInput')?.click()
                  }}
                  className='w-24 h-24 group relative cursor-pointer'
                >
                  <div className='opacity-0 z-10 absolute group-hover:opacity-50 transition-opacity h-full w-full bg-black rounded-full' />
                  <AvatarImage
                    src={imageUrl}
                    className='aspect-square object-cover'
                  />
                  <AvatarFallback className='font-semibold text-4xl'>
                    {data?.name[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <FormField
                  disabled={isFetching}
                  control={form.control}
                  name='logo'
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <input
                          id='logoInput'
                          type='file'
                          accept='.png,.jpeg,.jpg,.webp'
                          {...fileRef}
                          onChange={(e) => {
                            setImageUrl(URL.createObjectURL(e.target.files![0]))
                            fileRef.onChange(e)
                          }}
                          hidden
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className='space-y-4 w-full'>
                <FormField
                  disabled={isFetching}
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Отображамое имя' {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isFetching}
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Имя пользователя' {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              disabled={isFetching}
              control={form.control}
              name='about'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder='О себе' {...field} />
                  </FormControl>
                  <FormDescription>
                    Любые подробности, например: возраст, род занятий или город.
                    Пример: 23 года, дизайнер из Санкт-Петербурга.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type='submit' variant='primary'>
              Сохранить
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
