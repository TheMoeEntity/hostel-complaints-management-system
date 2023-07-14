import styles from "./page.module.css";
import HomePage from "@/components/Homepage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (user) {
    redirect("/dashboard");
  }
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
