import Dashboard from "@/components/dashboard";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import axios from "axios";

const getResources = async () => {
  const session = await getServerSession(authOptions);
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/login/refresh/";
    const res =     await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({refresh:session?.user.refresh}),
    })

    return res.json()
};

const getDashCount = async (resr:any) => {
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/dashboard-count/";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization:"Bearer "+resr
      },
    })

    return res.json()
};

export default async function Home() {
  const session = await getServerSession(authOptions);
  // const newToken = await getResources();
  const dashCount = await getDashCount(session?.user.access)
  

  return (
    <main className={styles.main}>
      <Dashboard dashCount={dashCount} />
    </main>
  );
}
