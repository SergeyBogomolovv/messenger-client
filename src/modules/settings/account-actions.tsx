'use client'
import ConfirmationWindow from '@/components/confirmation-window'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { useDeleteProfileMutation } from '@/queries/delete-profile.mutation'
import { useLogoutMutation } from '@/queries/logout.mutation'
import { useProfileQuery } from '@/queries/profile.query'

export default function AccountActions() {
  const { mutate: logout } = useLogoutMutation()
  const { isFetching } = useProfileQuery()
  const { mutate } = useDeleteProfileMutation()

  return (
    <Card>
      <CardHeader>
        <Button
          disabled={isFetching}
          onClick={() => logout()}
          variant={'outline'}
        >
          Выйти
        </Button>
        <ConfirmationWindow
          cancelLabel='Отмена'
          confirmAction={mutate}
          confirmLabel='Удалить мой аккаунт'
          title='Вы действительно хотите удалить аккаунт?'
          description='Это действие нельзя будет отменить, все ваши данные будут удаленны с наших серверов!'
        >
          <Button disabled={isFetching} variant={'destructive'}>
            Удалить аккаунт
          </Button>
        </ConfirmationWindow>
      </CardHeader>
    </Card>
  )
}
