import Dashboard from '@/components/dashboard'
import styles from './page.module.css'
import { cookies } from 'next/headers'
import cookie from "next-cookies";

export default function Home() {
  const cookie = cookies().get('cookieName1')?.value
  // console.log(cookie)

  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  )
}
