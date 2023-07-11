import { Helpers } from "@/Helpers/Types";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from "../page.module.css";
import PortersPage from "./PortersPage";

const Porters = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  const porters = await Helpers.fetchData(
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/porters/"
  );
  return (
    <main className={styles.main}>
      <PortersPage porters={porters.data} />
    </main>
  );
};

export default Porters;
