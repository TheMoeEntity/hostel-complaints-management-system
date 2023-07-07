import Dashboard from '@/components/dashboard'
import styles from './page.module.css'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  )
}
