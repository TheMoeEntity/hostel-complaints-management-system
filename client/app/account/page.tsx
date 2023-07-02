import Account from '@/components/Account'
import styles from '../page.module.css'

export default async function Profile() {

  return (
    <main className={styles.main}>
      <Account />
    </main>
  )
}