import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "../page.module.css";
import LodgePage from "./LodgePage";

export default async function Lodge() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  return (
    <main className={styles.main}>
      <LodgePage />
    </main>
  );
}
