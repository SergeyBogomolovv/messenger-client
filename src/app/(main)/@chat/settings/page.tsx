import AccountActions from '@/modules/settings/account-actions'
import MainInfo from '@/modules/settings/main-info'
import ProfileInfo from '@/modules/settings/profile-info'

export default function Page() {
  return (
    <section className='w-9/12 mx-auto my-10 space-y-6'>
      <MainInfo />
      <ProfileInfo />
      <AccountActions />
    </section>
  )
}
