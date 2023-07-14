import Account from "@/components/Account";
import styles from "../page.module.css";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Helpers, studType } from "@/Helpers/Types";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;
  const details = await Helpers.fetchData(
    `https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/${
      session?.user.is_student ? "students" : "porters"
    }/${id}/`
  );

  if (details === undefined) {
    redirect("/dashboard?notFound=true");
  }

  const user = session?.user;
  if (!user) {
    redirect("/login");
  }

  return (
    <main className={styles.main}>
      <Account details={details.data} />
    </main>
  );
}
