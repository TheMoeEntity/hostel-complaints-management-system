import Dashboard from "@/components/dashboard";
import styles from "./page.module.css";
import { Helpers } from "@/Helpers/Types";

export default async function Home() {
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
      <Dashboard dashCount={dashCount ?? false} comps={comps ?? "error"} />
    </main>
  );
}
