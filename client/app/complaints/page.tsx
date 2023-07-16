import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import ComplaintsPage from "./ComplaintsPage";
import { redirect } from "next/navigation";
import { Helpers } from "@/Helpers/Types";

const Complaints = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  let comps: any;
  if (!user) {
    redirect("/login");
  } else if (user) {
    comps =
      (await Helpers.fetchData(
        "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/"
      )) || undefined;
  }

  return (
    <main className={styles.main}>
      <ComplaintsPage comps={comps.data ?? "error"} />
    </main>
  );
};

export default Complaints;
