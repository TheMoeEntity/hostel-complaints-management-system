import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import ComplaintsPage from "./ComplaintsPage";
import { redirect } from "next/navigation";

const getComplaints = async (resr: any) => {
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + resr,
    },
  });

  return res.json();
};

const Complaints = async () => {
  const session = await getServerSession(authOptions);
  // const newToken = await getResources();
  const comps = await getComplaints(session?.user.access);

  const user = session?.user;
  if (!user) {
    redirect("/login");
  }
  return (
    <main className={styles.main}>
      <ComplaintsPage comps={comps.data} />
    </main>
  );
};

export default Complaints;
