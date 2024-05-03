import AccountActions from './_components/account-actions'
import MainInfo from './_components/main-info'
import ProfileInfo from './_components/profile-info'

export default function Page() {
  return (
    <section className='w-9/12 mx-auto my-10 space-y-6'>
      <MainInfo />
      <ProfileInfo />
      <AccountActions />
    </section>
  )
}
