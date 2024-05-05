'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { useLogout } from '@/hooks/use-logout'
import { useProfileQuery } from '@/queries/profile.query'

export default function AccountActions() {
  const logout = useLogout()
  const { isFetching } = useProfileQuery()

  return (
    <Card>
      <CardHeader>
        <Button disabled={isFetching} onClick={logout} variant={'outline'}>
          Выйти
        </Button>
        <Button disabled={isFetching} variant={'destructive'}>
          Удалить аккаунт
        </Button>
      </CardHeader>
    </Card>
  )
}
