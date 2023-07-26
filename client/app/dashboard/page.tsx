import DashboardPage from "@/components/dashboard";
import styles from "../page.module.css";
import { Helpers } from "@/Helpers/Types";

export const config = {
  runtime: "edge", // this is a pre-requisite
};

export default async function Dashboard() {
  // const session = await getServerSession(authOptions);
  // const user = session?.user;
  // if (!user) {
  //   redirect("/login");
  // }
  let dashCount, comps, hostelList: any;

  // if (user) {
  dashCount =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/dashboard-count/"
    )) || undefined;
  comps =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/"
    )) || undefined;

  hostelList =
    (await Helpers.fetchData(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/hostels/"
    )) || undefined;
  // }

  return (
    <main className={styles.main}>
      <DashboardPage dashCount={dashCount ?? false} comps={comps ?? "error"} />
    </main>
  );
}
