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

const RegistrationForm = () => {
  const { mutate } = useRegistrationMutation()

  const form = useForm<Registration>({
    resolver: zodResolver(RegistrationSchema),
  })

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
                <FormDescription>
                  Это ваше публичное имя которое вы можете менять
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Уникальное имя</FormLabel>
                <FormControl>
                  <Input placeholder='ivangm' {...field} />
                </FormControl>
                <FormDescription>
                  Это ваш уникальный тег по которому вас смогут находить другие
                  пользователи
                </FormDescription>
                <FormMessage />
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
