import DashboardPage from "@/components/dashboard";
import styles from "../page.module.css";
import { Helpers } from "@/Helpers/Types";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  const dashCount =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/dashboard-count/"
    )) || undefined;
  const comps =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/"
    )) || undefined;

  const hostelList =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/hostels/"
    )) || undefined;

  // console.log(hostelList);

  return (
    <main className={styles.main}>
      <DashboardPage dashCount={dashCount ?? false} comps={comps ?? "error"} />
    </main>
  );
}
