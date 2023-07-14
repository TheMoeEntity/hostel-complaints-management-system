import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import ComplaintsPage from "./ComplaintsPage";
import { redirect } from "next/navigation";
import { Helpers } from "@/Helpers/Types";

const Complaints = async () => {
  const session = await getServerSession(authOptions);
  const comps =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/"
    )) || undefined;

  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  return (
    <main className={styles.main}>
      <ComplaintsPage comps={comps.data ?? "error"} />
    </main>
  );
};

export default Complaints;
