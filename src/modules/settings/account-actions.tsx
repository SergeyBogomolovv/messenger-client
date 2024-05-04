'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'

export default function AccountActions() {
  return (
    <Card>
      <CardHeader>
        <Button variant={'outline'}>Выйти</Button>
        <Button variant={'destructive'}>Удалить аккаунт</Button>
      </CardHeader>
    </Card>
  )
}
