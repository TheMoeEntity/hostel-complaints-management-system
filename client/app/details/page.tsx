import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "../page.module.css";
import DetailsPage from "./DetailsPage";

const Details = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  return (
    <main className={styles.main}>
      <DetailsPage />
    </main>
  );
};

export default Details;
