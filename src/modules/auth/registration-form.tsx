'use client'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import AuthFormWrapper from '@/modules/auth/form-wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Registration, RegistrationSchema } from '@/types/registration-schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRegistrationMutation } from '@/queries/registration.mutation'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { findByUserName } from '@/actions/find-by-username'

const RegistrationForm = () => {
  const { mutate } = useRegistrationMutation()
  const form = useForm<Registration>({
    resolver: zodResolver(RegistrationSchema),
  })
  const username = form.watch('username')
  const [isUsernameExists, setUsernameExists] = useState(false)
  const [debouncedUsername] = useDebounce(username, 600)

  useEffect(() => {
    findByUserName(debouncedUsername).then((isUsernameExists) => {
      setUsernameExists(isUsernameExists)
    })
  }, [debouncedUsername])

  useEffect(() => {
    if (isUsernameExists) {
      form.setError('username', {
        message: 'Пользователь с таким именем уже существует.',
      })
    } else {
      form.clearErrors()
    }
  }, [isUsernameExists])

  async function onSubmit(values: Registration) {
    mutate(values)
  }

  return (
    <AuthFormWrapper
      title='Регистрация'
      description='Присоединяйся к нашему мессенджеру и общайся с друзьями! Для регистрации просто введите необходимые данные'
      backButtonHref='/login'
      backButtonLabel='У вас уже есть аккаунт? Войдите'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder='Иван Иванов' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Никнейм</FormLabel>
                <FormControl>
                  <Input placeholder='ivan' {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Это ваш уникальный тег по которому вас смогут находить другие
                  пользователи
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='email@email.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='******' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='passwordRepeat'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Повторите пароль</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='******' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isUsernameExists}
            size={'lg'}
            className='w-full'
            variant={'primary'}
            type='submit'
          >
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </AuthFormWrapper>
  )
}

export default RegistrationForm
