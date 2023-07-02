import { Dashboard } from '@/components/dashboard'
import styles from './page.module.css'

export default async function Home() {

  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  )
}
