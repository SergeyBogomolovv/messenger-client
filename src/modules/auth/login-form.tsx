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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Login, LoginSchema } from '@/types/login-schema'
import { useLoginMutation } from '@/queries/login.mutation'

const LoginForm = () => {
  const form = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  })

  const { mutate } = useLoginMutation()
  function onSubmit(values: Login) {
    mutate(values)
  }

  return (
    <AuthFormWrapper
      title='Вход'
      description='Рады видеть вас снова! Чтобы войти в свой аккаунт, пожалуйста, введите свою электронную почту и пароль.'
      backButtonHref='/registration'
      backButtonLabel='У вас еще нет аккаунта? Зарегистрируйтесь'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
                <FormDescription>
                  Не забудьте подтвердить вашу почту после регистрации!
                </FormDescription>
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
                  <Input placeholder='******' {...field} type='password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className='w-full'
            variant={'primary'}
            size={'lg'}
            type='submit'
          >
            Вход
          </Button>
        </form>
      </Form>
    </AuthFormWrapper>
  )
}

export default LoginForm
