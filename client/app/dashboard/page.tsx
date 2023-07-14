import DashboardPage from "@/components/dashboard";
import styles from "../page.module.css";
import { Helpers } from "@/Helpers/Types";

export default async function Dashboard() {
  const dashCount =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/dashboard-count/"
    )) || undefined;
  const comps =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/"
    )) || undefined;

  return (
    <main className={styles.main}>
      <DashboardPage dashCount={dashCount ?? false} comps={comps ?? "error"} />
    </main>
  );
}
