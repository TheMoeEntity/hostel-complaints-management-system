import Account from "@/components/Account";
import styles from "../page.module.css";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Helpers } from "@/Helpers/Types";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;
  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  let details: any;
  if (user) {
    details = await Helpers.fetchData(
      `https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/${
        session?.user.is_student ? "students" : "porters"
      }/${id}/`
    );

    if (details === undefined) {
      redirect("/dashboard?notFound=true");
    }
  }

  return (
    <main className={styles.main}>
      <Account details={details.data} />
    </main>
  );
}
