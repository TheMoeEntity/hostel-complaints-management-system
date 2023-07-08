import Account from '@/components/Account'
import styles from '../page.module.css'
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/login')
  }
  return (
    <main className={styles.main}>
      <Account />
    </main>
  )
}